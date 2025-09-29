import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BarChart3 } from "lucide-react";

interface MarketDemandData {
  skill: string;
  demandScore: number;
  trend: 'up' | 'down' | 'stable';
}

interface MarketDemandChartProps {
  marketDemandScores: Record<string, number>;
}

export default function MarketDemandChart({ marketDemandScores }: MarketDemandChartProps) {
  // Convert the scores object to sorted array for visualization
  const demandData: MarketDemandData[] = Object.entries(marketDemandScores)
    .map(([skill, score]) => ({
      skill,
      demandScore: score,
      trend: (score >= 8 ? 'up' : score <= 4 ? 'down' : 'stable') as 'up' | 'down' | 'stable'
    }))
    .sort((a, b) => b.demandScore - a.demandScore);

  const getBarColor = (score: number) => {
    if (score >= 8) return "bg-green-500";
    if (score >= 6) return "bg-yellow-500";
    if (score >= 4) return "bg-orange-500";
    return "bg-red-500";
  };

  const getBarGradient = (score: number) => {
    if (score >= 8) return "from-green-400 to-green-600";
    if (score >= 6) return "from-yellow-400 to-yellow-600";
    if (score >= 4) return "from-orange-400 to-orange-600";
    return "from-red-400 to-red-600";
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗';
      case 'down': return '↘';
      default: return '→';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600 dark:text-green-400';
      case 'down': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <Card className="hover-elevate">
      <CardHeader>
        <CardTitle className="text-xl font-medium flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          Job Market Demand Heatmap
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4" data-testid="market-demand-chart">
          {demandData.map((item, index) => (
            <div key={item.skill} className="space-y-2" data-testid={`demand-item-${index}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-base">{item.skill}</span>
                  <span className={`text-sm ${getTrendColor(item.trend)}`}>
                    {getTrendIcon(item.trend)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {item.demandScore}/10
                  </Badge>
                </div>
              </div>
              <div className="relative">
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r ${getBarGradient(item.demandScore)} transition-all duration-1000 ease-out`}
                    style={{ width: `${(item.demandScore / 10) * 100}%` }}
                  />
                </div>
                <div className="absolute right-0 top-0 h-3 flex items-center">
                  <div className="text-xs font-medium text-foreground ml-2">
                    {item.demandScore >= 8 && (
                      <TrendingUp className="h-3 w-3 text-green-600" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-medium text-sm mb-2">Market Demand Legend:</h4>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span>High (8-10)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <span>Good (6-7)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded"></div>
              <span>Moderate (4-5)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span>Low (1-3)</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}