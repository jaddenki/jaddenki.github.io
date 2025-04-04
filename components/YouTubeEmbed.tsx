export function YouTubeEmbed({ id }: { id: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}