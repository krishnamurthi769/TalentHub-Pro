import CareerRoadmap from '../CareerRoadmap';

export default function CareerRoadmapExample() {
  // Mock data for demonstration
  const mockNodes = [
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
    },
    {
      id: "3",
      title: "Senior Engineer",
      description: "Lead technical decisions and mentor junior developers",
      timeframe: "1-2 years",
      skills: ["System Architecture", "Leadership", "Performance Optimization", "Code Review"],
      level: "expert" as const
    },
    {
      id: "4",
      title: "Tech Lead/Principal",
      description: "Drive technical strategy and cross-team initiatives",
      timeframe: "2+ years",
      skills: ["Technical Strategy", "Team Management", "Cross-functional Collaboration", "Innovation"],
      level: "expert" as const
    }
  ];

  return (
    <div className="p-6">
      <CareerRoadmap nodes={mockNodes} />
    </div>
  );
}