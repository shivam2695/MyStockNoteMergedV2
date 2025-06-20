import { Card, CardContent } from "@/components/ui/card";
import { JournalStats } from "@/types/stock";
import { TrendingUp, Activity, CheckCircle } from "lucide-react";

interface StatsCardsProps {
  stats: JournalStats;
}

export const StatsCards = ({ stats }: StatsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 dark:from-blue-950 dark:to-blue-900 dark:border-blue-800 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">
                Total Entries
              </p>
              <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">
                {stats.totalEntries}
              </p>
            </div>
            <TrendingUp className="h-10 w-10 text-blue-600 dark:text-blue-400" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 dark:from-green-950 dark:to-green-900 dark:border-green-800 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-700 dark:text-green-300 mb-2">
                Active Entries
              </p>
              <p className="text-3xl font-bold text-green-900 dark:text-green-100">
                {stats.activeEntries}
              </p>
            </div>
            <Activity className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 dark:from-purple-950 dark:to-purple-900 dark:border-purple-800 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-700 dark:text-purple-300 mb-2">
                Closed Entries
              </p>
              <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">
                {stats.closedEntries}
              </p>
            </div>
            <CheckCircle className="h-10 w-10 text-purple-600 dark:text-purple-400" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
