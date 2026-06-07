export interface Skill {
  name: string;
  category: "web" | "mobile" | "cms" | "tools";
}

export const skills: Skill[] = [
  { name: "HTML/CSS", category: "web" },
  { name: "JavaScript", category: "web" },
  { name: "Kotlin", category: "mobile" },
  { name: "Jetpack Compose", category: "mobile" },
  { name: "WordPress", category: "cms" },
  { name: "Squarespace", category: "cms" },
  { name: "LearnDash", category: "cms" },
  { name: "Git/GitHub", category: "tools" },
  { name: "Firebase", category: "tools" },
  { name: "Google Maps SDK", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "SEO Optimization", category: "tools" },
];

export const skillCategories: Record<string, string> = {
  web: "Web & Core Tech",
  mobile: "Mobile & Frontend",
  cms: "CMS & Platforms",
  tools: "Tools & Services",
};