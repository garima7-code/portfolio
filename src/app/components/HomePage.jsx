"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import IconCloud from "@/components/magicui/icon-cloud";
import NavLink from './NavLink';
import Link from "next/link";

const navLinks = [
  {
    title: "Contact",
    path: "#contact",
  }
];

const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter", "android",
  "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws",
  "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest", "cypress",
  "docker", "git", "jira", "github", "gitlab", "visualstudiocode", "androidstudio",
  "sonarqube", "figma"
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-[#EFEFE9] px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

const HomePage = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-[#01332B] mb-4 text-4xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#778A35] to-[#D1E2C4]'> Hi, I&apos;M </span>
            <br />
            <TypeAnimation
              sequence={[
                'GARIMA',
                1500,
                'FULL STACK DEV.',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-black text-base sm:text-lg mb-8 lg:text-xl'>
            exploring cool tech 🔍  
            Curiosity drives me — always learning and building 🚀  
            Let&apos;s create something awesome together! 🌟
          </p>

          <div>
            <Link href="#contact">
              <button className="px-6 py-3 mr-4 w-full sm:w-fit bg-gradient-to-br from-[#477e75] via-[#778A35] to-[#D1E2C4] hover:bg-[#D1E2C4] text-[#e3e3e1] text-bold rounded-full border border-[#778A35]">
                HIRE ME
              </button>
            </Link>
            <button className='px-6 py-3 mr-4 mt-3 w-full sm:w-fit bg-[#EFEFE9] hover:bg-[#fcfefa] text-black text-bold rounded-full border border-black'>
              DOWNLOAD CV
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-5'>
          <IconCloudDemo />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
