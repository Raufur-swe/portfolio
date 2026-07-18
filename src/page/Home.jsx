import React from 'react'
import profile from "../assets/intro.jpeg"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Lottie from 'lottie-react'
import InfiniteScrolleft from '../components/InfiniteScrolleft'
import InfiniteScrollright from '../components/InfiniteScrolRight'
import { HiArrowDownTray } from 'react-icons/hi2'
import ProcessTimeline from '../components/Process'
import Service from '../components/Services'
import { projects } from '../mockData/Projects'
import ProjectCard from '../components/PojectCard'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import TestimonialCard from '../components/TestimonialCard'
import { testimonials } from '../mockData/testimonials'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger);



const Home = () => {

// projects animation
const projectSectionRef = useRef(null);
const projectHeaderRef = useRef(null);
const projectGridRef = useRef(null);

  // testimonial animation
  const sectionRef = useRef(null);
const titleRef = useRef(null);
const gridRef = useRef(null);


//projects animation

useGSAP(() => {
  const cards = gsap.utils.toArray(".project-card");

  gsap.from(projectHeaderRef.current, {
    y: 80,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: projectSectionRef.current,
      start: "top 80%",
      end: "top 30%",
      scrub: 1,
    },
  });

  gsap.from(cards, {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: projectGridRef.current,
      start: "top 85%",
      end: "bottom 50%",
      scrub: 1.5,
    },
  });
}, []);


// testimonial animation
useGSAP(() => {
  const cards = gsap.utils.toArray(".testimonial-card");

  gsap.from(titleRef.current, {
    y: 70,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      end: "top 40%",
      scrub: 1,
    },
  });

  gsap.from(cards, {
    y: 80,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: gridRef.current,
      start: "top 80%",
      end: "bottom 40%",
      scrub: 1.2,
    },
  });
}, []);


  return (
    <div className=' h-screen px-5 lg:px-20'>
      {/* hero content */}
      <div className=' flex flex-col items-center gap-4 p-5'>
        <img src={profile} alt="" className='h-30 w-20 object-cover object-top rounded-full' />

        <p className='font-medium text-center text-xl lg:text-3xl leading-normal'>
          Every <span className='bg-amber-200 rounded-xl px-2'>Greate</span> Products
          <br />
          Start With <span className='bg-green-400 rounded-2xl px-2 '>Belief</span>
        </p>

        <p className='text-center font-semibold sm:text-sm lg:text-xl max-w-3xl'>I design and build fast, reliable, AI-driven or custom web applications that solve real-world problems with simplicity and purpose.</p>

        {/* button */}
        <div>
          <a className=" flex items-center gap-2 px-6 py-4 rounded-2xl border-2 border-black bg-[#EAE2D2] text-xl font-semibold shadow-[4px_4px_0px_black] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer " download href="/Raufur-Uddin-CV.pdf"  >
            Resume
            <HiArrowDownTray className='text-lg size-5 ' />
          </a>
        </div>

      </div>

      {/* skill scroll */}
      <div className='flex flex-col items-center mt-5 gap-2 '>
        <InfiniteScrollright />
        <InfiniteScrolleft />
      </div>

      {/* featured projects */}


      <div
  ref={projectSectionRef}
  className="sm:px-10 lg:px-20 flex flex-col gap-4 py-5 rounded-2xl mt-10"
>
  <div
    ref={projectHeaderRef}
    className="flex justify-between items-center bg-[#ffecc3] px-4 py-2 rounded-2xl"
  >
    <h4 className="text-2xl font-semibold">
      Featured <br />
      <span className="text-xl">Projects</span>
    </h4>

    <Link
      to="/projects"
      className="group inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-black hover:shadow-2xl active:scale-95"
    >
      View More
      <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </Link>
  </div>

  <div
    ref={projectGridRef}
    className="grid gap-4 md:grid-cols-1 lg:grid-cols-2"
  >
    {projects.map((project) => (
      <div
        key={project.id}
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

      {/* service section */}

      <div className='mt-10'>
        <Service />
      </div>


      <div
  ref={sectionRef}
  className="mt-15 flex flex-col gap-5"
>
  <h2
    ref={titleRef}
    className="text-4xl font-semibold"
  >
    Testimonials
  </h2>

  <div
    ref={gridRef}
    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
  >
    {testimonials.map((testimonial) => (
      <div
        key={testimonial.id}
        className="testimonial-card"
      >
        <TestimonialCard testimonial={testimonial} />
      </div>
    ))}
  </div>
</div>

<div className='mt-10'>
  <ContactSection/>
</div>

<div className='mt-10'>
  <Footer/>
</div>
    </div>
  )
}

export default Home