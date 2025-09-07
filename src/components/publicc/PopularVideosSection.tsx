import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const videos = [
  {
    id: 1,
    title: "I Tried AI as a Life Coach for 365 Days – Here's What I Learned",
    date: "May 31, 2025",
    thumbnail: "/person-with-books-and-phone-showing-ai-life-coach-.png",
    category: "It Actually Works",
  },
  {
    id: 2,
    title: "How To Get Rich",
    date: "April 18, 2025",
    thumbnail: "/person-in-office-with-charts-and-graphs-about-weal.png",
    category: "Uncomfortable truth",
  },
  {
    id: 3,
    title: "How I use AI to save 10+ hours per week",
    date: "February 14, 2025",
    thumbnail: "/computer-screen-showing-ai-productivity-tools-and-.png",
    category: "",
  },
  {
    id: 4,
    title: "How to Stop Procrastinating and Finally Take Action",
    date: "February 7, 2025",
    thumbnail: "/person-working-focused-at-desk-with-productivity-s.png",
    category: "The Batman Effect",
  },
];

export default function PopularVideos() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:py-12">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-2">
            Watch My Most{" "}
            <span className="relative">
              Popular Videos
              {/* <div className="absolute -bottom-1 left-0 w-full h-3 bg-yellow-300 -z-10 rounded-sm"></div> */}
            </span>
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-yellow-300 border-yellow-300 hover:bg-yellow-400"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-yellow-300 border-yellow-300 hover:bg-yellow-400"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="group cursor-pointer hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-0">
              {/* Video Thumbnail */}
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  width={300}
                  height={200}
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {video.category && (
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full text-white ${
                        video.category === "It Actually Works"
                          ? "bg-green-600"
                          : video.category === "Uncomfortable truth"
                          ? "bg-red-600"
                          : video.category === "The Batman Effect"
                          ? "bg-blue-600"
                          : "bg-gray-600"
                      }`}
                    >
                      {video.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-2">
                  {video.date}
                </p>
                <h3 className="font-semibold text-lg leading-tight mb-4 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-medium"
                >
                  View →
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Watch More Button */}
      <div className="text-center">
        <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full font-medium">
          Watch More Videos
        </Button>
      </div>
    </div>
  );
}
