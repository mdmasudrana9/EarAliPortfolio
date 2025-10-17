"use client";

import { useAuth } from "@/contexts/auth-context";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  FileText,
  Folder,
  Home,
  LayoutDashboard,
  Mail,
  Menu,
  Settings,
  Upload,
  Users,
  Video,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItems = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  roles: string[];
};

const navItems: NavItems[] = [
  { title: "Home", href: "/", icon: Home, roles: ["admin", "user"] },
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ["admin", "user"],
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
    roles: ["admin"],
  },
  { title: "Users", href: "/dashboard/users", icon: Users, roles: ["admin"] },
  {
    title: "Articles",
    href: "/dashboard/articles",
    icon: FileText,
    roles: ["admin"],
  },
  {
    title: "Manage Articles",
    href: "/dashboard/manage-articles",
    icon: Folder,
    roles: ["admin"],
  },
  {
    title: "News Letter",
    href: "/dashboard/newsletter",
    icon: Mail,
    roles: ["admin"],
  },
  { title: "Videos", href: "/dashboard/videos", icon: Video, roles: ["admin"] },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    roles: ["admin", "user"],
  },
  {
    title: "Image Gallery",
    href: "/dashboard/image-upload",
    icon: Upload,
    roles: ["admin"],
  },
];

const DashboardSidebar = () => {
  const { user } = useAuth();
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const filteredNavItems = navItems.filter((items) =>
    items.roles.includes(user?.role || " ")
  );

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-sidebar border-b  h-16 flex items-center px-4 z-50">
        <button onClick={() => setIsOpen(true)}>
          <Menu className="h-6 w-6 text-purple-600" />
        </button>
        <h1 className="ml-4 font-semibold text-purple-700">Dashboard</h1>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "bg-sidebar border-r border-sidebar-border min-h-screen fixed top-0 z-40 transition-transform duration-300",
          "w-64",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:top-16 md:left-0"
        )}
      >
        {/* Close button (Mobile only) */}
        <div className="flex justify-between items-center p-4 md:hidden">
          <h2 className="font-bold text-purple-700">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6 text-purple-600" />
          </button>
        </div>

        <div className="p-4">
          <nav className="space-y-2">
            {filteredNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathName === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)} // mobile এ ক্লিক করলে close হবে
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-purple-600 text-white"
                      : "hover:bg-purple-500/40"
                  )}
                >
                  <Icon className="w-4 h-4 md:h-5 md:w-5 text-green-500" />
                  <span className="text-md font-medium hidden md:block px-1 transition-all duration-300">
                    {item.title}
                  </span>
                  {/* mobile view এ title সবসময় show হবে */}
                  <span className="md:hidden">{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Overlay (Mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default DashboardSidebar;
