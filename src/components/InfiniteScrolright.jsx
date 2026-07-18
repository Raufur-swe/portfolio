import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaAws,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { SiExpress, SiGsap } from "react-icons/si";

const InfiniteScrollright = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    gsap.to(slider, {
      xPercent: -50,
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const skills = [
    { icon: <LiaNode className="text-green-800 size-10" />, name: "Node JS" },
    { icon: <FaWordpress className="text-sky-700 size-5" />, name: "WordPress" },
    { icon: <FaGithub className="size-5" />, name: "GitHub" },
    { icon: <FaDocker className="text-sky-800 size-7" />, name: "Docker" },
    { icon: <FaJs className="text-yellow-400 size-10" />, name: "JavaScript" },
    { icon: <SiGsap className="text-green-500 size-7" />, name: "GSAP" },
    { icon: <FaDatabase className="text-blue-400 size-5" />, name: "Database" },
    { icon: <SiExpress className="size-7 bg-black text-white px-1 rounded-lg" />, name: "Express" },
    { icon: <FaReact className="text-sky-600 size-7" />, name: "React" },
    { icon: <FaAws className="size-5" />, name: "AWS" },
  ];

  return (
    <div className="w-full bg-[#f4e2ba83] overflow-hidden rounded-2xl">
      <div
        ref={sliderRef}
        className="flex w-max gap-4"
      >
        {[...skills, ...skills].map((item, index) => (
          <div
            key={index}
            className=" flex items-center gap-2 px-5 py-3 rounded-2xl shrink-0"
          >
            {item.icon}
            <p className="font-medium whitespace-nowrap">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollright;