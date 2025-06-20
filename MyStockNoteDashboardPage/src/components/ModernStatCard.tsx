import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";

interface ModernStatCardProps {
  symbol: string;
  name: string;
  value: string;
  change: string;
  trend: "up" | "down";
  color: "portfolio" | "pnl" | "winrate" | "trades";
  icon: LucideIcon;
}

export function ModernStatCard({
  symbol,
  name,
  value,
  change,
  trend,
  color,
  icon: Icon,
}: ModernStatCardProps) {
  const colorVariants = {
    portfolio: {
      bg: "#E0F7F4",
      text: "#1D6155",
      symbolBg: "#1D6155",
      symbolText: "#E0F7F4",
    },
    pnl: {
      bg: "#E1F3FF",
      text: "#1A4C8B",
      symbolBg: "#1A4C8B",
      symbolText: "#E1F3FF",
    },
    winrate: {
      bg: "#FFF9E3",
      text: "#A67C00",
      symbolBg: "#A67C00",
      symbolText: "#FFF9E3",
    },
    trades: {
      bg: "#F5F0FF",
      text: "#6942A3",
      symbolBg: "#6942A3",
      symbolText: "#F5F0FF",
    },
  };

  const variant = colorVariants[color];

  return (
    <Card
      className="rounded-2xl border-0 shadow-sm overflow-hidden"
      style={{ backgroundColor: variant.bg }}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: variant.symbolBg }}
          >
            <Icon className="h-5 w-5" style={{ color: variant.symbolText }} />
          </div>
          <div className="text-xs font-medium" style={{ color: variant.text }}>
            {symbol}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-xl font-bold" style={{ color: variant.text }}>
            {value}
          </div>
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-medium",
              trend === "up" ? "text-green-600" : "text-red-600",
            )}
          >
            {trend === "up" ? (
              <TrendingUp className="h-2 w-2" />
            ) : (
              <TrendingDown className="h-2 w-2" />
            )}
            {change}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
