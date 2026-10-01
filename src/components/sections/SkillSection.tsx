import { useState } from "react";
import { categories, skills, type Skill } from "../../constants/skills";
import { cn } from "../../lib/ulils";
import { ArrowDown } from "lucide-react";

export function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <Icon size={40} color={skill.color} />
      <span className="text-sm font-medium">{skill.name}</span>
    </div>
  );
}

const SkillSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      selectedCategory === "all" || skill.category === selectedCategory,
  );

  return (
    <section id="skills" className="relative flex min-h-screen items-center">
      <div className="container max-w-5xl mx-auto  py-24 px-5 space-y-8">
        {/* SECTION-HEADER */}
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filtering */}
        <div className="flex flex-wrap justify-center items-center gap-5">
          <button
            key={selectedCategory}
            className={cn(
              selectedCategory === "all"
                ? "cosmic-button"
                : "cosmic-foreground-button",
            )}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>

          {Array.from(categories).map((category) => (
            <button
              key={category}
              className={cn(
                selectedCategory === category
                  ? "cosmic-button"
                  : "cosmic-foreground-button",
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Skill-Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {filteredSkills.map((s) => (
            <SkillCard key={s.name} skill={s} />
          ))}
        </div>
      </div>

      {/* SCROLL-DOWN */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" className="flex flex-col items-center">
          <span className="text-sm text-foreground/80 mb-2">My-Projects</span>
          <ArrowDown />
        </a>
      </div>
    </section>
  );
};

export default SkillSection;
