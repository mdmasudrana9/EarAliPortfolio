"use client";

import LifeNotesSubscription from "@/components/publicc/LifeNotesSubscription";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration in ms
      once: true, // Only animate once on scroll
    });
  }, []);
  return (
    <div className="container pb-3 pt-10  bg-[#F9F6F3] rounded-bl-lg rounded-br-lg mx-auto">
      <div className="relative z-10  md:px-6 lg:py-16">
        <div className="grid lg:grid-cols-2 p-4 gap-8 md:gap-16 items-center lg:mb-16">
          <div data-aos="fade-right" className="relative">
            <div className="relative  w-40 h-40 md:w-60 md:h-60 lg:w-90 lg:h-90 mx-auto">
              {/* Profile photo */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-white">
                <Image
                  src="/image1.png"
                  alt="Ali Abadan"
                  className="w-full h-full object-cover"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="text-center flex flex-col items-center justify-center px-4 py-12"
          >
            <h1 className="text-4xl md:text-6xl font-semibold font-serif mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Hey Friends <span className="inline-block ">👋</span>
            </h1>

            <p className="max-w-2xl md:text-2xl text-lg text-gray-700 leading-relaxed mb-8">
              I&apos;m <span className="font-bold text-gray-900">Ear Ali</span>.
              I&apos;m a{" "}
              <span className="font-semibold text-blue-600">Doctor</span> turned{" "}
              <span className="font-semibold text-purple-600">
                Entrepreneur
              </span>
              , <span className="font-semibold text-pink-600">YouTuber</span>,
              and the author of the{" "}
              <Link
                href={`/`}
                className="font-semibold text-indigo-600 hover:text-indigo-800 hover:underline decoration-indigo-400 transition-colors"
              >
                Feel-Good Productivity
              </Link>{" "}
              — a New York Times bestseller.
            </p>
          </div>
        </div>
        <div data-aos="zoom-out-down">
          <LifeNotesSubscription />
        </div>

        <div className=" items-center justify-center pt-4  text-center">
          <p className="text-gray-500 md:text-xl text-center mt-3  ">
            As featured in:
          </p>
          <div className="grid grid-cols-2 mt-1 gap-3 md:flex items-center justify-center opacity-60">
            <div className="lg:text-base text-sm font-semibold text-gray-600">
              BUSINESS INSIDER
            </div>
            <div className="text-sm lg:text-base font-serif text-gray-600">
              The New York Times
            </div>
            <div className=" text-sm lg:text-md font-semibold text-gray-600">
              GOOD MORNING AMERICA
            </div>
            <div className="text-sm lg:text-base font-serif text-gray-600">
              FINANCIAL TIMES
            </div>
            <div className="text-sm lg:text-md font-bold text-gray-600">
              BBC RADIO 4
            </div>
            <div className="text-sm lg:text-base font-semibold text-gray-600">
              Men&apos;s Health
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
