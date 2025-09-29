import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw } from "lucide-react";
import MatchSummary from "./MatchSummary";
import SkillsRecommendations from "./SkillsRecommendations";
import MarketDemandChart from "./MarketDemandChart";
import CareerRoadmap from "./CareerRoadmap";
import ExportButton from "./ExportButton";

interface AnalysisResult {
  matchScore: number;
  fitJustification: string;
  culturalVibe: string;
  missingSkills: Array<{
    name: string;
    importance: 'high' | 'medium' | 'low';
    timeToMaster: string;
    courses: Array<{
      title: string;
      provider: string;
      type: 'free' | 'paid';
      url: string;
      rating?: number;
    }>;
  }>;
  trendingSkills: string[];
  marketDemandScores: Record<string, number>;
  careerRoadmap: Array<{
    id: string;
    title: string;
    description: string;
    timeframe: string;
    skills: string[];
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  }>;
}

interface ResultsDashboardProps {
  analysisResult: AnalysisResult;
  onStartOver: () => void;
}

export default function ResultsDashboard({ analysisResult, onStartOver }: ResultsDashboardProps) {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8" data-testid="results-dashboard">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={onStartOver}
            data-testid="button-start-over"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            New Analysis
          </Button>
          <div>
            <h1 className="text-3xl font-semibold text-foreground">
              Career Analysis Results
            </h1>
            <p className="text-muted-foreground">
              Comprehensive insights powered by AI
            </p>
          </div>
        </div>
        <ExportButton analysisData={analysisResult} />
      </div>

      {/* Match Summary */}
      <section>
        <MatchSummary
          matchScore={analysisResult.matchScore}
          fitJustification={analysisResult.fitJustification}
          culturalVibe={analysisResult.culturalVibe}
        />
      </section>

      {/* Skills & Recommendations */}
      <section>
        <SkillsRecommendations
          missingSkills={analysisResult.missingSkills}
          trendingSkills={analysisResult.trendingSkills}
        />
      </section>

      {/* Market Demand */}
      <section>
        <MarketDemandChart marketDemandScores={analysisResult.marketDemandScores} />
      </section>

      {/* Career Roadmap */}
      <section>
        <CareerRoadmap nodes={analysisResult.careerRoadmap} />
      </section>

      {/* Footer */}
      <div className="flex items-center justify-center pt-8 border-t">
        <Button 
          variant="outline" 
          onClick={onStartOver}
          data-testid="button-start-over-footer"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Start New Analysis
        </Button>
      </div>
    </div>
  );
}