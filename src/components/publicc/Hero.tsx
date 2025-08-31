import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Yellow decorative background */}
              <div className="absolute animate-pulse inset-0 bg-yellow-300 rounded-full transform rotate-12"></div>
              <div className="absolute animate-pulse inset-4 bg-yellow-200 rounded-full transform -rotate-6"></div>

              {/* Profile photo */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-white">
                <Image
                  src="/image.png"
                  alt="Ali Abdaal"
                  className="w-full h-full object-cover"
                  width={300}
                  height={300}
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 text-4xl animate-pulse">
              📚
            </div>
            <div className="absolute bottom-20 left-10 text-3xl animate-pulse">
              💡
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-4">
                Hey Friends{" "}
                <span className="inline-block animate-bounce">👋</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                I&apos;m Ear Ali. I&apos;m a Doctor turned Entrepreneur,
                YouTuber, and the author of the New York Times bestseller,
                <span className="font-semibold  decoration-blue-400">
                  {" "}
                  Feel-Good Productivity
                </span>
                .
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">✏️</div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Subscribe to LifeNotes
                </h2>
              </div>

              <p className="text-gray-600 mb-4">
                Join a growing community of more than 310,000 friendly readers.
              </p>

              {/* Star rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">200+ reviews</span>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-400"></div>
                  <div className="w-8 h-8 rounded-full bg-green-400"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-400"></div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">
                  Each week, I share actionable productivity tips, practical
                  life advice, and highlights from my favourite books, directly
                  to your inbox.
                </p>

                <div className="flex space-x-3">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 rounded-lg border-gray-200"
                  />
                  <Button className="bg-cyan-400 hover:bg-cyan-500 text-white px-8 rounded-lg">
                    Subscribe
                  </Button>
                </div>

                <p className="text-xs text-gray-500">
                  By submitting this form, you&apos;ll be signed up to my free
                  newsletter, which sometimes includes mentions of my books,
                  apps and courses. You can opt-out at any time with no hard
                  feelings. 😊 Here&apos;s our{" "}
                  <a href="#" className="underline">
                    privacy policy
                  </a>{" "}
                  if you like reading.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-8">As featured in:</p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <div className="text-sm font-semibold text-gray-600">
              BUSINESS INSIDER
            </div>
            <div className="text-sm font-serif text-gray-600">
              The New York Times
            </div>
            <div className="text-sm font-semibold text-gray-600">
              GOOD MORNING AMERICA
            </div>
            <div className="text-sm font-serif text-gray-600">
              FINANCIAL TIMES
            </div>
            <div className="text-sm font-bold text-gray-600">BBC RADIO 4</div>
            <div className="text-sm font-semibold text-gray-600">
              Men&apos;s Health
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
