"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from './TabButton';
import { Content } from 'next/font/google';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2 text-black'>
        <li>Python</li>
        <li>SQL</li>
        <li>Django</li>
        <li>React</li>
        <li>HTML</li>
        <li>JS</li>
        <li>Bootstrap</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2 text-black'>
        <li>Bachelor's In Computer Application From GGSIPU DELHI</li>
        <li>Master's In Computer Application From BVP PUNE</li>
      </ul>
    )
  },
  {
    title: "Projects",
    id: "projects",
    content: (
      <ul className='list-disc pl-2 text-black'>
        <li>Personal Portfolio</li>
        <li>Logistics Monitoring Website</li>
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
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
        <Image src="/images/aboutme.png" width={500} height={500} alt="About Me" />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-black mb-4'>About Me</h2>
          <p className='text-base text-black lg:text-lg'>
            Software developer with a strong sense of purpose and passion for the developing IT sector. Quick learning
            capabilities and adaptability are shown, allowing for flexible work and seamless collaboration. Develops novel solutions
            by applying a creative approach to problem-solving, knowledge of several programming languages, and software
            development processes. Adheres to best practices and accepts responsibility for the quality of their code. Devoted to
            keeping abreast of market trends and technological developments. I'm eager to contribute as a productive member of a
            software development team by utilizing my skills and knowledge.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("projects")} active={tab === "projects"}>Projects</TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
