import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  BookOpen,
  Target,
  Users,
  BarChart3,
  Bell,
  User,
  Settings,
  ChevronDown,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const navigation = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      current: true,
    },
    {
      name: "Trading Journal",
      icon: BookOpen,
      current: false,
    },
    {
      name: "Focus Stocks",
      icon: Target,
      current: false,
    },
    {
      name: "Teams",
      icon: Users,
      current: false,
    },
    {
      name: "Analytics",
      icon: BarChart3,
      current: false,
    },
    {
      name: "Notifications",
      icon: Bell,
      current: false,
      badge: true,
    },
    {
      name: "Profile",
      icon: User,
      current: false,
    },
    {
      name: "Settings",
      icon: Settings,
      current: false,
    },
  ];

  return (
    <aside className={cn("w-64 bg-white flex flex-col shadow-sm", className)}>
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-xl flex items-center justify-center">
            <BarChart3 className="h-4 w-4 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">StockNote</h1>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.name}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 h-12 rounded-xl text-left font-medium",
                item.current
                  ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                  : "text-gray-600 hover:bg-gray-50",
              )}
            >
              <div
                className={cn(
                  "w-6 h-6 rounded-lg flex items-center justify-center",
                  item.current ? "bg-blue-500 text-white" : "text-gray-400",
                )}
              >
                <Icon className="h-3 w-3" />
              </div>
              <span className="flex-1 text-left">{item.name}</span>
              {item.badge && (
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
              )}
            </Button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4">
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 cursor-pointer transition-all duration-300 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
            <span className="text-sm font-bold text-white">SS</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
              Shivam Singh
            </div>
            <div className="text-xs text-gray-500">Mumbai, India</div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>
      </div>
    </aside>
  );
}
