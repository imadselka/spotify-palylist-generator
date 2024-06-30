import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const PlayListGeneratorCard = () => {
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Generate Your Playlist</CardTitle>
          <CardDescription>
            Create a spotify playlist based on a prompt.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="prompt" placeholder="ex: Top Summer Tracks..." />
              </div>
              <Button>Generate</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </>
  );
};

export default PlayListGeneratorCard;
