import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Bell, Grid3X3, Mail } from "lucide-react";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullName: "Your First Name",
    nickName: "Your First Name",
    gender: "",
    country: "",
    language: "",
    timeZone: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <div className="bg-white px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Welcome, Amanda
            </h1>
            <p className="text-sm text-gray-500 mt-1">Tue 07 June 2022</p>
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
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Bell className="h-5 w-5" />
            </button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback className="bg-blue-600 text-white text-sm">
                A
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Sidebar and Main Content */}
      <div className="flex max-w-6xl mx-auto">
        {/* Left Sidebar */}
        <div className="w-16 px-3 py-6">
          <div className="space-y-4">
            <button className="p-3 text-blue-600 bg-blue-50 rounded-lg">
              <Grid3X3 className="h-5 w-5" />
            </button>
            <button className="p-3 text-gray-400 hover:text-gray-600 rounded-lg">
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
            </button>
            <button className="p-3 text-gray-400 hover:text-gray-600 rounded-lg">
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
            </button>
            <button className="p-3 text-gray-400 hover:text-gray-600 rounded-lg">
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-6 py-6">
          <div className="bg-white rounded-xl shadow-sm max-w-4xl">
            {/* Blue header section */}
            <div className="h-24 bg-gradient-to-r from-blue-400 to-blue-500 rounded-t-xl"></div>

            {/* Profile Content */}
            <div className="px-8 py-6">
              {/* Profile Header */}
              <div className="flex items-center justify-between mb-8 -mt-8">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16 border-4 border-white shadow-sm">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gray-600 text-white text-lg">
                      AR
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Alexa Rawles
                    </h2>
                    <p className="text-gray-600">alexarawles@gmail.com</p>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                  Edit
                </Button>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Full Name
                  </Label>
                  <Input
                    value={profileData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className="h-11 bg-gray-50 border-gray-200 placeholder-gray-400"
                    placeholder="Your First Name"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Nick Name
                  </Label>
                  <Input
                    value={profileData.nickName}
                    onChange={(e) =>
                      handleInputChange("nickName", e.target.value)
                    }
                    className="h-11 bg-gray-50 border-gray-200 placeholder-gray-400"
                    placeholder="Your First Name"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Gender
                  </Label>
                  <Select
                    value={profileData.gender}
                    onValueChange={(value) =>
                      handleInputChange("gender", value)
                    }
                  >
                    <SelectTrigger className="h-11 bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Your First Name" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">
                        Prefer not to say
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Country
                  </Label>
                  <Select
                    value={profileData.country}
                    onValueChange={(value) =>
                      handleInputChange("country", value)
                    }
                  >
                    <SelectTrigger className="h-11 bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Your First Name" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                      <SelectItem value="fr">France</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Language
                  </Label>
                  <Select
                    value={profileData.language}
                    onValueChange={(value) =>
                      handleInputChange("language", value)
                    }
                  >
                    <SelectTrigger className="h-11 bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Your First Name" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Time Zone
                  </Label>
                  <Select
                    value={profileData.timeZone}
                    onValueChange={(value) =>
                      handleInputChange("timeZone", value)
                    }
                  >
                    <SelectTrigger className="h-11 bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Your First Name" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="est">Eastern Time (EST)</SelectItem>
                      <SelectItem value="cst">Central Time (CST)</SelectItem>
                      <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                      <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Email Section */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  My email Address
                </h3>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      alexarawles@gmail.com
                    </p>
                    <p className="text-sm text-gray-500">1 month ago</p>
                  </div>
                </div>

                <button className="mt-3 text-blue-600 hover:text-blue-700 font-medium text-sm">
                  + Add Email Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
