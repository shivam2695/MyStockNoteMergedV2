import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { SectorAllocation } from "@/lib/data";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface AllocationChartProps {
  data: SectorAllocation[];
}

const COLORS = [
  "hsl(221, 83%, 53%)", // Primary blue
  "hsl(142, 76%, 36%)", // Profit green
  "hsl(38, 92%, 50%)", // Warning orange
  "hsl(271, 91%, 65%)", // Purple
  "hsl(0, 84%, 60%)", // Loss red
  "hsl(199, 89%, 48%)", // Light blue
  "hsl(240, 6%, 50%)", // Neutral gray
];

const chartConfig = {
  value: {
    label: "Value",
  },
};

export function AllocationChart({ data }: AllocationChartProps) {
  const CustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    if (percent < 0.05) return null; // Hide labels for slices smaller than 5%

    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-950/30">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold">
          Portfolio Allocation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <PieChart width="100%" height="100%">
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={CustomLabel}
              outerRadius={60}
              innerRadius={0}
              fill="#8884d8"
              dataKey="value"
              stroke="white"
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name, props) => [
                    `₹${Number(value).toLocaleString()}`,
                    props.payload.sector,
                  ]}
                  labelFormatter={(label, payload) => {
                    if (payload && payload[0]) {
                      return `${payload[0].payload.sector} (${payload[0].payload.count} ${payload[0].payload.count === 1 ? "stock" : "stocks"})`;
                    }
                    return label;
                  }}
                />
              }
            />
          </PieChart>
        </ChartContainer>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          {data.map((item, index) => (
            <div key={item.sector} className="flex items-center gap-2 text-sm">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="font-medium">{item.sector}</span>
              <span className="text-muted-foreground ml-auto">
                {item.percentage.toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
