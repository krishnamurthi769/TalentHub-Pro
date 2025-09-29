import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Brain, Search, Target } from "lucide-react";

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({ message = "Analyzing your career fit..." }: LoadingStateProps) {
  const steps = [
    { icon: Search, text: "Parsing resume content", delay: "0s" },
    { icon: Brain, text: "Analyzing job requirements", delay: "0.5s" },
    { icon: Target, text: "Calculating match score", delay: "1s" },
    { icon: Sparkles, text: "Generating recommendations", delay: "1.5s" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6" data-testid="loading-state">
      <Card>
        <CardContent className="p-12">
          <div className="text-center space-y-6">
            {/* Main loading animation */}
            <div className="relative mx-auto w-24 h-24">
              <div className="absolute inset-0 rounded-full border-4 border-muted"></div>
              <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
              <div className="absolute inset-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              </div>
            </div>
            
            {/* Loading message */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">{message}</h2>
              <p className="text-muted-foreground">
                Our AI is processing your information to provide personalized insights
              </p>
            </div>
            
            {/* Step indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index} 
                    className="flex flex-col items-center space-y-2 opacity-50 animate-pulse"
                    style={{ animationDelay: step.delay }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground text-center">
                      {step.text}
                    </span>
                  </div>
                );
              })}
            </div>
            
            {/* Progress bar */}
            <div className="w-full max-w-md mx-auto mt-6">
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '65%' }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">This usually takes 30-60 seconds</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}