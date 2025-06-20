import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Transaction } from "@/lib/analyticsData";
import {
  ArrowUpRight,
  ArrowDownLeft,
  DollarSign,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TransactionsFeedProps {
  transactions: Transaction[];
  maxItems?: number;
}

export function TransactionsFeed({
  transactions,
  maxItems = 5,
}: TransactionsFeedProps) {
  const displayTransactions = transactions.slice(0, maxItems);

  const getTransactionIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "buy":
        return <ArrowDownLeft className="h-4 w-4 text-blue-600" />;
      case "sell":
        return <ArrowUpRight className="h-4 w-4 text-green-600" />;
      case "dividend":
        return <DollarSign className="h-4 w-4 text-yellow-500" />;
      case "sl_hit":
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default:
        return <DollarSign className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getTransactionBadge = (type: Transaction["type"]) => {
    // Convert all transaction types to Buy/Sell style
    const isBuyType = type === "buy";
    const isSellType =
      type === "sell" || type === "dividend" || type === "sl_hit";

    if (isBuyType) {
      return {
        variant: "secondary" as const,
        label: "BUY",
        className: "bg-blue-100 text-blue-700 border-blue-200",
      };
    } else if (isSellType) {
      return {
        variant: "secondary" as const,
        label: "SELL",
        className: "bg-green-100 text-green-700 border-green-200",
      };
    }

    return {
      variant: "secondary" as const,
      label: "BUY",
      className: "bg-blue-100 text-blue-700 border-blue-200",
    };
  };

  const getAmountColor = (amount: number, type: Transaction["type"]) => {
    if (type === "buy") return "text-red-600";
    if (type === "sell" || type === "dividend") return "text-green-600";
    if (type === "sl_hit") return "text-red-600";
    return amount >= 0 ? "text-green-600" : "text-red-600";
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-orange-50/30 dark:from-gray-900 dark:to-orange-950/30">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-0">
        {/* Column Headers */}
        <div className="flex items-center justify-between p-3 border-b border-border/50 bg-muted/20">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-8"></div> {/* Space for icon */}
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Transaction Details
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Investment
            </div>
          </div>
        </div>

        {displayTransactions.map((transaction, index) => {
          const badge = getTransactionBadge(transaction.type);

          return (
            <div key={transaction.id}>
              <div className="flex items-center justify-between p-3 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-muted/50">
                    {getTransactionIcon(transaction.type)}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        {transaction.symbol}
                      </span>
                      <Badge
                        variant={badge.variant}
                        className={`text-xs ${badge.className}`}
                      >
                        {badge.label}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{formatDate(transaction.date)}</span>
                      <span>•</span>
                      <span>{transaction.time}</span>
                      {transaction.shares && (
                        <>
                          <span>•</span>
                          <span>{transaction.shares} shares</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div
                    className={cn(
                      "font-semibold text-sm",
                      getAmountColor(transaction.amount, transaction.type),
                    )}
                  >
                    {transaction.amount >= 0 ? "+" : ""}₹
                    {Math.abs(transaction.amount).toLocaleString()}
                  </div>
                  {transaction.price && (
                    <div className="text-xs text-muted-foreground">
                      @₹{transaction.price.toFixed(2)}
                    </div>
                  )}
                </div>
              </div>
              {index < displayTransactions.length - 1 && (
                <div className="border-b border-border/50" />
              )}
            </div>
          );
        })}

        {transactions.length > maxItems && (
          <div className="text-center pt-2">
            <span className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
              View all transactions →
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
