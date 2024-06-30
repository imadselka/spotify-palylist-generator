import useGetUsersPlaylists from "@/hooks/useGetUsersPlaylists";
import PlaylistCard from "./playlistCard";

const UserPlaylistsComponent = () => {
  const { playlists, loading, error } = useGetUsersPlaylists();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {playlists.map((playlist) => (
        <PlaylistCard
          key={playlist.id}
          playlistTitle={playlist.name}
          playlistDesc={playlist.description}
          playlistImage={playlist.images[0]?.url || ""}
          playlistType={playlist.type}
          trackCount={playlist.tracks.total}
          playlistUrl={playlist.external_urls.spotify}
        />
      ))}
    </div>
  );
};

export default UserPlaylistsComponent;
