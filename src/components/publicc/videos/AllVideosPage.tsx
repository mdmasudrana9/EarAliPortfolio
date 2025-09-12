"use client";

import { Button } from "@/components/ui/button";

export default function AllVideosPage() {
  return (
    <div className=" max-w-7xl bg-[#F9F6F3]  mx-auto py-20">
      <div className=" px-4 py-16  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Main laptop with video player */}
            <div className="relative z-10 transform rotate-12 mb-8">
              <div className="bg-orange-400 rounded-2xl p-4 shadow-2xl">
                <div className="bg-purple-100 rounded-lg aspect-video flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="w-2 h-2 bg-black rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 text-purple-300 transform rotate-12">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>

            {/* Video thumbnails */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 transform -rotate-6 z-20">
              <div className="w-32 h-20 bg-emerald-700 rounded mb-2 flex items-center justify-center text-white font-bold text-xs">
                $0 → $1M
              </div>
              <div className="text-xs font-semibold text-gray-800 leading-tight">
                How to Invest for Beginners
              </div>
              <div className="text-xs text-gray-500 mt-1">August 12, 2021</div>
            </div>

            <div className="absolute bottom-8 right-0 bg-white rounded-lg shadow-lg p-3 transform rotate-3 z-20">
              <div className="w-32 h-20 bg-red-700 rounded mb-2 flex items-center justify-center text-white font-bold text-xs">
                $27,000
              </div>
              <div className="text-xs font-semibold text-gray-800 leading-tight">
                9 Passive Income Ideas - How I Make $27k per Week
              </div>
              <div className="text-xs text-gray-500 mt-1">June 6, 2020</div>
            </div>

            {/* YouTube logo */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 rotate-12 z-30">
              <div className="bg-red-600 rounded-lg p-3 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Curved connecting lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 400"
            >
              <path
                d="M50 200 Q200 100 350 250"
                stroke="#f97316"
                strokeWidth="3"
                fill="none"
                className="opacity-60"
              />
              <path
                d="M100 300 Q250 200 380 180"
                stroke="#f97316"
                strokeWidth="2"
                fill="none"
                className="opacity-40"
              />
            </svg>

            {/* Cursor icon */}
            <div className="absolute top-16 right-16 text-purple-300 transform rotate-45">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.64 21.97c-.16 0-.3-.07-.4-.2l-4-5.73c-.14-.2-.11-.49.07-.64.18-.16.46-.14.62.04l4 5.73c.14.2.11.49-.07.64-.09.08-.15.16-.22.16zm-2.56-8.3c-.22 0-.4-.18-.4-.4v-4.27c0-.22.18-.4.4-.4s.4.18.4.4v4.27c0 .22-.18.4-.4.4z" />
              </svg>
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-6xl font-serif font-bold text-gray-900 leading-tight">
              My Videos
            </h1>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                When I first started creating YouTube videos seven years ago, I
                had no idea that it would become the backbone of a multimillion
                dollar business. I still love creating videos — the process of
                researching, writing, and filming brings me a lot of joy, and
                it&apos;s brilliant to be able to share that with my subscribers
                and viewers.
              </p>

              <p>
                Below are some of my favorite videos that I&apos;ve made, along
                with some of our top performing content. Take a look and let me
                know what you think.
              </p>
            </div>

            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe on YouTube
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
