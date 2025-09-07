"use client";

import { useAuth } from "@/contexts/auth-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3, Users, FileText, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) return null;

  const getStatsForRole = () => {
    switch (user.role) {
      case "admin":
        return [
          { title: "Total Users", value: "1,234", icon: Users, change: "+12%" },
          {
            title: "Revenue",
            value: "$45,231",
            icon: TrendingUp,
            change: "+8%",
          },
          { title: "Reports", value: "89", icon: FileText, change: "+23%" },
          {
            title: "Analytics",
            value: "12.5K",
            icon: BarChart3,
            change: "+5%",
          },
        ];
      case "manager":
        return [
          { title: "Team Members", value: "24", icon: Users, change: "+2%" },
          { title: "Projects", value: "12", icon: FileText, change: "+15%" },
          {
            title: "Performance",
            value: "94%",
            icon: TrendingUp,
            change: "+3%",
          },
          { title: "Reports", value: "8", icon: BarChart3, change: "+1%" },
        ];
      default:
        return [
          { title: "My Tasks", value: "8", icon: FileText, change: "+2%" },
          { title: "Completed", value: "24", icon: TrendingUp, change: "+12%" },
          { title: "In Progress", value: "3", icon: BarChart3, change: "0%" },
          { title: "Team Size", value: "12", icon: Users, change: "0%" },
        ];
    }
  };

  const stats = getStatsForRole();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Welcome back, {user.name}!
        </h2>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening with your {user.role} dashboard
          today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span
                    className={
                      stat.change.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {stat.change}
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your recent activities and updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Dashboard accessed</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Profile updated</p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">New login detected</p>
                <p className="text-xs text-muted-foreground">3 hours ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks for your role</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {user.role === "admin" && (
              <>
                <button className="w-full text-left p-2 rounded hover:bg-accent hover:text-accent-foreground text-sm">
                  Add New User
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-accent hover:text-accent-foreground text-sm">
                  View System Logs
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-accent hover:text-accent-foreground text-sm">
                  Generate Report
                </button>
              </>
            )}
            {user.role === "manager" && (
              <>
                <button className="w-full text-left p-2 rounded hover:bg-accent hover:text-accent-foreground text-sm">
                  Review Team Performance
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-accent hover:text-accent-foreground text-sm">
                  Assign Tasks
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-accent hover:text-accent-foreground text-sm">
                  Schedule Meeting
                </button>
              </>
            )}
            {user.role === "user" && (
              <>
                <button className="w-full text-left p-2 rounded hover:bg-accent hover:text-accent-foreground text-sm">
                  View My Tasks
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-accent hover:text-accent-foreground text-sm">
                  Update Profile
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-accent hover:text-accent-foreground text-sm">
                  Request Support
                </button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
