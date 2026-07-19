import React from 'react'
import Profile_img from "../assets/profile.jpeg"
import { HiArrowDownTray } from 'react-icons/hi2'
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import InfiniteScrolleft from '../components/InfiniteScrolleft';

const AboutMePage = () => {
    const containerRef = useRef(null);
const titleRef = useRef(null);
const leftRef = useRef(null);
const imageRef = useRef(null);
const rightRef = useRef(null);


useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.from(titleRef.current, {
      y: -80,
      opacity: 0,
      duration: 0.8,
    })

      .from(
        leftRef.current,
        {
          x: -80,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      )

      .from(
        imageRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      )

      .from(
        rightRef.current,
        {
          x: 80,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      );
  }, containerRef);

  return () => ctx.revert();
}, []);

    return (
        <div ref={containerRef} className="min-h-[80vh] flex flex-col gap-5 items-center justify-center px-5 lg:px-20 py-10">
            <div className="w-full max-w-7xl bg-[#EAE2D2] rounded-3xl border-2 border-black shadow-[8px_8px_0px_black] p-6 lg:px-10">

                <h2 ref={titleRef} className="text-center text-3xl lg:text-9xl font-bold mb-5 ">
                   Raufur
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

                    {/* Left */}
                    <div ref={leftRef} className="order-2 lg:order-1 text-center lg:text-left">
                        <p className="text-lg leading-8 text-gray-700">
                            Assalamu Alaikum, my name is
                            <span className="font-bold"> Raufur Uddin Dip</span>.
                            <br /><br />
                            Currently studying
                            <span className="font-semibold">
                                {" "}B.Sc. in Software Engineering
                            </span>{" "}
                            at
                            <span className="font-semibold">
                                {" "}Daffodil International University
                            </span>.
                        </p>




                        <a  className= " flex items-center justify-center mt-2 gap-2 px-6 py-4 rounded-2xl border-2 border-black bg-[#EAE2D2] text-xl font-semibold shadow-[4px_4px_0px_black] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer " download href="/Raufur-Uddin-CV.pdf"  >
                            Resume
                            <HiArrowDownTray className='text-lg size-5 ' />
                        </a>



                    </div>

                    {/* Center */}
                    <div ref={imageRef} className="order-1 lg:order-2 flex justify-center">
                        <div className="relative">
                            <img
                                src={Profile_img}
                                alt=""
                                className="w-64 lg:w-80 rounded-3xl border-4 border-black shadow-[8px_8px_0px_black]"
                            />
                        </div>
                    </div>

                    {/* Right */}
                    <div ref={rightRef} className="hidden lg:flex order-3 justify-center">
                        <div className="bg-black text-white rounded-3xl p-8 w-full max-w-xs">
                            <h3 className="text-3xl font-bold mb-3">
                                AI Driven
                            </h3>

                            <p className="text-gray-300 leading-8">
                                Full Stack Developer passionate about building
                                modern, scalable and interactive web experiences.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
       
       <InfiniteScrolleft/>
        </div>
    )
}

export default AboutMePage