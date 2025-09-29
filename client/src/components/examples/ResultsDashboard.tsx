import ResultsDashboard from '../ResultsDashboard';

export default function ResultsDashboardExample() {
  // Mock analysis result for demonstration
  const mockAnalysisResult = {
    matchScore: 78,
    fitJustification: "Your strong background in React and TypeScript aligns well with the technical requirements. Your experience leading development teams is particularly valuable for this senior role.",
    culturalVibe: "This role emphasizes innovation and collaborative problem-solving, which matches your demonstrated leadership style and open-source contributions.",
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
            url: "#",
            rating: 4.8
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
            provider: "Docker",
            type: "free" as const,
            url: "#",
            rating: 4.7
          }
        ]
      }
    ],
    trendingSkills: ["Next.js", "Tailwind CSS", "Prisma", "tRPC", "Zustand"],
    marketDemandScores: {
      "React": 9,
      "TypeScript": 8,
      "Node.js": 7,
      "Python": 8,
      "AWS": 9,
      "Docker": 6
    },
    careerRoadmap: [
      {
        id: "1",
        title: "Frontend Specialist",
        description: "Master modern frontend development with React ecosystem",
        timeframe: "3-6 months",
        skills: ["TypeScript", "Advanced React", "State Management", "Testing"],
        level: "intermediate" as const
      },
      {
        id: "2",
        title: "Full-Stack Developer",
        description: "Expand to backend development and system design",
        timeframe: "6-12 months",
        skills: ["Node.js", "API Design", "Database Design", "DevOps Basics"],
        level: "advanced" as const
      }
    ]
  };

  const handleStartOver = () => {
    console.log('Starting new analysis...');
  };

  return (
    <ResultsDashboard 
      analysisResult={mockAnalysisResult} 
      onStartOver={handleStartOver} 
    />
  );
}