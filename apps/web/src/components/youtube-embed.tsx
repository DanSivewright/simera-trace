type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  startSeconds?: number;
};

export function YouTubeEmbed({ videoId, title, startSeconds }: YouTubeEmbedProps) {
  const params = new URLSearchParams();
  if (startSeconds) {
    params.set("start", String(startSeconds));
  }

  const query = params.toString();
  const src = `https://www.youtube.com/embed/${videoId}${query ? `?${query}` : ""}`;

  return (
    <iframe
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="absolute inset-0 h-full w-full border-0"
    />
  );
}
