import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    title: "Garden City Learning Center",
    description:
      "Developed a full-scale educational platform during my internship. Custom-coded CSS and JS to ensure the Squarespace UI is cun and mobile-responsive.",
    tech: ["Squarespace", "Custom CSS", "JavaScript"],
    liveUrl: "https://gardencitylearningcenter.org",
    image: "/projects/gclc.png",
  },
  {
    title: "RehabMy (Physio Tracker)",
    description:
      "A Kotlin/Jetpack Compose app for lower limb rehabilitation. Real-time updates via Firebase so recovery progress is always steady.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase"],
    liveUrl: "",
    githubUrl: "https://github.com/naimr02/RehabMy",
    image: "/projects/rehabmy.jpeg",
  },
  {
    title: "NoMeritGo (Event Finder)",
    description:
      "Integrated Google Maps SDK to help students find merit events nearby. Secure login via OAuth2 ensures student data is safe.",
    tech: ["Android Studio", "Google Maps SDK", "Firebase"],
    liveUrl: "",
    githubUrl: "https://github.com/naimr02/NoMeritGo",
    image: "/projects/nomeritgo.jpeg",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Projects
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`group overflow-hidden h-full flex flex-col bg-card shadow-[var(--shadow-elevation-1)] transition-all duration-300 hover:shadow-[var(--shadow-elevation-3)] hover:-translate-y-2 rounded-[28px] ${
                projects.length === 3 && index === 2
                  ? "md:col-span-2 md:w-[calc(50%-12px)] md:mx-auto lg:col-span-1 lg:w-auto lg:mx-0"
                  : ""
              }`}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-[16px] bg-secondary mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl font-bold text-muted-foreground/50">
                          {index + 1}
                        </span>
                      </div>
                      <span>Project Screenshot</span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-[#CFBDFF] dark:group-hover:via-[#E0CCFF] dark:group-hover:to-[#CFBDFF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-0 md:mt-auto">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {project.title === "Garden City Learning Center" ? "Website" : "Live Demo"}
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
