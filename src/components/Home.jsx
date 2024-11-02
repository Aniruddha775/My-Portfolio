import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

/**
 * Home Component
 */
/**
 * Home Component
 */
/**
 * Home Component
 */
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      {/* Adjusted padding and improved mobile-first layout */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-8 md:flex-row md:px-8">
        {/* Text content section with better mobile spacing */}
        <div className="flex flex-col justify-center h-full mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-base sm:text-lg">
            Passionate about creating cutting-edge web applications with
            Next.js, React, Tailwind, and GraphQL, delivering high-performance,
            responsive, and visually engaging user experiences
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={600}
              className="group text-white w-fit px-4 py-2 sm:px-6 sm:py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        {/* Image section with improved responsive sizing */}
        <div className="w-full md:w-1/2">
          <img
            src={HeroImage}
            alt="my-profile"
            className="rounded-2xl mx-auto w-[250px] sm:w-[350px] md:w-full max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};


export default Home;
