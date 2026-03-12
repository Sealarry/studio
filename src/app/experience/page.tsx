import { portfolioData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Shield, Hammer, Anchor, Terminal } from 'lucide-react';
import { AIContentPolisher } from '@/components/AIContentPolisher';

export default function ExperiencePage() {
  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('army')) return Shield;
    if (title.toLowerCase().includes('construction')) return Hammer;
    if (title.toLowerCase().includes('marine')) return Anchor;
    return Terminal;
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-2/3">
          <h1 className="text-5xl font-bold font-headline mb-4">Work <span className="text-accent">History</span></h1>
          <p className="text-muted-foreground text-lg mb-12">Professional journey from offshore rigs to secure servers.</p>

          <div className="space-y-12">
            {portfolioData.experience.map((exp, i) => {
              const Icon = getIcon(exp.title + exp.company);
              return (
                <div key={i} className="group relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8">
                  <div className="hidden md:block">
                     <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center border border-border group-hover:border-accent/50 transition-colors">
                        <Icon className="w-8 h-8 text-accent" />
                     </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-2xl font-bold font-headline">{exp.title}</h3>
                      <span className="text-accent text-sm font-bold font-code">{exp.period}</span>
                    </div>
                    <p className="text-foreground/70 font-bold uppercase text-xs tracking-widest">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                    <div className="p-5 rounded-xl bg-accent/5 border border-accent/10">
                      <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Key Impact</h4>
                      <p className="text-sm text-foreground/80 leading-relaxed italic">{exp.impact}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:w-1/3 space-y-12">
          <section className="space-y-8">
            <h2 className="text-2xl font-bold font-headline flex items-center gap-2">
              <Terminal className="w-6 h-6 text-accent" />
              Skills & Expertise
            </h2>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Technical Proficiency</h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.technical.map(skill => (
                    <Badge key={skill} variant="secondary" className="bg-secondary text-xs">{skill}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.tools.map(tool => (
                    <Badge key={tool} variant="outline" className="border-accent/20 text-xs">{tool}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Professional Discipline</h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.professional.map(skill => (
                    <Badge key={skill} variant="default" className="bg-primary/50 text-xs">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <AIContentPolisher />
        </div>
      </div>
    </div>
  );
}
