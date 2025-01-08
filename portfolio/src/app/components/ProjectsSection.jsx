import React from 'react';
import ProjectCard from './ProjectCard';
import Image from 'next/image';

const projectsData = [
    {
        id: 1,
        title: "React Portfolio",
        description: "Portfolio to showcase my creative skill and way of learning react",
        image: "/images/projects/pro__2.mov",
        tag: ["React", "Web"],
        gitUrl: "https://github.com/judygab/nextjs-portfolio/tree/main/src/app/components",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-12">
            <h1 className="text-4xl font-bold mb-6 text-center">
                <strong>My Projects</strong>
            </h1>

            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 gap-8 max-w-xl w-full">
                    {projectsData.map((project) => (
                        <div key={project.id} className="bg-white shadow-lg rounded-lg p-4">
                            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                            <p className="text-gray-600 mb-4">{project.description}</p>

                            {project.image.endsWith('.mov') ? (
                                <video
                                    className="w-full h-auto rounded-lg"
                                    controls
                                    loop
                                    muted
                                    autoPlay
                                >
                                    <source src={project.image} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto rounded-lg"
                                />
                            )}

                            <div className="mt-4 flex justify-between">
                                <div>
                                    {project.tag.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-200 text-gray-800 text-sm py-1 px-2 rounded-lg mr-2"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div>
                                    <a href={project.gitUrl} className="text-blue-500">GitHub</a>
                                    {project.previewUrl && (
                                        <a href={project.previewUrl} className="ml-4 text-blue-500">Preview</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
