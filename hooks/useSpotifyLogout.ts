import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useSpotifyLogout = () => {
  const router = useRouter();

  const logout = useCallback(() => {
    localStorage.removeItem("spotifyToken");
    localStorage.removeItem("tokenExpiration");
    router.push("/");
  }, [router]);

  return { logout };
};

export default useSpotifyLogout;
