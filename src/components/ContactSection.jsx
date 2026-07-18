import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef();
  const phoneRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    tl.from(".left-content", {
      x: -120,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }).from(
      ".form-item",
      {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );
  }, { scope: sectionRef });

  const handleCallAnimation = () => {
    gsap.fromTo(
      phoneRef.current,
      {
        rotate: -20,
      },
      {
        rotate: 20,
        duration: 0.08,
        repeat: 7,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  };


  return (
    <section
      ref={sectionRef}
      className="bg-[#EAE4D3]  w-full rounded-2xl px-5 md:px-10 lg:px-16 py-10 lg:py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT */}
          <div className="left-content">
           <button className="mb-5 px-10 py-4 rounded-2xl border-2 border-black bg-[#EAE2D2] text-xl font-semibold shadow-[4px_4px_0px_black] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer">
            Book a call
          </button>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-bold leading-[0.9] tracking-tight wrap-break-word">
              Let’s get
              <br />
              Started
            </h2>

            <p className="mt-8 max-w-xl text-base md:text-lg text-black/80">
            Got an idea you've been thinking about? Let's talk about it. No pressure, no complicated process—just a quick conversation to explore what's possible and how I can help.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* divider */}


            <div className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="form-item w-full rounded-2xl border border-black/60 bg-transparent px-5 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="form-item w-full rounded-2xl border border-black/60 bg-transparent px-5 py-4 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Tell something about your ideas............"
                className="form-item w-full resize-none rounded-2xl border border-black/60 bg-transparent px-5 py-4 outline-none"
              />

              <div className="form-item">
                <button
                  onClick={handleCallAnimation}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-black py-4 text-xl font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
                >
                  <span ref={phoneRef}>📞</span>
                  Book a call
                </button>

                <p className="form-item mt-2 text-center text-sm text-black/70">
                  By sending you are{" "}
                  <span className="font-semibold text-black">
                    agree to all rules and regulations
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;