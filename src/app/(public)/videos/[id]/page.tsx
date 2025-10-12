"use client";

import React from "react";
import VideoDetailsPage from "@/components/publicc/videos/VideoDetailsPage";
import { useGetVideoByIdQuery } from "@/redux/features/videos/videoApi";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  // ✅ unwrap params Promise using React.use()
  const { id } = React.use(params);

  const { data } = useGetVideoByIdQuery(id);
  const video = data?.data || {};

  console.log("video id :>> ", id);
  console.log("videos :>> ", video);

  return (
    <div className="">
      <VideoDetailsPage video={video} />
    </div>
  );
};

export default Page;
