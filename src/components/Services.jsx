import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  Globe,
  Rocket,
  Bot,
  TrendingUp,
  BrainCircuit,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Custom Web Solutions",
    description:
      "I build scalable and modern custom web solutions tailored to your business needs, helping you streamline operations, improve user experience, and establish a strong online presence.",
    icon: Globe,
  },
  {
    title: "MVP / SaaS Development",
    description:
      "I develop fast and scalable MVPs and SaaS platforms that help startups validate ideas, launch quickly, and grow into full-scale products with solid architecture.",
    icon: Rocket,
  },
  {
    title: "Business / Web Automation Solutions",
    description:
      "I create smart business automation systems that reduce manual work, improve efficiency, and help you save time by automating repetitive workflows and processes.",
    icon: Bot,
  },
  {
    title: "High-Converting Landing Pages",
    description:
      "I design and develop high-converting landing pages optimized for leads, sales, and conversions using modern UI, performance optimization, and user psychology.",
    icon: TrendingUp,
  },
  {
    title: "API Development & AI Integration",
    description:
      "I build robust APIs and integrate AI features into your web applications, enabling intelligent automation, data processing, and advanced functionality to enhance your product.",
    icon: BrainCircuit,
  },
];

const Service = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const [active, setActive] = useState(null);

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      {
        y: 120,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1.5,
        },
      }
    );

    gsap.from(cardsRef.current, {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 60%",
        scrub: 1.2,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" w-full "
    >
      <div className=" max-w-360 mx-auto px-5">
        {/* Heading */}

        <h2
          ref={titleRef}
          className="
          font-medium
          leading-none
        mb-5
          text-5xl
        "
        >
          Services
        </h2>

        {/* Services */}

        <div className="flex flex-col gap-0 relative">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative border-b border-black/40"
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >
                {/* Row */}

                <div
                  className="
                  flex
                  items-center
                  justify-between
                  py-5
                  md:py-7
                  cursor-pointer
                "
                >
                  <h3
                    className="
                    text-base
                    sm:text-lg
                    md:text-xl
                    lg:text-2xl
                    transition-all
                    duration-300
                    group-hover:translate-x-3
                  "
                  >
                    {service.title}
                  </h3>

                  <span
                    className="
                    text-xl
                    md:text-2xl
                    opacity-40
                    group-hover:opacity-100
                    transition-all
                  "
                  >
                    ↗
                  </span>
                </div>

                {/* Desktop Floating Notepad */}

                <div
                  className={`
                  hidden lg:block
                  absolute
                  right-0
                  top-1/2
                  -translate-y-1/2
                  w-95
                  z-20
                  transition-all
                  duration-500
                  ${
                    active === index
                      ? "opacity-100 translate-x-0 pointer-events-auto"
                      : "opacity-0 translate-x-10 pointer-events-none"
                  }
                `}
                >
                  <div
                    className="
                    bg-white
                    rounded-2xl
                    p-6
                    shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                    border
                    border-black/10
                    -rotate-2
                  "
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="
                        h-12
                        w-12
                        rounded-xl
                        bg-black
                        text-white
                        flex
                        items-center
                        justify-center
                      "
                      >
                        <Icon size={24} />
                      </div>

                      <h4 className="font-semibold text-lg">
                        {service.title}
                      </h4>
                    </div>

                    <p className="text-black/70 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Mobile / Tablet Description */}

                <div
                  className={`
                  lg:hidden
                  overflow-hidden
                  transition-all
                  duration-500
                  ${
                    active === index
                      ? "max-h-75 pb-5"
                      : "max-h-0"
                  }
                `}
                >
                  <div
                    className="
                    bg-white
                    rounded-2xl
                    p-5
                    mt-2
                    border
                    border-black/10
                  "
                  >
                    <div className="flex gap-3 items-center mb-4">
                      <div
                        className="
                        w-10
                        h-10
                        rounded-lg
                        bg-black
                        text-white
                        flex
                        items-center
                        justify-center
                      "
                      >
                        <Icon size={20} />
                      </div>

                      <h4 className="font-semibold">
                        {service.title}
                      </h4>
                    </div>

                    <p className="text-sm text-black/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;