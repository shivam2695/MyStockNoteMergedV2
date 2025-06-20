import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MonthlyData } from "@/lib/analyticsData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  AreaChart,
  Tooltip,
} from "recharts";

interface PortfolioChartProps {
  data: MonthlyData[];
}

export function PortfolioChart({ data }: PortfolioChartProps) {
  // Calculate cumulative values
  const cumulativeData = data.reduce((acc, current, index) => {
    const prevTotal =
      index > 0 ? acc[index - 1] : { totalInvestment: 0, totalValue: 0 };

    acc.push({
      month: current.month,
      totalInvestment: prevTotal.totalInvestment + current.investment,
      totalValue: prevTotal.totalValue + current.value,
      monthlyProfit: current.profit,
      trades: current.trades,
    });

    return acc;
  }, [] as any[]);

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/30">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          Portfolio Performance
          <div className="flex items-center gap-4 ml-auto text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              Portfolio Value
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              Total Investment
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={cumulativeData}>
              <defs>
                <linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient
                  id="investmentGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#6b7280" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#6b7280" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => value.split(" ")[0]}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                content={({ payload, label }) => {
                  if (!payload || payload.length === 0) return null;
                  return (
                    <div className="bg-white dark:bg-gray-800 border border-border shadow-lg rounded-lg p-3 min-w-[200px]">
                      <p className="font-semibold text-foreground mb-2">
                        {label}
                      </p>
                      {payload.map((entry, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <span className="text-sm">
                            {entry.dataKey === "totalValue"
                              ? "Portfolio Value"
                              : "Total Investment"}
                            :
                          </span>
                          <span className="font-medium">
                            ₹{Number(entry.value).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  );
                }}
              />
              <Area
                type="monotone"
                dataKey="totalInvestment"
                stroke="#6b7280"
                strokeWidth={2}
                fill="url(#investmentGradient)"
                strokeDasharray="5,5"
              />
              <Area
                type="monotone"
                dataKey="totalValue"
                stroke="#2563eb"
                strokeWidth={3}
                fill="url(#valueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
