import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Experience
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="md:pl-8 relative">
            <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center hidden md:flex">
              <Briefcase className="w-3 h-3 text-primary" />
            </div>

            <div className="bg-card shadow-[var(--shadow-elevation-1)] hover:shadow-[var(--shadow-elevation-2)] transition-shadow rounded-[28px] p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Web Intern</h3>
                  <p className="text-primary dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#CFBDFF] dark:via-[#E0CCFF] dark:to-[#CFBDFF] font-medium">
                    Tin City Impact
                  </p>
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  Sept 2025 — Dec 2026
                </span>
              </div>

              <p className="text-muted-foreground mb-6">
                Engineered end-to-end web solutions and high-conversion landing pages for diverse industries, ensuring every site is steady and performance-optimized.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-4">
                    CMS & WEB SOLUTIONS
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/90">
                        Built the full site for Garden City Learning Center and landing pages for easyRCA using custom CSS and JS.
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/90">
                        Maintained 100% site uptime through proactive troubleshooting and vulnerability scanning.
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/90">
                        Performed weekly maintenance for a diverse client portfolio to ensure cun performance and top-tier security.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-4">
                    LMS & DATA MIGRATION
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/90">
                        Orchestrated a massive LMS consolidation for LevelUp, migrating 800+ courses into a unified WordPress ecosystem.
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/90">
                        Maintained the entire migration process using LearnDash while ensuring 100% data integrity and continuity.
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/90">
                        Ensured the transition was seamless for learners so their study progress stayed steady throughout the move.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {[
                    "WordPress",
                    "Squarespace",
                    "Custom CSS/JS",
                    "LearnDash",
                    "Themeco",
                    "SEO Optimization",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
