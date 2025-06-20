import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MonthlyData } from "@/lib/analyticsData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";

interface MonthlyProfitChartProps {
  data: MonthlyData[];
}

export function MonthlyProfitChart({ data }: MonthlyProfitChartProps) {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-green-50/30 dark:from-gray-900 dark:to-green-950/30">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold">
          Monthly Profit & Loss
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
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
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white dark:bg-gray-800 border border-border shadow-lg rounded-lg p-3 min-w-[180px]">
                      <p className="font-semibold text-foreground mb-2">
                        {label} • {data.trades} trades
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Monthly Profit:</span>
                        <span className="font-medium">
                          ₹{Number(payload[0].value).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  );
                }}
              />
              <Bar dataKey="profit" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.profit >= 0 ? "#16a34a" : "#dc2626"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
