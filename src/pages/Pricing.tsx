import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import {
  Check,
  TrendingUp,
  BarChart3,
  Brain,
  Rocket,
  Calculator,
  Users,
  Smartphone,
} from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(false);

  const handleBillingToggle = (annual: boolean) => {
    console.log("Switching to:", annual ? "Annual" : "Monthly");
    setIsAnnual(annual);
  };

  const plans = [
    {
      name: "Free",
      monthlyPrice: "₹0",
      annualPrice: "₹0",
      period: "/month",
      annualPeriod: "/year",
      description: "Track the habit. Keep it simple.",
      icon: TrendingUp,
      iconColor: "text-emerald-600",
      cardColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      features: [
        "Manual trade logging",
        "Basic performance dashboard",
        "10 trades/month",
      ],
      buttonText: "Get started",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      monthlyPrice: "₹299",
      annualPrice: "₹2,499",
      period: "/month",
      annualPeriod: "/year",
      annualBilling: "billed annually at ₹2,499",
      description: "For traders who take journaling seriously.",
      icon: BarChart3,
      iconColor: "text-blue-600",
      cardColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      features: [
        "Everything in Free",
        "Unlimited trade logs",
        "Import from Excel",
        "Weekly Highlights",
        "Trade streaks, badges & calendar view",
        "Notes search & filter",
        "Light AI reflections",
        "Custom tags & categories",
        "Mood tracking & analysis",
        "Community access (view-only)",
      ],
      buttonText: "Get started",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Elite",
      monthlyPrice: "₹499",
      annualPrice: "₹3,999",
      period: "/month",
      annualPeriod: "/year",
      annualBilling: "billed annually at ₹3,999",
      description: "Designed for traders who want to optimize, not just log.",
      icon: Rocket,
      iconColor: "text-purple-600",
      cardColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      features: [
        "Everything in Pro",
        "Advanced Analytics (Max Drawdown, Alpha, Profit Factor, R-multiples, Sharpe Ratio)",
        "AI-Powered Trade Intelligence",
        "Mistake pattern detection",
        "Portfolio health score",
        "Risk efficiency scoring",
        "Personalized trade suggestions",
        "Team Journal Access (Invite up to 3 members)",
        "Full Community Access",
        "Mobile App (Early Access)",
        "Priority Support",
        "Early Access to New Features",
      ],
      buttonText: "Get started",
      buttonVariant: "default" as const,
      popular: false,
    },
  ];

  const alternatives = [
    {
      name: "Spreadsheets",
      icon: Calculator,
      price: "₹200",
      color: "bg-red-100 text-red-600",
    },
    {
      name: "Trading Journals",
      icon: BarChart3,
      price: "₹400",
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "Analytics Tools",
      icon: Brain,
      price: "₹500",
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "Community Access",
      icon: Users,
      price: "₹300",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  const totalAlternativePrice = 1400;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Your notes are power.
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our plans unlock it.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            MyStockNote replaces{" "}
            <span className="font-semibold text-gray-800">lots</span> of apps.
            See how our all-in-one solution
            <br />
            compares to using multiple trading tools.
          </p>

          {/* Alternative Apps Comparison */}
          <div className="mb-16">
            <h3 className="text-lg font-semibold text-gray-700 mb-6 text-left max-w-6xl mx-auto">
              With Other Apps
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
              {alternatives.map((alt, index) => (
                <Card
                  key={alt.name}
                  className="p-6 border-0 shadow-sm bg-white/80 backdrop-blur-sm rounded-3xl"
                >
                  <div className="text-center">
                    <div
                      className={`w-12 h-12 rounded-2xl ${alt.color} flex items-center justify-center mx-auto mb-3`}
                    >
                      <alt.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      {alt.name}
                    </h4>
                    <div className="text-2xl font-bold text-gray-900">
                      {alt.price}
                      <span className="text-sm text-gray-500 font-normal">
                        /month
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Total Comparison */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
              <Card className="p-6 bg-white border border-gray-200 shadow-sm rounded-3xl">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">TOTAL</div>
                  <div className="text-4xl font-bold text-gray-900">
                    ₹{totalAlternativePrice}
                  </div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
              </Card>

              <div className="relative">
                <div className="w-24 h-0.5 bg-gray-300"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                  <span className="text-gray-500 text-sm">vs</span>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-yellow-100 to-amber-50 border-0 shadow-lg rounded-3xl">
                <div className="text-center">
                  <div className="text-sm text-gray-700 mb-1">
                    WITH MYSTOCKNOTE
                  </div>
                  <div className="text-4xl font-bold text-gray-900">
                    ₹{isAnnual ? "208" : "299"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {isAnnual ? "per month (billed annually)" : "per month"}
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-1 mb-12 bg-gray-100 p-1 rounded-full max-w-xs mx-auto">
            <button
              onClick={() => handleBillingToggle(true)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                isAnnual
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Bill annually
            </button>
            <button
              onClick={() => handleBillingToggle(false)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                !isAnnual
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Bill monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          id="pricing"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
        >
          {plans.map((plan, index) => (
            <Card
              key={`${plan.name}-${isAnnual}`}
              className={`relative transition-all duration-300 hover:shadow-xl border-0 rounded-3xl overflow-hidden ${
                plan.cardColor
              } ${
                plan.popular
                  ? "ring-2 ring-blue-400 scale-105 shadow-xl"
                  : "shadow-lg hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-blue-600 text-white px-4 py-1.5 text-xs font-medium rounded-full shadow-lg border-2 border-white">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader
                className={`text-center pb-6 ${plan.popular ? "pt-12" : "pt-8"}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-3xl bg-white shadow-lg flex items-center justify-center">
                    <plan.icon className={`w-8 h-8 ${plan.iconColor}`} />
                  </div>
                </div>

                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                  {plan.name}
                </CardTitle>

                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 text-lg">
                    {isAnnual ? plan.annualPeriod : plan.period}
                  </span>
                  {isAnnual && plan.annualBilling && plan.name !== "Free" && (
                    <div className="text-sm text-gray-600 mt-2">
                      {plan.annualBilling}
                    </div>
                  )}
                </div>

                <CardDescription className="text-gray-700 text-base leading-relaxed min-h-[3rem] flex items-center justify-center px-4">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 px-6 pb-8">
                <ul className="space-y-3">
                  {plan.features.slice(0, 6).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.features.length > 6 && (
                    <li className="text-gray-600 text-sm font-medium">
                      + {plan.features.length - 6} more features
                    </li>
                  )}
                </ul>

                <Button
                  variant={plan.buttonVariant}
                  size="lg"
                  onClick={() => navigate("/auth")}
                  className={`w-full mt-6 rounded-full ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                      : ""
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join thousands of traders leveling up
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            MyStockNote is where even the pros reflect.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/auth")}
            className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-4 rounded-full text-lg font-medium shadow-xl"
          >
            Get Started For Free
          </Button>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200/60 pt-12 pb-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-gray-900">MyStockNote</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <button
                onClick={() => navigate("/")}
                className="hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigate("/")}
                className="hover:text-gray-900 transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => navigate("/")}
                className="hover:text-gray-900 transition-colors"
              >
                Contact
              </button>
            </div>

            <div className="text-sm text-gray-500">
              © 2025 MyStockNote. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Pricing;
