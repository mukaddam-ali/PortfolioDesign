"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects, categories } from "@/data/projects";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory);

    return (
        <main className="min-h-screen pt-32 pb-16 px-6 bg-bg">
            <div className="max-w-7xl mx-auto">
                <AnimateOnScroll>
                    <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">Projects</h1>
                    <p className="text-xl text-text-secondary mb-12 max-w-2xl">
                        A collection of my recent work, ranging from web applications to design systems.
                    </p>
                </AnimateOnScroll>

                {/* Filter */}
                <AnimateOnScroll delay={0.2} className="mb-12">
                    <div className="flex flex-wrap gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                        ? "bg-accent text-white shadow-md"
                                        : "bg-surface text-text-secondary hover:bg-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </AnimateOnScroll>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
}
