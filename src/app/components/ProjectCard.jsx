import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div className='h-52 md:h-72 rounded-t-xl relative group'
        style={{ background: `url(${imgUrl}) center center / cover no-repeat` }}>
        <div className='overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-pink-400 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
          <Link href={gitUrl} aria-label="GitHub Link"
          className='h-14 w-14 border-2 mr-2 relative rounded-full border-white hover:border-gray-200 group/link'>
            <CodeBracketIcon className='h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
          </Link>
          <Link href={previewUrl} aria-label="Preview Link"
          className='h-14 w-14 border-2 relative rounded-full border-white hover:border-gray-200 group/link'>
            <EyeIcon className='h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
          </Link>
        </div>
      </div>
      <div className='text-black rounded-b-xl bg-slate-100 py-7 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-slate-400'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
