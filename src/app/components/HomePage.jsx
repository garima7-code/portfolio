"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-[#FFD0D0] px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

const HomePage = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-blue-800 mb-4 text-4xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300'> Hi, I'M </span>
            <br />
            <TypeAnimation
              sequence={[
                'GARIMA',
                1500, 
                'FULL STACK DEVELOPER',
                1500,
                'PYTHON DEVELOPER',
                1500,
                'LEARNER',
                1500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#E1ACAC] text-base sm:text-lg mb-8 lg:text-xl'>
            I am a full stack dev and I am learning React by using this project.
          </p>
          <div>
            <button className='px-6 py-3 mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400 hover:bg-blue-400 text-white text-bold rounded-full border border-white'>HIRE ME</button>
            <button className='px-6 py-3 mr-4 mt-3 w-full sm:w-fit bg-blue-600 hover:bg-blue-400 text-bold rounded-full border border-white'>DOWNLOAD CV</button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-5 '>
          <IconCloudDemo />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
