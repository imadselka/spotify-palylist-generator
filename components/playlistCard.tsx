import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type PlaylistCardType = {
  playlistTitle: string;
  playlistDesc: string;
  playlistImage: string;
  playlistType: string;
  trackCount: number;
  playlistUrl: string;
};

const PlaylistCard = ({
  playlistTitle,
  playlistDesc,
  playlistImage,
  playlistType,
  trackCount,
  playlistUrl,
}: PlaylistCardType) => {
  return (
    <Card className="w-[350px]">
      <div
        className="h-[200px] bg-cover bg-center"
        style={{ backgroundImage: `url(${playlistImage})` }}
      ></div>
      <CardHeader>
        <CardTitle>{playlistTitle}</CardTitle>
        <CardDescription>{playlistDesc}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Tracks: {trackCount}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>{playlistType}</div>
        <Link
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Open in Spotify
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PlaylistCard;
