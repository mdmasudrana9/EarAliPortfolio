import { useAuth } from "@/contexts/auth-context";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  FileText,
  Home,
  LayoutDashboard,
  Mail,
  Settings,
  Users,
  Video,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
type NavItems = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  roles: string[];
};

const navItems: NavItems[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
    roles: ["admin", "user"],
  },
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
  {
    title: "Users",
    href: "/dashboard/users",
    icon: Users,
    roles: ["admin"],
  },
  {
    title: "Articles",
    href: "/dashboard/articles",
    icon: FileText,
    roles: ["admin"],
  },
  {
    title: "News Letter",
    href: "/dashboard/newsletter",
    icon: Mail,
    roles: ["admin"],
  },
  {
    title: "Videos",
    href: "/dashboard/videos",
    icon: Video,
    roles: ["admin"],
  },

  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    roles: ["admin", "user"],
  },
];

const DashboardSidebar = () => {
  const { user } = useAuth();
  const pathName = usePathname();
  const filteredNavItems = navItems.filter((items) =>
    items.roles.includes(user?.role || " ")
  );

  return (
    <aside className="bg-sidebar border-r border-sidebar-border  min-h-screen fixed left-0 top-16 z-40">
      <div className="p-4">
        <nav className="space-y-2">
          {filteredNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathName === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-purple-600  text-white"
                    : "hover:bg-purple-500/40"
                )}
              >
                <Icon className="w-3 h-3 md:h-5 md:w-5 animate-out text-green-500" />
                <span className="text-md font-medium hidden md:block  px-1  transition-all duration-300">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
