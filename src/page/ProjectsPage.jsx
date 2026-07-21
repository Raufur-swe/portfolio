import React from 'react'
import ProjectCard from '../components/PojectCard'
import { projects } from '../mockData/Projects'
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ProjectsPage = () => {


  const container = useRef();
  const heading = useRef();
  const desc = useRef();
  const cards = useRef([]);


  useGSAP(() => {
    // Page Intro Animation
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.from(heading.current.children, {
      y: 70,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
    }).from(
      desc.current,
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.4"
    );

    // Project Cards
    cards.current.forEach((card, index) => {
  gsap.from(card, {
    y: 100,
    opacity: 0,
    rotateX: 8,
    scale: 0.97,
    duration: 1.5,
    ease: "power3.out",

    scrollTrigger: {
      trigger: card,
      start: "top 82%",
      toggleActions: "play none none reverse",
    },
  });
});
  }, []);



  return (
    <div
      ref={container}
      className="min-h-screen flex flex-col gap-10 px-5 lg:px-15 mt-10"
    >
      <div
        ref={heading}
        className="flex flex-col gap-2 overflow-hidden"
      >
        <h4 className="overflow-hidden">
          <span className="inline-block bg-amber-300 rounded-xl p-1">
            Engineering
          </span>
        </h4>

        <h4 className="overflow-hidden">
          <span className="inline-block text-2xl lg:text-5xl font-bold">
            Digital
          </span>
        </h4>

        <h4 className="overflow-hidden">
          <span className="inline-block text-2xl lg:text-5xl font-bold">
            User Experiences
          </span>
        </h4>
      </div>
      <p
        ref={desc}
        className="text-sm lg:text-lg max-w-xl lg:max-w-2xl"
      >
        Featured Projects A collection of something I've designed and developed,
        showcasing clean code, thoughtful UI, and modern web technologies.
      </p>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cards.current[index] = el)}
            className="project-card"
          >
            <ProjectCard
              project={project}
              options={{ actions: false }}
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default ProjectsPage