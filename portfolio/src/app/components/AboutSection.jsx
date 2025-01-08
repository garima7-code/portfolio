"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from './TabButton';
import { Content } from 'next/font/google';
import { FaPython, FaJs, FaHtml5, FaReact, FaDatabase, FaBootstrap, FaBookReader, FaDesktop } from 'react-icons/fa';


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-none pl-0 text-black'>
        <li className='flex items-center'>
          <FaPython className="mr-2 text-black" /> Python
        </li>
        <li className='flex items-center'>
          <FaDatabase className="mr-2 text-black" /> SQL
        </li>
        <li className='flex items-center'>
          <FaPython className="mr-2 text-black" /> Django
        </li>
        <li className='flex items-center'>
          <FaReact className="mr-2 text-black" /> React
        </li>
        <li className='flex items-center'>
          <FaHtml5 className="mr-2 text-black" /> HTML
        </li>
        <li className='flex items-center'>
          <FaJs className="mr-2 text-black" /> JS
        </li>
        <li className='flex items-center'>
          <FaBootstrap className="mr-2 text-black" /> Bootstrap
        </li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-none pl-2 text-black'>

        <li className='flex items-center'>
          <FaBookReader className="mr-2 text-black" /> Bachelor's In Computer Application From GGSIPU DELHI
        </li>
        <li className='flex items-center'>
          <FaBookReader className="mr-2 text-black" />Master's In Computer Application From BVP PUNE
        </li>
      </ul>
    )
  },
  {
    title: "Projects",
    id: "projects",
    content: (
      <ul className='list-none pl-2 text-black'>
      <li className='flex items-start mb-4'>
        <FaDesktop className="mr-2 text-black" />
        <div className="flex flex-col">
          <span>June 2022 – Nov 2022</span>
          <strong>Inter Full Stack Dev at Purpledeone</strong>
        </div>
      </li>
      <li className='flex items-start'>
        <FaDesktop className="mr-2 text-black" />
        <div className="flex flex-col">
          <span>Jan 2023 – Present</span>
          <strong>Jr. Full Stack Dev at Purpledeone</strong>
        </div>
      </li>
    </ul>
    
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white' id="about">
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
        <Image src="/images/aboutme.png" width={500} height={500} alt="About Me" />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-black mb-4'>About Me</h2>

          <p className="text-base text-black lg:text-sm¯">
            I’m a software developer fueled by a passion for creating solutions that matter.
            With a relentless drive to learn and innovate, I thrive in fast-moving environments
            where every challenge is an opportunity to grow. I’m a natural problem solver who
            loves working collaboratively, bringing fresh ideas to the table and delivering code that’s
            not only functional but clean and scalable. Proficient in multiple programming languages
            and development processes, I’m always pushing myself to stay at the forefront of new
            technologies. Whether working on my own or as part of a team, I take pride in my work,
            always aiming to make a lasting impact.


          </p>




          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("projects")} active={tab === "projects"}>Experience</TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
