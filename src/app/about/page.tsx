import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { portfolioData } from '@/lib/data';
import { GraduationCap, Target, Briefcase, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-5xl">
      <div className="mb-16">
        <h1 className="text-5xl font-bold font-headline mb-6">About <span className="text-accent">Me</span></h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          The intersection of hardware discipline and software security.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <div className="flex items-center gap-2 mb-6 text-accent">
              <Target className="w-6 h-6" />
              <h2 className="text-2xl font-bold font-headline uppercase tracking-wide">Biography & Goals</h2>
            </div>
            <div className="prose prose-invert max-w-none text-foreground/80 leading-relaxed whitespace-pre-wrap">
              {portfolioData.aboutMe}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-6 text-accent">
              <GraduationCap className="w-6 h-6" />
              <h2 className="text-2xl font-bold font-headline uppercase tracking-wide">Education</h2>
            </div>
            <div className="space-y-8">
              {portfolioData.education.map((edu, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-accent/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent glow-teal" />
                  <div className="mb-2">
                    <span className="text-accent font-bold text-sm tracking-widest uppercase">{edu.completed}</span>
                    <h3 className="text-xl font-bold font-headline mt-1">{edu.degree}</h3>
                    <p className="text-foreground/60 font-medium">{edu.specialization} — {edu.institution}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {edu.coursework.map(course => (
                      <Badge key={course} variant="outline" className="border-border text-xs text-foreground/70">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <Card className="bg-secondary/20 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <BookOpen className="w-5 h-5" />
                Key Interests
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-foreground/80">
              <p>Network Security Architecture</p>
              <Separator className="bg-border/50" />
              <p>Cloud Governance & Compliance</p>
              <Separator className="bg-border/50" />
              <p>Risk Defense & Incident Management</p>
              <Separator className="bg-border/50" />
              <p>Technical Mentorship for Veterans</p>
            </CardContent>
          </Card>

          <Card className="bg-primary/10 border-accent/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Briefcase className="w-5 h-5" />
                Snapshot
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-1">Current Focus</h4>
                <p className="text-sm">Master's in IT Management</p>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-1">Service</h4>
                <p className="text-sm">U.S. Army Reserve Engineer</p>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-1">Legacy</h4>
                <p className="text-sm">8 Years Offshore Engineering</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
