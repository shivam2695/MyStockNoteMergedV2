import * as React from "react";
import { cn } from "@/lib/utils";

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    config?: any;
  }
>(({ className, config, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
ChartContainer.displayName = "ChartContainer";

const ChartTooltip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
ChartTooltip.displayName = "ChartTooltip";

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    formatter?: (value: any, name: any) => [string, string];
    labelClassName?: string;
  }
>(({ className, formatter, labelClassName, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border",
      className,
    )}
    {...props}
  />
));
ChartTooltipContent.displayName = "ChartTooltipContent";

export { ChartContainer, ChartTooltip, ChartTooltipContent };
