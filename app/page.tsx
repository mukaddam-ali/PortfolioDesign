"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg px-6">
      {/* Background Geometric Element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-surface opacity-50 blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-surface opacity-30 blur-3xl" />
      </div>

      <div className="z-10 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-text-primary mb-6"
        >
          John Doe
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl sm:text-2xl text-text-secondary mb-10 font-light"
        >
          Frontend Developer & UI/UX Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Link
            href="/projects"
            className="inline-block bg-accent text-white px-8 py-4 rounded-full font-medium text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            View My Work
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDownIcon className="h-6 w-6 text-text-secondary" />
        </motion.div>
      </motion.div>
    </main>
  );
}
