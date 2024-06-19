"use client";

import { PlaylistGenerator } from "@/components/playListGenerator";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Extract the access token from the URL hash
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const token = new URLSearchParams(hash.substring(1)).get(
          "access_token"
        );
        if (token) {
          setToken(token);
        }
        // Clean up the URL
        router.replace(window.location.pathname);
      }
    }
  }, [router]);

  return (
    <div>
      {token ? (
        <>
          {/* <div>You are connected! Access Token: {token}</div> */}
          <PlaylistGenerator />
        </>
      ) : (
        <div>Connecting...</div>
      )}
    </div>
  );
};

export default Page;
