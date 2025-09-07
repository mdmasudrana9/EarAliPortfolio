"use client";

import { useAuth } from "@/contexts/auth-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Activity } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function AnalyticsPage() {
  const { user } = useAuth();

  useEffect(() => {
    if (user && !["admin", "manager"].includes(user.role)) {
      redirect("/dashboard");
    }
  }, [user]);

  if (!user || !["admin", "manager"].includes(user.role)) {
    return null;
  }

  const analyticsData = [
    {
      title: "Total Page Views",
      value: "45,231",
      change: "+20.1%",
      icon: BarChart3,
    },
    { title: "Active Users", value: "2,350", change: "+180.1%", icon: Users },
    {
      title: "Conversion Rate",
      value: "12.5%",
      change: "+19%",
      icon: TrendingUp,
    },
    { title: "System Uptime", value: "99.9%", change: "+0.1%", icon: Activity },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Analytics Dashboard
        </h2>
        <p className="text-muted-foreground">
          {user.role === "admin"
            ? "System-wide analytics and performance metrics"
            : "Team analytics and insights"}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {analyticsData.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {item.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{item.change}</span> from
                  last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
            <CardDescription>Monthly traffic statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Desktop</span>
                <span className="text-sm font-medium">65%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Mobile</span>
                <span className="text-sm font-medium">30%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-accent h-2 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Tablet</span>
                <span className="text-sm font-medium">5%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-muted h-2 rounded-full"
                  style={{ width: "5%" }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription>Recent user engagement metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Daily Active Users</span>
                <span className="text-sm font-medium">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Weekly Active Users</span>
                <span className="text-sm font-medium">5,678</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Monthly Active Users</span>
                <span className="text-sm font-medium">12,345</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Average Session Duration</span>
                <span className="text-sm font-medium">4m 32s</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
