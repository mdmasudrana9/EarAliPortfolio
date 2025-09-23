"use client";

import { YouTubePlayer } from "@/components/dashboard/video/YouTubePlayer";
import { Video } from "@/redux/features/videos/types";
import { useGetAllVideosQuery } from "@/redux/features/videos/videoApi";

const VideoList = () => {
  const { data } = useGetAllVideosQuery("");
  const videos: Video[] = data?.data || [];
  return (
    <div className=" p-4 max-w-7xl mx-auto my-10">
      <h2 className="text-2xl lg:text-4xl font-serif font-bold mb-10">
        Featured Videos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video._id}
            className="bg-white rounded shadow-md border p-4"
          >
            <YouTubePlayer videoUrl={video.videoUrl} />
            <div className="mt-4">
              <h3 className="font-semibold text-2xl font-serif  mb-1">
                {video.title}
              </h3>
              <p className="text-sm font-serif text-muted-foreground mb-2">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
