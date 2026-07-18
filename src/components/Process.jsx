import { useRef } from "react";
import {
  FaHandshake,
  FaPalette,
  FaCog,
  FaDesktop,
  FaRocket,
} from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "MEET & PLAN",
    desc: "Define Project Requirements",
    icon: FaHandshake,
    position: "top",
  },
  {
    id: "02",
    title: "DESIGN",
    desc: "Define Brand, Colours & Typefaces",
    icon: FaPalette,
    position: "bottom",
  },
  {
    id: "03",
    title: "DEVELOPMENT",
    desc: "Software Installation & Coding",
    icon: FaCog,
    position: "top",
  },
  {
    id: "04",
    title: "PRE-LAUNCH",
    desc: "Multi-Browser & Device Testing",
    icon: FaDesktop,
    position: "bottom",
  },
  {
    id: "05",
    title: "LAUNCH",
    desc: "Ongoing Support Begins",
    icon: FaRocket,
    position: "top",
  },
];

export default function ProcessTimeline() {
  const sectionRef = useRef(null);
  const progressLineRef = useRef(null);
  const cardsRef = useRef([]);
  const dotsRef = useRef([]);
  const iconsRef = useRef([]);
  const segmentsRef = useRef([]);

  useGSAP(
  () => {
    // Initial States
    gsap.set(cardsRef.current, {
      opacity: 0,
    });

    gsap.set(iconsRef.current, {
      scale: 0,
      rotate: -180,
    });

    gsap.set(dotsRef.current, {
      scale: 0,
    });
    gsap.set(segmentsRef.current, {
  scaleX: 0,
  transformOrigin: "left center",
});

    // Heading Reveal
    gsap.from(".process-heading", {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });



    // Cards Animation
   cardsRef.current.forEach((card, i) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  });

  if (i === 0) {
    tl.to(dotsRef.current[i], {
      scale: 1.4,
      backgroundColor: "#22c55e",
      duration: 0.3,
    });

    tl.to(dotsRef.current[i], {
      scale: 1,
      duration: 0.2,
    });
  }

  if (i > 0) {
    tl.to(
      segmentsRef.current[i - 1],
      {
        scaleX: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      dotsRef.current[i],
      {
        scale: 1.4,
        backgroundColor: "#22c55e",
        duration: 0.3,
      },
      "-=0.15"
    );

    tl.to(dotsRef.current[i], {
      scale: 1,
      duration: 0.2,
    });
  }

  tl.fromTo(
    card,
    {
      opacity: 0,
      y: steps[i].position === "top" ? -80 : 80,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.1"
  );

  tl.to(
    iconsRef.current[i],
    {
      scale: 1,
      rotate: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
    },
    "-=0.4"
  );
});
  },
  { scope: sectionRef }
);

  return (
    <section ref={sectionRef} className="w-full  py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16 text-center">
          <h2 className=" process-heading text-3xl  md:text-5xl ">
            MY <span className="font-bold">WEB DEVELOPMENT</span>
          </h2>

          <h2 className=" process-heading text-3xl  md:text-5xl">
            PROCESS
          </h2>
        </div>

        {/* MOBILE */}
        <div className="relative mx-auto max-w-md md:hidden">
          <div className="absolute left-7 top-0 h-full w-0.5 bg-black" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="relative flex gap-5"
                >
                  <div
                    ref={(el) => (iconsRef.current[index] = el)}
                    className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white"
                  >
                    <Icon size={24} />
                  </div>

                  <div>
                    <span className="text-lg font-semibold">
                      {step.id}
                    </span>

                    <h3 className="mt-1 text-lg font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm text-neutral-600">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="relative hidden md:block">
          {/* Base Line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-neutral-300" />

          {/* Animated Line */}
         <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
  <div className="grid grid-cols-4 h-0.5">
    {[0, 1, 2, 3].map((_, index) => (
      <div key={index} className="relative overflow-hidden">
        <div
          ref={(el) => (segmentsRef.current[index] = el)}
          className="absolute inset-0 bg-black origin-left scale-x-0"
        />
      </div>
    ))}
  </div>
</div>

          <div className="grid grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const top = step.position === "top";

              return (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center"
                >
                  {top ? (
                    <>
                      <div
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="flex h-65 flex-col items-center text-center"
                      >
                        <span className="mb-4 text-2xl lg:text-3xl">
                          {step.id}
                        </span>

                        <div
                          ref={(el) => (iconsRef.current[index] = el)}
                          className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-white lg:h-24 lg:w-24"
                        >
                          <Icon size={34} />
                        </div>

                        <div className="mt-4 h-full w-0.5 bg-black" />

                        <h3 className="mt-4 text-base font-bold lg:text-xl">
                          {step.title}
                        </h3>

                        <p className="mt-2 mb-2 max-w-42.5 text-xs text-neutral-600 lg:text-sm">
                          {step.desc}
                        </p>
                      </div>

                      <div className="h-65" />
                    </>
                  ) : (
                    <>
                      <div className="h-65" />

                      <div
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="flex h-65 flex-col items-center text-center"
                      >
                        <div className="h-full w-0.5 bg-black" />

                        <span className="my-4 text-2xl lg:text-3xl">
                          {step.id}
                        </span>

                        <div
                          ref={(el) => (iconsRef.current[index] = el)}
                          className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-white lg:h-24 lg:w-24"
                        >
                          <Icon size={34} />
                        </div>

                        <h3 className="mt-4 text-base font-bold lg:text-xl">
                          {step.title}
                        </h3>

                        <p className="mt-2 max-w-42.5 text-xs text-neutral-600 lg:text-sm">
                          {step.desc}
                        </p>
                      </div>
                    </>
                  )}

                  <div
                    ref={(el) => (dotsRef.current[index] = el)}
                    className="absolute left-1/2 top-1/2 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}