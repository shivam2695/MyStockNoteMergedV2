import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { MonthlyData } from "@/lib/data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface ProfitLossChartProps {
  data: MonthlyData[];
}

const chartConfig = {
  profit: {
    label: "Monthly P&L",
    color: "hsl(var(--primary))",
  },
};

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
              <div className="w-3 h-3 bg-profit rounded-full"></div>
              Cumulative P&L
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="!bg-white dark:!bg-gray-900 hover:!bg-white dark:hover:!bg-gray-900">
        <ChartContainer
          config={chartConfig}
          className="h-[300px] !bg-white dark:!bg-gray-900 hover:!bg-white dark:hover:!bg-gray-900 [&_*]:!bg-white dark:[&_*]:!bg-gray-900 [&_*:hover]:!bg-white dark:[&_*:hover]:!bg-gray-900"
        >
          <LineChart data={cumulativeData}>
            <defs>
              <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(142, 76%, 36%)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(142, 76%, 36%)"
                  stopOpacity={0.0}
                />
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
              stroke="hsl(var(--muted-foreground))"
              strokeDasharray="3 3"
              strokeOpacity={0.5}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="bg-white dark:bg-gray-800 border border-border shadow-lg rounded-lg p-3 min-w-[200px]"
                  formatter={(value, name) => [
                    `₹${Number(value).toLocaleString()}`,
                    name === "cumulativeProfit"
                      ? "Cumulative P&L"
                      : "Monthly P&L",
                  ]}
                  labelFormatter={(label, payload) => {
                    if (payload && payload[0]) {
                      return `${label} • ${payload[0].payload.trades} trades`;
                    }
                    return label;
                  }}
                  labelClassName="font-semibold text-foreground mb-2"
                />
              }
            />
            <Line
              type="monotone"
              dataKey="cumulativeProfit"
              stroke="hsl(142, 76%, 36%)"
              strokeWidth={3}
              dot={{
                fill: "hsl(142, 76%, 36%)",
                strokeWidth: 2,
                stroke: "white",
                r: 4,
              }}
              activeDot={{
                r: 6,
                fill: "hsl(142, 76%, 36%)",
                stroke: "white",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
