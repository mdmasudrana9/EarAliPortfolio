import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const JournalingSection = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/*Left  Content - Laptop Mockup */}
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-600"
            >
              <div className="mx-auto max-w-2xl">
                <div className="rounded-lg  transition-all duration-500 hover:shadow-3xl hover:scale-105 hover:-rotate-1 group">
                  <Image
                    src="/ali-abdaal-journalling-prompts-notion-template-600x361.png"
                    alt="Journaling Hub Template Preview"
                    className="  transition-all duration-300 group-hover:scale-105"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
            </div>
            {/*  Right Content */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="space-y-8 flex flex-col items-center lg:items-start justify-center text-center lg:text-left"
            >
              <div className="space-y-4">
                <h1 className="text-3xl font-bold font-serif tracking-tight md:text-5xl  ">
                  My Journalism Prompts Template
                </h1>
                <p className="text-base md:text-2xl font-semibold">
                  Get my list of journalism prompts that I use almost every day.
                  These help me figure out what I want in life and make better
                  decisions. Enjoy. ✨
                </p>
              </div>

              {/* Email Signup Form */}
              <div className="space-y-6 w-full  animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 transition-all duration-300 hover:shadow-md hover:border-primary/50 focus:scale-[1.02] focus:shadow-lg"
                  />
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 group">
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      Get the Prompts
                    </span>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  By submitting this form, you’ll receive an email with a link
                  to the free resource and you’ll be signed up to my free
                  newsletter. You can opt-out at any time with no hard feelings
                  😉 Here’s our{" "}
                  <Link
                    href="#"
                    className="border-b border-black hover:border-b-0"
                  >
                    privacy
                  </Link>{" "}
                  <Link
                    href="#"
                    className="border-b border-black hover:border-b-0"
                  >
                    policy
                  </Link>{" "}
                  if you like reading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="min-h-screen my-20 text-gray-900 ">
        <div className="container mx-auto px-6 py-16 lg:py-24 bg-[#F9F6F3] rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-light">
                  Hey, I&apos;m
                </h1>
                <h2 className="text-5xl lg:text-6xl font-bold font-serif relative inline-block">
                  Ear Ali
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 300 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,8 Q75,2 150,6 T300,8"
                      stroke="#f59e0b"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </h2>
              </div>

              <div className="space-y-4 text-base lg:text-lg leading-relaxed text-gray-700">
                <p>
                  Since 2017, I&apos;ve been documenting my personal,
                  professional and entrepreneurial journey on YouTube, sharing
                  the books, strategies, ideas and tools that I&apos;ve found
                  most helpful over the years to help us be more productive,
                  live more intentionally and build a life we love.
                </p>

                <p>
                  This seems to have resonated with people. Our online community
                  has grown to 8 million followers on social media (mostly on
                  YouTube and Instagram, although we&apos;re also growing on
                  X/Twitter, LinkedIn and TikTok too).
                </p>

                <p>
                  It&apos;s been a pretty wild ride – from a dorm room at
                  Cambridge University, to working full-time as a doctor during
                  the pandemic, to leaving Medicine to build a business and a
                  life I feel much more passionate about.
                </p>

                <p>
                  If you&apos;ve supported any part of the journey, for any
                  length of time – thank you so much. None of this could&apos;ve
                  happened without you, and I hope to continue building and
                  sharing useful stuff online, for free, forever 💛
                </p>
              </div>

              <Link
                href="#story"
                className="inline-flex items-center font-medium text-gray-900 hover:text-orange-500 transition-colors duration-300 group"
              >
                Read my full story
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-8">
                <Link
                  href="#videos"
                  className="px-6 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors duration-300"
                >
                  Watch My Videos
                </Link>
                <Link
                  href="#articles"
                  className="px-6 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors duration-300"
                >
                  Read My Articles
                </Link>
                <a
                  href="#book"
                  className="px-6 py-3 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors duration-300"
                >
                  Read My Book
                </a>
              </div>
            </div>

            {/* Right Column - Photo Collage */}
            <div className="relative h-[600px] lg:h-[700px] animate-fade-in">
              {/* Decorative SVG Lines */}
              {/* <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 400 600"
                preserveAspectRatio="none"
              >
                <path
                  d="M50,100 Q100,150 150,200"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                />
                <path
                  d="M300,300 Q250,350 200,400"
                  stroke="#FFB84D"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                />
                <path
                  d="M100,500 L150,480"
                  stroke="#B39DDB"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                />
              </svg> */}

              {/* Photo 1 */}
              <div className="absolute top-0 right-0 w-64 lg:w-80 h-48 lg:h-56 rounded-2xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-white z-10">
                <Image
                  height={400}
                  width={600}
                  src="/1Screenshot 2025-10-12 013732.png"
                  alt="Speaking at a conference"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Photo 2 */}
              <div className="absolute top-32 lg:top-40 right-16 lg:right-24 w-48 lg:w-56 h-60 lg:h-72 rounded-2xl overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 border-4 border-white z-20">
                <Image
                  height={400}
                  width={600}
                  src="/2Screenshot 2025-10-12 013817.png"
                  alt="Professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Photo 3 */}
              <div className="absolute bottom-0 right-0 w-56 lg:w-64 h-56 lg:h-64 rounded-2xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300 border-4 border-white z-15">
                <Image
                  height={400}
                  width={600}
                  src="/3Screenshot 2025-10-12 013842.png"
                  alt="Holding a book"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative circles */}
              <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-orange-300/20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalingSection;
