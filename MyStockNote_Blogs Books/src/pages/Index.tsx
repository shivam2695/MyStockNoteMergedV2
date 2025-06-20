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
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("blogs");

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Stock Market Volatility in 2024",
      excerpt:
        "Dive deep into the factors driving market volatility and how to navigate uncertain times with strategic investment approaches.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Market Analysis",
      featured: true,
      image: "/api/placeholder/400/240",
    },
    {
      id: 2,
      title: "Top 5 Tech Stocks to Watch This Quarter",
      excerpt:
        "Our analysis of the most promising technology stocks with strong fundamentals and growth potential.",
      author: "Mike Rodriguez",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      category: "Stock Picks",
      featured: false,
      image: "/api/placeholder/400/240",
    },
    {
      id: 3,
      title: "Building Your First Investment Portfolio",
      excerpt:
        "A comprehensive guide for beginners on how to create a diversified portfolio that matches your risk tolerance.",
      author: "Emma Thompson",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "Education",
      featured: false,
      image: "/api/placeholder/400/240",
    },
    {
      id: 4,
      title: "Cryptocurrency vs Traditional Stocks: Risk Analysis",
      excerpt:
        "Comparing the risk profiles of crypto investments versus traditional stock market investments.",
      author: "David Kim",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      category: "Analysis",
      featured: false,
      image: "/api/placeholder/400/240",
    },
    {
      id: 5,
      title: "Q4 Earnings Report: What to Expect",
      excerpt:
        "Key earnings reports to watch this quarter and their potential impact on market movements.",
      author: "Lisa Parker",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      category: "Earnings",
      featured: false,
      image: "/api/placeholder/400/240",
    },
    {
      id: 6,
      title: "ESG Investing: Sustainable Returns",
      excerpt:
        "How environmental, social, and governance factors are reshaping investment strategies.",
      author: "James Wilson",
      date: "Dec 3, 2024",
      readTime: "9 min read",
      category: "ESG",
      featured: false,
      image: "/api/placeholder/400/240",
    },
  ];

  const books = [
    {
      id: 1,
      title: "The Intelligent Investor",
      author: "Benjamin Graham",
      description:
        "The definitive book on value investing. A book of practical counsel that teaches you to think like an investor.",
      rating: 4.8,
      price: "$24.99",
      category: "Value Investing",
      featured: true,
      image: "/api/placeholder/300/400",
    },
    {
      id: 2,
      title: "A Random Walk Down Wall Street",
      author: "Burton Malkiel",
      description:
        "A comprehensive guide to investing that advocates for index fund investing and efficient market theory.",
      rating: 4.6,
      price: "$19.99",
      category: "Index Investing",
      featured: false,
      image: "/api/placeholder/300/400",
    },
    {
      id: 3,
      title: "One Up On Wall Street",
      author: "Peter Lynch",
      description:
        "Learn how to spot winning stocks from the legendary fund manager who beat the market for 13 straight years.",
      rating: 4.7,
      price: "$22.99",
      category: "Growth Investing",
      featured: false,
      image: "/api/placeholder/300/400",
    },
    {
      id: 4,
      title: "The Little Book of Common Sense Investing",
      author: "John Bogle",
      description:
        "The founder of Vanguard shares his wisdom on simple, long-term investing strategies.",
      rating: 4.5,
      price: "$16.99",
      category: "Index Investing",
      featured: false,
      image: "/api/placeholder/300/400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">
                MyStockNote
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Analysis
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <Button size="sm">Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Floating Financial Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 opacity-10">
            <div className="bg-primary/20 rounded-lg p-3">
              <span className="text-primary font-bold text-sm">
                Growth +12%
              </span>
            </div>
          </div>
          <div className="absolute top-32 right-16 opacity-10">
            <div className="bg-green-500/20 rounded-lg p-3">
              <span className="text-green-600 font-bold text-sm">
                Dividend 4.2%
              </span>
            </div>
          </div>
          <div className="absolute bottom-40 left-20 opacity-10">
            <div className="bg-blue-500/20 rounded-lg p-3">
              <span className="text-blue-600 font-bold text-sm">
                Value Fund
              </span>
            </div>
          </div>
          <div className="absolute bottom-60 right-10 opacity-10">
            <div className="bg-primary/20 rounded-lg p-3">
              <span className="text-primary font-bold text-sm">
                Tech Sector
              </span>
            </div>
          </div>
          <div className="absolute top-40 left-1/2 opacity-5">
            <DollarSign className="h-16 w-16 text-primary" />
          </div>
          <div className="absolute bottom-32 left-1/3 opacity-5">
            <BarChart3 className="h-12 w-12 text-green-500" />
          </div>
          <div className="absolute top-60 right-1/3 opacity-5">
            <TrendingUp className="h-14 w-14 text-blue-500" />
          </div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Not Just Another <span className="text-primary">Trading Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We go beyond charts and candle patterns — diving into the
            psychology, discipline, and habits that turn everyday traders into
            consistent ones. Weekly. Honestly. No fluff.
          </p>

          {/* Investment Metrics */}
          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-lg p-4 max-w-4xl mx-auto border border-primary/20">
            <div className="flex items-center justify-center space-x-8 overflow-hidden">
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">Portfolio</span>
                <span className="text-sm text-green-600">Growth</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium">Growth</span>
                <span className="text-sm text-blue-600">Ideas</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium">Risk</span>
                <span className="text-sm text-purple-600">View</span>
              </div>
              <div className="flex items-center space-x-2">
                <PieChart className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium">Research</span>
                <span className="text-sm text-orange-600">Reports</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full max-w-md"
            >
              <TabsList className="grid grid-cols-2 w-full h-12">
                <TabsTrigger value="blogs" className="text-base font-semibold">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Blogs
                </TabsTrigger>
                <TabsTrigger value="books" className="text-base font-semibold">
                  <Star className="mr-2 h-4 w-4" />
                  Books
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="blogs" className="mt-0">
              {/* Investment categories above blogs */}
              <div className="mb-8">
                <div className="flex justify-center items-center space-x-6 bg-slate-900 text-white py-3 px-6 rounded-lg max-w-fit mx-auto">
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-green-400" />
                    <span className="text-sm font-medium">Value</span>
                    <span className="text-sm text-green-400">Strategy</span>
                  </div>
                  <div className="w-px h-4 bg-gray-600"></div>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium">Growth</span>
                    <span className="text-sm text-blue-400">Focus</span>
                  </div>
                  <div className="w-px h-4 bg-gray-600"></div>
                  <div className="flex items-center space-x-2">
                    <Activity className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm font-medium">Stock</span>
                    <span className="text-sm text-yellow-400">Stories</span>
                  </div>
                </div>
              </div>

              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  New Thoughts, Every Week
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Clear insights to help you grow, every week.
                </p>
              </div>

              {/* Featured Blog Post */}
              <div className="mb-12">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-primary/20">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-64 md:h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                        <TrendingUp className="h-16 w-16 text-primary z-10" />
                        {/* Investment terms overlay */}
                        <div className="absolute top-4 left-4 opacity-20">
                          <span className="text-xs font-medium text-primary">
                            PE Ratio
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4 opacity-20">
                          <span className="text-xs font-medium text-green-600">
                            ROI 15%
                          </span>
                        </div>
                        <div className="absolute top-1/2 left-4 opacity-10">
                          <BarChart3 className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-3">
                        <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          FEATURED
                        </span>
                        <span className="ml-3 text-sm text-muted-foreground">
                          {blogPosts[0].category}
                        </span>
                      </div>
                      <CardTitle className="text-2xl mb-4">
                        {blogPosts[0].title}
                      </CardTitle>
                      <CardDescription className="text-base mb-6">
                        {blogPosts[0].excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {blogPosts[0].author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {blogPosts[0].date}
                          </div>
                          <span>{blogPosts[0].readTime}</span>
                        </div>
                        <Button>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Blog Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.slice(1).map((post, index) => {
                  const stockIcons = [
                    Activity,
                    BarChart3,
                    TrendingUp,
                    PieChart,
                    Target,
                  ];
                  const financialTerms = [
                    "Beta",
                    "Alpha",
                    "Sharpe",
                    "P/E",
                    "ROE",
                  ];
                  const metrics = ["1.2", "0.8", "1.5", "18x", "15%"];
                  const IconComponent = stockIcons[index % stockIcons.length];

                  return (
                    <Card
                      key={post.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group border-primary/10"
                    >
                      <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
                        <BookOpen className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300 z-10" />
                        {/* Financial decorations */}
                        <div className="absolute top-3 right-3 opacity-30">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="absolute bottom-3 left-3 opacity-25">
                          <span className="text-xs font-medium text-slate-600">
                            {financialTerms[index % financialTerms.length]}:{" "}
                            {metrics[index % metrics.length]}
                          </span>
                        </div>
                        <div className="absolute top-1/2 right-4 opacity-10">
                          <DollarSign className="h-8 w-8 text-green-500" />
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {post.readTime}
                          </span>
                        </div>
                        <CardTitle className="text-lg line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription className="mb-4 line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            <div className="flex items-center mb-1">
                              <User className="h-3 w-3 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {post.date}
                            </div>
                          </div>
                          <Button size="sm" variant="ghost">
                            Read <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="books" className="mt-0">
              {/* Investment education categories */}
              <div className="mb-8">
                <div className="flex justify-center items-center space-x-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 py-3 px-6 rounded-lg max-w-fit mx-auto">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-semibold">Fundamental</span>
                    <span className="text-sm text-green-600">Analysis</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-semibold">Technical</span>
                    <span className="text-sm text-blue-600">Patterns</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <PieChart className="h-4 w-4 text-purple-500" />
                    <span className="text-sm font-semibold">Portfolio</span>
                    <span className="text-sm text-purple-600">Strategy</span>
                  </div>
                </div>
              </div>

              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Recommended Investment Books
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Curated collection of must-read books to build your investment
                  knowledge and expertise
                </p>
              </div>

              {/* Featured Book */}
              <div className="mb-12">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-amber-200">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-64 md:h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center relative overflow-hidden">
                        <BookOpen className="h-16 w-16 text-amber-600 z-10" />
                        {/* Investment themed decorations */}
                        <div className="absolute top-4 left-4 opacity-20">
                          <Percent className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="absolute bottom-4 right-4 opacity-20">
                          <DollarSign className="h-8 w-8 text-amber-700" />
                        </div>
                        <div className="absolute top-1/2 right-4 opacity-15">
                          <span className="text-xs font-medium text-amber-800">
                            Value Pick
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center mb-3">
                        <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          BESTSELLER
                        </span>
                        <span className="ml-3 text-sm text-muted-foreground">
                          {books[0].category}
                        </span>
                      </div>
                      <CardTitle className="text-2xl mb-2">
                        {books[0].title}
                      </CardTitle>
                      <p className="text-lg text-muted-foreground mb-4">
                        by {books[0].author}
                      </p>
                      <CardDescription className="text-base mb-6">
                        {books[0].description}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(books[0].rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                            <span className="ml-2 text-sm font-medium">
                              {books[0].rating}
                            </span>
                          </div>
                          <span className="text-xl font-bold text-primary">
                            {books[0].price}
                          </span>
                        </div>
                        <Button>
                          View Book <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Books Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.slice(1).map((book, index) => {
                  const financialIcons = [TrendingUp, BarChart3, PieChart];
                  const concepts = ["Growth", "Value", "Income"];
                  const IconComponent =
                    financialIcons[index % financialIcons.length];

                  return (
                    <Card
                      key={book.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group border-amber-100"
                    >
                      <div className="h-64 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center relative overflow-hidden">
                        <BookOpen className="h-16 w-16 text-amber-600 group-hover:scale-110 transition-transform duration-300 z-10" />
                        {/* Financial metrics */}
                        <div className="absolute top-3 right-3 opacity-30">
                          <IconComponent className="h-5 w-5 text-amber-700" />
                        </div>
                        <div className="absolute bottom-3 left-3 opacity-25">
                          <span className="text-xs font-medium text-amber-800">
                            {concepts[index % concepts.length]} Focus
                          </span>
                        </div>
                        <div className="absolute top-1/2 left-4 opacity-10">
                          <DollarSign className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-amber-600 bg-amber-100 px-2 py-1 rounded">
                            {book.category}
                          </span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="ml-1 text-xs font-medium">
                              {book.rating}
                            </span>
                          </div>
                        </div>
                        <CardTitle className="text-lg">{book.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          by {book.author}
                        </p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription className="mb-4 line-clamp-3">
                          {book.description}
                        </CardDescription>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-primary">
                            {book.price}
                          </span>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-blue-50 border-primary/20">
              <CardContent className="p-12">
                <h4 className="text-3xl font-bold text-foreground mb-4">
                  Curious About the Markets? Let's Get You Started.
                </h4>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Growth in the market begins with growth in mindset.
                  MyStockNote is your space to learn, log, and level up.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8">
                    Course Launching Soon 🔒🚀
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Browse All Resources
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold text-white">
                  MyStockNote
                </span>
              </div>
              <p className="text-sm">
                Your trusted source for investment insights, market analysis,
                and financial education.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 MyStockNote. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
