"use client";

import PlaylistGenerator from "@/components/playListGenerator";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchToken = async () => {
      if (typeof window !== "undefined") {
        const storedToken = localStorage.getItem("spotifyToken");
        const expirationTime = localStorage.getItem("tokenExpiration");

        if (storedToken && expirationTime) {
          const now = new Date().getTime();
          if (now < parseInt(expirationTime)) {
            setToken(storedToken);
          } else {
            localStorage.removeItem("spotifyToken");
            localStorage.removeItem("tokenExpiration");
          }
        } else {
          const hash = window.location.hash;
          if (hash) {
            const params = new URLSearchParams(hash.substring(1));
            const accessToken = params.get("access_token");
            const expiresIn = params.get("expires_in");

            if (accessToken && expiresIn) {
              const expirationTime =
                new Date().getTime() + parseInt(expiresIn) * 1000;
              localStorage.setItem("spotifyToken", accessToken);
              localStorage.setItem(
                "tokenExpiration",
                expirationTime.toString()
              );
              setToken(accessToken);
              // Clean up the URL after setting the token
              window.location.hash = hash;
              router.replace(window.location.pathname);
            }
          }
        }
      }
    };

    fetchToken();
  }, [router]);

  return (
    <div>
      {token ? (
        <>
          <PlaylistGenerator />
        </>
      ) : (
        <div>Connecting...</div>
      )}
    </div>
  );
};

export default Page;
