import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnalyticsStock } from "@/lib/analyticsData";
import { Trophy, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopPerformingStocksProps {
  stocks: AnalyticsStock[];
  maxItems?: number;
}

export function TopPerformingStocks({
  stocks,
  maxItems = 3,
}: TopPerformingStocksProps) {
  // Sort stocks by total return percentage and take top performers
  const topStocks = stocks
    .filter((stock) => stock.status === "active")
    .sort((a, b) => b.totalReturnPercent - a.totalReturnPercent)
    .slice(0, maxItems);

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 0:
        return "text-yellow-600 bg-yellow-100 border-yellow-200";
      case 1:
        return "text-gray-600 bg-gray-100 border-gray-200";
      case 2:
        return "text-orange-600 bg-orange-100 border-orange-200";
      default:
        return "text-blue-600 bg-blue-100 border-blue-200";
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 0:
        return "🥇";
      case 1:
        return "🥈";
      case 2:
        return "🥉";
      default:
        return `#${rank + 1}`;
    }
  };

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-yellow-50/30 dark:from-gray-900 dark:to-yellow-950/30">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Trophy className="h-4 w-4" />
          Top Performers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-0">
        {/* Column Headers */}
        <div className="flex items-center justify-between p-3 border-b border-border/50 bg-muted/20">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-8"></div> {/* Space for rank */}
            <div className="w-8"></div> {/* Space for symbol */}
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Top Stocks
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Return
            </div>
          </div>
        </div>

        {topStocks.map((stock, index) => (
          <div key={stock.id}>
            <div className="flex items-center justify-between p-3 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
              {/* Rank Badge & Stock Info */}
              <div className="flex items-center gap-3 flex-1">
                <div
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold border",
                    getRankColor(index),
                  )}
                >
                  {getRankIcon(index)}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-xs">
                    {stock.symbolType}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">
                      {stock.symbol}
                    </span>
                    <span className="text-xs text-muted-foreground truncate max-w-[80px]">
                      {stock.name.split(" ")[0]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Performance */}
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    <span className="text-sm font-semibold text-green-600">
                      +{stock.totalReturnPercent.toFixed(1)}%
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    ₹{(stock.totalReturn / 1000).toFixed(0)}k gain
                  </div>
                </div>
              </div>
            </div>
            {index < topStocks.length - 1 && (
              <div className="border-b border-border/50" />
            )}
          </div>
        ))}

        {/* Summary Footer */}
        <div className="pt-3 mt-3 border-t border-border/50">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Portfolio Leaders</span>
            <span className="font-medium">
              Avg: +
              {(
                topStocks.reduce(
                  (sum, stock) => sum + stock.totalReturnPercent,
                  0,
                ) / topStocks.length
              ).toFixed(1)}
              %
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
