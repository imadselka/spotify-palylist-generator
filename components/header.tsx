// File: components/header.tsx
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const REDIRECT_URI = "http://localhost:3000/playlist-generator";
  const RESPONSE_TYPE = "token";

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
        <Link
          href={`${AUTH_ENDPOINT}?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          <Button>Login with Spotify</Button>
        </Link>
      </div>
    </>
  );
};

export default Header;
