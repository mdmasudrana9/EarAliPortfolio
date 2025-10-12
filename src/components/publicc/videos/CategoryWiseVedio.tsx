"use client";

import React from "react";

import { Loader2 } from "lucide-react";
import { useGetVideosByCategoryQuery } from "@/redux/features/videos/videoApi";
import { VideoCard } from "@/components/publicc/VideoCard";

const categories = [
  "personal development",
  "business & entrepreneurship",
  "financial literacy",
  "podcast",
];

export type CategoryType =
  | "personal development"
  | "business & entrepreneurship"
  | "financial literacy"
  | "podcast";

export interface Video {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: CategoryType;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

const CategoryWiseVedio = () => {
  return (
    <div className=" container mx-auto font-serif space-y-16 py-10">
      {categories.map((category) => (
        <CategorySection key={category} category={category} />
      ))}
    </div>
  );
};

export default CategoryWiseVedio;

const CategorySection = ({ category }: { category: string }) => {
  const { data, isLoading } = useGetVideosByCategoryQuery(category);

  if (isLoading)
    return (
      <div className="flex  items-center justify-center py-10">
        <Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
      </div>
    );

  const videos = data?.data || [];
  // console.log("videos :>> ", videos);

  return (
    <section className="px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl lg:text-5xl md:text-4xl font-bold my-14 capitalize  border-gray-300 pb-2">
        {category}
      </h2>

      {videos.length === 0 ? (
        <p className="text-muted-foreground">
          No videos found for this category.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video: Video) => (
            <VideoCard
              key={video._id}
              id={video._id}
              title={video.title}
              description={video.description}
              onView={() => console.log("View:", video.title)}
            />
          ))}
        </div>
      )}
    </section>
  );
};
