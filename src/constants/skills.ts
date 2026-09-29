import type { IconType } from "react-icons";
import { FaBug, FaDatabase, FaHtml5, FaUserShield } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGithub,
  SiDocker,
  SiPython,
  SiHtml5,
  SiCss,
  SiDjango,
  SiMysql,
  SiPrisma,
  SiDrizzle,
  SiLinux,
  SiGnubash,
  SiPostman,
  SiSwagger,
  SiGithubcopilot,
  SiCplusplus,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
  category: string;
};

export const skills = [
  // Languages
  {
    name: "JavaScript (ES6+)",
    icon: SiJavascript,
    color: "#F7DF1E",
    category: "languages",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    category: "languages",
  },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "languages" },
  { name: "C++", icon: SiCplusplus, color: "#00599C", category: "languages" },

  // Frontend
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "frontend" },
  { name: "CSS3", icon: SiCss, color: "#1572B6", category: "frontend" },
  { name: "React.js", icon: SiReact, color: "#61DAFB", category: "frontend" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    category: "frontend",
  },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E", category: "backend" },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "currentColor",
    category: "backend",
  },
  {
    name: "Django & DRF",
    icon: SiDjango,
    color: "#44B78B",
    category: "backend",
  },
  { name: "RESTful APIs", icon: TbApi, color: "#0EA5E9", category: "backend" },

  {
    name: "Authentication & Authorization",
    icon: FaUserShield,
    color: "#8B5CF6",
    category: "backend",
  },
  {
    name: "API Testing & Debugging",
    icon: FaBug,
    color: "#EF4444",
    category: "backend",
  },

  // Databases & ORMs
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    category: "databases",
  },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "databases" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "databases" },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "currentColor",
    category: "databases",
  },
  {
    name: "Drizzle ORM",
    icon: SiDrizzle,
    color: "currentColor",
    category: "databases",
  },
  {
    name: "Relational DB Design",
    icon: FaDatabase,
    color: "#F59E0B",
    category: "backend",
  },

  // Tools & DevOps
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "tools" },
  { name: "Linux", icon: SiLinux, color: "#FCC624", category: "tools" },
  { name: "Bash", icon: SiGnubash, color: "#4EAA25", category: "tools" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "tools" },
  {
    name: "Swagger / OpenAPI",
    icon: SiSwagger,
    color: "#85EA2D",
    category: "tools",
  },
  {
    name: "Git & GitHub",
    icon: SiGithub,
    color: "currentColor",
    category: "tools",
  },
  {
    name: "GitHub Copilot",
    icon: SiGithubcopilot,
    color: "currentColor",
    category: "tools",
  },
];

export const categories = new Set(skills.map((skill) => skill.category));
