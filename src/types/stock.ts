export interface Stock {
  id: string;
  status: "Active" | "Closed";
  symbol: string;
  companyName: string;
  type: "Buy" | "Sell";
  quantity: number;
  entryPrice: number;
  exitPrice?: number;
  entryDate: string;
  exitDate?: string;
  return: number;
  returnPercentage: number;
}

export interface JournalStats {
  totalEntries: number;
  activeEntries: number;
  closedEntries: number;
  totalReturn: number;
  totalReturnPercentage: number;
}
