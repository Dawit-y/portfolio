import { LayoutGrid } from "./ui/LayoutGrid";
import vivp from "../assets/vivp.jpg";
import talker from "../assets/talker.jpg";
import coedit from "../assets/coedit.jpg";
import lms from "../assets/lms.jpg";
import enguaz from "../assets/enguaz.jpg";
import quizer from "../assets/quizer.jpg";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        Some of
        <span className="text-purple"> My Projects</span>
      </h1>
      <div className="w-full py-10">
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
};

export default Projects;

const SkeletonOne = () => {
  return (
    <div className="">
      <p className="font-bold md:text-4xl text-xl text-white">
        Virtual Internship and Volunteering Platform
      </p>
      <p className="font-bold text-base text-white"></p>
      <p className="font-bold text-base my-4 max-w-lg text-neutral-200">
        A platform built with Django Rest Framework, React, RTK Query, and
        Stripe, enabling students to apply for internships, complete tasks, and
        view grades, while organizations manage postings and applications, all
        with seamless task tracking and secure payments.
      </p>
      <a
        href="https://vivo-afy522zd2-dawitys-projects.vercel.app/"
        className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none z-30"
      >
        <span
          className={`bg-secondary inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             px-3 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
        >
          Check It Live <FaLocationArrow />
        </span>
      </a>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Talker</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-bold text-base my-4 max-w-lg text-neutral-200">
        A social networking platform built with Django, HTMX, Tailwind, and
        Django Channels. Features include chat functionality, adding friends,
        and seamless real-time interactions, offering an engaging experience
        similar to Facebook.
      </p>
      <a
        href="https://github.com/Dawit-y/talker"
        className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none z-30"
      >
        <span
          className={`bg-secondary inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             px-3 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
        >
          Check on Github <FaGithub />
        </span>
      </a>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Learning Management System
      </p>
      <p className="font-bold text-base text-white"></p>
      <p className="font-bold text-base my-4 max-w-lg text-neutral-200">
        A MERN stack application enabling users to register, learn courses, and
        upgrade to a creator account to post their own courses. Other users can
        enroll in these courses, fostering a dynamic learning and teaching
        ecosystem.
      </p>
      <a
        href="https://github.com/Dawit-y/LMS"
        className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none z-30"
      >
        <span
          className={`bg-secondary inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             px-3 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
        >
          Check on Github <FaGithub />
        </span>
      </a>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">CoEdit</p>
      <p className="font-bold text-base text-white"></p>
      <p className="font-bold text-base my-4 max-w-lg text-neutral-200">
        A Django application for real-time collaborative text editing, similar
        to Google Docs. Users can register, invite others via email, and edit
        the same document simultaneously. Built using Django, Django Channels,
        HTMX, and Tailwind for seamless collaboration and a user-friendly
        interface.
      </p>
      <a
        href="https://github.com/Dawit-y/googledoc-in-django"
        className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none z-30"
      >
        <span
          className={`bg-secondary inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             px-3 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
        >
          Check on Github <FaGithub />
        </span>
      </a>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Quizer</p>
      <p className="font-bold text-base text-white"></p>
      <p className="font-bold text-base my-4 max-w-lg text-neutral-200">
        An application built with Django Rest Framework and React, allowing
        teachers to create online classrooms, add students, and conduct timed
        exams. The platform streamlines classroom management and provides a
        seamless online examination experience.
      </p>
      <a
        href="https://github.com/Dawit-y/quizer_frontend"
        className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none z-30"
      >
        <span
          className={`bg-secondary inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             px-3 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
        >
          Check on Github <FaGithub />
        </span>
      </a>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Enguaz</p>
      <p className="font-bold text-base text-white"></p>
      <p className="font-bold text-base my-4 max-w-lg text-neutral-200">
        A ticketing platform built with Django Rest Framework and React,
        managing bus stations, routes, and schedules. Users can browse available
        buses and routes, and purchase tickets online for a seamless travel
        booking experience.
      </p>
      <a
        href="https://github.com/Dawit-y/enguaz-frontend"
        className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none z-30"
      >
        <span
          className={`bg-secondary inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             px-3 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
        >
          Check on Github <FaGithub />
        </span>
      </a>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail: vivp,
    title: "VIVP",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: talker,
    title: "Talker",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: lms,
    title: "Learning Management System",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail: coedit,
    title: "CoEdit",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "col-span-1",
    thumbnail: quizer,
    title: "Quizer",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail: enguaz,
    title: "Enguaz",
  },
];
