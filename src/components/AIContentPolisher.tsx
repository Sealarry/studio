"use client"

import React, { useState } from 'react';
import { Sparkles, Loader2, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { aiPortfolioContentGenerator } from '@/ai/flows/ai-portfolio-content-generator';
import { toast } from '@/hooks/use-toast';

export function AIContentPolisher() {
  const [input, setInput] = useState('');
  const [isPolishing, setIsPolishing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handlePolish = async () => {
    if (!input.trim()) {
      toast({
        title: "Empty Input",
        description: "Please enter some text to polish.",
        variant: "destructive"
      });
      return;
    }

    setIsPolishing(true);
    try {
      // Mock the other fields for the flow
      const res = await aiPortfolioContentGenerator({
        aboutMeRaw: input,
        educationRaw: "",
        certificationsRaw: "",
        workHistoryRaw: "",
        skillsRaw: "",
        projectsRaw: "",
        contactLinksRaw: "",
        visualBrandingRaw: "Navy blue, Cyber Teal, Modern Tech theme"
      });
      setResult(res.aboutMe);
      toast({
        title: "Success",
        description: "Content polished by AI.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to polish content. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsPolishing(false);
    }
  };

  return (
    <Card className="border-accent/20 bg-secondary/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-accent">
          <Sparkles className="w-5 h-5" />
          AI Content Polisher
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          Paste your raw career content below to see how our AI enhances professional branding.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="E.g., I worked on a project where I built a network for a small company using Cisco gear..."
          className="min-h-[120px] bg-background/50 border-accent/10 focus-visible:ring-accent"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {result && (
          <div className="p-4 rounded-md bg-accent/5 border border-accent/20 animate-in fade-in slide-in-from-top-2">
            <h4 className="text-xs font-bold uppercase text-accent mb-2 flex items-center gap-1">
              <Wand2 className="w-3 h-3" /> Polished Version
            </h4>
            <p className="text-sm leading-relaxed">{result}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handlePolish} 
          disabled={isPolishing}
          className="w-full bg-accent text-background hover:bg-accent/90"
        >
          {isPolishing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Polishing...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Polish Content
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
