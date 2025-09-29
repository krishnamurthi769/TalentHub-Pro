import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Briefcase, Sparkles } from "lucide-react";

interface InputFormProps {
  onSubmit: (resumeText: string, jobDescriptionText: string) => void;
  isLoading?: boolean;
}

export default function InputForm({ onSubmit, isLoading = false }: InputFormProps) {
  const [resumeText, setResumeText] = useState("");
  const [jobDescriptionText, setJobDescriptionText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resumeText.trim() && jobDescriptionText.trim()) {
      onSubmit(resumeText, jobDescriptionText);
    }
  };

  const isValid = resumeText.trim().length > 0 && jobDescriptionText.trim().length > 0;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">
          TalentHub Pro
        </h1>
        <p className="text-lg text-muted-foreground">
          AI-powered career analysis to match your skills with opportunities
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover-elevate">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl font-medium flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Resume Text
              </CardTitle>
              <CardDescription>
                Paste your complete resume or CV content here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Label htmlFor="resume-text" className="sr-only">
                Resume Text
              </Label>
              <Textarea
                id="resume-text"
                data-testid="input-resume"
                placeholder="Paste your resume content here...\n\nExample: Software Engineer with 5 years of experience in React, Node.js, and Python. Led development of scalable web applications..."
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                className="min-h-[300px] resize-none text-base"
                disabled={isLoading}
              />
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl font-medium flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Job Description
              </CardTitle>
              <CardDescription>
                Paste the job posting or role description you're targeting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Label htmlFor="job-description" className="sr-only">
                Job Description
              </Label>
              <Textarea
                id="job-description"
                data-testid="input-job-description"
                placeholder="Paste the job description here...\n\nExample: Senior Software Engineer - We're looking for an experienced developer with expertise in React, TypeScript, and cloud technologies..."
                value={jobDescriptionText}
                onChange={(e) => setJobDescriptionText(e.target.value)}
                className="min-h-[300px] resize-none text-base"
                disabled={isLoading}
              />
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            type="submit"
            data-testid="button-analyze"
            size="lg"
            disabled={!isValid || isLoading}
            className="px-8 py-3 text-lg font-medium"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Analyze Career Fit
              </>
            )}
          </Button>
          {!isValid && (
            <p className="text-sm text-muted-foreground mt-2">
              Please fill in both resume and job description to continue
            </p>
          )}
        </div>
      </form>
    </div>
  );
}