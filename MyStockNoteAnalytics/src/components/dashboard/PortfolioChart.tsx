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
  Area,
  AreaChart,
} from "recharts";

interface PortfolioChartProps {
  data: MonthlyData[];
}

const chartConfig = {
  value: {
    label: "Portfolio Value",
    color: "hsl(var(--primary))",
  },
  investment: {
    label: "Investment",
    color: "hsl(var(--muted-foreground))",
  },
};

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
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              Portfolio Value
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
              Total Investment
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="!bg-white dark:!bg-gray-900 hover:!bg-white dark:hover:!bg-gray-900">
        <ChartContainer
          config={chartConfig}
          className="h-[400px] !bg-white dark:!bg-gray-900 hover:!bg-white dark:hover:!bg-gray-900 [&_*]:!bg-white dark:[&_*]:!bg-gray-900 [&_*:hover]:!bg-white dark:[&_*:hover]:!bg-gray-900"
        >
          <AreaChart data={cumulativeData}>
            <defs>
              <linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.0}
                />
              </linearGradient>
              <linearGradient
                id="investmentGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="hsl(var(--muted-foreground))"
                  stopOpacity={0.2}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--muted-foreground))"
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
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="bg-white dark:bg-gray-800 border border-border shadow-lg rounded-lg p-3 min-w-[200px]"
                  formatter={(value, name) => [
                    `₹${Number(value).toLocaleString()}`,
                    name === "totalValue"
                      ? "Portfolio Value"
                      : "Total Investment",
                  ]}
                  labelClassName="font-semibold text-foreground mb-2"
                />
              }
            />
            <Area
              type="monotone"
              dataKey="totalInvestment"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={2}
              fill="url(#investmentGradient)"
              strokeDasharray="5,5"
            />
            <Area
              type="monotone"
              dataKey="totalValue"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              fill="url(#valueGradient)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
