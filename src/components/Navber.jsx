import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink} from "react-router-dom";
import { useCursor } from "../context/CursorContext";
const Navber = () => {

  const {setEnabled} = useCursor()

  const [open, setOpen] = useState(false);


  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
     
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 z-50 w-full px-4 py-5" >
        <div className="mx-auto flex max-w-4xl items-center justify-between rounded-2xl border border-white/20 bg-white/20 px-6 py-4 backdrop-blur-xl shadow-xl"  onMouseEnter={() => setEnabled(false)}
      onMouseLeave={() => setEnabled(true)}>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full ">
              <FaUser className="size-5" />
            </div>

            <h2 className="text-lg font-bold tracking-wider">
              RAUFUR
            </h2>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-xl px-5 py-2 font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-black text-white shadow-lg"
                      : "text-black hover:-translate-y-1 hover:bg-white/40 hover:shadow-md"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="rounded-xl bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-neutral-800">
              Let's Talk
            </Link >
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 transition hover:bg-white/30 lg:hidden"
          >
            {open ? (
              <RxCross2 className="size-8" />
            ) : (
              <CgMenu  className="size-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            open
              ? "mt-3 max-h-125 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/20 bg-white/20 p-5 backdrop-blur-xl shadow-xl">

            <div className="flex flex-col gap-3">

              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-black text-white"
                        : "hover:bg-white/40"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

<Link
  to="/contact"
  onClick={()=>setOpen(false)}
  className="mt-2 inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-neutral-800 hover:scale-105 active:scale-95"
>
  Let's Talk
</Link>

            </div>

          </div>
        </div>
      </header>

      {/* Navbar height */}
      <div className="h-28"></div>
    </>
  );
};

export default Navber;