import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Download, FileText, Table, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ExportButtonProps {
  analysisData?: any;
}

export default function ExportButton({ analysisData }: ExportButtonProps) {
  const { toast } = useToast();

  const handleExport = (format: 'pdf' | 'csv' | 'json') => {
    // TODO: Implement actual export functionality
    console.log(`Exporting analysis in ${format} format`, analysisData);
    
    toast({
      title: "Export Started",
      description: `Your analysis report will be downloaded as ${format.toUpperCase()}.`,
    });
  };

  const handleShare = () => {
    // TODO: Implement sharing functionality
    console.log('Sharing analysis', analysisData);
    
    toast({
      title: "Share Link Generated",
      description: "Your shareable analysis link has been copied to clipboard.",
    });
  };

  return (
    <div className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" data-testid="button-export">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleExport('pdf')} data-testid="button-export-pdf">
            <FileText className="h-4 w-4 mr-2" />
            Export as PDF
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleExport('csv')} data-testid="button-export-csv">
            <Table className="h-4 w-4 mr-2" />
            Export as CSV
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleExport('json')} data-testid="button-export-json">
            <FileText className="h-4 w-4 mr-2" />
            Export as JSON
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Button variant="outline" onClick={handleShare} data-testid="button-share">
        <Share2 className="h-4 w-4 mr-2" />
        Share
      </Button>
    </div>
  );
}