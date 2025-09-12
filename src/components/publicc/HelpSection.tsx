import Link from "next/link";
import { ArrowRight, Play, Settings, FileText, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Grow a YouTube Channel",
    description:
      "Learn how to start and grow a life-changing YouTube channel based on my years of experience.",
    colorBg: "bg-orange-100",
    iconBg: "bg-orange-200",
    icon: Play,
    textColor: "text-orange-600",
    hoverTextColor: "text-orange-700",
  },
  {
    title: "Be More Productive",
    description:
      "Learn how to manage your time and achieve your goals, while enjoying the journey along the way.",
    colorBg: "bg-yellow-100",
    iconBg: "", // using direct icon wrapper with relative positioning
    icon: Settings,
    textColor: "text-yellow-600",
    hoverTextColor: "text-yellow-700",
  },
  {
    title: "Boost Your Grades",
    description:
      "Learn how to study effectively for exams, with the best evidence-based techniques.",
    colorBg: "bg-purple-100",
    iconBg: "bg-purple-200",
    icon: FileText,
    textColor: "text-purple-600",
    hoverTextColor: "text-purple-700",
  },
  {
    title: "Build an Online Business",
    description:
      "Learn how to start and grow your online business for fun, fulfilment and financial freedom.",
    colorBg: "bg-blue-100",
    iconBg: "bg-blue-200",
    icon: DollarSign,
    textColor: "text-blue-600",
    hoverTextColor: "text-blue-700",
  },
];

const HelpSection = () => {
  return (
    <div className="min-h-screen  lg:py-16 px-4">
      <div className="max-w-7xl mx-auto ">
        {/* Main Heading */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="lg:text-5xl mt-8 text-2xl font-bold text-gray-900 mb-2 text-balance">
            How Can
          </h1>
          <h1 className="lg:text-5xl text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            I Help{" "}
            <span className="underline decoration-blue-400 decoration-4">
              You
            </span>
            ?
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`${service.colorBg} border-0 p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out cursor-pointer group`}
              >
                <CardContent className="p-0">
                  <div className="flex justify-center mb-6">
                    {service.iconBg ? (
                      <div
                        className={`${service.iconBg} w-16 h-12 rounded-lg flex items-center justify-center group-hover:bg-opacity-80 transition-colors duration-300`}
                      >
                        <Icon
                          className={`w-6 h-6 ${service.textColor} group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}
                        />
                      </div>
                    ) : (
                      <div className="relative">
                        <Icon
                          className={`w-8 h-8 ${service.textColor} group-hover:rotate-180 transition-transform duration-500`}
                        />
                        <Icon
                          className={`w-6 h-6 absolute -top-1 -right-1 ${service.textColor} group-hover:rotate-90 transition-transform duration-300`}
                        />
                      </div>
                    )}
                  </div>
                  <h2
                    className={`text-2xl font-bold text-gray-900 mb-4 text-balance group-hover:${service.hoverTextColor} transition-colors duration-300`}
                  >
                    {service.title}
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {service.description}
                  </p>
                  <Link
                    href="#"
                    className={`inline-flex items-center text-gray-900 font-medium hover:text-opacity-80 group-hover:translate-x-2 duration-300`}
                  >
                    Get started{" "}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:ml-3 transition-all duration-300" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
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
