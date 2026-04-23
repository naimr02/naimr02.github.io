export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            About Me
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="bg-card border border-border rounded-lg p-8 md:p-10">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              I&apos;m a developer who believes in continuous evolution. My journey
              started with WordPress and PHP, where I learned the fundamentals
              of building for the web—from custom theme development to plugin
              architecture and client management.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              That foundation taught me how to solve real problems for real
              users. Now, I&apos;m channeling that experience into modern frontend
              development with <span className="text-primary dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#CFBDFF] dark:via-[#E0CCFF] dark:to-[#CFBDFF] font-medium">React</span>,{" "}
              <span className="text-primary dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#CFBDFF] dark:via-[#E0CCFF] dark:to-[#CFBDFF] font-medium">Next.js</span>, and{" "}
              <span className="text-primary dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#CFBDFF] dark:via-[#E0CCFF] dark:to-[#CFBDFF] font-medium">TypeScript</span>—building
              performant, accessible applications that scale.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90">
              I&apos;m drawn to teams that value clean code, thoughtful UX, and
              continuous learning. Whether it&apos;s maintaining legacy systems or
              building greenfield projects, I approach every challenge with
              curiosity and a commitment to growth.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground italic">
              Currently seeking full-time frontend or full-stack roles where I
              can contribute to meaningful products while continuing to expand
              my technical expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
