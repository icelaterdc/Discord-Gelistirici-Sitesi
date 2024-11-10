"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { config } from "@/lib/config";
import { Github, Discord, Youtube, Brush } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-900 via-purple-900 to-cyan-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-cyan-400"
          >
            <img
              src={config.discord.avatar}
              alt={config.personal.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold mb-2">
              Hello there, I'm{" "}
              <span className="text-cyan-400">{config.personal.name}</span>
            </h1>
            <p className="text-xl text-gray-300">{config.personal.title}</p>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          <div className="grid gap-4 text-gray-300">
            <p>👤 {config.personal.pronouns}</p>
            <p>🎂 Age: {config.personal.age}</p>
            <p>📍 {config.personal.location}</p>
            <p>📧 {config.personal.email}</p>
            <p>🎨 Hobbies: {config.personal.hobbies.join(", ")}</p>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              variant="outline"
              className="group hover:scale-105 transition-all hover:bg-gray-800/50"
              onClick={() => window.open(`https://github.com/${config.social.github}`)}
            >
              <Github className="mr-2 group-hover:text-cyan-400" />
              Github
            </Button>
            <Button
              variant="outline"
              className="group hover:scale-105 transition-all hover:bg-gray-800/50"
              onClick={() => window.open(`https://discord.com/users/${config.discord.id}`)}
            >
              <Discord className="mr-2 group-hover:text-cyan-400" />
              Discord
            </Button>
            <Button
              variant="outline"
              className="group hover:scale-105 transition-all hover:bg-gray-800/50"
              onClick={() => window.open(`https://youtube.com/@${config.social.youtube}`)}
            >
              <Youtube className="mr-2 group-hover:text-cyan-400" />
              Youtube
            </Button>
            <Button
              variant="outline"
              className="group hover:scale-105 transition-all hover:bg-gray-800/50"
              onClick={() => window.open(`https://deviantart.com/${config.social.deviantart}`)}
            >
              <Brush className="mr-2 group-hover:text-cyan-400" />
              Deviantart
            </Button>
          </div>
        </motion.section>

        {/* Stack Section */}
        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {config.stack.map((tech, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all hover:scale-105"
              >
                <p className="text-center font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}