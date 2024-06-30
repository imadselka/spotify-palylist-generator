import { useEffect, useState } from "react";

const useGetUserProfile = () => {
  const [loadingProfile, setLoading] = useState(false);
  const [errorProfile, setError] = useState<string | null>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("spotifyToken");

    const fetchUserProfile = async () => {
      if (!token) return;

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
        setProfilePic(data.images[0]?.url || "");
      } catch (error) {
        setError(error as unknown as string);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return {
    profilePic,
    loadingProfile,
    errorProfile,
  };
};

export default useGetUserProfile;
