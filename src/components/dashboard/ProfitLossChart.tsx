import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MonthlyData } from "@/lib/analyticsData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
} from "recharts";

interface ProfitLossChartProps {
  data: MonthlyData[];
}

export function ProfitLossChart({ data }: ProfitLossChartProps) {
  // Calculate cumulative P&L
  const cumulativeData = data.reduce((acc, current, index) => {
    const prevTotal = index > 0 ? acc[index - 1].cumulativeProfit : 0;

    acc.push({
      month: current.month,
      monthlyProfit: current.profit,
      cumulativeProfit: prevTotal + current.profit,
      trades: current.trades,
    });

    return acc;
  }, [] as any[]);

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-green-50/30 dark:from-gray-900 dark:to-green-950/30">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          Profit & Loss Trend
          <div className="flex items-center gap-4 ml-auto text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              Cumulative P&L
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={cumulativeData}>
              <defs>
                <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#16a34a" stopOpacity={0.0} />
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
              {/* Zero line reference */}
              <ReferenceLine
                y={0}
                stroke="#6b7280"
                strokeDasharray="3 3"
                strokeOpacity={0.5}
              />
              <Tooltip
                content={({ payload, label }) => {
                  if (!payload || payload.length === 0) return null;
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white dark:bg-gray-800 border border-border shadow-lg rounded-lg p-3 min-w-[200px]">
                      <p className="font-semibold text-foreground mb-2">
                        {label} • {data.trades} trades
                      </p>
                      {payload.map((entry, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <span className="text-sm">
                            {entry.dataKey === "cumulativeProfit"
                              ? "Cumulative P&L"
                              : "Monthly P&L"}
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
              <Line
                type="monotone"
                dataKey="cumulativeProfit"
                stroke="#16a34a"
                strokeWidth={3}
                dot={{
                  fill: "#16a34a",
                  strokeWidth: 2,
                  stroke: "white",
                  r: 4,
                }}
                activeDot={{
                  r: 6,
                  fill: "#16a34a",
                  stroke: "white",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
