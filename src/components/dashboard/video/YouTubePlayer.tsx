"use client";

import Image from "next/image";
import { useState } from "react";

interface YouTubePlayerProps {
  videoUrl: string;
  className?: string;
}

export function YouTubePlayer({
  videoUrl,
  className = "",
}: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const regex =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (!videoId) {
    return (
      <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Invalid YouTube URL</p>
      </div>
    );
  }

  return (
    <div className={` max-w-md  ${className}`}>
      {!isPlaying ? (
        <div className="space-y-4">
          {/* Thumbnail view */}
          <div className="relative group cursor-pointer" onClick={handlePlay}>
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-black">
              <Image
                width={500}
                height={500}
                src={thumbnailUrl || "/placeholder.svg"}
                alt="Video thumbnail"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      ) : (
        // Embedded video player
        <div className="w-full aspect-video rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  );
}
