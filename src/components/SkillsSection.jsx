import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // languages
  { name: "Python", level: 80, category: "languages" },
  { name: "Java", level: 75, category: "languages" },
  { name: "JavaScript", level: 80, category: "languages" },
  { name: "TypeScript", level: 70, category: "languages" },
  { name: "Swift", level: 70, category: "languages" },
  { name: "HTML", level: 85, category: "languages" },
  { name: "CSS", level: 85, category: "languages" },
  { name: "PHP", level: 60, category: "languages" },
  { name: "SQL", level: 75, category: "languages" },
  { name: "MATLAB", level: 60, category: "languages" },

  // frameworks
  { name: "React", level: 80, category: "frameworks" },
  { name: "Next.js", level: 70, category: "frameworks" },
  { name: "Ruby on Rails", level: 65, category: "frameworks" },
  { name: "JavaFX", level: 70, category: "frameworks" },
  { name: "SpriteKit", level: 65, category: "frameworks" },
  { name: "Node.js", level: 75, category: "frameworks" },
  { name: "Vue.js", level: 60, category: "frameworks" },
  { name: "Tailwind CSS", level: 80, category: "frameworks" },
  { name: "TensorFlow", level: 65, category: "frameworks" },
  { name: "PyTorch", level: 60, category: "frameworks" },
  { name: "scikit-learn", level: 70, category: "frameworks" },

  // development tools
  { name: "Visual Studio Code", level: 90, category: "development tools" },
  { name: "Xcode", level: 75, category: "development tools" },
  { name: "Android Studio", level: 70, category: "development tools" },
  { name: "Figma", level: 85, category: "development tools" },
  { name: "Git", level: 80, category: "development tools" },
  { name: "GitHub", level: 85, category: "development tools" },
  { name: "PostgreSQL", level: 70, category: "development tools" },
  { name: "Vite", level: 70, category: "development tools" },
  { name: "Google Cloud", level: 60, category: "development tools" },
  { name: "Microsoft Excel", level: 75, category: "development tools" }
];

const categories = ["all", "languages", "frameworks", "development tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};