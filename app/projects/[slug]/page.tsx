import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-32 pb-16 px-6 bg-bg">
            <article className="max-w-4xl mx-auto">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-text-secondary hover:text-accent mb-8 transition-colors"
                >
                    <ArrowLeftIcon className="h-4 w-4 mr-2" />
                    Back to Projects
                </Link>

                <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
                    {project.title}
                </h1>

                <div className={`w-full h-64 sm:h-96 rounded-2xl mb-12 ${project.image}`} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Overview</h2>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                {project.description}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Problem</h2>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Solution</h2>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-surface p-6 rounded-2xl border border-border">
                            <h3 className="text-lg font-bold text-text-primary mb-4">My Role</h3>
                            <p className="text-text-secondary mb-6">Frontend Developer, UI Designer</p>

                            <h3 className="text-lg font-bold text-text-primary mb-4">Timeline</h3>
                            <p className="text-text-secondary mb-6">3 Months</p>

                            <h3 className="text-lg font-bold text-text-primary mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white border border-border rounded-full text-xs font-medium text-text-secondary">React</span>
                                <span className="px-3 py-1 bg-white border border-border rounded-full text-xs font-medium text-text-secondary">Tailwind</span>
                                <span className="px-3 py-1 bg-white border border-border rounded-full text-xs font-medium text-text-secondary">Next.js</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <button className="w-full py-3 bg-accent text-white rounded-full font-medium hover:opacity-90 transition-opacity">
                                View Live Demo
                            </button>
                            <button className="w-full py-3 bg-white border border-border text-text-primary rounded-full font-medium hover:bg-surface transition-colors">
                                View Code
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}
