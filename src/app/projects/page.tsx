import { portfolioData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="mb-16">
        <h1 className="text-5xl font-bold font-headline mb-4">Projects <span className="text-accent">Portfolio</span></h1>
        <p className="text-muted-foreground text-lg">Simulated and real-world infrastructure solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {portfolioData.projects.map((project, i) => (
          <div key={i} className="group relative flex flex-col rounded-3xl bg-card border border-border/50 overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1">
            <div className="h-2 w-full bg-gradient-to-r from-accent to-primary opacity-50" />
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-accent">
                  <FolderOpen className="w-6 h-6" />
                </div>
                {project.link && (
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.link.includes('github') ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                      </a>
                    </Button>
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-bold font-headline mb-3">{project.title}</h3>
              <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Problem Solved</p>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">{project.purpose}</p>
              
              <div className="space-y-6 mt-auto">
                <div>
                  <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Technical Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map(tool => (
                      <Badge key={tool} variant="secondary" className="bg-secondary/50 text-[10px] uppercase">{tool}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                  <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Real-World Application</h4>
                  <p className="text-xs text-foreground/60 leading-relaxed italic">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 rounded-3xl bg-primary/20 border border-accent/20 text-center">
        <h2 className="text-3xl font-bold font-headline mb-4 italic">Continuous Evolution</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          I am constantly developing new lab environments and contributing to open-source security tools. Follow my GitHub for live updates on my technical journey.
        </p>
        <Button size="lg" className="bg-accent text-background hover:bg-accent/90 rounded-full px-10 font-bold" asChild>
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 w-5 h-5" />
            Explore GitHub
          </a>
        </Button>
      </div>
    </div>
  );
}
