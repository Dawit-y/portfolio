import { socialMedia } from "../data";
import grid from "../assets/footer-grid.svg";

const Footer = () => {
  return (
    <footer className="w-full pt-5 pb-10">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src={grid} alt="grid" className="w-full h-full opacity-50 " />
      </div>

      {/* <div className="flex flex-col items-center">
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
      </div> */}
      <div className="flex mt-5 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Dawit Yimer
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
