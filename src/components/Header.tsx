import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { TrendingUp } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-white via-slate-50 to-blue-50 border-b border-slate-100 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-slate-900">
                MyStockNote
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate("/learn")}
              className={`font-medium transition-colors ${
                location.pathname === "/learn"
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Learn
            </button>
            <button
              onClick={() => navigate("/journal")}
              className={`font-medium transition-colors ${
                location.pathname === "/journal"
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Journal
            </button>
            <button
              onClick={() => navigate("/analytics")}
              className={`font-medium transition-colors ${
                location.pathname === "/analytics"
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => navigate("/pricing")}
              className={`font-medium transition-colors ${
                location.pathname === "/pricing"
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Pricing
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/auth")}
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/auth")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6"
            >
              Get Started →
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
