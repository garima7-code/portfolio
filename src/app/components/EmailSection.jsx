import React from 'react'
import Image from "next/image";
import Link from "next/link";

const EmailSection = () => {
  return <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
    <div><h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
 <p className="text-white mb-4 max-w-md">
    {""}
     I'm Currently looking for new opportunities, If my portfolio match your requirement and
     feel intruging Contact me by sending me an email
     </p>
     <div className='socials flex flex-row gap-5'>
<Link href="github.com">
<Image src="/images/git-icon.png" width={50} height={50} alt="github icon" />
</Link>
<Link href="linkedin.com">
<Image src="/images/linkedin-icon.png" width={50} height={50} alt="linkedin icon" />
</Link>
</div>
     </div>
  </section>
}

export default EmailSection;