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
      hasDemo: false,  // this portfolio will show demo button
      // demo: "https://your-demo-link-1.com",
      code: "https://colab.research.google.com/drive/1l83QPVmB94oIg1TvV-ZZWUq1wFA-SKnb?authuser=1"
    },
    {
      id: 2,
      src: dallE2,
      hasDemo: false, // this portfolio won't show demo button
      code: "https://github.com/Aniruddha775/Dall-E-Clone-MERN-Stack"
    },
    {
      id: 3,
      src: eCommerce,
      hasDemo: false,
      // demo: "https://your-demo-link-3.com",
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
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects</p>
        </div>

        


        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
          portfolios.map(({id, src, demo, code, hasDemo}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                {hasDemo && (
                  <button 
                    onClick={() => window.open(demo, "_blank")}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </button>
                )}
                <button 
                  onClick={() => window.open(code, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))
          
        }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
