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
} from "lucide-react";

const Index = () => {
  const [profileData, setProfileData] = useState({
    fullName: "Alex Rawles",
    email: "alexarawles@gmail.com",
    phone: "",
    displayName: "Alex",
    defaultTradeType: "intraday",
  });

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showOtpStep, setShowOtpStep] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [deleteStep, setDeleteStep] = useState("confirm"); // "confirm", "otp", "goodbye"
  const [isDeleting, setIsDeleting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 relative overflow-hidden">
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
        <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <TrendingUp className="h-8 w-8 text-blue-600" />
                <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                BullNote
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="space-y-6">
            {/* Header Message */}
            <div className="bg-gradient-to-br from-white/95 to-sky-50/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-sky-200/30 animate-fade-in">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-800 bg-clip-text text-transparent mb-2">
                Profile Settings
              </h1>
              <p className="text-lg text-gray-600">
                Your info, your rules. Tweak away.
              </p>
            </div>

            {/* Account Info Section */}
            <Card
              className="border-0 shadow-lg bg-gradient-to-br from-white/95 to-blue-50/90 backdrop-blur-sm border border-sky-200/30 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                  <User className="h-5 w-5 text-blue-600" />
                  Account Info
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  This info won't move the market — but it might move your login
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Picture Section */}
                <div className="flex items-start space-x-6">
                  <div className="relative group">
                    <Avatar className="h-20 w-20 ring-4 ring-blue-100">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-700 text-white text-xl">
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
                  <div className="flex-1 space-y-2">
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Profile Picture
                      </h3>
                      <p className="text-sm text-gray-600">
                        Upload a photo to personalize your account
                      </p>
                    </div>
                    <div className="flex space-x-2">
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

                {/* Personal Information */}
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
                      placeholder="For UI greetings, stats"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
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
                      className="text-sm font-medium text-gray-700"
                    >
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
                </div>
              </CardContent>
            </Card>

            {/* Preferences Section - Moved to Second Position */}
            <Card
              className="border-0 shadow-lg bg-gradient-to-br from-white/95 to-cyan-50/90 backdrop-blur-sm border border-cyan-200/30 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                  <Settings className="h-5 w-5 text-blue-600" />
                  Preferences
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  How you like to work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="tradeType"
                      className="text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <TrendingUp className="h-4 w-4" />
                      📈 Default Trade Type
                    </Label>
                    <Select
                      value={profileData.defaultTradeType}
                      onValueChange={(value) =>
                        handleInputChange("defaultTradeType", value)
                      }
                    >
                      <SelectTrigger className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all">
                        <SelectValue placeholder="Select your preferred trading style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="intraday">
                          <div className="flex items-center space-x-2">
                            <span>Intraday</span>
                            <span className="ml-2 text-xs text-gray-500">
                              Same Day
                            </span>
                          </div>
                        </SelectItem>
                        <SelectItem value="swing">
                          <div className="flex items-center space-x-2">
                            <span>Swing</span>
                            <span className="ml-2 text-xs text-gray-500">
                              Days-Weeks
                            </span>
                          </div>
                        </SelectItem>
                        <SelectItem value="longterm">
                          <div className="flex items-center space-x-2">
                            <span>Long-Term</span>
                            <span className="ml-2 text-xs text-gray-500">
                              Months+
                            </span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Password & Security Section - Moved to Third Position */}
            <Card
              className="border-0 shadow-lg bg-gradient-to-br from-white/95 to-indigo-50/90 backdrop-blur-sm border border-indigo-200/30 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                  <Lock className="h-5 w-5 text-indigo-600" />
                  Password & Security
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Don't let hackers read your bad trades.
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
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-12 hover:bg-blue-50 hover:border-blue-300 transition-all"
                      onClick={() => setShowResetPassword(true)}
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset Password
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
                          We will send an OTP to your registered email address
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
                            className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
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

                {/* Delete Account */}
                <div>
                  <AlertDialog open={isDeleting} onOpenChange={setIsDeleting}>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start h-12 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 hover:border-red-300 transition-all"
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
                              This hurts more than a bad trade.
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
                              Goodbye, trader. We'll miss your emotional
                              entries.
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
                                // In a real app, you would redirect to login page here
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

            {/* Save Changes */}
            <div
              className="flex justify-end space-x-2 pt-4 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-gray-50 transition-all"
              >
                Cancel
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:via-blue-700 hover:to-indigo-700 transition-all shadow-lg transform hover:scale-105"
              >
                Save Changes
              </Button>
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

export default Index;
