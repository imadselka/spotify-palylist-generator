import { useEffect, useState } from "react";

const useGetUserId = (accessToken: string | null) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserId = async () => {
      if (!accessToken) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        const fetchedUserId = data.id;

        if (fetchedUserId) {
          setUserId(fetchedUserId);
        } else {
          setError("User ID not found in the Spotify response");
        }
      } catch (error) {
        setError(error as unknown as string);
      } finally {
        setLoading(false);
      }
    };

    fetchUserId();
  }, [accessToken]);

  return { userId, loading, error };
};

export default useGetUserId;
