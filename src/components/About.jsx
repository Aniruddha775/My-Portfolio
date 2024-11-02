import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a dedicated full stack developer with a vast experience including
          Next.js, MERN stack (MongoDB, Express.js, React, Node.js) as well as
          contemporary web based frameworks such as Tailwind. My goal is to
          create performant, maintainable applications with an enjoyable
          interface and a strong backend. On the planning stage while designing
          the screen, I try to make the UI appealing as well as functional,
          which make sure every project is different and attractive.
        </p>
        <br />
        <p className="text-xl">
          Apart from web development, I am also into artificial intelligence and
          more specifically training and fine tuning of large language models
          (LLMs). I incorporate deep learning algorithms throughout the model
          training phase and can apply artificial intelligence methods in
          various domains: language processing, content generation, data mining,
          etc. The combination of web development and AI allows me to make not
          only working products but smart ones, bringing greater functionality
          into the apps. My work is driven by the desire for new solutions and
          their introduction, so I never lag behind and follow new technologies
          that can contribute to bettering every project. I like to take up new
          challenges that require out of the box thinking and I’m committed to
          creating applications that will make a difference and change the world
          in a positive manner by using high-end technology to tackle problems
          efficiently.
        </p>
      </div>
    </div>
  );
};

export default About;
