import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { MonthlyData } from "@/lib/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface MonthlyProfitChartProps {
  data: MonthlyData[];
}

const chartConfig = {
  profit: {
    label: "Monthly Profit",
  },
};

export function MonthlyProfitChart({ data }: MonthlyProfitChartProps) {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-green-50/30 dark:from-gray-900 dark:to-green-950/30">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold">
          Monthly Profit & Loss
        </CardTitle>
      </CardHeader>
      <CardContent className="!bg-white dark:!bg-gray-900 hover:!bg-white dark:hover:!bg-gray-900">
        <ChartContainer
          config={chartConfig}
          className="h-[300px] !bg-white dark:!bg-gray-900 hover:!bg-white dark:hover:!bg-gray-900 [&_*]:!bg-white dark:[&_*]:!bg-gray-900 [&_*:hover]:!bg-white dark:[&_*:hover]:!bg-gray-900"
        >
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
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="bg-white dark:bg-gray-800 border border-border shadow-lg rounded-lg p-3 min-w-[180px]"
                  formatter={(value, name) => [
                    `₹${Number(value).toLocaleString()}`,
                    "Monthly Profit",
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
            <Bar dataKey="profit" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.profit >= 0
                      ? "hsl(142, 76%, 36%)"
                      : "hsl(0, 84%, 60%)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
