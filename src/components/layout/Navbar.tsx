"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { ResourceBrowserDialog } from "@/utils/ResourceBrowserDialog";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const Navbar = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={clsx(
        "flex max-w-7xl  rounded-t-lg lg:mt-3 bg-[#F9F6F3] mx-auto items-center justify-between p-6 md:p-8 z-20",
        isOpen ? "fixed top-0 left-0 w-full" : "relative"
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <div className="text-2xl font-bold text-cyan-500">⚡</div>
        <div className="text-2xl font-bold text-gray-900">Ear Ali</div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="#book" className="transition-colors font-medium">
          About
        </Link>
        <ResourceBrowserDialog />
        <Link href="#youtube" className="transition-colors font-medium">
          Blog
        </Link>
        <Link href="#lifeos" className="transition-colors font-medium">
          Contact
        </Link>
        {user?.role === "admin" && (
          <Link href="/dashboard" className="transition-colors font-medium">
            Dashboard
          </Link>
        )}
      </div>

      {/* CTA Button (Desktop only) */}
      <div className="hidden md:block">
        <Button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-full">
          Join 510K+ Subscribers
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer with Tailwind Transition */}
      <div
        className={clsx(
          "absolute top-full h-screen left-0 w-full bg-[#F9F6F3] shadow-md flex flex-col space-y-6 p-6 md:hidden z-30 transform transition-all duration-300 ease-in-out",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        )}
      >
        <Link
          href="#book"
          className="transition-colors font-medium"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <ResourceBrowserDialog />
        <Link
          href="#youtube"
          className="transition-colors font-medium"
          onClick={() => setIsOpen(false)}
        >
          Blog
        </Link>
        <Link
          href="#lifeos"
          className="transition-colors font-medium"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
        {user && (
          <Link
            href="/dashboard"
            className="transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
        )}
        <Button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-full">
          Join 510K+ Subscribers
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
