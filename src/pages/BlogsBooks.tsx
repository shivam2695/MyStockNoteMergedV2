import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import DynamicSidebar from "@/components/DynamicSidebar";
import { useNavigate } from "react-router-dom";
import {
  TrendingUp,
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  Star,
  ExternalLink,
  DollarSign,
  BarChart3,
  TrendingDown,
  Activity,
  PieChart,
  Target,
  Zap,
  Percent,
  Search,
  Filter,
  Clock,
  Eye,
  ThumbsUp,
  MessageCircle,
  Share2,
  Bookmark,
  Award,
  Lightbulb,
  Globe,
  Users,
  Download,
  PlayCircle,
  Headphones,
  FileText,
  Video,
  Lock,
  Unlock,
  Crown,
  Sparkles,
} from "lucide-react";

const BlogsBooks = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("blogs");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogCategories = [
    { id: "all", name: "All Posts", count: 47 },
    { id: "market-analysis", name: "Market Analysis", count: 12 },
    { id: "stock-picks", name: "Stock Picks", count: 8 },
    { id: "education", name: "Education", count: 15 },
    { id: "earnings", name: "Earnings", count: 6 },
    { id: "esg", name: "ESG Investing", count: 4 },
    { id: "crypto", name: "Crypto vs Stocks", count: 2 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Stock Market Volatility in 2025",
      excerpt:
        "Dive deep into the factors driving market volatility and how to navigate uncertain times with strategic investment approaches. Learn about macro-economic indicators, geopolitical impacts, and technical analysis techniques.",
      author: "Sarah Chen",
      date: "Dec 15, 2025",
      readTime: "8 min read",
      category: "Market Analysis",
      featured: true,
      views: "12.4K",
      likes: 247,
      comments: 34,
      tags: ["Volatility", "Risk Management", "Market Analysis"],
      difficulty: "Intermediate",
      premium: false,
    },
    {
      id: 2,
      title: "Top 5 Tech Stocks to Watch This Quarter",
      excerpt:
        "Our comprehensive analysis of the most promising technology stocks with strong fundamentals, innovative products, and exceptional growth potential for Q1 2025.",
      author: "Mike Rodriguez",
      date: "Dec 12, 2025",
      readTime: "6 min read",
      category: "Stock Picks",
      featured: false,
      views: "8.9K",
      likes: 189,
      comments: 22,
      tags: ["Tech Stocks", "Growth", "Q1 Picks"],
      difficulty: "Beginner",
      premium: false,
    },
    {
      id: 3,
      title: "Building Your First Investment Portfolio: A Complete Guide",
      excerpt:
        "A comprehensive step-by-step guide for beginners on how to create a well-diversified portfolio that matches your risk tolerance, financial goals, and investment timeline.",
      author: "Emma Thompson",
      date: "Dec 10, 2025",
      readTime: "12 min read",
      category: "Education",
      featured: false,
      views: "15.2K",
      likes: 342,
      comments: 67,
      tags: ["Portfolio", "Beginner", "Diversification"],
      difficulty: "Beginner",
      premium: false,
    },
    {
      id: 4,
      title: "Advanced Options Strategies for Income Generation",
      excerpt:
        "Master sophisticated options strategies including covered calls, cash-secured puts, iron condors, and butterfly spreads to generate consistent income from your portfolio.",
      author: "David Kim",
      date: "Dec 8, 2025",
      readTime: "15 min read",
      category: "Education",
      featured: false,
      views: "6.7K",
      likes: 156,
      comments: 29,
      tags: ["Options", "Income", "Advanced"],
      difficulty: "Advanced",
      premium: true,
    },
    {
      id: 5,
      title: "Q4 2025 Earnings Season: Key Reports to Watch",
      excerpt:
        "Comprehensive analysis of the most important earnings reports this quarter and their potential impact on market movements, sector rotations, and individual stock performance.",
      author: "Lisa Parker",
      date: "Dec 5, 2025",
      readTime: "7 min read",
      category: "Earnings",
      featured: false,
      views: "9.1K",
      likes: 203,
      comments: 18,
      tags: ["Earnings", "Q4", "Analysis"],
      difficulty: "Intermediate",
      premium: false,
    },
    {
      id: 6,
      title: "ESG Investing: Sustainable Returns in 2025",
      excerpt:
        "How environmental, social, and governance factors are reshaping investment strategies and creating new opportunities for sustainable long-term returns.",
      author: "James Wilson",
      date: "Dec 3, 2025",
      readTime: "9 min read",
      category: "ESG",
      featured: false,
      views: "5.3K",
      likes: 118,
      comments: 15,
      tags: ["ESG", "Sustainability", "Future"],
      difficulty: "Intermediate",
      premium: false,
    },
    {
      id: 7,
      title: "Cryptocurrency vs Traditional Stocks: 2025 Performance Review",
      excerpt:
        "A detailed comparison of cryptocurrency and traditional stock market performance, risk profiles, and future outlook based on 2025 data and trends.",
      author: "Alex Chen",
      date: "Dec 1, 2025",
      readTime: "11 min read",
      category: "Crypto",
      featured: false,
      views: "7.8K",
      likes: 234,
      comments: 42,
      tags: ["Crypto", "Stocks", "Comparison"],
      difficulty: "Intermediate",
      premium: false,
    },
    {
      id: 8,
      title: "Warren Buffett's 2025 Portfolio Changes: What We Can Learn",
      excerpt:
        "Analyzing Berkshire Hathaway's recent portfolio adjustments and the investment principles behind Warren Buffett's latest strategic moves.",
      author: "Robert Johnson",
      date: "Nov 28, 2025",
      readTime: "10 min read",
      category: "Market Analysis",
      featured: false,
      views: "18.6K",
      likes: 425,
      comments: 89,
      tags: ["Buffett", "Value Investing", "Portfolio"],
      difficulty: "Intermediate",
      premium: false,
    },
  ];

  const books = [
    {
      id: 1,
      title: "The Intelligent Investor",
      author: "Benjamin Graham",
      description:
        "The definitive book on value investing. A book of practical counsel that teaches you to think like an investor rather than a speculator. Graham's timeless principles have guided generations of successful investors.",
      rating: 4.8,
      price: "$24.99",
      originalPrice: "$34.99",
      category: "Value Investing",
      featured: true,
      pages: 640,
      publishYear: 2006,
      difficulty: "Intermediate",
      bestseller: true,
      reviews: 1247,
      format: ["Hardcover", "Paperback", "eBook", "Audiobook"],
    },
    {
      id: 2,
      title: "A Random Walk Down Wall Street",
      author: "Burton Malkiel",
      description:
        "A comprehensive guide to investing that advocates for index fund investing and efficient market theory. Updated with modern insights on cryptocurrency and fintech.",
      rating: 4.6,
      price: "$19.99",
      originalPrice: "$29.99",
      category: "Index Investing",
      featured: false,
      pages: 448,
      publishYear: 2019,
      difficulty: "Beginner",
      bestseller: false,
      reviews: 892,
      format: ["Paperback", "eBook", "Audiobook"],
    },
    {
      id: 3,
      title: "One Up On Wall Street",
      author: "Peter Lynch",
      description:
        "Learn how to spot winning stocks from the legendary fund manager who beat the market for 13 straight years at Fidelity. Practical advice on finding hidden gems in everyday life.",
      rating: 4.7,
      price: "$22.99",
      originalPrice: "$32.99",
      category: "Growth Investing",
      featured: false,
      pages: 352,
      publishYear: 2000,
      difficulty: "Intermediate",
      bestseller: true,
      reviews: 1156,
      format: ["Hardcover", "Paperback", "eBook"],
    },
    {
      id: 4,
      title: "The Little Book of Common Sense Investing",
      author: "John Bogle",
      description:
        "The founder of Vanguard shares his wisdom on simple, long-term investing strategies. A compelling case for index fund investing and low-cost portfolio management.",
      rating: 4.5,
      price: "$16.99",
      originalPrice: "$24.99",
      category: "Index Investing",
      featured: false,
      pages: 216,
      publishYear: 2017,
      difficulty: "Beginner",
      bestseller: false,
      reviews: 634,
      format: ["Paperback", "eBook", "Audiobook"],
    },
    {
      id: 5,
      title: "Common Stocks and Uncommon Profits",
      author: "Philip Fisher",
      description:
        "Classic growth investing strategies from one of the pioneers of modern investment theory. Learn the 15 points to look for in a common stock.",
      rating: 4.4,
      price: "$18.99",
      originalPrice: "$26.99",
      category: "Growth Investing",
      featured: false,
      pages: 288,
      publishYear: 2003,
      difficulty: "Advanced",
      bestseller: false,
      reviews: 423,
      format: ["Hardcover", "Paperback", "eBook"],
    },
    {
      id: 6,
      title: "The Bogleheads' Guide to Investing",
      author: "Taylor Larimore, Mel Lindauer, Michael LeBoeuf",
      description:
        "A practical guide to investing based on John Bogle's philosophy. Comprehensive coverage of asset allocation, tax-efficient investing, and retirement planning.",
      rating: 4.6,
      price: "$21.99",
      originalPrice: "$29.99",
      category: "Portfolio Management",
      featured: false,
      pages: 352,
      publishYear: 2014,
      difficulty: "Beginner",
      bestseller: true,
      reviews: 789,
      format: ["Paperback", "eBook"],
    },
  ];

  const coursesAndResources = [
    {
      id: 1,
      title: "Complete Stock Market Masterclass",
      type: "Course",
      duration: "12 hours",
      lessons: 48,
      price: "$199.99",
      rating: 4.9,
      students: 15420,
      instructor: "Sarah Chen & Mike Rodriguez",
      level: "Beginner to Advanced",
      comingSoon: true,
    },
    {
      id: 2,
      title: "Options Trading Bootcamp",
      type: "Course",
      duration: "8 hours",
      lessons: 32,
      price: "$149.99",
      rating: 4.7,
      students: 8934,
      instructor: "David Kim",
      level: "Intermediate",
      comingSoon: true,
    },
    {
      id: 3,
      title: "Weekly Market Analysis Podcast",
      type: "Podcast",
      duration: "Weekly",
      episodes: 156,
      price: "Free",
      rating: 4.8,
      subscribers: 45600,
      host: "MyStockNote Team",
      level: "All Levels",
      comingSoon: false,
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter(
          (post) =>
            post.category.toLowerCase().replace(/\s+/g, "-") ===
            selectedCategory,
        );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <DynamicSidebar />
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-2 rounded-lg shadow-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                  MyStockNote
                </h1>
                <p className="text-xs text-gray-500">Learn • Analyze • Grow</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => navigate("/")}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/journal")}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Journal
              </button>
              <button
                onClick={() => navigate("/pricing")}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Pricing
              </button>
              <Button
                size="sm"
                onClick={() => navigate("/auth")}
                className="shadow-md"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Enhanced Floating Financial Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 opacity-15 animate-float">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 backdrop-blur-sm border border-green-200/30">
              <span className="text-green-700 font-bold text-sm flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                Growth +12.4%
              </span>
            </div>
          </div>
          <div
            className="absolute top-32 right-16 opacity-15 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4 backdrop-blur-sm border border-blue-200/30">
              <span className="text-blue-700 font-bold text-sm flex items-center">
                <PieChart className="h-4 w-4 mr-1" />
                Dividend 4.2%
              </span>
            </div>
          </div>
          <div
            className="absolute bottom-40 left-20 opacity-15 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-lg p-4 backdrop-blur-sm border border-purple-200/30">
              <span className="text-purple-700 font-bold text-sm flex items-center">
                <BarChart3 className="h-4 w-4 mr-1" />
                Value Fund
              </span>
            </div>
          </div>
          <div
            className="absolute bottom-60 right-10 opacity-15 animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 backdrop-blur-sm border border-orange-200/30">
              <span className="text-orange-700 font-bold text-sm flex items-center">
                <Activity className="h-4 w-4 mr-1" />
                Tech Sector
              </span>
            </div>
          </div>

          {/* Large background icons */}
          <div className="absolute top-40 left-1/2 opacity-5">
            <DollarSign className="h-20 w-20 text-blue-600" />
          </div>
          <div className="absolute bottom-32 left-1/3 opacity-5">
            <BarChart3 className="h-16 w-16 text-green-500" />
          </div>
          <div className="absolute top-60 right-1/3 opacity-5">
            <TrendingUp className="h-18 w-18 text-blue-500" />
          </div>
          <div className="absolute top-1/2 left-1/4 opacity-3">
            <PieChart className="h-14 w-14 text-purple-500" />
          </div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Not Just Another{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Trading Blog
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            We go beyond charts and candle patterns — diving into the
            psychology, discipline, and habits that turn everyday traders into
            consistent winners.{" "}
            <span className="font-semibold text-blue-600">
              Weekly insights. Honest analysis. Zero fluff.
            </span>
          </p>

          {/* Enhanced Investment Metrics Bar */}
          <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-5xl mx-auto border border-blue-200/50 shadow-lg">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-green-500" />
                <span className="text-sm font-semibold text-gray-700">
                  Portfolio
                </span>
                <span className="text-sm text-green-600 font-medium">
                  Growth
                </span>
              </div>
              <div className="w-px h-6 bg-gray-300 hidden sm:block"></div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-semibold text-gray-700">
                  Market
                </span>
                <span className="text-sm text-blue-600 font-medium">
                  Analysis
                </span>
              </div>
              <div className="w-px h-6 bg-gray-300 hidden sm:block"></div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-semibold text-gray-700">
                  Risk
                </span>
                <span className="text-sm text-purple-600 font-medium">
                  Assessment
                </span>
              </div>
              <div className="w-px h-6 bg-gray-300 hidden sm:block"></div>
              <div className="flex items-center space-x-2">
                <PieChart className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-semibold text-gray-700">
                  Research
                </span>
                <span className="text-sm text-orange-600 font-medium">
                  Reports
                </span>
              </div>
              <div className="w-px h-6 bg-gray-300 hidden sm:block"></div>
              <div className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-semibold text-gray-700">
                  Educational
                </span>
                <span className="text-sm text-yellow-600 font-medium">
                  Content
                </span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-200/30">
              <div className="text-2xl font-bold text-blue-600">50K+</div>
              <div className="text-sm text-gray-600">Monthly Readers</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200/30">
              <div className="text-2xl font-bold text-green-600">200+</div>
              <div className="text-sm text-gray-600">Expert Articles</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-purple-200/30">
              <div className="text-2xl font-bold text-purple-600">15+</div>
              <div className="text-sm text-gray-600">Book Reviews</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-orange-200/30">
              <div className="text-2xl font-bold text-orange-600">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          {/* Enhanced Tab Navigation */}
          <div className="flex justify-center mb-16">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full max-w-lg"
            >
              <TabsList className="grid grid-cols-3 w-full h-14 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <TabsTrigger
                  value="blogs"
                  className="text-base font-semibold flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Blogs
                </TabsTrigger>
                <TabsTrigger
                  value="books"
                  className="text-base font-semibold flex items-center gap-2"
                >
                  <Star className="h-4 w-4" />
                  Books
                </TabsTrigger>
                <TabsTrigger
                  value="courses"
                  className="text-base font-semibold flex items-center gap-2"
                >
                  <PlayCircle className="h-4 w-4" />
                  Courses
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* BLOGS SECTION */}
            <TabsContent value="blogs" className="mt-0">
              {/* Investment Strategy Categories */}
              <div className="mb-12">
                <div className="flex justify-center items-center space-x-8 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white py-4 px-8 rounded-2xl max-w-fit mx-auto shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-green-400" />
                    <span className="text-sm font-semibold">Value</span>
                    <span className="text-sm text-green-400">Investing</span>
                  </div>
                  <div className="w-px h-6 bg-gray-600"></div>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-blue-400" />
                    <span className="text-sm font-semibold">Growth</span>
                    <span className="text-sm text-blue-400">Strategies</span>
                  </div>
                  <div className="w-px h-6 bg-gray-600"></div>
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-yellow-400" />
                    <span className="text-sm font-semibold">Market</span>
                    <span className="text-sm text-yellow-400">Analysis</span>
                  </div>
                  <div className="w-px h-6 bg-gray-600"></div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-purple-400" />
                    <span className="text-sm font-semibold">Expert</span>
                    <span className="text-sm text-purple-400">Insights</span>
                  </div>
                </div>
              </div>

              {/* Blog Header with Search and Filters */}
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  Investment Insights,{" "}
                  <span className="text-blue-600">Every Week</span>
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                  Clear, actionable insights to help you navigate the markets
                  with confidence and grow your wealth consistently.
                </p>

                {/* Search and Filter Bar */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80 bg-white shadow-sm"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Filter className="h-4 w-4 text-gray-500" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                    >
                      {blogCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Featured Blog Post */}
              <div className="mb-16">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-80 md:h-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                        <TrendingUp className="h-20 w-20 text-white z-10 drop-shadow-lg" />
                        {/* Enhanced Investment Overlays */}
                        <div className="absolute top-6 left-6 opacity-30">
                          <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm">
                            <span className="text-xs font-medium text-white">
                              P/E Ratio: 18.4x
                            </span>
                          </div>
                        </div>
                        <div className="absolute bottom-6 right-6 opacity-30">
                          <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm">
                            <span className="text-xs font-medium text-white">
                              ROI: +15.2%
                            </span>
                          </div>
                        </div>
                        <div className="absolute top-1/2 left-6 opacity-20">
                          <BarChart3 className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute bottom-1/3 left-1/2 opacity-10">
                          <PieChart className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4 space-x-3">
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-4 py-1">
                          <Crown className="h-3 w-3 mr-1" />
                          FEATURED
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-blue-600 border-blue-200"
                        >
                          {blogPosts[0].category}
                        </Badge>
                        <Badge
                          className={getDifficultyColor(
                            blogPosts[0].difficulty,
                          )}
                        >
                          {blogPosts[0].difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="text-3xl mb-4 leading-tight">
                        {blogPosts[0].title}
                      </CardTitle>
                      <CardDescription className="text-base mb-6 leading-relaxed">
                        {blogPosts[0].excerpt}
                      </CardDescription>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {blogPosts[0].tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {blogPosts[0].author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {blogPosts[0].date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {blogPosts[0].readTime}
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              {blogPosts[0].views}
                            </div>
                            <div className="flex items-center">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              {blogPosts[0].likes}
                            </div>
                            <div className="flex items-center">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              {blogPosts[0].comments}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            Read Article <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Blog Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post, index) => {
                  const stockIcons = [
                    Activity,
                    BarChart3,
                    TrendingUp,
                    PieChart,
                    Target,
                    Zap,
                  ];
                  const financialTerms = [
                    "Beta",
                    "Alpha",
                    "Sharpe",
                    "P/E",
                    "ROE",
                    "EBITDA",
                  ];
                  const metrics = ["1.2", "0.8", "1.5", "18x", "15%", "23%"];
                  const IconComponent = stockIcons[index % stockIcons.length];

                  return (
                    <Card
                      key={post.id}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-md bg-white"
                    >
                      <div className="h-52 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 flex items-center justify-center relative overflow-hidden">
                        <BookOpen className="h-14 w-14 text-blue-600 group-hover:scale-110 transition-transform duration-300 z-10" />

                        {/* Enhanced Financial Decorations */}
                        <div className="absolute top-3 right-3 opacity-40">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="absolute bottom-3 left-3 opacity-30">
                          <div className="bg-white/70 rounded px-2 py-1">
                            <span className="text-xs font-medium text-slate-700">
                              {financialTerms[index % financialTerms.length]}:{" "}
                              {metrics[index % metrics.length]}
                            </span>
                          </div>
                        </div>
                        <div className="absolute top-1/2 right-4 opacity-15">
                          <DollarSign className="h-8 w-8 text-green-500" />
                        </div>
                        {post.premium && (
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-yellow-500 text-white">
                              <Crown className="h-3 w-3 mr-1" />
                              Premium
                            </Badge>
                          </div>
                        )}
                      </div>

                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant="outline"
                              className="text-xs font-semibold text-blue-600 border-blue-200"
                            >
                              {post.category}
                            </Badge>
                            <Badge
                              className={`text-xs ${getDifficultyColor(post.difficulty)}`}
                            >
                              {post.difficulty}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-lg line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <CardDescription className="mb-4 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </CardDescription>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center text-sm text-gray-600">
                              <User className="h-3 w-3 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center space-x-3 text-xs text-gray-500">
                              <div className="flex items-center">
                                <Eye className="h-3 w-3 mr-1" />
                                {post.views}
                              </div>
                              <div className="flex items-center">
                                <ThumbsUp className="h-3 w-3 mr-1" />
                                {post.likes}
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="ghost" className="p-2">
                              <Bookmark className="h-3 w-3" />
                            </Button>
                            <Button size="sm" className="px-4">
                              Read <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="px-8">
                  Load More Articles
                </Button>
              </div>
            </TabsContent>

            {/* BOOKS SECTION */}
            <TabsContent value="books" className="mt-0">
              {/* Investment Education Categories */}
              <div className="mb-12">
                <div className="flex justify-center items-center space-x-8 bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 border-2 border-emerald-200 py-4 px-8 rounded-2xl max-w-fit mx-auto">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-semibold text-gray-700">
                      Fundamental
                    </span>
                    <span className="text-sm text-emerald-600">Analysis</span>
                  </div>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-700">
                      Technical
                    </span>
                    <span className="text-sm text-blue-600">Analysis</span>
                  </div>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <PieChart className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-semibold text-gray-700">
                      Portfolio
                    </span>
                    <span className="text-sm text-purple-600">Management</span>
                  </div>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-orange-600" />
                    <span className="text-sm font-semibold text-gray-700">
                      Expert
                    </span>
                    <span className="text-sm text-orange-600">Strategies</span>
                  </div>
                </div>
              </div>

              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  Essential{" "}
                  <span className="text-blue-600">Investment Books</span>
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Curated collection of must-read books to build your investment
                  knowledge, master proven strategies, and develop the mindset
                  of successful investors.
                </p>
              </div>

              {/* Featured Book */}
              <div className="mb-16">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-amber-50">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-80 md:h-full bg-gradient-to-br from-amber-400 via-orange-400 to-red-400 flex items-center justify-center relative overflow-hidden">
                        <BookOpen className="h-20 w-20 text-white z-10 drop-shadow-lg" />

                        {/* Enhanced Book Decorations */}
                        <div className="absolute top-6 left-6 opacity-30">
                          <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm">
                            <Percent className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-6 right-6 opacity-30">
                          <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm">
                            <DollarSign className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="absolute top-1/2 right-6 opacity-20">
                          <div className="bg-white/20 rounded px-2 py-1">
                            <span className="text-xs font-medium text-white">
                              Value Investing
                            </span>
                          </div>
                        </div>
                        <div className="absolute bottom-1/3 left-6 opacity-15">
                          <TrendingUp className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center mb-4 space-x-3">
                        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-4 py-1">
                          <Award className="h-3 w-3 mr-1" />
                          BESTSELLER
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-amber-600 border-amber-200"
                        >
                          {books[0].category}
                        </Badge>
                        <Badge
                          className={getDifficultyColor(books[0].difficulty)}
                        >
                          {books[0].difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="text-3xl mb-2">
                        {books[0].title}
                      </CardTitle>
                      <p className="text-lg text-gray-600 mb-4 font-medium">
                        by {books[0].author}
                      </p>
                      <CardDescription className="text-base mb-6 leading-relaxed">
                        {books[0].description}
                      </CardDescription>

                      {/* Book Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <FileText className="h-4 w-4 mr-2" />
                          {books[0].pages} pages
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          Published {books[0].publishYear}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          {books[0].reviews} reviews
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Download className="h-4 w-4 mr-2" />
                          {books[0].format.length} formats
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${i < Math.floor(books[0].rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                            <span className="ml-2 text-lg font-semibold">
                              {books[0].rating}
                            </span>
                            <span className="ml-1 text-sm text-gray-500">
                              ({books[0].reviews})
                            </span>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-green-600">
                                {books[0].price}
                              </span>
                              <span className="text-lg text-gray-400 line-through">
                                {books[0].originalPrice}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                            View Book <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Books Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.slice(1).map((book, index) => {
                  const financialIcons = [
                    TrendingUp,
                    BarChart3,
                    PieChart,
                    Activity,
                    Target,
                  ];
                  const concepts = [
                    "Growth",
                    "Value",
                    "Income",
                    "Strategy",
                    "Analysis",
                  ];
                  const IconComponent =
                    financialIcons[index % financialIcons.length];

                  return (
                    <Card
                      key={book.id}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-md bg-white"
                    >
                      <div className="h-72 bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 flex items-center justify-center relative overflow-hidden">
                        <BookOpen className="h-20 w-20 text-amber-600 group-hover:scale-110 transition-transform duration-300 z-10" />

                        {/* Enhanced Financial Themes */}
                        <div className="absolute top-4 right-4 opacity-40">
                          <IconComponent className="h-6 w-6 text-amber-700" />
                        </div>
                        <div className="absolute bottom-4 left-4 opacity-30">
                          <div className="bg-white/70 rounded px-2 py-1">
                            <span className="text-xs font-medium text-amber-800">
                              {concepts[index % concepts.length]} Focus
                            </span>
                          </div>
                        </div>
                        <div className="absolute top-1/2 left-4 opacity-15">
                          <DollarSign className="h-8 w-8 text-green-600" />
                        </div>
                        {book.bestseller && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-red-500 text-white">
                              <Award className="h-3 w-3 mr-1" />
                              Bestseller
                            </Badge>
                          </div>
                        )}
                      </div>

                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant="outline"
                              className="text-xs font-semibold text-amber-600 border-amber-200"
                            >
                              {book.category}
                            </Badge>
                            <Badge
                              className={`text-xs ${getDifficultyColor(book.difficulty)}`}
                            >
                              {book.difficulty}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            <span className="font-medium">{book.rating}</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg leading-tight group-hover:text-amber-600 transition-colors">
                          {book.title}
                        </CardTitle>
                        <p className="text-sm text-gray-600 font-medium">
                          by {book.author}
                        </p>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <CardDescription className="mb-4 line-clamp-3 leading-relaxed">
                          {book.description}
                        </CardDescription>

                        {/* Book Details */}
                        <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-600">
                          <div className="flex items-center">
                            <FileText className="h-3 w-3 mr-1" />
                            {book.pages} pages
                          </div>
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {book.reviews} reviews
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {book.publishYear}
                          </div>
                          <div className="flex items-center">
                            <Download className="h-3 w-3 mr-1" />
                            {book.format.length} formats
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-center">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg font-bold text-green-600">
                                {book.price}
                              </span>
                              <span className="text-sm text-gray-400 line-through">
                                {book.originalPrice}
                              </span>
                            </div>
                          </div>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="ghost" className="p-2">
                              <Bookmark className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* COURSES SECTION */}
            <TabsContent value="courses" className="mt-0">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  Learning <span className="text-blue-600">Resources</span>
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive courses, podcasts, and educational content to
                  accelerate your investment journey.
                </p>
              </div>

              {/* Coming Soon Banner */}
              <div className="mb-12 text-center">
                <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <Sparkles className="h-8 w-8 mr-3" />
                    <h4 className="text-2xl font-bold">Coming Soon!</h4>
                  </div>
                  <p className="text-lg mb-6">
                    Our comprehensive investment courses are launching soon. Get
                    ready to master the markets with expert-led content.
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-purple-600 hover:bg-gray-100"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Notify Me When Available
                  </Button>
                </div>
              </div>

              {/* Course Preview Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coursesAndResources.map((resource) => (
                  <Card
                    key={resource.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white"
                  >
                    <div className="h-48 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                      {resource.type === "Course" ? (
                        <PlayCircle className="h-16 w-16 text-white z-10" />
                      ) : (
                        <Headphones className="h-16 w-16 text-white z-10" />
                      )}

                      {resource.comingSoon && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-yellow-500 text-white">
                            <Lock className="h-3 w-3 mr-1" />
                            Coming Soon
                          </Badge>
                        </div>
                      )}

                      <div className="absolute top-4 right-4">
                        <Badge
                          variant="outline"
                          className="bg-white/20 text-white border-white/30"
                        >
                          {resource.type}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg">
                        {resource.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600">
                        by {resource.instructor || resource.host}
                      </p>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">
                            {resource.duration}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">
                            {resource.type === "Course"
                              ? "Lessons:"
                              : "Episodes:"}
                          </span>
                          <span className="font-medium">
                            {resource.lessons || resource.episodes}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Level:</span>
                          <span className="font-medium">{resource.level}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm font-medium">
                              {resource.rating}
                            </span>
                          </div>
                          <span className="text-lg font-bold text-green-600">
                            {resource.price}
                          </span>
                        </div>
                      </div>

                      <Button
                        className="w-full"
                        disabled={resource.comingSoon}
                        variant={resource.comingSoon ? "outline" : "default"}
                      >
                        {resource.comingSoon ? (
                          <>
                            <Lock className="h-4 w-4 mr-2" />
                            Coming Soon
                          </>
                        ) : (
                          <>
                            <Unlock className="h-4 w-4 mr-2" />
                            Access Now
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Enhanced Call to Action */}
          <div className="mt-24 text-center">
            <Card className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-0 shadow-xl">
              <CardContent className="p-12">
                <div className="flex items-center justify-center mb-6">
                  <Sparkles className="h-8 w-8 text-blue-600 mr-3" />
                  <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Ready to Level Up Your Investing?
                  </h4>
                </div>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Growth in the markets begins with growth in knowledge and
                  mindset. StockNote is your comprehensive platform to{" "}
                  <span className="font-semibold text-blue-600">
                    learn, analyze, track, and succeed
                  </span>{" "}
                  in your investment journey.
                </p>

                {/* Feature Highlights */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Expert Content</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Trading Journal</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">Community Support</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 shadow-lg"
                    onClick={() => navigate("/auth")}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-4 border-2 hover:bg-blue-50"
                    onClick={() => navigate("/journal")}
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore Features
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-slate-300 py-16 mt-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-3 rounded-xl shadow-lg">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">
                    StockNote
                  </span>
                  <p className="text-xs text-slate-400">
                    Invest with Intelligence
                  </p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Your comprehensive platform for investment education, market
                analysis, and portfolio tracking. Building confident investors,
                one insight at a time.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h5 className="text-white font-semibold mb-4">Quick Links</h5>
              <div className="space-y-2">
                <button
                  onClick={() => navigate("/")}
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => navigate("/journal")}
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Trading Journal
                </button>
                <button
                  onClick={() => navigate("/pricing")}
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Pricing
                </button>
                <button
                  onClick={() => navigate("/auth")}
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Newsletter */}
            <div className="text-center md:text-left">
              <h5 className="text-white font-semibold mb-4">Stay Updated</h5>
              <p className="text-slate-400 mb-4">
                Get weekly market insights and investment tips delivered to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm">
            <p className="text-slate-400">
              &copy; 2025 MyStockNote. All rights reserved.
              <span className="mx-2">•</span>
              Built for investors, by investors.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BlogsBooks;
