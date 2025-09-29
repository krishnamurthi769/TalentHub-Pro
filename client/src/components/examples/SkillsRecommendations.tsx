import SkillsRecommendations from '../SkillsRecommendations';

export default function SkillsRecommendationsExample() {
  // Mock data for demonstration
  const mockData = {
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
          },
          {
            title: "Advanced TypeScript",
            provider: "Udemy",
            type: "paid" as const,
            url: "#",
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
            provider: "Docker",
            type: "free" as const,
            url: "#",
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
            title: "GraphQL Basics",
            provider: "Apollo",
            type: "free" as const,
            url: "#",
            rating: 4.5
          }
        ]
      }
    ],
    trendingSkills: ["Next.js", "Tailwind CSS", "Prisma", "tRPC", "Zustand", "React Query", "Vitest"]
  };

  return (
    <div className="p-6">
      <SkillsRecommendations {...mockData} />
    </div>
  );
}