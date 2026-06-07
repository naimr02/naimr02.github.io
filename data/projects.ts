export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "gclc",
    title: "Garden City Learning Center",
    description:
      "Developed a full-scale educational platform during my internship. Custom-coded CSS and JS to ensure the Squarespace UI is pleasant to navigate and mobile-responsive.",
    tech: ["Squarespace", "Custom CSS", "JavaScript"],
    liveUrl: "https://gardencitylearningcenter.org",
    image: "/projects/gclc.png",
  },
  {
    id: "rehabmy",
    title: "RehabMy (Physio Tracker)",
    description:
      "A Kotlin/Jetpack Compose app for lower limb rehabilitation. Real-time updates via Firebase so recovery progress is always steady.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase"],
    githubUrl: "https://github.com/naimr02/RehabMy",
    image: "/projects/rehabmy.jpeg",
  },
  {
    id: "nomeritgo",
    title: "NoMeritGo (Event Finder)",
    description:
      "Integrated Google Maps SDK to help students find merit events nearby. Secure login via OAuth2 ensures student data is safe.",
    tech: ["Android Studio", "Google Maps SDK", "Firebase"],
    githubUrl: "https://github.com/naimr02/NoMeritGo",
    image: "/projects/nomeritgo.jpeg",
  },
];