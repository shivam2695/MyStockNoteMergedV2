import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StockHoldingData } from "@/lib/data";
import { Calendar, Clock, TrendingUp, AlertCircle } from "lucide-react";

interface HoldingAnalyticsProps {
  data: StockHoldingData;
}

export function HoldingAnalytics({ data }: HoldingAnalyticsProps) {
  const getHoldingPeriodColor = (days: number) => {
    if (days < 30) return "bg-red-500";
    if (days < 180) return "bg-yellow-500";
    if (days < 365) return "bg-blue-500";
    return "bg-green-500";
  };

  const getHoldingPeriodLabel = (days: number) => {
    if (days < 30) return "Short Term";
    if (days < 180) return "Medium Term";
    if (days < 365) return "Long Term";
    return "Very Long Term";
  };

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/30">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Holding Duration Analytics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 gap-4">
          {/* Active Stocks Average */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-white/50 dark:bg-gray-800/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
                <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Stock Held Active
                </p>
                <p className="font-semibold">Active Stocks</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600">
                {data.activeStocksAvgDays}
              </p>
              <p className="text-xs text-muted-foreground">Days Average</p>
            </div>
          </div>

          {/* SL Stocks Average */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-white/50 dark:bg-gray-800/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-red-100 dark:bg-red-900">
                <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">SL Stock</p>
                <p className="font-semibold">Stop Loss Hit</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-red-600">
                {data.slStocksAvgDays}
              </p>
              <p className="text-xs text-muted-foreground">Days Average</p>
            </div>
          </div>

          {/* Overall Average */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Average Stock Held Days
                </p>
                <p className="font-semibold">Overall Portfolio</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">
                {data.overallAvgDays}
              </p>
              <p className="text-xs text-muted-foreground">Days Average</p>
            </div>
          </div>
        </div>

        {/* Holding Period Distribution */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-muted-foreground">
            Holding Period Distribution
          </h4>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm">Short Term (&lt; 30 days)</span>
              </div>
              <span className="font-semibold">
                {data.shortTermStocks} stocks
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Medium Term (30-365 days)</span>
              </div>
              <span className="font-semibold">
                {data.mediumTermStocks} stocks
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Long Term (&gt; 365 days)</span>
              </div>
              <span className="font-semibold">
                {data.longTermStocks} stocks
              </span>
            </div>
          </div>
        </div>

        {/* Stock Status Summary */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">
              {data.totalActiveStocks}
            </p>
            <p className="text-xs text-muted-foreground">Active</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">
              {data.totalSlStocks}
            </p>
            <p className="text-xs text-muted-foreground">SL Hit</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">
              {data.totalActiveStocks + data.totalSlStocks}
            </p>
            <p className="text-xs text-muted-foreground">Total</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
