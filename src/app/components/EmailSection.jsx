import React from 'react'
import GithubIcon from "../../../public.github-icon.svg";
import LinkedinIcon from "../../../public.linkedin-icon.svg";

const EmailSection = () => {
  return <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
    <div><h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5></div>
 <p className="text-white mb-4 max-w-md">
    {""}
     I'm Currently looking for new opportunities, If my portfolio match your requirement and
     feel intruging Contact me by sending me an email
     </p>
     <div className='socials flex flex-row gap-2'></div>
  </section>
}

export default EmailSection