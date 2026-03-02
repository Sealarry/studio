import Link from 'next/link';
import { ShieldCheck, Cpu, Terminal, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-accent/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] bg-primary/20 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-6 border-accent text-accent px-4 py-1 text-xs uppercase tracking-widest font-bold">
            U.S. Army Reserve | Cybersecurity Professional
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl font-headline tracking-tighter leading-tight">
            Securing the <span className="text-accent italic">Digital Frontier</span> Through Discipline & Tech
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl font-body leading-relaxed">
            I build secure, resilient network infrastructures and cloud architectures for enterprise environments and government organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent text-background hover:bg-accent/90 px-8 rounded-full h-12 shadow-lg shadow-accent/20 font-bold" asChild>
              <Link href="/projects">View Portfolio</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent/50 text-accent hover:bg-accent/10 px-8 rounded-full h-12" asChild>
              <Link href="/experience">Work History</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Expertise Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: ShieldCheck, 
              title: "Network Defense", 
              desc: "Layered security strategies, VLAN segmentation, and enterprise firewall management.",
              color: "accent"
            },
            { 
              icon: Cpu, 
              title: "Cloud Infrastructure", 
              desc: "Designing scalable, high-availability AWS architectures with a focus on risk management.",
              color: "accent"
            },
            { 
              icon: Terminal, 
              title: "Systems Maintenance", 
              desc: "Expertise in technical inspections, troubleshooting, and infrastructure readiness.",
              color: "accent"
            }
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Military & Marine Background Highlight */}
      <section className="bg-primary/20 py-24 border-y border-border/50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold font-headline">Built on Operational <span className="text-accent">Discipline</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Transitioning from 8 years as an Offshore Marine Engineer to the U.S. Army Reserve and modern Cybersecurity. I bring a unique "systems-first" mindset developed under high-pressure, mission-critical environments.
            </p>
            <ul className="space-y-4">
              {[
                "Analytical Problem Solving under pressure",
                "Strict adherence to Operational Security (OPSEC)",
                "Infrastructure management & technical inspection expertise"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/90 font-medium">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
            <Button variant="link" className="text-accent p-0 font-bold group" asChild>
              <Link href="/about" className="flex items-center gap-2">
                Read full background <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-3xl overflow-hidden border border-accent/20 glow-teal bg-card flex items-center justify-center">
                <Globe className="w-32 h-32 text-accent opacity-20 absolute" />
                <div className="p-10 text-center relative z-10">
                  <Terminal className="w-16 h-16 text-accent mb-6 mx-auto" />
                  <code className="text-xs text-accent/80 block mb-4">root@cyberpro-connect:~# whoami</code>
                  <p className="font-code text-sm leading-relaxed text-foreground/80">
                    &gt; Cybersecurity Researcher<br/>
                    &gt; Infrastructure Specialist<br/>
                    &gt; Army Reserve Engineer<br/>
                    &gt; Master's IT Candidate
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold font-headline mb-4">Selected Projects</h2>
            <p className="text-muted-foreground">Practical applications of security and architecture.</p>
          </div>
          <Button variant="outline" className="hidden sm:flex border-accent text-accent hover:bg-accent hover:text-background" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.slice(0, 2).map((project, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl bg-card border border-border/50 hover:shadow-2xl hover:shadow-accent/5 transition-all">
               <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map(tool => (
                    <Badge key={tool} variant="secondary" className="bg-secondary/50 text-[10px] uppercase font-bold tracking-tighter">
                      {tool}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors font-headline">{project.title}</h3>
                <p className="text-muted-foreground line-clamp-3 mb-6">{project.description}</p>
                <Button variant="link" className="p-0 text-accent font-bold" asChild>
                  <Link href="/projects">Read Case Study</Link>
                </Button>
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
