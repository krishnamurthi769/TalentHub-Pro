import MatchSummary from '../MatchSummary';

export default function MatchSummaryExample() {
  // Mock data for demonstration
  const mockData = {
    matchScore: 78,
    fitJustification: "Your strong background in React and TypeScript aligns well with the technical requirements. Your experience leading development teams is particularly valuable for this senior role.",
    culturalVibe: "This role emphasizes innovation and collaborative problem-solving, which matches your demonstrated leadership style and open-source contributions."
  };

  return (
    <div className="p-6">
      <MatchSummary {...mockData} />
    </div>
  );
}