import { Mail, Github, Linkedin, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t bg-card/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-headline font-bold text-xl text-accent mb-4">
              <ShieldCheck className="w-6 h-6" />
              <span>CyberPro Connect</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building secure, resilient systems and empowering others through knowledge and leadership.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Me</Link></li>
              <li><Link href="/experience" className="hover:text-accent transition-colors">Experience</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href={`mailto:${portfolioData.contact.email}`} className="text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {portfolioData.contact.email}
            </p>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
