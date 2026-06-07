import { skills, skillCategories } from '@/data/skills';

export function SkillsSection() {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Skills & Toolkit
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([key, label]) => (
            <div key={key} className="space-y-4">
              <h3 className="text-sm font-medium text-primary dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#CFBDFF] dark:via-[#E0CCFF] dark:to-[#CFBDFF]">{label}</h3>
              <div className="flex flex-wrap gap-2">
                {groupedSkills[key]?.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
