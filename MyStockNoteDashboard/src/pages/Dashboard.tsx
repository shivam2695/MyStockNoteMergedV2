import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sidebar } from "@/components/Sidebar";
import { ModernStatCard } from "@/components/ModernStatCard";
import { GrowthMetricCard } from "@/components/GrowthMetricCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Filter,
  Plus,
  TrendingUp,
  TrendingDown,
  MoreHorizontal,
  ArrowUp,
  ArrowDown,
  DollarSign,
  Target,
  Activity,
  Calendar,
  CreditCard,
  Bitcoin,
  PieChart,
  BarChart3,
  Percent,
  Eye,
  Wallet,
} from "lucide-react";

const Dashboard = () => {
  const [selectedMarket, setSelectedMarket] = useState("all");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedPeriod, setSelectedPeriod] = useState("7");

  // StockNote Portfolio Data
  const portfolioStats = [
    {
      symbol: "Portfolio",
      name: "Total Value",
      value: "₹2,07,45,892.34",
      change: "+12.8%",
      trend: "up" as const,
      color: "portfolio" as const,
      icon: DollarSign,
    },
    {
      symbol: "P&L",
      name: "This Month",
      value: "+₹84,432",
      change: "+15.2%",
      trend: "up" as const,
      color: "pnl" as const,
      icon: TrendingUp,
    },
    {
      symbol: "Win Rate",
      name: "Success Rate",
      value: "87.3%",
      change: "+5.4%",
      trend: "up" as const,
      color: "winrate" as const,
      icon: Target,
    },
    {
      symbol: "Trades",
      name: "Current Positions",
      value: "24",
      change: "+8",
      trend: "up" as const,
      color: "trades" as const,
      icon: Activity,
    },
  ];

  const performanceData = [
    { month: "Jan", value: "���45,280", performance: 85 },
    { month: "Feb", value: "₹52,150", performance: 92 },
    { month: "Mar", value: "₹48,900", performance: 78 },
    { month: "Apr", value: "₹61,200", performance: 95 },
    { month: "May", value: "₹58,750", performance: 88 },
    { month: "Jun", value: "₹67,400", performance: 98 },
  ];

  const indianStocks = [
    {
      symbol: "TCS",
      name: "Tata Consultancy Services",
      currentPrice: "3,842",
      potentialPrice: "4,380",
      return: "+14.0%",
      trend: "up",
    },
    {
      symbol: "RELIANCE",
      name: "Reliance Industries",
      currentPrice: "2,847",
      potentialPrice: "3,390",
      return: "+19.1%",
      trend: "up",
    },
    {
      symbol: "HDFC",
      name: "HDFC Bank",
      currentPrice: "1,542",
      potentialPrice: "1,740",
      return: "+12.8%",
      trend: "up",
    },
    {
      symbol: "INFY",
      name: "Infosys Limited",
      currentPrice: "1,670",
      potentialPrice: "1,890",
      return: "+13.2%",
      trend: "up",
    },
  ];

  const underperformers = [
    {
      symbol: "WIPRO",
      name: "Wipro Limited",
      currentPrice: "₹425.30",
      loss: "-₹45.20",
      change: "-9.6%",
      trend: "down",
    },
    {
      symbol: "ZOMATO",
      name: "Zomato Limited",
      currentPrice: "₹178.40",
      loss: "-₹23.60",
      change: "-11.7%",
      trend: "down",
    },
    {
      symbol: "PAYTM",
      name: "One97 Communications",
      currentPrice: "₹312.85",
      loss: "-₹87.15",
      change: "-21.8%",
      trend: "down",
    },
  ];

  const recentTrades = [
    {
      symbol: "AAPL",
      type: "BUY",
      quantity: 10,
      price: "₹12,450",
      time: "2 hours ago",
      status: "Complete",
    },
    {
      symbol: "GOOGL",
      type: "SELL",
      quantity: 5,
      price: "₹8,230",
      time: "5 hours ago",
      status: "Complete",
    },
    {
      symbol: "MSFT",
      type: "BUY",
      quantity: 15,
      price: "₹28,450",
      time: "1 day ago",
      status: "Pending",
    },
    {
      symbol: "TSLA",
      type: "SELL",
      quantity: 8,
      price: "₹15,670",
      time: "2 days ago",
      status: "Complete",
    },
  ];

  const growthMetrics = [
    {
      title: "Avg Profit / Trade",
      value: "₹2,847",
      icon: Percent,
      color: "yellow" as const,
    },
    {
      title: "Avg Loss / Trade",
      value: "₹856",
      icon: TrendingUp,
      color: "blue" as const,
    },
    {
      title: "Profit Factor",
      value: "3.32",
      icon: DollarSign,
      color: "purple" as const,
    },
    {
      title: "Risk per Trade",
      value: "2.1%",
      icon: Eye,
      color: "pink" as const,
    },
    {
      title: "Trade Frequency",
      value: "12/week",
      icon: Wallet,
      color: "orange" as const,
    },
    {
      title: "Average Holding Period",
      value: "4.2 days",
      icon: BarChart3,
      color: "cyan" as const,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Portfolio Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back! Here's your trading overview
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search stocks..."
                  className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>

              <Select value={selectedMarket} onValueChange={setSelectedMarket}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Markets</SelectItem>
                  <SelectItem value="nse">NSE</SelectItem>
                  <SelectItem value="bse">BSE</SelectItem>
                  <SelectItem value="mcx">MCX</SelectItem>
                </SelectContent>
              </Select>

              <Button className="gap-2 bg-blue-500 hover:bg-blue-600">
                <Plus className="h-4 w-4" />
                Add Trade
              </Button>

              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                SS
              </div>
            </div>
          </div>

          {/* Portfolio Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioStats.map((stat, index) => (
              <ModernStatCard key={index} {...stat} />
            ))}
          </div>

          {/* Growth Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {growthMetrics.map((metric, index) => (
              <GrowthMetricCard key={index} {...metric} />
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Performance Overview - Left Side */}
            <div className="xl:col-span-2 space-y-6">
              <Card className="bg-white rounded-2xl border-0 shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        Performance Overview
                      </CardTitle>
                      <p className="text-xs text-gray-500 mt-1">
                        Monthly Trading Performance
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs rounded-full px-2 py-1 h-6"
                      >
                        1W
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs rounded-full px-2 py-1 h-6"
                      >
                        1M
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs rounded-full px-2 py-1 h-6"
                      >
                        6M
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs rounded-full px-2 py-1 h-6"
                      >
                        1Y
                      </Button>
                      <Button
                        size="sm"
                        className="text-xs rounded-full bg-blue-500 hover:bg-blue-600 px-2 py-1 h-6"
                      >
                        YTD
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="text-2xl font-bold text-blue-600">
                      ₹84,432
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">Profit</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-600">Loss</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {performanceData.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-1"
                      >
                        <span className="text-xs font-medium text-gray-600 w-6">
                          {item.month}
                        </span>
                        <div className="flex-1 mx-3">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${item.performance}%` }}
                            />
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-medium text-gray-900">
                            {item.value}
                          </span>
                          <div className="text-xs flex items-center gap-1 text-blue-600">
                            <ArrowUp className="h-2 w-2" />
                            {item.performance}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Trades */}
              <Card className="bg-white rounded-2xl border-0 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold">
                    Recent Trades
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {recentTrades.slice(0, 4).map((trade, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                              trade.symbol === "AAPL"
                                ? "bg-gray-100"
                                : trade.symbol === "GOOGL"
                                  ? "bg-blue-100"
                                  : trade.symbol === "MSFT"
                                    ? "bg-green-100"
                                    : "bg-red-100"
                            }`}
                          >
                            <span
                              className={`text-xs font-semibold ${
                                trade.symbol === "AAPL"
                                  ? "text-gray-700"
                                  : trade.symbol === "GOOGL"
                                    ? "text-blue-700"
                                    : trade.symbol === "MSFT"
                                      ? "text-green-700"
                                      : "text-red-700"
                              }`}
                            >
                              {trade.symbol.slice(0, 2)}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium">
                              {trade.symbol}
                            </div>
                            <div className="text-xs text-gray-500">
                              {trade.time}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">
                            {trade.price}
                          </div>
                          <div
                            className={`text-xs px-2 py-1 rounded ${
                              trade.status === "Complete"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {trade.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                      View more →
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="xl:col-span-2 space-y-6">
              {/* Top Performers */}
              <Card className="bg-white rounded-2xl border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-3">
                  <CardTitle className="text-lg font-semibold">
                    Top Performers
                  </CardTitle>
                  <Button
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 rounded-full h-6 w-6 p-0"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-semibold">
                          TCS
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            Tata Consultancy
                          </div>
                          <div className="text-xs text-gray-500">₹3,842.50</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-blue-600">
                          +₹8,450
                        </div>
                        <div className="text-xs text-blue-600 flex items-center gap-1">
                          <ArrowUp className="h-2 w-2" />
                          +12.4%
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 bg-indigo-50 rounded-lg border border-indigo-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white text-xs font-semibold">
                          REL
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            Reliance Industries
                          </div>
                          <div className="text-xs text-gray-500">₹2,847.30</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-indigo-600">
                          +₹5,230
                        </div>
                        <div className="text-xs text-indigo-600 flex items-center gap-1">
                          <ArrowUp className="h-2 w-2" />
                          +8.7%
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 bg-purple-50 rounded-lg border border-purple-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-semibold">
                          HDFC
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            HDFC Bank
                          </div>
                          <div className="text-xs text-gray-500">₹1,542.65</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-purple-600">
                          +₹3,120
                        </div>
                        <div className="text-xs text-purple-600 flex items-center gap-1">
                          <ArrowUp className="h-2 w-2" />
                          +6.2%
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Indian Stocks */}
              <Card className="bg-white rounded-2xl border-0 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold">
                    Indian Stocks
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {indianStocks.map((stock, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-semibold ${
                              stock.symbol === "TCS"
                                ? "bg-blue-600"
                                : stock.symbol === "RELIANCE"
                                  ? "bg-orange-500"
                                  : stock.symbol === "HDFC"
                                    ? "bg-red-500"
                                    : "bg-purple-500"
                            }`}
                          >
                            {stock.symbol.slice(0, 2)}
                          </div>
                          <div>
                            <div className="text-sm font-medium">
                              {stock.symbol}
                            </div>
                            <div className="text-xs text-gray-500">
                              {stock.name}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-700 font-medium">
                            ₹{stock.currentPrice} → ₹{stock.potentialPrice}
                          </div>
                          <div className="text-xs text-green-600 font-medium">
                            Potential Profit: {stock.return}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                      View more →
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Underperformers */}
              <Card className="bg-white rounded-2xl border-0 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold">
                    Underperformers
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {underperformers.map((stock, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-semibold ${
                              stock.symbol === "WIPRO"
                                ? "bg-red-500"
                                : stock.symbol === "ZOMATO"
                                  ? "bg-orange-500"
                                  : "bg-gray-500"
                            }`}
                          >
                            {stock.symbol.slice(0, 2)}
                          </div>
                          <div>
                            <div className="text-sm font-medium">
                              {stock.symbol}
                            </div>
                            <div className="text-xs text-gray-500">
                              {stock.name}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">
                            {stock.currentPrice}
                          </div>
                          <div className="text-xs text-red-600 font-medium flex items-center gap-1">
                            <ArrowDown className="h-2 w-2" />
                            {stock.change}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                      View Complete Journal →
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Trading Analytics */}
              <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl border-0">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Analytics Insights</h3>
                    <p className="text-sm opacity-90 mb-4">
                      View detailed performance analytics and trading patterns.
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white text-blue-600 hover:bg-gray-100"
                    >
                      View Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
