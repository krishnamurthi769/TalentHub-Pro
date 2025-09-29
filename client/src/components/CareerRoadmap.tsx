import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight, Target, Clock } from "lucide-react";

interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  timeframe: string;
  skills: string[];
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

interface CareerRoadmapProps {
  nodes: RoadmapNode[];
}

export default function CareerRoadmap({ nodes }: CareerRoadmapProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'intermediate': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'advanced': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'expert': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getConnectorColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'border-blue-300 dark:border-blue-700';
      case 'intermediate': return 'border-green-300 dark:border-green-700';
      case 'advanced': return 'border-yellow-300 dark:border-yellow-700';
      case 'expert': return 'border-purple-300 dark:border-purple-700';
      default: return 'border-gray-300 dark:border-gray-700';
    }
  };

  return (
    <Card className="hover-elevate">
      <CardHeader>
        <CardTitle className="text-xl font-medium flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Career Progression Roadmap
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6" data-testid="career-roadmap">
          {nodes.map((node, index) => (
            <div key={node.id} className="relative" data-testid={`roadmap-node-${index}`}>
              {/* Connector line */}
              {index < nodes.length - 1 && (
                <div className={`absolute left-6 top-16 w-0.5 h-12 ${getConnectorColor(node.level)} border-l-2 border-dashed`} />
              )}
              
              <div className="flex items-start gap-4">
                {/* Node indicator */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full border-4 ${getConnectorColor(node.level)} bg-background flex items-center justify-center`}>
                  <Target className="h-5 w-5 text-primary" />
                </div>
                
                {/* Node content */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium">{node.title}</h3>
                      <p className="text-sm text-muted-foreground">{node.description}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={getLevelColor(node.level)} variant="secondary">
                        {node.level}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{node.timeframe}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">Key Skills to Develop:</h4>
                    <div className="flex flex-wrap gap-2">
                      {node.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs hover-elevate cursor-pointer">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Arrow to next step */}
              {index < nodes.length - 1 && (
                <div className="flex justify-center mt-4 mb-2">
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-medium text-sm mb-2">Progression Levels:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>Beginner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span>Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <span>Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded"></div>
              <span>Expert</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}