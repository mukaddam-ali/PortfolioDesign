"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const skills = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
    "Node.js", "GraphQL", "PostgreSQL", "Figma", "Git"
];

export default function About() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-6 bg-bg">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Headshot */}
                    <AnimateOnScroll className="flex justify-center lg:justify-start">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-surface shadow-2xl transition-transform hover:scale-105 duration-500">
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-6xl text-white font-bold">
                                JD
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Right Column: Content */}
                    <div className="space-y-8">
                        <AnimateOnScroll delay={0.2}>
                            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">About Me</h2>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.3}>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                I'm a passionate Frontend Developer with a keen eye for design and a drive for creating seamless user experiences. With over 5 years of experience in building modern web applications, I specialize in the React ecosystem and enjoy bridging the gap between design and engineering.
                            </p>
                            <p className="text-lg text-text-secondary leading-relaxed mt-4">
                                When I'm not coding, you can find me exploring new UI trends, contributing to open source, or enjoying a good cup of coffee.
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.4}>
                            <h3 className="text-xl font-semibold text-text-primary mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-surface text-text-secondary rounded-full text-sm font-medium border border-border"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </main>
    );
}
