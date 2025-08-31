import Link from "next/link";
import { ArrowRight, Play, Settings, FileText, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HelpSection = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-2 text-balance">
            How Can
          </h1>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 text-balance">
            I Help{" "}
            <span className="underline decoration-blue-400 decoration-4">
              You
            </span>
            ?
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* YouTube Channel Card */}
          <Card className="bg-orange-100 border-0 p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                  <Play className="w-6 h-6 text-orange-600 fill-current" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-balance">
                Grow a YouTube Channel
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Learn how to start and grow a life-changing YouTube channel
                based on my years of experience.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                Get started <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </CardContent>
          </Card>

          {/* Productivity Card */}
          <Card className="bg-yellow-100 border-0 p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Settings className="w-8 h-8 text-yellow-600" />
                  <Settings className="w-6 h-6 text-yellow-500 absolute -top-1 -right-1" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-balance">
                Be More Productive
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Learn how to manage your time and achieve your goals, while
                enjoying the journey along the way.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                Get started <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </CardContent>
          </Card>

          {/* Grades Card */}
          <Card className="bg-purple-100 border-0 p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-12 bg-purple-200 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-balance">
                Boost Your Grades
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Learn how to study effectively for exams, with the best
                evidence-based techniques.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                Get started <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </CardContent>
          </Card>

          {/* Online Business Card */}
          <Card className="bg-blue-100 border-0 p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-balance">
                Build an Online Business
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Learn how to start and grow your online business for fun,
                fulfilment and financial freedom.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                Get started <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* More Content Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            ... and more!
          </h3>
          <Link
            href="#"
            className="inline-flex items-center text-gray-900 font-medium text-lg hover:text-gray-700 transition-colors"
          >
            Explore all content <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
