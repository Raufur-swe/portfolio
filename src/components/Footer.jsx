
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
        end: "top 30%",
        scrub: 1,
      },
    });

    tl.from(titleRef.current, {
      y: 120,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    }).from(
      ".footer-item",
      {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.7"
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full  px-4 sm:px-6 md:px-8 lg:px-8 py-6 sm:py-8 md:py-10"
    >
      <div className="bg-[#E7DCA2]  rounded-3xl sm:rounded-[30px] md:rounded-[40px] overflow-hidden">
        {/* Top Title */}
        <div className=" ">
          <h1
            ref={titleRef}
            className=" text-center font-black text-5xl mt-5 mb-5 lg:text-9xl   "
          >
            KeepExploring
          </h1>
        </div>

        {/* Content */}
        <div
          className="
            grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10  px-5 sm:px-8 md:px-10 lg:px-12  py-8  md:py-10
          "
        >
          {/* Navigate */}
          <div className="footer-item">
            <h3 className="font-semibold text-lg mb-4">
              Navigate
            </h3>

            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a
                  href="#"
                  className="hover:translate-x-1 duration-300 inline-block"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:translate-x-1 duration-300 inline-block"
                >
                  About Me
                </a>
              </li>

              <li>
                <a
                  href="/projects"
                  className="hover:translate-x-1 duration-300 inline-block"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:translate-x-1 duration-300 inline-block"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div className="footer-item">
            <h3 className="font-semibold text-lg mb-4">
              Follow
            </h3>

            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a
                  href="#"
                  className="hover:translate-x-1 duration-300 inline-block"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:translate-x-1 duration-300 inline-block"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-item">
            <h3 className="font-semibold text-lg mb-4">
              Contacts
            </h3>

            <p className="text-sm md:text-base break-all">
              raufurshekh45@gmail.com
            </p>
          </div>

          {/* CTA */}
          <div className="footer-item">
            <div
              className=" bg-[#F1D6A0] rounded-3xl p-5  md:p-6 h-full flex flex-col justify-between gap-5 "
            >
              <div className="flex items-center justify-around">
                <h3 className="font-semibold text-lg">
                  Get started
                </h3>

                <span className="text-2xl">
                  🚀
                </span>
              </div>

              <button
                className="
                  w-full border-2 border-black rounded-full py-3 font-medium transition-all duration-300 hover:bg-black hover:text-white hover:scale-[1.03]"
              >
                Build together
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;