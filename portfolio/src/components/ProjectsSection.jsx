import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "AiTmed",
        description: "Designed and developed a user-friendly website that connects patients and users to accessible telehealth services.",
        image: "/projects/aitmed.png",
        tags: ["HTML", "CSS", "Javascript", "Figma"],
        githubUrl: "https://www.aitmed.com/",
    },
    {
        id: 2,
        title: "BudgetBuddy",
        description: "BudgetBuddy is a smart finance app that uses AI to track expenses, auto-categorize spending, and deliver personalized budgeting insights.",
        image: "/projects/budgetbuddy.png",
        tags: ["React", "Tailwindcss", "Vite", "Python", "Javascript", "Figma"],
        githubUrl: "https://github.com/CS4800Group/CS4800-project-personal-finance-tracker",
    },
    {
        id: 3,
        title: "A&C Urgent Care",
        description: "Designed and developed a responsive, user-friendly website for A&C Urgent Care to streamline access to services, appointments, and clinic information.",
        image: "/projects/urgentcareac.png",
        tags: ["HTML", "CSS", "Javascript", "Figma"],
        githubUrl: "https://www.urgentcareac.com/",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Explore more of my projects on my Github.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shawdow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.githubUrl} target="https://www.urgentcareac.com/" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12 ">
                    <a className="cosmic-button w-fit flex item-center mx-auto gap-2" target="_blank" href="https://github.com/michqd">
                        Explore My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
};