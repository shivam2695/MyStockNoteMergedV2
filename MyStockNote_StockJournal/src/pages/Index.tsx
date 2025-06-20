import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { StockTable } from "@/components/StockTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  TrendingUp,
  Activity,
  CheckCircle,
  ArrowUpDown,
  Search,
} from "lucide-react";
import { mockStocks, calculateStats } from "@/lib/mockData";
import { Stock } from "@/types/stock";

const Index = () => {
  const [stocks, setStocks] = useState<Stock[]>(mockStocks);
  const [filter, setFilter] = useState<"all" | "active" | "closed">("all");
  const [monthFilter, setMonthFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"none" | "status" | "return">("none");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const stats = calculateStats(stocks);

  // Get unique months and years from the data
  const getMonthsAndYears = () => {
    const months = new Set<string>();
    const years = new Set<string>();
    stocks.forEach((stock) => {
      const date = new Date(stock.entryDate);
      months.add(
        date.toLocaleString("default", { month: "long", year: "numeric" }),
      );
      years.add(date.getFullYear().toString());
    });
    return {
      months: ["All Months", ...Array.from(months).sort()],
      years: ["All Years", ...Array.from(years).sort().reverse()],
    };
  };

  const { months, years } = getMonthsAndYears();

  const filteredStocks = stocks
    .filter((stock) => {
      // Entry type filter
      if (filter === "active") return stock.status === "Active";
      if (filter === "closed") return stock.status === "Closed";

      // Month filter
      if (monthFilter !== "all") {
        const stockMonth = new Date(stock.entryDate).toLocaleString("default", {
          month: "long",
          year: "numeric",
        });
        if (stockMonth !== monthFilter) return false;
      }

      // Year filter
      if (yearFilter !== "all") {
        const stockYear = new Date(stock.entryDate).getFullYear().toString();
        if (stockYear !== yearFilter) return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          stock.symbol.toLowerCase().includes(query) ||
          stock.companyName.toLowerCase().includes(query)
        );
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === "status") {
        const statusOrder = { Active: 1, Closed: 2 };
        const result = statusOrder[a.status] - statusOrder[b.status];
        return sortOrder === "asc" ? result : -result;
      }
      if (sortBy === "return") {
        const result = a.return - b.return;
        return sortOrder === "asc" ? result : -result;
      }
      return 0;
    });

  const handleEdit = (stock: Stock) => {
    console.log("Edit stock:", stock);
    // TODO: Implement edit functionality
  };

  const handleDelete = (stockId: string) => {
    setStocks((prev) => prev.filter((stock) => stock.id !== stockId));
  };

  const handleClose = (stockId: string) => {
    setStocks((prev) =>
      prev.map((stock) =>
        stock.id === stockId
          ? {
              ...stock,
              status: "Closed" as const,
              exitPrice: stock.entryPrice * 1.05, // Mock 5% gain
              exitDate: new Date().toISOString().split("T")[0],
              return: stock.entryPrice * stock.quantity * 0.05, // Mock 5% return
              returnPercentage: 5.0,
            }
          : stock,
      ),
    );
  };

  const handleSort = (column: "status" | "return") => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
    }
  };

  const handleAddNew = () => {
    console.log("Add new stock entry");
    // TODO: Implement add new functionality
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  Stock Journal
                </h1>
                <p className="text-muted-foreground mt-2">
                  ✍️ One place for all your trading moves.
                </p>
              </div>

              {/* Enhanced Stats Cards */}
              <div className="flex gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 dark:from-blue-950 dark:to-blue-900 dark:border-blue-800 rounded-lg px-5 py-3 min-w-[140px]">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-xs font-medium text-blue-700 dark:text-blue-300">
                        Total
                      </p>
                      <p className="text-xl font-bold text-blue-900 dark:text-blue-100">
                        {stats.totalEntries}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-md">
                          <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                            {stats.totalReturnPercentage >= 0 ? "+" : ""}
                            {stats.totalReturnPercentage.toFixed(1)}%
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-blue-600 dark:text-blue-400">
                            ₹
                          </span>
                          <span className="text-xs font-medium text-blue-800 dark:text-blue-200">
                            {Math.abs(stats.totalReturn).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 dark:from-green-950 dark:to-green-900 dark:border-green-800 rounded-lg px-5 py-3 min-w-[140px]">
                  <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <div>
                      <p className="text-xs font-medium text-green-700 dark:text-green-300">
                        Active
                      </p>
                      <p className="text-xl font-bold text-green-900 dark:text-green-100">
                        {stats.activeEntries}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded-md border border-green-200 dark:border-green-800">
                          <span className="text-xs font-semibold text-green-700 dark:text-green-300">
                            {(
                              (stocks
                                .filter((s) => s.status === "Active")
                                .reduce((acc, s) => acc + s.return, 0) /
                                stocks
                                  .filter((s) => s.status === "Active")
                                  .reduce(
                                    (acc, s) => acc + s.entryPrice * s.quantity,
                                    0,
                                  )) *
                              100
                            ).toFixed(1)}
                            %
                          </span>
                        </div>
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 px-2 py-1 rounded-full">
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-green-600 dark:text-green-400">
                              ₹
                            </span>
                            <span className="text-xs font-medium text-green-800 dark:text-green-200">
                              {Math.abs(
                                stocks
                                  .filter((s) => s.status === "Active")
                                  .reduce((acc, s) => acc + s.return, 0),
                              ).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 dark:from-purple-950 dark:to-purple-900 dark:border-purple-800 rounded-lg px-5 py-3 min-w-[140px]">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <div>
                      <p className="text-xs font-medium text-purple-700 dark:text-purple-300">
                        Closed
                      </p>
                      <p className="text-xl font-bold text-purple-900 dark:text-purple-100">
                        {stats.closedEntries}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="relative">
                          <div className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded-lg shadow-sm">
                            <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">
                              {(
                                (stocks
                                  .filter((s) => s.status === "Closed")
                                  .reduce((acc, s) => acc + s.return, 0) /
                                  stocks
                                    .filter((s) => s.status === "Closed")
                                    .reduce(
                                      (acc, s) =>
                                        acc + s.entryPrice * s.quantity,
                                      0,
                                    )) *
                                100
                              ).toFixed(1)}
                              %
                            </span>
                          </div>
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="flex items-center gap-1 bg-white dark:bg-purple-950 px-2 py-1 rounded-md border border-purple-200 dark:border-purple-800 shadow-sm">
                          <span className="text-xs text-purple-600 dark:text-purple-400 font-bold">
                            ₹
                          </span>
                          <span className="text-xs font-semibold text-purple-800 dark:text-purple-200">
                            {Math.abs(
                              stocks
                                .filter((s) => s.status === "Closed")
                                .reduce((acc, s) => acc + s.return, 0),
                            ).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              onClick={handleAddNew}
              className="gap-2 px-6 py-2 h-11 shadow-sm"
            >
              <Plus className="h-4 w-4" />
              Add Entry
            </Button>
          </div>

          {/* Filters and Tabs */}
          <div className="bg-card rounded-xl border border-border shadow-sm">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
                  <button
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                      filter === "all"
                        ? "bg-white text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    All Entries ({stocks.length})
                  </button>
                  <button
                    onClick={() => setFilter("active")}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                      filter === "active"
                        ? "bg-white text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Active Entries (
                    {stocks.filter((s) => s.status === "Active").length})
                  </button>
                  <button
                    onClick={() => setFilter("closed")}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                      filter === "closed"
                        ? "bg-white text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Closed Entries (
                    {stocks.filter((s) => s.status === "Closed").length})
                  </button>
                </div>

                <div className="flex gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search stocks..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-[200px] pl-10"
                    />
                  </div>

                  <Select value={monthFilter} onValueChange={setMonthFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Months</SelectItem>
                      {months.slice(1).map((month) => (
                        <SelectItem key={month} value={month}>
                          {month}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={yearFilter} onValueChange={setYearFilter}>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Filter by Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Years</SelectItem>
                      {years.slice(1).map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="p-6">
              <StockTable
                stocks={filteredStocks}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onClose={handleClose}
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={handleSort}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
