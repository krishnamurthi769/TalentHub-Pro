import ExportButton from '../ExportButton';

export default function ExportButtonExample() {
  const mockAnalysisData = {
    matchScore: 78,
    analysisDate: new Date().toISOString()
  };

  return (
    <div className="p-6">
      <ExportButton analysisData={mockAnalysisData} />
    </div>
  );
}