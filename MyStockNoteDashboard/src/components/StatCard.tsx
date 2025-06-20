import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus, LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  change: string;
  changeValue?: string;
  trend: "up" | "down" | "neutral";
  color: "blue" | "green" | "purple" | "emerald" | "orange";
  icon?: LucideIcon;
}

export function StatCard({
  title,
  value,
  subtitle,
  change,
  changeValue,
  trend,
  color,
  icon: Icon,
}: StatCardProps) {
  const colorVariants = {
    blue: {
      bg: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700",
      icon: "text-blue-100",
      text: "text-white",
      accent: "text-blue-100",
      glow: "shadow-blue-500/25",
    },
    green: {
      bg: "bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600",
      icon: "text-emerald-100",
      text: "text-white",
      accent: "text-emerald-100",
      glow: "shadow-emerald-500/25",
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700",
      icon: "text-purple-100",
      text: "text-white",
      accent: "text-purple-100",
      glow: "shadow-purple-500/25",
    },
    emerald: {
      bg: "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600",
      icon: "text-emerald-100",
      text: "text-white",
      accent: "text-emerald-100",
      glow: "shadow-emerald-500/25",
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-600",
      icon: "text-orange-100",
      text: "text-white",
      accent: "text-orange-100",
      glow: "shadow-orange-500/25",
    },
  };

  const variant = colorVariants[color];

  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4" />;
      case "down":
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Minus className="h-4 w-4" />;
    }
  };

  return (
    <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        {/* Header with icon and trend */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <Icon className="h-4 w-4 text-gray-600" />
              </div>
            )}
            <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          </div>
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded",
              trend === "up"
                ? "text-green-700 bg-green-50"
                : trend === "down"
                  ? "text-red-700 bg-red-50"
                  : "text-gray-700 bg-gray-50",
            )}
          >
            {getTrendIcon()}
            {change}
          </div>
        </div>

        {/* Main value */}
        <div className="space-y-1">
          <div className="text-2xl font-semibold text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{subtitle}</div>
          {changeValue && (
            <div className="text-xs text-gray-400">{changeValue}</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
