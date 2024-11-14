import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import MagicButton from "../components/ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import man from "../assets/man.jpg";
import cv from "../assets/cv.pdf";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="white"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />
        {/* <Spotlight
          className="top-40 right-10 md:-right-32 md:-top-20 h-screen"
          fill="white"
        /> */}
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.06] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-2 relative my-15 z-10">
        <div className="flex-1 max-w-full  md:max-w-[50vw]  flex items-center justify-center">
          <img
            src={man}
            width={400}
            height={400}
            alt="profile pic"
            className="rounded-full aspect-square object-cover"
          />
        </div>
        <div className="max-w-full  md:max-w-[50vw] mt-5 md:mt-0 flex flex-1 flex-col items-center justify-center">
          <TextGenerateEffect
            words="Hi, I'm Dawit Yimer. I'm a Full Stack Developer expertise in Django, MERN and NextJs"
            className="text-center text-[10px] md:text-3xl lg:text-4xl"
          />

          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <a href={cv}>
              <MagicButton
                title="Download CV"
                icon={<MdOutlineFileDownload />}
                position="right"
              />
            </a>
            <a href="#contact">
              <MagicButton
                title="Let's contact"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
