export interface Stock {
  id: string;
  symbol: string;
  name: string;
  symbolType: string;
  shares: number;
  avgPrice: number;
  currentPrice: number;
  dayChange: number;
  dayChangePercent: number;
  totalValue: number;
  totalReturn: number;
  totalReturnPercent: number;
  sector: string;
  marketCap: string;
  holdingDays: number;
  status: "active" | "sl_hit";
}

export interface PortfolioMetrics {
  totalInvestment: number;
  currentValue: number;
  totalReturn: number;
  totalReturnPercent: number;
  dayChange: number;
  dayChangePercent: number;
  activeStocks: number;
  slHits: number;
  totalDividends: number;
  cashBalance: number;
}

export interface MonthlyData {
  month: string;
  investment: number;
  value: number;
  profit: number;
  trades: number;
}

export interface Transaction {
  id: string;
  type: "buy" | "sell" | "dividend" | "sl_hit";
  symbol: string;
  shares?: number;
  price?: number;
  amount: number;
  date: string;
  time: string;
}

export interface SectorAllocation {
  sector: string;
  value: number;
  percentage: number;
  count: number;
}

export interface StockHoldingData {
  activeStocksAvgDays: number;
  slStocksAvgDays: number;
  overallAvgDays: number;
  shortTermStocks: number; // < 30 days
  mediumTermStocks: number; // 30-365 days
  longTermStocks: number; // > 365 days
  totalActiveStocks: number;
  totalSlStocks: number;
}

// Mock data
export const portfolioMetrics: PortfolioMetrics = {
  totalInvestment: 1250000,
  currentValue: 1487500,
  totalReturn: 237500,
  totalReturnPercent: 19.0,
  dayChange: 28400,
  dayChangePercent: 1.95,
  activeStocks: 12,
  slHits: 3,
  totalDividends: 12500,
  cashBalance: 85000,
};

export const stocks: Stock[] = [
  {
    id: "1",
    symbol: "RELIANCE",
    name: "Reliance Industries Ltd.",
    symbolType: "R",
    shares: 50,
    avgPrice: 2450.25,
    currentPrice: 2685.4,
    dayChange: 35.6,
    dayChangePercent: 1.34,
    totalValue: 134270,
    totalReturn: 11757.5,
    totalReturnPercent: 9.59,
    sector: "Oil & Gas",
    marketCap: "18.2L Cr",
    holdingDays: 247,
    status: "active",
  },
  {
    id: "2",
    symbol: "TCS",
    name: "Tata Consultancy Services",
    symbolType: "T",
    shares: 25,
    avgPrice: 3480.5,
    currentPrice: 3847.75,
    dayChange: 42.2,
    dayChangePercent: 1.11,
    totalValue: 96193.75,
    totalReturn: 9181.25,
    totalReturnPercent: 10.54,
    sector: "Information Technology",
    marketCap: "14.1L Cr",
    holdingDays: 182,
    status: "active",
  },
  {
    id: "3",
    symbol: "INFY",
    name: "Infosys Limited",
    symbolType: "I",
    shares: 30,
    avgPrice: 1545.0,
    currentPrice: 1678.3,
    dayChange: -12.9,
    dayChangePercent: -0.76,
    totalValue: 50349.0,
    totalReturn: 3999.0,
    totalReturnPercent: 8.62,
    sector: "Information Technology",
    marketCap: "6.9L Cr",
    holdingDays: 89,
    status: "active",
  },
  {
    id: "4",
    symbol: "HDFCBANK",
    name: "HDFC Bank Limited",
    symbolType: "H",
    shares: 40,
    avgPrice: 1620.8,
    currentPrice: 1748.5,
    dayChange: 15.75,
    dayChangePercent: 0.91,
    totalValue: 69940,
    totalReturn: 5108,
    totalReturnPercent: 7.88,
    sector: "Banking",
    marketCap: "13.3L Cr",
    holdingDays: 134,
    status: "active",
  },
  {
    id: "5",
    symbol: "ICICIBANK",
    name: "ICICI Bank Limited",
    symbolType: "IC",
    shares: 60,
    avgPrice: 925.25,
    currentPrice: 1129.9,
    dayChange: 18.4,
    dayChangePercent: 1.65,
    totalValue: 67794,
    totalReturn: 12279,
    totalReturnPercent: 22.12,
    sector: "Banking",
    marketCap: "7.9L Cr",
    holdingDays: 298,
    status: "active",
  },
  {
    id: "6",
    symbol: "LT",
    name: "Larsen & Toubro Limited",
    symbolType: "L",
    shares: 20,
    avgPrice: 2856.6,
    currentPrice: 3125.25,
    dayChange: 28.85,
    dayChangePercent: 0.93,
    totalValue: 62505,
    totalReturn: 5373,
    totalReturnPercent: 9.4,
    sector: "Construction",
    marketCap: "4.3L Cr",
    holdingDays: 73,
    status: "active",
  },
];

export const monthlyData: MonthlyData[] = [
  {
    month: "Jan 2024",
    investment: 150000,
    value: 148500,
    profit: -1500,
    trades: 8,
  },
  {
    month: "Feb 2024",
    investment: 120000,
    value: 132000,
    profit: 12000,
    trades: 6,
  },
  {
    month: "Mar 2024",
    investment: 180000,
    value: 198000,
    profit: 18000,
    trades: 10,
  },
  {
    month: "Apr 2024",
    investment: 100000,
    value: 109000,
    profit: 9000,
    trades: 4,
  },
  {
    month: "May 2024",
    investment: 200000,
    value: 224000,
    profit: 24000,
    trades: 12,
  },
  {
    month: "Jun 2024",
    investment: 150000,
    value: 165000,
    profit: 15000,
    trades: 7,
  },
  {
    month: "Jul 2024",
    investment: 120000,
    value: 136800,
    profit: 16800,
    trades: 9,
  },
  {
    month: "Aug 2024",
    investment: 80000,
    value: 91200,
    profit: 11200,
    trades: 5,
  },
  {
    month: "Sep 2024",
    investment: 100000,
    value: 118000,
    profit: 18000,
    trades: 8,
  },
  {
    month: "Oct 2024",
    investment: 50000,
    value: 61000,
    profit: 11000,
    trades: 3,
  },
];

export const recentTransactions: Transaction[] = [
  {
    id: "1",
    type: "buy",
    symbol: "ICICIBANK",
    shares: 20,
    price: 1129.9,
    amount: -22598.0,
    date: "2024-01-15",
    time: "09:30",
  },
  {
    id: "2",
    type: "sell",
    symbol: "RELIANCE",
    shares: 10,
    price: 2685.4,
    amount: 26854.0,
    date: "2024-01-14",
    time: "14:22",
  },
  {
    id: "3",
    type: "dividend",
    symbol: "TCS",
    amount: 480.0,
    date: "2024-01-12",
    time: "16:00",
  },
  {
    id: "4",
    type: "sl_hit",
    symbol: "LT",
    shares: 5,
    price: 2900.0,
    amount: 14500.0,
    date: "2024-01-10",
    time: "11:45",
  },
  {
    id: "5",
    type: "buy",
    symbol: "HDFCBANK",
    shares: 15,
    price: 1748.5,
    amount: -26227.5,
    date: "2024-01-08",
    time: "10:15",
  },
];

export const sectorAllocation: SectorAllocation[] = [
  {
    sector: "Information Technology",
    value: 146542.75,
    percentage: 24.8,
    count: 2,
  },
  { sector: "Banking", value: 137734, percentage: 23.3, count: 2 },
  { sector: "Oil & Gas", value: 134270, percentage: 22.7, count: 1 },
  { sector: "Construction", value: 62505, percentage: 10.6, count: 1 },
  { sector: "Cash", value: 85000, percentage: 14.4, count: 0 },
  { sector: "Others", value: 25000, percentage: 4.2, count: 1 },
];

export const performanceData = [
  { period: "1D", portfolio: 1.95, market: 0.65 },
  { period: "1W", portfolio: 3.2, market: 1.4 },
  { period: "1M", portfolio: 8.5, market: 3.8 },
  { period: "3M", portfolio: 15.8, market: 6.9 },
  { period: "6M", portfolio: 19.0, market: 9.2 },
  { period: "1Y", portfolio: 28.4, market: 15.7 },
];

export const riskMetrics = {
  beta: 1.15,
  sharpeRatio: 1.85,
  maxDrawdown: -8.2,
  volatility: 18.5,
  var95: -2.8,
  correlation: 0.78,
};

export const stockHoldingData: StockHoldingData = {
  activeStocksAvgDays: 170, // Average days for active stocks
  slStocksAvgDays: 45, // Average days for SL hit stocks
  overallAvgDays: 142, // Overall average holding period
  shortTermStocks: 2, // Stocks held < 30 days
  mediumTermStocks: 4, // Stocks held 30-365 days
  longTermStocks: 0, // Stocks held > 365 days
  totalActiveStocks: 6,
  totalSlStocks: 3,
};
