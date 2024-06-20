// components/LoginButton.tsx
import Link from "next/link";

import useSpotifyAuth from "@/hook/useSpotifyAuth";
import { Button } from "./ui/button";

const LoginButton = () => {
  const { loginUrl } = useSpotifyAuth();

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center mt-10">
          Spotify Playlist Generator
        </h1>
        <p className="text-center mt-2">
          Login with your Spotify account to generate a playlist based on your
          top tracks
        </p>
      </div>
      <div className="flex justify-center items-center mt-2">
        <Link href={loginUrl}>
          <Button>Login with Spotify</Button>
        </Link>
      </div>
    </>
  );
};

export default LoginButton;
