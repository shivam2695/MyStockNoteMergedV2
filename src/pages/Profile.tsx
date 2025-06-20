import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DynamicSidebar from "@/components/DynamicSidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  Camera,
  Lock,
  Trash2,
  TrendingUp,
  Settings,
  User,
  Eye,
  EyeOff,
  Upload,
  Key,
  RotateCcw,
  Sparkles,
  Bell,
  Mail,
  Phone,
  Globe,
  Shield,
  Download,
  Activity,
  CreditCard,
  FileText,
  HelpCircle,
  LogOut,
  ChevronRight,
  Calendar,
  DollarSign,
  BarChart3,
  Zap,
  Crown,
  Star,
  Search,
} from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    fullName: "Alex Rawles",
    email: "alexarawles@gmail.com",
    phone: "+91 98765 43210",
    displayName: "Alex",
    defaultTradeType: "intraday",
    country: "in",
    language: "en",
    timeZone: "ist",
    currency: "inr",
    dateFormat: "dd/mm/yyyy",
    theme: "light",
  });

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showOtpStep, setShowOtpStep] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [deleteStep, setDeleteStep] = useState("confirm");
  const [isDeleting, setIsDeleting] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    tradeAlerts: true,
    marketNews: false,
    weeklyReports: true,
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field: string, value: boolean) => {
    setNotificationSettings((prev) => ({ ...prev, [field]: value }));
  };

  const statsData = [
    {
      label: "Total Trades",
      value: "1,247",
      icon: BarChart3,
      color: "text-blue-600",
    },
    {
      label: "Total Return",
      value: "₹3,25,430",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      label: "Win Rate",
      value: "68.5%",
      icon: TrendingUp,
      color: "text-emerald-600",
    },
    {
      label: "Active Days",
      value: "186",
      icon: Calendar,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <DynamicSidebar />
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full animate-pulse"></div>
        <div
          className="absolute top-20 -left-32 w-64 h-64 bg-gradient-to-br from-sky-300/8 to-indigo-300/8 rounded-full animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-t from-blue-300/12 to-purple-300/12 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-bl from-cyan-200/6 to-sky-200/6 rounded-full animate-ping"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        ></div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-blue-50/90 to-sky-50/95 backdrop-blur-sm border-b border-sky-200/30 shadow-lg">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  MyStockNote
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Welcome, {profileData.displayName}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </button>
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="hover:bg-blue-100"
            >
              Dashboard
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="hover:bg-blue-100"
            >
              Home
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback className="bg-blue-600 text-white text-sm">
                AR
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Quick Stats and Navigation */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Summary Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white/95 to-blue-50/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="h-20 w-20 ring-4 ring-blue-100 mx-auto">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-700 text-white text-xl">
                      AR
                    </AvatarFallback>
                  </Avatar>
                  <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                    <Crown className="h-3 w-3 mr-1" />
                    Pro
                  </Badge>
                </div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {profileData.fullName}
                </h3>
                <p className="text-gray-600 text-sm">{profileData.email}</p>
                <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
                  <Calendar className="h-3 w-3 mr-1" />
                  Joined Dec 2023
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white/95 to-green-50/90 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-gray-800 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {statsData.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                      <span className="text-sm font-medium text-gray-700">
                        {stat.label}
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white/95 to-purple-50/90 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-gray-800">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-purple-100"
                  onClick={() => navigate("/journal")}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  View Journal
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-purple-100"
                  onClick={() => navigate("/pricing")}
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Billing
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-purple-100"
                  onClick={() => navigate("/learn")}
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help Center
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Header Message */}
            <div className="bg-gradient-to-br from-white/95 to-sky-50/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-sky-200/30 animate-fade-in">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-800 bg-clip-text text-transparent mb-2">
                Profile Settings
              </h1>
              <p className="text-lg text-gray-600">
                Your info, your rules. Tweak away and make it yours! ⚙️
              </p>
            </div>

            {/* Account Information Section */}
            <Card
              className="border-0 shadow-lg bg-gradient-to-br from-white/95 to-blue-50/90 backdrop-blur-sm border border-sky-200/30 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                  <User className="h-5 w-5 text-blue-600" />
                  Account Information
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  This info won't move the market — but it might move your login
                  experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Picture Section */}
                <div className="flex items-start space-x-6">
                  <div className="relative group">
                    <Avatar className="h-24 w-24 ring-4 ring-blue-100">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-700 text-white text-2xl">
                        AR
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0 bg-white border-2 border-white shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all transform hover:scale-110"
                    >
                      <Camera className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">
                        Profile Picture
                      </h3>
                      <p className="text-sm text-gray-600">
                        Upload a photo to personalize your account and make
                        those trade wins even sweeter
                      </p>
                    </div>
                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-blue-50 hover:border-blue-300 transition-all"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Photo
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 transition-all"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Personal Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="fullName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      value={profileData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="displayName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Display Name
                    </Label>
                    <Input
                      id="displayName"
                      value={profileData.displayName}
                      onChange={(e) =>
                        handleInputChange("displayName", e.target.value)
                      }
                      className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
                      placeholder="For UI greetings and stats"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      Phone Number{" "}
                      <span className="text-gray-400">(optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="country"
                      className="text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <Globe className="h-4 w-4" />
                      Country
                    </Label>
                    <Select
                      value={profileData.country}
                      onValueChange={(value) =>
                        handleInputChange("country", value)
                      }
                    >
                      <SelectTrigger className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in">🇮🇳 India</SelectItem>
                        <SelectItem value="us">🇺🇸 United States</SelectItem>
                        <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
                        <SelectItem value="ca">🇨���� Canada</SelectItem>
                        <SelectItem value="de">🇩🇪 Germany</SelectItem>
                        <SelectItem value="fr">🇫🇷 France</SelectItem>
                        <SelectItem value="other">🌍 Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="language"
                      className="text-sm font-medium text-gray-700"
                    >
                      Language
                    </Label>
                    <Select
                      value={profileData.language}
                      onValueChange={(value) =>
                        handleInputChange("language", value)
                      }
                    >
                      <SelectTrigger className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                        <SelectItem value="zh">中文</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trading Preferences Section */}
            <Card
              className="border-0 shadow-lg bg-gradient-to-br from-white/95 to-cyan-50/90 backdrop-blur-sm border border-cyan-200/30 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                  <TrendingUp className="h-5 w-5 text-cyan-600" />
                  Trading Preferences
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Customize your trading experience and default settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="tradeType"
                      className="text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <BarChart3 className="h-4 w-4" />
                      Default Trade Type
                    </Label>
                    <Select
                      value={profileData.defaultTradeType}
                      onValueChange={(value) =>
                        handleInputChange("defaultTradeType", value)
                      }
                    >
                      <SelectTrigger className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Select your preferred trading style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="intraday">
                          <div className="flex items-center space-x-2">
                            <Zap className="h-4 w-4 text-yellow-500" />
                            <span>Intraday</span>
                            <span className="ml-2 text-xs text-gray-500">
                              Same Day
                            </span>
                          </div>
                        </SelectItem>
                        <SelectItem value="swing">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-blue-500" />
                            <span>Swing Trading</span>
                            <span className="ml-2 text-xs text-gray-500">
                              Days-Weeks
                            </span>
                          </div>
                        </SelectItem>
                        <SelectItem value="longterm">
                          <div className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-green-500" />
                            <span>Long-Term Investment</span>
                            <span className="ml-2 text-xs text-gray-500">
                              Months+
                            </span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="currency"
                      className="text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <DollarSign className="h-4 w-4" />
                      Currency
                    </Label>
                    <Select
                      value={profileData.currency}
                      onValueChange={(value) =>
                        handleInputChange("currency", value)
                      }
                    >
                      <SelectTrigger className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inr">
                          ₹ Indian Rupee (INR)
                        </SelectItem>
                        <SelectItem value="usd">$ US Dollar (USD)</SelectItem>
                        <SelectItem value="eur">€ Euro (EUR)</SelectItem>
                        <SelectItem value="gbp">
                          £ British Pound (GBP)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="timeZone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Time Zone
                    </Label>
                    <Select
                      value={profileData.timeZone}
                      onValueChange={(value) =>
                        handleInputChange("timeZone", value)
                      }
                    >
                      <SelectTrigger className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ist">
                          India Standard Time (IST)
                        </SelectItem>
                        <SelectItem value="est">Eastern Time (EST)</SelectItem>
                        <SelectItem value="cst">Central Time (CST)</SelectItem>
                        <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                        <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                        <SelectItem value="utc">UTC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="dateFormat"
                      className="text-sm font-medium text-gray-700"
                    >
                      Date Format
                    </Label>
                    <Select
                      value={profileData.dateFormat}
                      onValueChange={(value) =>
                        handleInputChange("dateFormat", value)
                      }
                    >
                      <SelectTrigger className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications Section */}
            <Card
              className="border-0 shadow-lg bg-gradient-to-br from-white/95 to-green-50/90 backdrop-blur-sm border border-green-200/30 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                  <Bell className="h-5 w-5 text-green-600" />
                  Notification Settings
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Control when and how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(notificationSettings).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded">
                        {key === "emailNotifications" && (
                          <Mail className="h-4 w-4 text-blue-600" />
                        )}
                        {key === "pushNotifications" && (
                          <Bell className="h-4 w-4 text-blue-600" />
                        )}
                        {key === "tradeAlerts" && (
                          <TrendingUp className="h-4 w-4 text-blue-600" />
                        )}
                        {key === "marketNews" && (
                          <Activity className="h-4 w-4 text-blue-600" />
                        )}
                        {key === "weeklyReports" && (
                          <FileText className="h-4 w-4 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {key === "emailNotifications" &&
                            "Email Notifications"}
                          {key === "pushNotifications" && "Push Notifications"}
                          {key === "tradeAlerts" && "Trade Alerts"}
                          {key === "marketNews" && "Market News"}
                          {key === "weeklyReports" && "Weekly Reports"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {key === "emailNotifications" &&
                            "Receive notifications via email"}
                          {key === "pushNotifications" &&
                            "Browser push notifications"}
                          {key === "tradeAlerts" &&
                            "Alerts for trade opportunities"}
                          {key === "marketNews" && "Daily market updates"}
                          {key === "weeklyReports" &&
                            "Performance summary emails"}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant={value ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleNotificationChange(key, !value)}
                      className={value ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      {value ? "On" : "Off"}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Security Section */}
            <Card
              className="border-0 shadow-lg bg-gradient-to-br from-white/95 to-indigo-50/90 backdrop-blur-sm border border-indigo-200/30 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                  <Shield className="h-5 w-5 text-indigo-600" />
                  Security & Privacy
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Don't let hackers read your emotional trade entries
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!showChangePassword && !showResetPassword ? (
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start h-12 hover:bg-blue-50 hover:border-blue-300 transition-all"
                      onClick={() => setShowChangePassword(true)}
                    >
                      <Key className="h-4 w-4 mr-2" />
                      Change Password
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-12 hover:bg-blue-50 hover:border-blue-300 transition-all"
                      onClick={() => setShowResetPassword(true)}
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset Password
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-12 hover:bg-green-50 hover:border-green-300 transition-all"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Export Account Data
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    </Button>
                  </div>
                ) : showChangePassword ? (
                  <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-800">
                        Change Password
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowChangePassword(false)}
                        className="hover:bg-blue-100"
                      >
                        Cancel
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label
                          htmlFor="currentPassword"
                          className="text-sm font-medium text-gray-700"
                        >
                          Current Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="currentPassword"
                            type={showCurrentPassword ? "text" : "password"}
                            className="h-11 pr-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter current password"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-11 px-3 py-2 hover:bg-transparent"
                            onClick={() =>
                              setShowCurrentPassword(!showCurrentPassword)
                            }
                          >
                            {showCurrentPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="newPassword"
                          className="text-sm font-medium text-gray-700"
                        >
                          New Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="newPassword"
                            type={showNewPassword ? "text" : "password"}
                            className="h-11 pr-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter new password"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-11 px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            {showNewPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="confirmPassword"
                          className="text-sm font-medium text-gray-700"
                        >
                          Confirm New Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            className="h-11 pr-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Confirm new password"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-11 px-3 py-2 hover:bg-transparent"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </Button>
                        </div>
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg"
                        >
                          Update Password
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-800">
                        Reset Password
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setShowResetPassword(false);
                          setShowOtpStep(false);
                        }}
                        className="hover:bg-blue-100"
                      >
                        Cancel
                      </Button>
                    </div>

                    {!showOtpStep ? (
                      <div className="space-y-3">
                        <p className="text-sm text-gray-600">
                          We will send an OTP to your registered email address:{" "}
                          {profileData.email}
                        </p>
                        <div className="flex space-x-2 pt-2">
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg"
                            onClick={() => setShowOtpStep(true)}
                          >
                            Send OTP
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label
                            htmlFor="otpCode"
                            className="text-sm font-medium text-gray-700"
                          >
                            Enter OTP
                          </Label>
                          <Input
                            id="otpCode"
                            type="text"
                            className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-center text-lg tracking-widest"
                            placeholder="Enter 6-digit OTP"
                            maxLength={6}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="newPasswordReset"
                            className="text-sm font-medium text-gray-700"
                          >
                            New Password
                          </Label>
                          <div className="relative">
                            <Input
                              id="newPasswordReset"
                              type={showNewPassword ? "text" : "password"}
                              className="h-11 pr-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              placeholder="Enter new password"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-11 px-3 py-2 hover:bg-transparent"
                              onClick={() =>
                                setShowNewPassword(!showNewPassword)
                              }
                            >
                              {showNewPassword ? (
                                <EyeOff className="h-4 w-4 text-gray-400" />
                              ) : (
                                <Eye className="h-4 w-4 text-gray-400" />
                              )}
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="confirmPasswordReset"
                            className="text-sm font-medium text-gray-700"
                          >
                            Confirm Password
                          </Label>
                          <div className="relative">
                            <Input
                              id="confirmPasswordReset"
                              type={showConfirmPassword ? "text" : "password"}
                              className="h-11 pr-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              placeholder="Confirm new password"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-11 px-3 py-2 hover:bg-transparent"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="h-4 w-4 text-gray-400" />
                              ) : (
                                <Eye className="h-4 w-4 text-gray-400" />
                              )}
                            </Button>
                          </div>
                        </div>
                        <div className="flex space-x-2 pt-2">
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg"
                          >
                            Reset Password
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <Separator className="my-4" />

                {/* Danger Zone */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-medium text-red-800 mb-2 flex items-center gap-2">
                    <Trash2 className="h-4 w-4" />
                    Danger Zone
                  </h4>
                  <p className="text-sm text-red-600 mb-3">
                    Once you delete your account, there is no going back. Please
                    be certain.
                  </p>
                  <AlertDialog open={isDeleting} onOpenChange={setIsDeleting}>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="text-red-600 border-red-300 hover:bg-red-50 hover:text-red-700 hover:border-red-400 transition-all"
                        onClick={() => {
                          setDeleteStep("confirm");
                          setIsDeleting(true);
                        }}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Account
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-gradient-to-br from-white/95 to-red-50/90 backdrop-blur-sm border border-red-200/50">
                      {deleteStep === "confirm" && (
                        <>
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-center text-xl">
                              Wait… you're really leaving us? 🥺
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-center text-base pt-2">
                              This hurts more than a bad trade. All your data
                              will be permanently deleted.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                            <AlertDialogCancel
                              onClick={() => {
                                setIsDeleting(false);
                                setDeleteStep("confirm");
                              }}
                              className="w-full sm:w-auto"
                            >
                              Stay with us 💙
                            </AlertDialogCancel>
                            <AlertDialogAction
                              className="bg-red-600 hover:bg-red-700 w-full sm:w-auto"
                              onClick={() => setDeleteStep("otp")}
                            >
                              Yes, I'm really leaving
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </>
                      )}

                      {deleteStep === "otp" && (
                        <>
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-center">
                              One Last Step
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-center">
                              We've sent an OTP to your registered email address
                              for final confirmation
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="space-y-2">
                              <Label
                                htmlFor="deleteOtp"
                                className="text-sm font-medium"
                              >
                                Enter OTP
                              </Label>
                              <Input
                                id="deleteOtp"
                                type="text"
                                placeholder="Enter 6-digit OTP"
                                maxLength={6}
                                className="text-center text-lg tracking-widest"
                              />
                            </div>
                          </div>
                          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                            <AlertDialogCancel
                              onClick={() => {
                                setIsDeleting(false);
                                setDeleteStep("confirm");
                              }}
                              className="w-full sm:w-auto"
                            >
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              className="bg-red-600 hover:bg-red-700 w-full sm:w-auto"
                              onClick={() => setDeleteStep("goodbye")}
                            >
                              Confirm Deletion
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </>
                      )}

                      {deleteStep === "goodbye" && (
                        <>
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-center text-xl">
                              Account Deleted 💔
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-center text-base pt-2">
                              Goodbye, trader. We'll miss your emotional entries
                              and profit celebrations.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <div className="flex justify-center py-6">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                              <span className="text-2xl">😢</span>
                            </div>
                          </div>
                          <AlertDialogFooter className="flex justify-center">
                            <AlertDialogAction
                              className="bg-gray-600 hover:bg-gray-700"
                              onClick={() => {
                                setIsDeleting(false);
                                setDeleteStep("confirm");
                                navigate("/");
                              }}
                            >
                              Close
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </>
                      )}
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>

            {/* Save Changes Section */}
            <div
              className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-6 animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  onClick={() => navigate("/")}
                  className="hover:bg-gray-100 transition-all"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-gray-50 transition-all"
                  onClick={() => window.location.reload()}
                >
                  Reset Changes
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:via-blue-700 hover:to-indigo-700 transition-all shadow-lg transform hover:scale-105"
                >
                  Save All Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default Profile;
