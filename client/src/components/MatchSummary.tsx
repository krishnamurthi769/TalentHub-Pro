import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, TrendingUp } from "lucide-react";

interface MatchSummaryProps {
  matchScore: number;
  fitJustification: string;
  culturalVibe: string;
}

export default function MatchSummary({ matchScore, fitJustification, culturalVibe }: MatchSummaryProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 dark:text-green-400";
    if (score >= 60) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "from-green-500 to-emerald-500";
    if (score >= 60) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-500";
  };

  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (matchScore / 100) * circumference;

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1 hover-elevate">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-lg font-medium flex items-center justify-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Match Score
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <div className="relative w-32 h-32">
            <svg
              className="w-32 h-32 transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-muted"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#scoreGradient)"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className={`${getScoreBgColor(matchScore).split(' ')[0]} text-opacity-100`} stopColor="currentColor" />
                  <stop offset="100%" className={`${getScoreBgColor(matchScore).split(' ')[2]} text-opacity-100`} stopColor="currentColor" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-4xl font-bold ${getScoreColor(matchScore)}`} data-testid="text-match-score">
                {matchScore}%
              </span>
            </div>
          </div>
          <Badge variant="secondary" className="text-sm">
            {matchScore >= 80 ? "Excellent Match" : matchScore >= 60 ? "Good Match" : "Needs Improvement"}
          </Badge>
        </CardContent>
      </Card>

      <Card className="lg:col-span-1 hover-elevate">
        <CardHeader>
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-chart-2" />
            Fit Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base text-foreground leading-relaxed" data-testid="text-fit-justification">
            {fitJustification}
          </p>
        </CardContent>
      </Card>

      <Card className="lg:col-span-1 hover-elevate">
        <CardHeader>
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <Heart className="h-5 w-5 text-pink-500" />
            Cultural Vibe
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base text-foreground leading-relaxed" data-testid="text-cultural-vibe">
            {culturalVibe}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}