import { useEffect, useState } from "react";

const useGetUserProfile = () => {
  const token = localStorage.getItem("spotifyToken");
  const [loadingProfile, setLoading] = useState(false);
  const [errorProfile, setError] = useState<string | null>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!token) {
        setError("No token found");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user profile");
        }

        const data = await response.json();
        setProfilePic(data.images[0]?.url || null);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [token]);

  return {
    profilePic,
    loadingProfile,
    errorProfile,
  };
};

export default useGetUserProfile;
