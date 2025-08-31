import { Button } from "@/components/ui/button";
import { ResourceBrowserDialog } from "@/utils/ResourceBrowserDialog";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 md:p-8 relative z-20">
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold text-cyan-500">⚡</div>
        <div className="text-2xl font-bold text-gray-900"> Ear Ali</div>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#book"
          className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
        >
          My Book
        </a>
        <ResourceBrowserDialog />
        <a
          href="#youtube"
          className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
        >
          YouTube Academy
        </a>
        <a
          href="#lifeos"
          className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
        >
          LifeOS Productivity System
        </a>
      </div>

      <Button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-full">
        Join 510K+ Subscribers
      </Button>
    </nav>
  );
};

export default Navbar;
