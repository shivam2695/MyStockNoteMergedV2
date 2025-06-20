import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, TrendingUp, BarChart3, Shield, Zap } from "lucide-react";

interface FormData {
  email: string;
  password: string;
  confirmPassword?: string;
  fullName?: string;
}

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle authentication logic here
  };

  return (
    <div className="h-screen flex">
      {/* Left Panel - Blue Gradient */}
      <div className="hidden lg:flex lg:w-1/2 stocknote-gradient relative overflow-hidden h-screen">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Decorative Blurs */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

          {/* Bouncing Financial Symbols */}
          <div className="absolute top-1/4 right-1/4 text-white/20 text-4xl font-bold animate-bounce">
            ₹
          </div>

          <div className="absolute bottom-1/3 right-1/3 text-white/25 text-3xl font-bold animate-bounce delay-300">
            $
          </div>

          <div className="absolute top-1/2 right-1/5 text-white/30 animate-bounce delay-700">
            <BarChart3 className="w-8 h-8" />
          </div>

          <div className="absolute top-1/3 right-1/2 text-white/20 animate-bounce delay-500">
            <TrendingUp className="w-6 h-6" />
          </div>

          <div className="absolute bottom-1/4 right-1/4 text-white/25 text-2xl font-bold animate-bounce delay-1000">
            %
          </div>

          <div className="absolute top-20 right-1/3 text-white/15 animate-bounce delay-200">
            <Shield className="w-5 h-5" />
          </div>

          <div className="absolute bottom-20 right-1/5 text-white/20 text-xl font-bold animate-bounce delay-800">
            +
          </div>

          {/* Abstract Grid */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-white/10"
                  style={{ animationDelay: `${i * 50}ms` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center p-12 text-white">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold">StockNote</span>
          </div>

          {/* Main Content */}
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Your edge isn't luck. It's data. It's StockNote.
            </h1>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Just write down what happened. No pressure — just a space to see
              what's working and what's not. You'll thank yourself later.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span className="text-white/90">
                  Advanced Analytics Dashboard
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-white/90">
                  Performance & P&L Insights
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-white/90">Journal Sync with Teams</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - White Card */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-6 h-screen overflow-y-auto">
        <Card className="w-full max-w-md bg-white shadow-xl border-0">
          <CardContent className="p-8">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-8 stocknote-gradient rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">StockNote</span>
            </div>

            {/* Toggle Buttons */}
            <div className="flex mb-8 p-1 bg-gray-100 rounded-xl sticky top-0 z-50">
              <Button
                onClick={() => setIsLogin(true)}
                className={cn(
                  "flex-1 rounded-lg transition-all duration-300 text-sm font-medium",
                  isLogin
                    ? "bg-white text-gray-900 shadow-sm"
                    : "bg-transparent text-gray-600 hover:text-gray-900",
                )}
                variant="ghost"
              >
                Sign In
              </Button>
              <Button
                onClick={() => setIsLogin(false)}
                className={cn(
                  "flex-1 rounded-lg transition-all duration-300 text-sm font-medium",
                  !isLogin
                    ? "bg-white text-gray-900 shadow-sm"
                    : "bg-transparent text-gray-600 hover:text-gray-900",
                )}
                variant="ghost"
              >
                Sign Up
              </Button>
            </div>

            {/* Form */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {isLogin ? "Welcome back" : "Create your account"}
              </h2>
              <p className="text-gray-600 text-sm">
                {isLogin
                  ? "Sign in to access your trading dashboard"
                  : "Start your personal trading journey today"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="min-h-0">
                {/* Full Name - Sign Up Only */}
                {!isLogin && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName || ""}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="h-11 border-gray-200 focus:border-stocknote-blue focus:ring-stocknote-blue/20"
                      required={!isLogin}
                    />
                  </div>
                )}

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-11 border-gray-200 focus:border-stocknote-blue focus:ring-stocknote-blue/20"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      className="h-11 border-gray-200 focus:border-stocknote-blue focus:ring-stocknote-blue/20 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 p-0 bg-transparent hover:bg-gray-100 text-gray-500"
                      variant="ghost"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                  </div>
                </div>

                {/* Confirm Password - Sign Up Only */}
                {!isLogin && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword || ""}
                        onChange={(e) =>
                          handleInputChange("confirmPassword", e.target.value)
                        }
                        className="h-11 border-gray-200 focus:border-stocknote-blue focus:ring-stocknote-blue/20 pr-10"
                        required={!isLogin}
                      />
                      <Button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 p-0 bg-transparent hover:bg-gray-100 text-gray-500"
                        variant="ghost"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Forgot Password - Login Only */}
                {isLogin && (
                  <div className="text-right">
                    <Button
                      type="button"
                      variant="link"
                      className="text-stocknote-blue hover:text-stocknote-blue-dark p-0 h-auto font-medium text-sm"
                    >
                      Forgot password?
                    </Button>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-11 stocknote-gradient text-white font-medium hover:opacity-90 transition-opacity"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                </Button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      or continue with
                    </span>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-11 border-gray-200 hover:bg-gray-50"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-11 border-gray-200 hover:bg-gray-50"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Button>
                </div>

                {/* Terms */}
                {!isLogin && (
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By creating an account, you agree to our{" "}
                    <button className="text-stocknote-blue hover:underline">
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button className="text-stocknote-blue hover:underline">
                      Privacy Policy
                    </button>
                  </p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
