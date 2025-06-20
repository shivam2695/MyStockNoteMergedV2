import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "./MetricCard";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Activity,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface RiskMetrics {
  beta: number;
  sharpeRatio: number;
  maxDrawdown: number;
  volatility: number;
  var95: number;
  correlation: number;
}

interface AdvancedAnalyticsProps {
  riskMetrics: RiskMetrics;
}

export function AdvancedAnalytics({ riskMetrics }: AdvancedAnalyticsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getMetricIcon = (metric: string) => {
    switch (metric) {
      case "beta":
        return <Shield className="h-4 w-4" />;
      case "sharpeRatio":
        return <TrendingUp className="h-4 w-4" />;
      case "maxDrawdown":
        return <TrendingDown className="h-4 w-4" />;
      case "volatility":
        return <Activity className="h-4 w-4" />;
      case "var95":
        return <AlertTriangle className="h-4 w-4" />;
      case "correlation":
        return <BarChart3 className="h-4 w-4" />;
      default:
        return <BarChart3 className="h-4 w-4" />;
    }
  };

  const getMetricColor = (metric: string, value: number) => {
    switch (metric) {
      case "maxDrawdown":
      case "var95":
        return "loss";
      case "sharpeRatio":
        return value > 1 ? "profit" : "default";
      case "beta":
        return value > 1.2 ? "loss" : value < 0.8 ? "profit" : "default";
      default:
        return "default";
    }
  };

  const formatValue = (metric: string, value: number) => {
    switch (metric) {
      case "maxDrawdown":
      case "volatility":
      case "var95":
        return `${value}%`;
      default:
        return value.toString();
    }
  };

  const metricData = [
    { key: "beta", label: "Beta", value: riskMetrics.beta },
    {
      key: "sharpeRatio",
      label: "Sharpe Ratio",
      value: riskMetrics.sharpeRatio,
    },
    {
      key: "maxDrawdown",
      label: "Max Drawdown",
      value: riskMetrics.maxDrawdown,
    },
    { key: "volatility", label: "Volatility", value: riskMetrics.volatility },
    { key: "var95", label: "VaR (95%)", value: riskMetrics.var95 },
    {
      key: "correlation",
      label: "Market Correlation",
      value: riskMetrics.correlation,
    },
  ];

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/30 dark:from-gray-900 dark:to-slate-950/30">
      <CardHeader
        className="pb-4 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardTitle className="text-xl font-semibold flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Advanced Analytics
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground font-normal">
              {isExpanded ? "Hide" : "Show"} Details
            </span>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        </CardTitle>
      </CardHeader>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {metricData.map((metric, index) => (
              <MetricCard
                key={metric.key}
                title={metric.label}
                value={formatValue(metric.key, metric.value)}
                icon={getMetricIcon(metric.key)}
                size="sm"
                valueColor={
                  getMetricColor(metric.key, metric.value) as
                    | "default"
                    | "profit"
                    | "loss"
                }
                className={cn(
                  "animate-fade-in",
                  index === 0 && "animate-delay-100",
                  index === 1 && "animate-delay-200",
                  index === 2 && "animate-delay-300",
                  index === 3 && "animate-delay-400",
                )}
              />
            ))}
          </div>

          {/* Risk Interpretation */}
          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-sm mb-2">Risk Assessment</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-muted-foreground">
              <div>
                <span className="font-medium">Beta ({riskMetrics.beta}): </span>
                {riskMetrics.beta > 1.2
                  ? "High market sensitivity"
                  : riskMetrics.beta < 0.8
                    ? "Low market sensitivity"
                    : "Moderate market sensitivity"}
              </div>
              <div>
                <span className="font-medium">
                  Sharpe Ratio ({riskMetrics.sharpeRatio}):{" "}
                </span>
                {riskMetrics.sharpeRatio > 1.5
                  ? "Excellent"
                  : riskMetrics.sharpeRatio > 1
                    ? "Good"
                    : "Needs improvement"}{" "}
                risk-adjusted returns
              </div>
              <div>
                <span className="font-medium">
                  Max Drawdown ({riskMetrics.maxDrawdown}%):{" "}
                </span>
                {Math.abs(riskMetrics.maxDrawdown) > 15
                  ? "High"
                  : Math.abs(riskMetrics.maxDrawdown) > 10
                    ? "Moderate"
                    : "Low"}{" "}
                peak-to-trough loss
              </div>
              <div>
                <span className="font-medium">
                  Volatility ({riskMetrics.volatility}%):{" "}
                </span>
                {riskMetrics.volatility > 25
                  ? "High"
                  : riskMetrics.volatility > 15
                    ? "Moderate"
                    : "Low"}{" "}
                price fluctuation
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
