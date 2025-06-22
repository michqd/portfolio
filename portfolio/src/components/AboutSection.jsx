import { Briefcase, Code, User } from "lucide-react"

export const AboutSection= () => {
    return (
        <section id="about" className="py-24 px-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl cont-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Pasionate web developer and ...</h3>
                        <p className="text-muted-forgeound">
                            From front-end interfaces to back-end systems, I enjoy creating impactful, functional applications. 
                            I also work with AI and data to solve real-world problems and drive smarter decision-making.
                        </p>

                        <p className="text-muted-forgeound">
                            From front-end interfaces to back-end systems, I enjoy creating impactful, functional applications. 
                            I also work with AI and data to solve real-world problems and drive smarter decision-making.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
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
                                        Web Development
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with modern frameworks. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/> 
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Front-End Development
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive user interfaces and deamless user experiences.  
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/> 
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Project Managemnet
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from conception to completion with agile methodologies. 
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