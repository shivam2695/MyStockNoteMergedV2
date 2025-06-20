import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface GrowthMetricCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: "yellow" | "blue" | "purple" | "pink" | "orange" | "cyan";
}

export function GrowthMetricCard({
  title,
  value,
  icon: Icon,
  color,
}: GrowthMetricCardProps) {
  const colorVariants = {
    yellow: {
      bg: "bg-yellow-500",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    blue: {
      bg: "bg-blue-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    purple: {
      bg: "bg-purple-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    pink: {
      bg: "bg-pink-500",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    orange: {
      bg: "bg-orange-500",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    cyan: {
      bg: "bg-cyan-500",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
  };

  const variant = colorVariants[color];

  return (
    <Card className="bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-3">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center",
              variant.iconBg,
            )}
          >
            <Icon className={cn("h-4 w-4", variant.iconColor)} />
          </div>
          <div className="flex-1">
            <div className="text-xs text-gray-500 font-medium mb-1">
              {title}
            </div>
            <div className="text-sm font-bold text-gray-900">{value}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
