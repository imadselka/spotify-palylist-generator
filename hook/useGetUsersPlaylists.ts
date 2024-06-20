// hooks/useGetUsersPlaylists.ts
import { useEffect, useState } from "react";
import useGetUserId from "./useGetUserId";

const useGetUsersPlaylists = () => {
  const token = localStorage.getItem("spotifyToken");
  const {
    userId,
    loading: userIdLoading,
    error: userIdError,
  } = useGetUserId(token);
  const [playlists, setPlaylists] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      if (!token || !userId) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.spotify.com/v1/users/${userId}/playlists`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch playlists");
        }

        const data = await response.json();
        setPlaylists(data.items); // Assuming 'items' is an array of playlists from Spotify API
      } catch (error) {
        setError(error as unknown as string);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPlaylists();
  }, [token, userId]);

  return {
    playlists,
    loading: loading || userIdLoading,
    error: error || userIdError,
  };
};

export default useGetUsersPlaylists;
