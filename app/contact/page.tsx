"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Mock submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <main className="min-h-screen pt-32 pb-16 px-6 bg-bg flex items-center justify-center">
            <div className="w-full max-w-2xl">
                <AnimateOnScroll className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-text-primary mb-4">Get in Touch</h1>
                    <p className="text-text-secondary">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </AnimateOnScroll>

                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-surface p-8 rounded-2xl text-center border border-border"
                    >
                        <h2 className="text-2xl font-bold text-text-primary mb-2">Message Sent!</h2>
                        <p className="text-text-secondary mb-6">
                            Thank you for reaching out. I'll get back to you as soon as possible.
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="text-accent font-medium hover:underline"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <AnimateOnScroll delay={0.2}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full py-4 bg-accent text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </motion.button>
                        </form>
                    </AnimateOnScroll>
                )}
            </div>
        </main>
    );
}
