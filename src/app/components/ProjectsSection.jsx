import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "React Porfolio",
        description: "My First react project",
        image: "/images/projects/pro__1.png",
        tag:["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    return (
        <>
            <h2>My Projects</h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'
            >{projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image}
                gitUrl={project.gitUrl} previewUrl={project.previewUrl}

            />)}</div>
        </>
    )
}

export default ProjectsSection