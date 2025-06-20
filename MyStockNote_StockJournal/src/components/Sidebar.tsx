import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BarChart3,
  BookOpen,
  Calendar,
  DollarSign,
  PieChart,
  TrendingUp,
  Wallet,
} from "lucide-react";

export const Sidebar = () => {
  const menuItems = [
    { icon: BarChart3, label: "Overview", active: false },
    { icon: BookOpen, label: "Stock Journal", active: true },
    { icon: PieChart, label: "Portfolio", active: false },
    { icon: TrendingUp, label: "Performance", active: false },
    { icon: Calendar, label: "Calendar", active: false },
    { icon: Wallet, label: "Watchlist", active: false },
  ];

  return (
    <div className="w-72 h-screen bg-sidebar border-r border-sidebar-border p-6 flex flex-col">
      <div className="mb-8">
        <h2 className="text-lg font-bold text-sidebar-foreground flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-blue-600" />
          MyStockNote
        </h2>
        <p className="text-xs text-sidebar-foreground/60 mt-1">
          Your Personal Trading Journal
        </p>
      </div>

      <nav className="space-y-3 mb-8">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "default" : "ghost"}
            className={`w-full justify-start gap-3 h-11 px-4 ${
              item.active
                ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 shadow-sm"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>

      <Separator className="my-6" />

      <Card className="bg-gradient-to-br from-purple-500 to-blue-600 border-0 text-white shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-sm font-semibold mb-2">
            Upgrade to PRO to get access all Features!
          </h3>
          <p className="text-xs opacity-90 mb-4">
            Unlock advanced analytics, unlimited entries, and premium insights.
          </p>
          <Button
            className="w-full bg-white text-purple-600 hover:bg-gray-100 font-semibold shadow-md"
            size="sm"
          >
            Get Pro Now!
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
