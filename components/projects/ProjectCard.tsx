"use client";

import { motion } from "framer-motion";

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    slug: string;
    image: string;
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.article
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group block h-full bg-white border border-border rounded-2xl overflow-hidden transition-shadow hover:shadow-lg"
        >
            <div className={`h-48 w-full ${project.image} opacity-80 group-hover:opacity-100 transition-opacity`} />
            <div className="p-6">
                <div className="text-xs font-medium text-accent mb-2 uppercase tracking-wider">
                    {project.category}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <p className="text-text-secondary line-clamp-2">
                    {project.description}
                </p>
            </div>
        </motion.article>
    );
}
