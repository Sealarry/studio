import { portfolioData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle2 } from 'lucide-react';

export default function CertificationsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-5xl">
      <div className="mb-16">
        <h1 className="text-5xl font-bold font-headline mb-4">Certifications <span className="text-accent">& Expertise</span></h1>
        <p className="text-muted-foreground text-lg">Industry-recognized credentials validating technical proficiency.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.certifications.map((cert, i) => (
          <div key={i} className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <span className="text-accent text-xs font-bold tracking-widest uppercase">{cert.year}</span>
              <h3 className="text-xl font-bold font-headline mt-1 mb-2">{cert.name}</h3>
              <p className="text-muted-foreground font-medium text-sm">Issued by <span className="text-foreground">{cert.issuer}</span></p>
              <div className="mt-4 flex items-center gap-2 text-xs text-accent font-bold uppercase">
                <CheckCircle2 className="w-4 h-4" />
                Verified Credential
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-10 rounded-2xl border-l-4 border-accent bg-secondary/10">
        <h3 className="text-xl font-bold font-headline mb-4">Future Roadmap</h3>
        <p className="text-foreground/70 leading-relaxed mb-6">
          I am committed to continuous learning and actively expanding my expertise. My current focus is preparing for the following advanced credentials:
        </p>
        <div className="flex flex-wrap gap-4">
          <Badge variant="outline" className="px-4 py-2 border-accent/20 text-accent font-bold">AWS Certified Solutions Architect</Badge>
          <Badge variant="outline" className="px-4 py-2 border-accent/20 text-accent font-bold">CISSP</Badge>
          <Badge variant="outline" className="px-4 py-2 border-accent/20 text-accent font-bold">CCNP Enterprise</Badge>
        </div>
      </div>
    </div>
  );
}
