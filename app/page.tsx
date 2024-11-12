"use client";

import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { config } from "@/lib/config";
import { 
  Youtube, 
  Discord, 
  Github, 
  Code2, 
  Star,
  GitFork
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  // ... [rest of your component code stays the same until return statement]

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-900 via-purple-900 to-cyan-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* Hero Section - same as before */}
        
        {/* Categories Section */}
        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* About */}
          <Card className="bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all border-0">
            <CardHeader>
              <CardTitle className="text-white">About Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-300">
              <p>👤 {config.personal.pronouns}</p>
              <p>🎂 Age: {config.personal.age}</p>
              <p>📍 {config.personal.location}</p>
              <p>📧 {config.personal.email}</p>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all border-0">
            <CardHeader>
              <CardTitle className="text-white">Connect</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
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
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all border-0">
            <CardHeader>
              <CardTitle className="text-white">Skills</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {config.stack.map((tech, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Code2 size={20} className="text-cyan-400" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </CardContent>
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
                <Card className="bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all border-0">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{repo.name}</CardTitle>
                    <CardDescription className="text-gray-300">{repo.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Star size={16} className="mr-1" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center">
                      <GitFork size={16} className="mr-1" />
                      {repo.forks}
                    </span>
                  </CardFooter>
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
                <Card className="bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all border-0 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="text-sm text-gray-400">
                    {project.footer}
                  </CardFooter>
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
