import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import graphql from "../assets/graphql.png";
import node from "../assets/node.png";
import aws from "../assets/aws.png";
import docker from "../assets/docker.png";
import kubernetes from "../assets/kubernetes.png";
import jenkins from "../assets/jenkins.png";
import tensorflow from "../assets/tensorflow.png";
const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-600",
    },
    {
      id: 6,
      src: nextjs,
      title: "NextJS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },

    {
      id: 9,
      src: node,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: aws,
      title: "AWS",
      style: "shadow-yellow-700",
    },
    {
      id: 11,
      src: docker,
      title: "Docker",
      style: "shadow-blue-500",
    },
    {
      id: 12,
      src: kubernetes,
      title: "Kubernetes",
      style: "shadow-sky-400",
    },
    {
      id: 13,
      src: tensorflow,
      title: "TensorFlow",
      style: "shadow-orange-500",
    },
    {
      id: 14,
      src: jenkins,
      title: "Jenkins",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
        {/* Section header */}
        <div className="pb-8">
          <p className="text-3xl md:text-4xl font-bold border-b-4 border-gray-500 inline text-white">
            Experience
          </p>
          <p className="py-6 text-white text-base md:text-lg">
            These are some of the technologies I've worked with
          </p>
        </div>

        {/* Technology grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center px-2 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div 
              key={id} 
              className={`${style} shadow-md hover:scale-105 duration-500 py-4 rounded-lg bg-gray-800 bg-opacity-50`}
            >
              <img 
                src={src} 
                alt={`${title} icon`} 
                className="w-16 md:w-20 mx-auto" 
              />
              <p className="mt-4 text-white text-sm md:text-base">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Experience;
