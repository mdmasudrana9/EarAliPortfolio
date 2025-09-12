"use client";

import { UploadPage } from "@/components/dashboard/video/UploadPage";
import { YouTubePlayer } from "@/components/dashboard/video/YouTubePlayer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Video } from "@/redux/features/videos/types";
import { useGetAllVideosQuery } from "@/redux/features/videos/videoApi";
import { useState } from "react";

const Page = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetAllVideosQuery("");
  const videos: Video[] = data?.data || [];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex bg-white/20 shadow-md rounded-md p-4 justify-between items-center mb-4">
        <h2 className="text-xl font-serif font-semibold">Videos</h2>
        <DialogTrigger asChild>
          <Button variant={"outline"} onClick={() => setOpen(true)}>
            Upload Tutorial
          </Button>
        </DialogTrigger>
      </div>

      <h2 className="text-2xl font-serif font-bold mb-4">All Videos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video._id}
            className="bg-white rounded shadow-md border p-2"
          >
            <h3 className="font-semibold mb-1">{video.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {video.description}
            </p>
            <YouTubePlayer videoUrl={video.videoUrl} />
          </div>
        ))}
      </div>

      <DialogContent>
        <UploadPage onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default Page;
