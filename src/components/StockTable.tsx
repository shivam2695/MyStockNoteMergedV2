import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Stock } from "@/types/stock";
import { Edit, Trash2, X, ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StockTableProps {
  stocks: Stock[];
  onEdit: (stock: Stock) => void;
  onDelete: (stockId: string) => void;
  onClose: (stockId: string) => void;
  sortBy?: "none" | "status" | "return";
  sortOrder?: "asc" | "desc";
  onSort?: (column: "status" | "return") => void;
}

export const StockTable = ({
  stocks,
  onEdit,
  onDelete,
  onClose,
  sortBy = "none",
  sortOrder = "desc",
  onSort,
}: StockTableProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getReturnColor = (returnValue: number) => {
    if (returnValue > 0) return "text-green-600 dark:text-green-400";
    if (returnValue < 0) return "text-red-600 dark:text-red-400";
    return "text-gray-600 dark:text-gray-400";
  };

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">
              <Button
                variant="ghost"
                className="h-auto p-0 font-semibold hover:bg-transparent"
                onClick={() => onSort?.("status")}
              >
                Status
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="font-semibold">Symbol</TableHead>
            <TableHead className="font-semibold">Type</TableHead>
            <TableHead className="font-semibold text-right">Quantity</TableHead>
            <TableHead className="font-semibold text-right">
              Entry Price
            </TableHead>
            <TableHead className="font-semibold text-right">
              Exit Price
            </TableHead>
            <TableHead className="font-semibold">Entry Date</TableHead>
            <TableHead className="font-semibold text-right">
              <Button
                variant="ghost"
                className="h-auto p-0 font-semibold hover:bg-transparent"
                onClick={() => onSort?.("return")}
              >
                Return
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="font-semibold text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow
              key={stock.id}
              className="hover:bg-muted/30 transition-all duration-200"
            >
              <TableCell className="py-4">
                <Badge
                  variant={stock.status === "Active" ? "default" : "secondary"}
                  className={
                    stock.status === "Active"
                      ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white border-0 shadow-sm px-3 py-1 font-medium"
                      : "bg-gradient-to-r from-slate-400 to-slate-500 text-white border-0 shadow-sm px-3 py-1 font-medium"
                  }
                >
                  {stock.status}
                </Badge>
              </TableCell>
              <TableCell className="font-medium py-4">
                <div className="flex flex-col">
                  <span className="font-semibold text-primary text-base">
                    {stock.symbol}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {stock.companyName}
                  </span>
                </div>
              </TableCell>
              <TableCell className="py-4">
                <Badge
                  variant="outline"
                  className={`text-xs font-medium px-3 py-1 ${
                    stock.type === "Buy"
                      ? "border-blue-200 text-blue-700 bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:bg-blue-950"
                      : "border-orange-200 text-orange-700 bg-orange-50 dark:border-orange-800 dark:text-orange-300 dark:bg-orange-950"
                  }`}
                >
                  {stock.type}
                </Badge>
              </TableCell>
              <TableCell className="text-right font-medium">
                {stock.quantity.toLocaleString("en-IN")}
              </TableCell>
              <TableCell className="text-right font-medium">
                {formatCurrency(stock.entryPrice)}
              </TableCell>
              <TableCell className="text-right font-medium">
                {stock.exitPrice ? formatCurrency(stock.exitPrice) : "-"}
              </TableCell>
              <TableCell>{formatDate(stock.entryDate)}</TableCell>
              <TableCell className="text-right py-4">
                <div className="flex flex-col items-end">
                  <span
                    className={cn(
                      "font-semibold",
                      getReturnColor(stock.return),
                    )}
                  >
                    {formatCurrency(stock.return)}
                  </span>
                  <span className={cn("text-xs", getReturnColor(stock.return))}>
                    ({stock.returnPercentage > 0 ? "+" : ""}
                    {stock.returnPercentage.toFixed(2)}%)
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-1">
                  {stock.status === "Active" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onClose(stock.id)}
                      className="h-8 w-8 p-0 text-orange-600 hover:text-orange-800 hover:bg-orange-100 dark:text-orange-400 dark:hover:text-orange-300 dark:hover:bg-orange-950"
                    >
                      <span className="text-base">🎯</span>
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onEdit(stock)}
                    className="h-8 w-8 p-0 text-blue-600 hover:text-blue-800 hover:bg-blue-100 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-950"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDelete(stock.id)}
                    className="h-8 w-8 p-0 text-red-600 hover:text-red-800 hover:bg-red-100 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-950"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
