import { useState } from "react";
import InputForm from "@/components/InputForm";
import LoadingState from "@/components/LoadingState";
import ResultsDashboard from "@/components/ResultsDashboard";

// Mock analysis result for demonstration
const getMockAnalysisResult = () => ({
  matchScore: Math.floor(Math.random() * 40) + 60, // 60-100%
  fitJustification: "Your strong background in React and TypeScript aligns well with the technical requirements. Your experience leading development teams is particularly valuable for this senior role. The combination of your technical skills and leadership experience makes you a compelling candidate.",
  culturalVibe: "This role emphasizes innovation and collaborative problem-solving, which matches your demonstrated leadership style and open-source contributions. The company values continuous learning and technical excellence, aligning with your professional growth trajectory.",
  missingSkills: [
    {
      name: "TypeScript",
      importance: "high" as const,
      timeToMaster: "2-3 months",
      courses: [
        {
          title: "TypeScript Fundamentals",
          provider: "freeCodeCamp",
          type: "free" as const,
          url: "https://freecodecamp.org",
          rating: 4.8
        },
        {
          title: "Advanced TypeScript Patterns",
          provider: "Udemy",
          type: "paid" as const,
          url: "https://udemy.com",
          rating: 4.6
        }
      ]
    },
    {
      name: "Docker",
      importance: "medium" as const,
      timeToMaster: "1-2 months",
      courses: [
        {
          title: "Docker for Beginners",
          provider: "Docker Hub",
          type: "free" as const,
          url: "https://docker.com",
          rating: 4.7
        }
      ]
    },
    {
      name: "GraphQL",
      importance: "medium" as const,
      timeToMaster: "3-4 weeks",
      courses: [
        {
          title: "GraphQL Fundamentals",
          provider: "Apollo",
          type: "free" as const,
          url: "https://apollographql.com",
          rating: 4.5
        }
      ]
    }
  ],
  trendingSkills: ["Next.js", "Tailwind CSS", "Prisma", "tRPC", "Zustand", "React Query", "Vitest", "Remix"],
  marketDemandScores: {
    "React": 9,
    "TypeScript": 8,
    "Node.js": 7,
    "Python": 8,
    "AWS": 9,
    "Docker": 6,
    "GraphQL": 5,
    "MongoDB": 6,
    "PostgreSQL": 7,
    "Kubernetes": 5,
    "Next.js": 8,
    "Tailwind CSS": 7
  },
  careerRoadmap: [
    {
      id: "1",
      title: "Frontend Specialist",
      description: "Master modern frontend development with React ecosystem and advanced patterns",
      timeframe: "3-6 months",
      skills: ["TypeScript", "Advanced React", "State Management", "Testing", "Performance Optimization"],
      level: "intermediate" as const
    },
    {
      id: "2",
      title: "Full-Stack Developer",
      description: "Expand to backend development and system design principles",
      timeframe: "6-12 months",
      skills: ["Node.js", "API Design", "Database Design", "DevOps Basics", "Cloud Services"],
      level: "advanced" as const
    },
    {
      id: "3",
      title: "Senior Engineer",
      description: "Lead technical decisions and mentor junior developers",
      timeframe: "1-2 years",
      skills: ["System Architecture", "Leadership", "Performance Optimization", "Code Review", "Technical Strategy"],
      level: "expert" as const
    },
    {
      id: "4",
      title: "Tech Lead/Principal",
      description: "Drive technical strategy and cross-team initiatives",
      timeframe: "2+ years",
      skills: ["Technical Strategy", "Team Management", "Cross-functional Collaboration", "Innovation", "Mentoring"],
      level: "expert" as const
    }
  ]
});

type AppState = 'input' | 'loading' | 'results';

type AnalysisResult = ReturnType<typeof getMockAnalysisResult>;

export default function Home() {
  const [appState, setAppState] = useState<AppState>('input');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleFormSubmit = async (resumeText: string, jobDescriptionText: string) => {
    console.log('Starting analysis...', { resumeText: resumeText.substring(0, 100) + '...', jobDescriptionText: jobDescriptionText.substring(0, 100) + '...' });
    
    setAppState('loading');
    
    // TODO: Replace with actual API call to backend
    // Simulate API call delay
    setTimeout(() => {
      const mockResult = getMockAnalysisResult();
      setAnalysisResult(mockResult);
      setAppState('results');
      console.log('Analysis complete:', mockResult);
    }, 3000);
  };

  const handleStartOver = () => {
    setAppState('input');
    setAnalysisResult(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {appState === 'input' && (
        <InputForm onSubmit={handleFormSubmit} isLoading={false} />
      )}
      
      {appState === 'loading' && (
        <LoadingState message="Analyzing your career fit..." />
      )}
      
      {appState === 'results' && analysisResult && (
        <ResultsDashboard 
          analysisResult={analysisResult} 
          onStartOver={handleStartOver} 
        />
      )}
    </div>
  );
}