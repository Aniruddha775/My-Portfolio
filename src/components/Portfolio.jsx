import React from "react";
import creditCard from "../assets/portfolio/creditCard.jpg";
import dallE2 from "../assets/portfolio/dallE2.png";
import eCommerce from "../assets/portfolio/eCommerce.png";
import imdbSentiment from "../assets/portfolio/imdbSentiment.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: creditCard,
      hasDemo: false,
      code: "https://colab.research.google.com/drive/1l83QPVmB94oIg1TvV-ZZWUq1wFA-SKnb?authuser=1"
    },
    {
      id: 2,
      src: dallE2,
      hasDemo: false,
      code: "https://github.com/Aniruddha775/Dall-E-Clone-MERN-Stack"
    },
    {
      id: 3,
      src: eCommerce,
      hasDemo: false,
      code: "https://github.com/Aniruddha775/MERN-E-Commerce-Store"
    },
    {
      id: 4,
      src: imdbSentiment,
      hasDemo: false,
      code: "https://colab.research.google.com/drive/1iGORDYKD01hyWqCWXTap17cT91lkS-v_?authuser=1"
    }
  ];
  
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            Portfolio
          </p>
          <p className="py-6 text-white text-base md:text-lg">Check out some of my projects</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
          {portfolios.map(({id, src, demo, code, hasDemo}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover object-center rounded-t-lg duration-200 hover:scale-105"
                src={src}
                alt={`Project ${id}`}
              />
              <div className="flex items-center justify-center">
                {hasDemo && (
                  <button 
                    onClick={() => window.open(demo, "_blank")}
                    className="w-1/2 px-4 md:px-6 py-2 md:py-3 m-3 md:m-4 duration-200 hover:scale-105 text-white text-sm md:text-base"
                  >
                    Demo
                  </button>
                )}
                <button 
                  onClick={() => window.open(code, "_blank")}
                  className="w-1/2 px-4 md:px-6 py-2 md:py-3 m-3 md:m-4 duration-200 hover:scale-105 text-white text-sm md:text-base"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
