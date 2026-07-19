import carRental from "../assets/car-rental.jpg";
import ecommerce from "../assets/dashboard.jpg";
import portfolio from "../assets/projects-1.jpg";
import chatApp from "../assets/students.jpg";

export const projects = [
  {
    id: 1,
    image: carRental,
    title: "Car Rental Platform",
    description:
      "A production-ready MERN car rental application with booking, payment, dashboard and admin panel.",

    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],

    liveLink: "https://car-rental.vercel.app",

    github: "https://github.com/yourname/car-rental",

    details: "/projects/car-rental",

    featured: true,
  },

  {
    id: 2,
    image: ecommerce,
    title: "E-Commerce Store",
    description:
      "Modern ecommerce frontend with authentication, filters, wishlist and shopping cart.",

    tech: ["React", "Redux", "Tailwind"],

    liveLink: "https://shop.vercel.app",

    github: "https://github.com/yourname/ecommerce",

    details: "/projects/ecommerce",

    featured: true,
  },

  {
    id: 3,
    image: portfolio,
    title: "Developer Portfolio",
    description:
      "Animated portfolio website built with React, Tailwind CSS and GSAP.",

    tech: ["React", "GSAP", "Tailwind"],

    liveLink: "https://portfolio.vercel.app",

    github: "https://github.com/yourname/portfolio",

    details: "/projects/portfolio",

    featured: false,
  },

  {
    id: 4,
    image:chatApp,
    title: "Realtime Chat App",
    description:
      "Socket.io powered realtime chat application with authentication and media sharing.",

    tech: ["React", "Node.js", "Socket.io"],

    liveLink: "https://chat.vercel.app",

    github: "https://github.com/yourname/chat-app",

    details: "/projects/chat-app",

    featured: false,
  },


];