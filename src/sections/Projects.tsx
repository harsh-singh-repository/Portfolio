import React from "react";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import docwise from "@/assets/images/docwise.png";
import productify from "@/assets/images/productify.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Github from "@/assets/icons/github.svg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Document Editor",
    year: "2024",
    title: "Docwise",
    results: [
      { title: "Developed rich document editor" },
      { title: "Utilized Convex for real-time backend" },
      { title: "Optimized performance with Next.js" },
    ],
    link: "docwise.vercel.app",
    github:"github.com/harsh-singh-repository/docwise",
    image: docwise,
  },
  {
    company: "Task Management",
    year: "2024",
    title: "Productify",
    results: [
      { title: "Created task boards with cards and lists" },
      { title: "Added drag-and-drop functionality" },
      { title: "Used Prisma with Supabase PostgreSQL" },
      { title: "Added paid tier for >5 boards" },
    ],
    link: "productivify.vercel.app",
    github:"github.com/harsh-singh-repository/productivity",
    image: productify,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project">
      <div className="container">
        <SectionHeader
          title="Featured Project"
          eyebrow="Real world project"
          description="See how I transformed concepts into engaging digital experience."
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 after:pointer-events-none pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul
                    className="flex flex-col gap-4 mt-4 md:mt-5"
                    key={project.title}
                  >
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm text-white/50 md:text-base" key={project.title}>
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-evenly">
                    <a href={`//${project.link}`} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                        <span>View Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                    <a href={`//${project.github}`} target="_blank">
                      <button className="mt-[2.5rem]">
                          <Github className="size-20" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-2xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
