import LifeNotesSubscription from "@/components/publicc/LifeNotesSubscription";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-w-7xl pb-3 pt-10  bg-[#F9F6F3] rounded-bl-lg rounded-br-lg mx-auto">
      <div className="relative z-10  md:px-6 lg:py-16">
        <div className="grid lg:grid-cols-2 p-4 gap-8 md:gap-16 items-center lg:mb-16">
          <div className="relative">
            <div className="relative  w-40 h-40 md:w-60 md:h-60 lg:w-100 lg:h-90 mx-auto">
              {/* Yellow decorative background */}
              <div className="absolute animate-pulse inset-0 bg-yellow-300 rounded-full transform rotate-12"></div>
              <div className="absolute animate-pulse inset-4 bg-yellow-200 rounded-full transform -rotate-6"></div>

              {/* Profile photo */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-white">
                <Image
                  src="/image.png"
                  alt="Ali Abadan"
                  className="w-full h-full object-cover"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div className="text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl mlg:text-7xl font-semibold text-gray-900 mb-4">
              Hey Friends <span className="inline-block ">👋</span>
            </h1>

            <p className="md:text-2xl text-lg font-sans md:w-lg xl:w-xl text-gray-700 leading-relaxed mb-8">
              I&apos;m Ear Ali. I&apos;m a Doctor turned Entrepreneur, YouTuber,
              and the author of the New York Times bestseller,
              <Link
                href={`/`}
                className="font-semibold hover:underline  decoration-blue-400"
              >
                {" "}
                Feel-Good Productivity
              </Link>
              .
            </p>
          </div>
        </div>

        <LifeNotesSubscription />

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
