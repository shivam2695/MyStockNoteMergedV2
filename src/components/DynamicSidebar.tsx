import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  BookOpen,
  TrendingUp,
  PieChart,
  User,
  Menu,
  X,
  ChevronRight,
  Activity,
  Target,
  Settings,
  LogOut,
} from "lucide-react";

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  description?: string;
}

const sidebarItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: BarChart3,
    path: "/dashboard",
    description: "Overview & Summary",
  },
  {
    id: "journal",
    label: "Stock Journal",
    icon: TrendingUp,
    path: "/journal",
    description: "Trade Logs & Notes",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: PieChart,
    path: "/analytics",
    description: "Performance Insights",
  },
  {
    id: "learn",
    label: "Books & Blogs",
    icon: BookOpen,
    path: "/learn",
    description: "Learning Resources",
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
    path: "/profile",
    description: "Account Settings",
  },
];

const DynamicSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Auto-hide when cursor leaves sidebar area
  useEffect(() => {
    if (!isHovered && isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 1000); // 1 second delay before hiding

      return () => clearTimeout(timer);
    }
  }, [isHovered, isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Toggle Button - Always visible */}
      <button
        onClick={toggleSidebar}
        onMouseEnter={() => setIsHovered(true)}
        className={cn(
          "fixed top-20 left-4 z-50 p-3 bg-white shadow-lg border border-gray-200 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105",
          isOpen ? "bg-blue-600 text-white" : "bg-white text-gray-600",
        )}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full bg-white shadow-2xl z-50 transition-all duration-300 ease-in-out border-r border-gray-200",
          isOpen ? "w-72 translate-x-0" : "w-72 -translate-x-full",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">MyStockNote</h2>
              <p className="text-sm text-gray-600">Trading Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = isActiveRoute(item.path);

            return (
              <button
                key={item.id}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group",
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600",
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isActive
                      ? "text-white"
                      : "text-gray-500 group-hover:text-blue-600",
                  )}
                />
                <div className="flex-1 text-left">
                  <div className="font-medium">{item.label}</div>
                  {item.description && (
                    <div
                      className={cn(
                        "text-xs transition-colors",
                        isActive
                          ? "text-blue-100"
                          : "text-gray-500 group-hover:text-blue-500",
                      )}
                    >
                      {item.description}
                    </div>
                  )}
                </div>
                <ChevronRight
                  className={cn(
                    "w-4 h-4 transition-all",
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1",
                  )}
                />
              </button>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-gray-50/50">
          <div className="space-y-2">
            <button
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-all duration-200 group"
            >
              <LogOut className="w-5 h-5 text-gray-500 group-hover:text-red-600" />
              <span className="font-medium">Back to Home</span>
            </button>
          </div>
        </div>

        {/* Current Status Indicator */}
        <div className="absolute top-24 right-4">
          <div className="flex items-center gap-2 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
            <Activity className="w-3 h-3" />
            <span>Live</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicSidebar;
