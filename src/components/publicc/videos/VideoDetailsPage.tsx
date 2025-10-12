"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Calendar, TrendingUp } from "lucide-react";

interface VideoDetailsPageProps {
  video: {
    _id?: string;
    title?: string;
    description?: string;
    videoUrl?: string;
    category?: string;
    createdAt?: string;
    updatedAt?: string;
  };
}

const VideoDetailsPage = ({ video }: VideoDetailsPageProps) => {
  const { description, videoUrl, title, category } = video;

  // ✅ Extract YouTube video ID safely
  const getVideoId = (url?: string) => {
    if (!url) return null;
    const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);

  return (
    <div className="min-h-screen container mx-auto rounded-b-3xl bg-[#F9F6F3]">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <article>
          {/* Category Badges */}
          <div className="flex gap-2 mb-6">
            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-700 hover:bg-purple-100"
            >
              {category || "General"}
            </Badge>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight">
            {title || "Video Title"}
          </h1>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-border">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                alt="Author"
              />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold text-foreground">Ear Ali</span>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  May 21, 2025
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  160k views
                </span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>

          {/* 🎥 Video Player Section */}
          <section className="mb-16">
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
              <div className="relative aspect-video">
                {videoId ? (
                  <iframe
                    width="100%"
                    height="450"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title || "YouTube video"}
                    className="w-full h-full rounded-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="flex items-center justify-center bg-muted h-full text-gray-500">
                    No valid video found
                  </div>
                )}
              </div>

              <div className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {description ||
                    "No description provided for this video. Please check back later."}
                </p>
              </div>
            </div>
          </section>

          <>
            {/* Story Section */}
            <section className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">
                The Journey Begins
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                When I first decided to try AI as a life coach, I was equal
                parts excited and skeptical. Could an algorithm really
                understand my goals, motivations, and challenges? The answer, as
                I discovered over 365 days, is both yes and no.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                The first month was all about experimentation. I tried different
                AI tools, from ChatGPT to specialized coaching apps. Each had
                its strengths, but the real breakthrough came when I learned to
                ask better questions. AI life coaching isn’t about getting
                perfect answers – it’s about having a thought partner that’s
                always available.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">
                What Worked Surprisingly Well
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                Three things stood out as genuinely game-changing. First, the AI
                never judged me. I could share my most ambitious goals or my
                biggest failures without feeling embarrassed. Second, it was
                always available – 3 AM insights included. Third, the AI helped
                me identify patterns in my behavior that I’d been blind to for
                years.
              </p>
            </section>

            {/* YouTube Channel Section */}
            <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-12 overflow-hidden mb-16">
              {/* Decorative Circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full translate-y-32 -translate-x-32"></div>

              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left Side */}
                  <div>
                    <h2 className="text-4xl font-bold text-purple-700 mb-4">
                      Ear Ali
                    </h2>
                    <h3 className="text-2xl font-semibold text-purple-500 mb-6">
                      YouTube
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Join over <strong>5.4 million subscribers</strong> who are
                      learning how to work smarter and live better. I share
                      evidence-based tips on productivity, learning, and
                      building a life you love.
                    </p>

                    <div className="flex items-center gap-6 mb-8 text-gray-700">
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-5 h-5 text-purple-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 20h5v-2a3 3 0 00-3-3h-2M7 20H2v-2a3 3 0 013-3h2m10 0a3 3 0 00-6 0m6 0V7a3 3 0 00-6 0v8"
                          />
                        </svg>
                        <span className="font-bold">5.4M</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-5 h-5 text-purple-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.752 11.168l-5.197-2.6A1 1 0 008 9.445v5.11a1 1 0 001.555.877l5.197-2.6a1 1 0 000-1.764z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="font-bold">1.2K videos</span>
                      </div>
                    </div>

                    <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-purple-700 transition">
                      ▶ Subscribe on YouTube
                    </button>
                  </div>

                  {/* Right Side (Video Cards) */}
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 transform rotate-2 hover:rotate-0 transition-transform">
                        <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-10 h-10 text-purple-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.752 11.168l-5.197-2.6A1 1 0 008 9.445v5.11a1 1 0 001.555.877l5.197-2.6a1 1 0 000-1.764z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700">
                          Productivity Tips
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 transform -rotate-2 hover:rotate-0 transition-transform mt-8">
                        <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-10 h-10 text-purple-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.752 11.168l-5.197-2.6A1 1 0 008 9.445v5.11a1 1 0 001.555.877l5.197-2.6a1 1 0 000-1.764z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700">
                          Study With Me
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 transform rotate-1 hover:rotate-0 transition-transform -mt-4">
                        <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-10 h-10 text-purple-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.752 11.168l-5.197-2.6A1 1 0 008 9.445v5.11a1 1 0 001.555.877l5.197-2.6a1 1 0 000-1.764z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700">
                          Life Advice
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 transform -rotate-1 hover:rotate-0 transition-transform">
                        <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-10 h-10 text-purple-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.752 11.168l-5.197-2.6A1 1 0 008 9.445v5.11a1 1 0 001.555.877l5.197-2.6a1 1 0 000-1.764z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700">
                          Tech Reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        </article>
      </main>
    </div>
  );
};

export default VideoDetailsPage;
