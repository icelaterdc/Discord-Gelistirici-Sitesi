"use client";

import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { config } from "@/lib/config";
import { Card } from "@/components/ui/card";
import { 
  Youtube, 
  Discord, 
  Github, 
  Code2, 
  Paintbrush, 
  Library,
  Star,
  GitFork,
  ExternalLink
} from "lucide-react";

// GitHub repo interface
interface GitHubRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  url: string;
}

// Project interface
interface Project {
  title: string;
  description: string;
  footer: string;
  link: string;
}

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

  // Example GitHub repositories
  const githubRepos: GitHubRepo[] = [
    {
      name: "Project 1",
      description: "Description of project 1",
      stars: 10,
      forks: 5,
      url: "https://github.com/username/project1"
    },
    {
      name: "Project 2",
      description: "Description of project 2",
      stars: 15,
      forks: 8,
      url: "https://github.com/username/project2"
    },
    {
      name: "Project 3",
      description: "Description of project 3",
      stars: 20,
      forks: 12,
      url: "https://github.com/username/project3"
    }
  ];

  // Example featured projects
  const featuredProjects: Project[] = [
    {
      title: "Featured Project 1",
      description: "Description of featured project 1",
      footer: "React • TypeScript • Tailwind",
      link: "https://project1.com"
    },
    {
      title: "Featured Project 2",
      description: "Description of featured project 2",
      footer: "Next.js • Node.js • MongoDB",
      link: "https://project2.com"
    },
    {
      title: "Featured Project 3",
      description: "Description of featured project 3",
      footer: "Vue.js • Express • PostgreSQL",
      link: "https://project3.com"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-900 via-purple-900 to-cyan-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
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
              alt="Avatar"
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

        {/* Categories Section */}
        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* About */}
          <Card className="p-6 bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all">
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            <div className="space-y-2 text-gray-300">
              <p>👤 {config.personal.pronouns}</p>
              <p>🎂 Age: {config.personal.age}</p>
              <p>📍 {config.personal.location}</p>
              <p>📧 {config.personal.email}</p>
            </div>
          </Card>

          {/* Social Links */}
          <Card className="p-6 bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all">
            <h2 className="text-xl font-bold mb-4">Connect</h2>
            <div className="grid grid-cols-2 gap-4">
              <a href={`https://youtube.com/${config.social.youtube}`} 
                 className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Youtube size={20} />
                <span>YouTube</span>
              </a>
              <a href={`https://discord.com/users/${config.discord.id}`}
                 className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Discord size={20} />
                <span>Discord</span>
              </a>
              <a href={`https://github.com/${config.social.github}`}
                 className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-6 bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all">
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {config.stack.map((tech, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Code2 size={20} className="text-cyan-400" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.section>

        {/* GitHub Repositories */}
        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold mb-6">GitHub Repositories</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {githubRepos.map((repo, index) => (
              <a
                key={index}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-72"
              >
                <Card className="p-4 bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all">
                  <h3 className="font-bold text-lg mb-2">{repo.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{repo.description}</p>
                  <div className="flex space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Star size={16} className="mr-1" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center">
                      <GitFork size={16} className="mr-1" />
                      {repo.forks}
                    </span>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {featuredProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-72"
              >
                <Card className="p-4 bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all h-full flex flex-col">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm flex-grow">{project.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-700 text-sm text-gray-400">
                    {project.footer}
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="border-t border-gray-800 pt-8 mt-16">
          <div className="flex justify-between text-sm text-gray-400">
            <div>2024© IceLater</div>
            <div>Development by IceLater</div>
          </div>
        </footer>
      </div>
    </main>
  );
      }
