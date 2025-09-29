import MarketDemandChart from '../MarketDemandChart';

export default function MarketDemandChartExample() {
  // Mock data for demonstration
  const mockMarketDemand = {
    "React": 9,
    "TypeScript": 8,
    "Node.js": 7,
    "Python": 8,
    "AWS": 9,
    "Docker": 6,
    "GraphQL": 5,
    "MongoDB": 6,
    "PostgreSQL": 7,
    "Kubernetes": 5
  };

  return (
    <div className="p-6">
      <MarketDemandChart marketDemandScores={mockMarketDemand} />
    </div>
  );
}