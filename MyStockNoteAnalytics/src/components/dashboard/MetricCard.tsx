import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: number;
  changePercent?: number;
  icon?: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  className?: string;
  size?: "sm" | "md" | "lg";
  valueColor?: "default" | "profit" | "loss";
}

export function MetricCard({
  title,
  value,
  change,
  changePercent,
  icon,
  trend,
  className,
  size = "md",
  valueColor = "default",
}: MetricCardProps) {
  const formatChange = (value: number) => {
    return value >= 0 ? `+${value.toLocaleString()}` : value.toLocaleString();
  };

  const formatPercent = (value: number) => {
    return value >= 0 ? `+${value.toFixed(2)}%` : `${value.toFixed(2)}%`;
  };

  const getTrendColor = () => {
    if (trend === "up" || (changePercent && changePercent > 0))
      return "text-profit";
    if (trend === "down" || (changePercent && changePercent < 0))
      return "text-loss";
    return "text-muted-foreground";
  };

  const getValueColor = () => {
    if (valueColor === "profit") return "text-profit";
    if (valueColor === "loss") return "text-loss";
    return "text-foreground";
  };

  const sizeClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <Card
      className={cn(
        "metric-card-hover border-0 shadow-md bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50",
        className,
      )}
    >
      <CardContent className={cn(sizeClasses[size])}>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="space-y-1">
              <p
                className={cn("font-bold tracking-tight", getValueColor(), {
                  "text-2xl": size === "sm",
                  "text-3xl": size === "md",
                  "text-4xl": size === "lg",
                })}
              >
                {value}
              </p>
              {(change !== undefined || changePercent !== undefined) && (
                <div
                  className={cn(
                    "flex items-center gap-1 text-sm",
                    getTrendColor(),
                  )}
                >
                  {changePercent && changePercent > 0 && (
                    <TrendingUp className="h-4 w-4" />
                  )}
                  {changePercent && changePercent < 0 && (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span className="font-medium">
                    {change !== undefined && formatChange(change)}
                    {change !== undefined && changePercent !== undefined && " "}
                    {changePercent !== undefined &&
                      `(${formatPercent(changePercent)})`}
                  </span>
                </div>
              )}
            </div>
          </div>
          {icon && (
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
