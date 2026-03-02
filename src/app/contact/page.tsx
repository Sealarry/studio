import { portfolioData } from '@/lib/data';
import { Mail, Linkedin, Github, Globe, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-bold font-headline mb-6">Let's <span className="text-accent">Connect</span></h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Open for collaboration on cybersecurity initiatives, infrastructure projects, or mentorship opportunities. Whether you're a recruiter, a fellow engineer, or just starting your IT journey—reach out!
          </p>

          <div className="space-y-6">
            <a 
              href={`mailto:${portfolioData.contact.email}`} 
              className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Email Address</p>
                <p className="text-lg font-headline font-bold">{portfolioData.contact.email}</p>
              </div>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a 
                href={portfolioData.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground tracking-widest">LinkedIn</p>
                  <p className="text-sm font-bold">Olarenwaju Odediran</p>
                </div>
              </a>

              <a 
                href={portfolioData.contact.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground tracking-widest">GitHub</p>
                  <p className="text-sm font-bold">@Sealarry</p>
                </div>
              </a>
            </div>

            <a 
              href={portfolioData.contact.relevantLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 p-6 rounded-2xl bg-primary/10 border border-accent/20 hover:border-accent/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-accent tracking-widest mb-1">Interactive Studio Link</p>
                <p className="text-xs font-mono font-bold truncate max-w-[200px]">{portfolioData.contact.relevantLink}</p>
              </div>
            </a>
          </div>
        </div>

        <Card className="bg-card border-border/50 p-2 overflow-hidden">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold font-headline mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input placeholder="Your Name" className="bg-secondary/50 border-border focus-visible:ring-accent" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input placeholder="email@example.com" type="email" className="bg-secondary/50 border-border focus-visible:ring-accent" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                <Input placeholder="How can I help?" className="bg-secondary/50 border-border focus-visible:ring-accent" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea placeholder="Write your message here..." className="bg-secondary/50 border-border focus-visible:ring-accent min-h-[150px]" />
              </div>
              <Button size="lg" className="w-full bg-accent text-background hover:bg-accent/90 font-bold h-12">
                <Send className="mr-2 w-4 h-4" />
                Send Connection Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
