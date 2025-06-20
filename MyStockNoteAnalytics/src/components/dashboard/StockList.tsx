import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stock } from "@/lib/data";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface StockListProps {
  stocks: Stock[];
  maxItems?: number;
}

export function StockList({ stocks, maxItems = 6 }: StockListProps) {
  const displayStocks = stocks.slice(0, maxItems);

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-profit" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-loss" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return "text-profit";
    if (change < 0) return "text-loss";
    return "text-muted-foreground";
  };

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/30 dark:from-gray-900 dark:to-slate-950/30">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold">Active Stocks</CardTitle>
      </CardHeader>
      <CardContent className="space-y-0">
        {/* Column Headers */}
        <div className="flex items-center justify-between p-3 border-b border-border/50 bg-muted/20">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10"></div> {/* Space for symbol */}
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Stock Details
            </div>
          </div>

          <div className="text-center min-w-[80px]">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              CMP
            </div>
          </div>

          <div className="text-center min-w-[100px]">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Current Value
            </div>
          </div>
        </div>

        {displayStocks.map((stock, index) => (
          <div key={stock.id}>
            <div className="flex items-center justify-between p-4 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {stock.symbolType}
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm">{stock.symbol}</span>
                    <Badge variant="secondary" className="text-xs">
                      {stock.sector}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground truncate max-w-[140px]">
                    {stock.name}
                  </span>
                </div>
              </div>

              <div className="text-right min-w-[80px]">
                <div className="font-semibold text-sm">
                  ₹{stock.currentPrice.toFixed(2)}
                </div>
                <div
                  className={cn(
                    "flex items-center justify-end gap-1 text-xs",
                    getChangeColor(stock.dayChangePercent),
                  )}
                >
                  {getTrendIcon(stock.dayChangePercent)}
                  <span>
                    {stock.dayChangePercent >= 0 ? "+" : ""}
                    {stock.dayChangePercent.toFixed(2)}%
                  </span>
                </div>
              </div>

              <div className="text-right min-w-[100px]">
                <div className="font-semibold text-sm">
                  ₹{stock.totalValue.toLocaleString()}
                </div>
                <div
                  className={cn(
                    "text-xs",
                    getChangeColor(stock.totalReturnPercent),
                  )}
                >
                  {stock.totalReturnPercent >= 0 ? "+" : ""}
                  {stock.totalReturnPercent.toFixed(1)}%
                </div>
              </div>
            </div>
            {index < displayStocks.length - 1 && (
              <div className="border-b border-border/50" />
            )}
          </div>
        ))}

        {stocks.length > maxItems && (
          <div className="text-center pt-2">
            <span className="text-sm text-muted-foreground">
              +{stocks.length - maxItems} more stocks
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
