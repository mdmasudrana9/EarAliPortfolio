/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  DollarSign,
  FileText,
  LaptopMinimal,
  Settings,
} from "lucide-react";
import Link from "next/link";

// 🎨 Tailwind color variants mapping (compile-time safe)
const colorVariants = {
  orange: {
    bg: "bg-orange-100/50",
    iconBg: "bg-orange-100",
    hoverBg: "hover:bg-orange-200",
    text: "text-orange-300",
    hoverText: "group-hover:text-orange-700",
  },
  yellow: {
    bg: "bg-yellow-100/40",
    iconBg: "bg-yellow-100",
    hoverBg: "hover:bg-yellow-200",
    text: "text-yellow-600",
    hoverText: "group-hover:text-yellow-700",
  },
  purple: {
    bg: "bg-purple-100/40",
    iconBg: "bg-purple-100",
    hoverBg: "hover:bg-purple-200",
    text: "text-purple-300",
    hoverText: "group-hover:text-purple-700",
  },
  blue: {
    bg: "bg-blue-100/40",
    iconBg: "bg-blue-100",
    hoverBg: "hover:bg-blue-200",
    text: "text-blue-300",
    hoverText: "group-hover:text-blue-700",
  },
};

type ColorVariantKey = keyof typeof colorVariants;

interface Service {
  title: string;
  linkref?: string;
  description: string;
  color: ColorVariantKey;
  icon: string | React.ComponentType<any>;
}

// 💡 Services array
const services: Service[] = [
  {
    title: "Grow a YouTube Channel",
    linkref: "/videos",
    description:
      "Learn how to start and grow a life-changing YouTube channel based on my years of experience.",
    color: "orange",
    icon: LaptopMinimal,
  },
  {
    title: "Be More Productive",
    description:
      "Learn how to manage your time and achieve your goals, while enjoying the journey along the way.",
    color: "yellow",
    icon: Settings,
  },
  {
    title: "Boost Your Grades",
    description:
      "Learn how to study effectively for exams, with the best evidence-based techniques.",
    color: "purple",
    icon: FileText,
  },
  {
    title: "Build an Online Business",
    description:
      "Learn how to start and grow your online business for fun, fulfilment and financial freedom.",
    color: "blue",
    icon: DollarSign,
  },
];

const HelpSection = () => {
  return (
    <div className="min-h-screen lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="flex justify-center mb-8 lg:mb-16">
          <div>
            <h1 className="lg:text-5xl mt-8 text-2xl font-light text-gray-900 mb-2 text-balance">
              How Can
            </h1>
            <h1 className="lg:text-5xl text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 text-balance">
              I Help You?
            </h1>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorVariants[service.color];

            return (
              <Link
                href={service.linkref ?? "#"}
                key={index}
                className={`${colors.bg} ${colors.hoverBg} rounded-2xl border-0 p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out cursor-pointer group block`}
              >
                <CardContent className="p-0 m-8">
                  {/* Icon Section */}
                  <div className="flex justify-start mb-6">
                    <div
                      className={`${colors.iconBg} w-26 h-22 rounded-lg flex items-center justify-center group-hover:bg-opacity-80 transition-colors duration-300`}
                    >
                      <Icon
                        className={`w-16 h-16 ${colors.text} group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h2
                    className={`text-2xl md:text-4xl font-serif md:w-[450px] font-bold text-gray-900 mb-4 text-balance ${colors.hoverText} transition-colors duration-300`}
                  >
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-700 text-base font-serif md:text-2xl mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Get Started Button (no inner Link) */}
                  <div className="inline-flex items-center text-gray-900 font-medium hover:text-opacity-80 group-hover:translate-x-2 duration-300">
                    <span className="text-lg font-serif border-b border-black hover:border-b-0">
                      Get started
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:ml-3 transition-all duration-300" />
                  </div>
                </CardContent>
              </Link>
            );
          })}
        </div>

        {/* More Content Section */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            ... and more!
          </h3>
          <Link
            href="#"
            className="inline-flex font-serif items-center text-gray-900 font-medium md:text-xl text-lg hover:text-gray-700 transition-colors"
          >
            Explore all content <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
