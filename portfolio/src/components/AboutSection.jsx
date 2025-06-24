import { Brain, Code, Pencil } from "lucide-react"

export const AboutSection= () => {
    return (
        <section id="about" className="py-24 px-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl cont-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Innovative Developer</h3>
                        <p className="text-muted-forgeound">
                            Computer Science Graduate and developer focused on building real-world, user-first applications.
                            Strong foundation in Web, Mobile, and AI-driven projects.
                        </p>

                        <p className="text-muted-forgeound">
                            From front-end interfaces to back-end systems, I enjoy creating impactful, functional applications. 
                            I also work with AI and data to solve real-world problems and drive smarter decision-making.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="/resume.pdf" download="Michelle_Dang_Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/> 
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Developer
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Building robust, impactful, and scalable applications with clean and efficient code. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Brain className="h-6 w-6 text-primary"/> 
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Applied AI
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Integrating AI APIs to create intelligent, automated, and data-driven solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Pencil className="h-6 w-6 text-primary"/> 
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        UI/UX
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Designing user-friendly interfaces focused on seamless and engaging experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        //1:31:21
    )
}