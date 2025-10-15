"use client";
import { Loader2 } from "lucide-react";

import { VideoCard } from "@/components/publicc/VideoCard";
import { Video } from "@/components/publicc/videos/CategoryWiseVedio";
import { Button } from "@/components/ui/button";
import { useGetAllVideosQuery } from "@/redux/features/videos/videoApi";
import Link from "next/link";

export const VideoGallery = () => {
  const { data, isLoading } = useGetAllVideosQuery("");
  const videos = data?.data || [];

  if (isLoading) {
    return (
      <div className="flex  items-center justify-center py-10">
        <Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
      </div>
    );
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex items-start justify-between mb-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-serif mb-2">
              Watch My Most
            </h1>
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-5xl font-serif font-bold">
                Popular Videos
              </h2>
              <div className="absolute -bottom-2 left-0 right-8 h-3 bg-accent/40 rounded-full" />
            </div>
          </div>
          {/* <div className="hidden md:flex gap-2">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full w-12 h-12 bg-accent hover:bg-accent/90 border-none text-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full w-12 h-12 bg-accent hover:bg-accent/90 border-none text-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mb-12">
          {videos.slice(0, 3).map((video: Video) => (
            <VideoCard
              key={video._id}
              id={video._id}
              thumbnail={video.thumbnail}
              date={video.createdAt}
              title={video.title}
              onView={() => console.log(`Viewing video: ${video.title}`)}
            />
          ))}
        </div>

        <div className="text-center">
          <Link href="/videos">
            <Button
              size="lg"
              className="
    bg-primary 
    text-primary-foreground 
    px-8 py-6 
    text-base 
    rounded-full 
    shadow-md 
    hover:shadow-xl 
    transform 
    transition 
    duration-300 
    hover:scale-105 
    hover:bg-primary/90
    focus:outline-none
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-primary/50
  "
            >
              Watch More Videos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
