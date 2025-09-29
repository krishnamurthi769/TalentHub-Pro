import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, BookOpen, Star } from "lucide-react";

interface Skill {
  name: string;
  importance: 'high' | 'medium' | 'low';
  timeToMaster: string;
  courses: {
    title: string;
    provider: string;
    type: 'free' | 'paid';
    url: string;
    rating?: number;
  }[];
}

interface SkillsRecommendationsProps {
  missingSkills: Skill[];
  trendingSkills: string[];
}

export default function SkillsRecommendations({ missingSkills, trendingSkills }: SkillsRecommendationsProps) {
  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'free' 
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Missing Skills & Learning Path
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {missingSkills.map((skill, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-skill-${index}`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-medium">{skill.name}</CardTitle>
                  <Badge className={getImportanceColor(skill.importance)} variant="secondary">
                    {skill.importance}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{skill.timeToMaster}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {skill.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="border rounded-lg p-3 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{course.title}</h4>
                        <p className="text-xs text-muted-foreground">{course.provider}</p>
                      </div>
                      {course.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs">{course.rating}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge className={getTypeColor(course.type)} variant="secondary">
                        {course.type}
                      </Badge>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => console.log(`Opening course: ${course.title}`)}
                        data-testid={`button-course-${index}-${courseIndex}`}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Trending Skills in Your Field
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2" data-testid="trending-skills-list">
            {trendingSkills.map((skill, index) => (
              <Badge key={index} variant="outline" className="hover-elevate cursor-pointer">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}