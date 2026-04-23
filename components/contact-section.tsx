import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/naim-abdul-rahman/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/naimr02",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:naimrahman2602@gmail.com",
    icon: Mail,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Get in Touch
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Interested in working together or just want to say hello? I&apos;d love to
          hear from you. Feel free to reach out through any of the channels
          below.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              size="lg"
              className="gap-2"
              asChild
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="w-5 h-5" />
                {link.name}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
