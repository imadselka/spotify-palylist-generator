// hooks/useSpotifyLogout.ts
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useSpotifyLogout = () => {
  const router = useRouter();

  const logout = useCallback(() => {
    localStorage.removeItem("spotifyToken");
    localStorage.removeItem("tokenExpiration");
    router.push("/"); // Redirect to home page or login page
  }, [router]);

  return { logout };
};

export default useSpotifyLogout;
