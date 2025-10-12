import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface VideoCardProps {
  thumbnail?: string;
  id?: number | string;
  date?: string;
  title: string;
  description?: string;
  onView?: () => void;
}

export const VideoCard = ({
  thumbnail,
  id,
  date,
  title,
  description,
  onView,
}: VideoCardProps) => {
  return (
    <div
      onClick={onView}
      className="group relative overflow-hidden rounded-xl border border-gray-200 bg-[#F9F6F3] hover:bg-[#FD976D] shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 pointer-events-none" />

      {/* Image */}
      <div className="aspect-video overflow-hidden relative">
        <Image
          height={300}
          width={400}
          src={
            thumbnail ||
            "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
          }
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Content */}
      <div className="p-6 relative z-20">
        <p className="text-sm text-gray-500 mb-3 font-medium tracking-wide uppercase">
          {date}
        </p>

        <h3 className="text-xl md:text-3xl font-bold mb-1 leading-tight text-gray-900 min-h-[3rem] group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        {description && (
          <p className="text-base md:text-2xl text-gray-600 mb-4 leading-relaxed line-clamp-2 group-hover:text-white transition-colors duration-300">
            {description}
          </p>
        )}

        <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:text-white transition-all duration-300 pt-4  border-gray-200 group-hover:border-white">
          <Link href={`/videos/${id}`} className="text-base">
            View Details
          </Link>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};
