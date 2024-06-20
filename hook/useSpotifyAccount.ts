import { useCallback, useState } from "react";

const useSpotifyAccount = () => {
  const [loading, setLoading] = useState(false);

  const redirectToSpotify = useCallback(async () => {
    const token = localStorage.getItem("spotifyToken");

    if (!token) {
      console.error("No Spotify token found. Please login first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      const userId = data.id;

      if (userId) {
        const SPOTIFY_PROFILE_URL = `https://open.spotify.com/user/${userId}`;
        window.location.href = SPOTIFY_PROFILE_URL;
      } else {
        console.error("User ID not found");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { redirectToSpotify, loading };
};

export default useSpotifyAccount;
