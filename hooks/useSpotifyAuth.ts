import { useMemo } from "react";

const useSpotifyAuth = () => {
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const REDIRECT_URI = "http://localhost:3000/playlist-generator";
  const RESPONSE_TYPE = "token";

  const loginUrl = useMemo(() => {
    return `${AUTH_ENDPOINT}?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
  }, []);

  return { loginUrl };
};

export default useSpotifyAuth;
