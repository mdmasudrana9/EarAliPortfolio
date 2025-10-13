import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, TrendingUp, Users, Send } from "lucide-react";

interface StatsProps {
  totalSubscribers: number;
  recentSubscribers: number;
  emailsSent: number;
  openRate: number;
}

export function NewsletterStats({
  totalSubscribers,
  recentSubscribers,
  emailsSent,
  openRate,
}: StatsProps) {
  const stats = [
    {
      title: "Total Subscribers",
      value: totalSubscribers,
      icon: Users,
      change: `+${recentSubscribers} this week`,
      changeType: "positive" as const,
    },
    {
      title: "Emails Sent",
      value: emailsSent,
      icon: Send,
      change: "Last 30 days",
      changeType: "neutral" as const,
    },
    {
      title: "Open Rate",
      value: `${openRate}%`,
      icon: Mail,
      change: "+2.5% from last month",
      changeType: "positive" as const,
    },
    {
      title: "Growth Rate",
      value: "+12.5%",
      icon: TrendingUp,
      change: "Compared to last month",
      changeType: "positive" as const,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <stat.icon className="h-6 w-6 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p
              className={`text-sm mt-1 ${
                stat.changeType === "positive"
                  ? "text-green-600 dark:text-green-400"
                  : "text-muted-foreground"
              }`}
            >
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
