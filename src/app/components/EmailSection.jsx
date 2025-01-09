"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import emailjs from 'emailjs-com';

const EmailSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        'service_83tzgou',
        'template_l4iaxsk',
        formData,
        'rbPnnN6BT_k3GhBI1'
      )
      .then(
        (response) => {
          setIsSending(false);
          setResponseMessage('Your message has been sent successfully!');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          setIsSending(false);
          setResponseMessage('Sorry, something went wrong. Please try again.');
        }
      );
  };

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' id="contact">
      <div>
        <h5 className='text-xl font-bold text-black my-2'>Let&apos;s Connect</h5>
        <p className="text-black mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. If my portfolio matches your requirements, feel free to contact me by sending me an email.
        </p>
        <div className='socials flex flex-row gap-5'>
          <Link href="https://github.com/garima7-code">
            <Image src="/images/git-icon.png" width={50} height={50} alt="github icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/garima-batra-18412b18b/">
            <Image src="/images/linkedin-icon.png" width={50} height={50} alt="linkedin icon" />
          </Link>
        </div>
      </div>

      <div>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <label htmlFor='name' className='text-black block text-sm font-medium'>Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className='bg-gray-100 border border-black placeholder-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5'
            required
            placeholder='John Doe'
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor='email' className='text-black block text-sm font-medium'>Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className='bg-gray-100 border border-black placeholder-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5'
            required
            placeholder='abc12@email.com'
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor='subject' className='text-black block text-sm font-medium'>Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className='bg-gray-100 border border-black placeholder-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5'
            required
            placeholder='Hi! Wanna connect!?'
            value={formData.subject}
            onChange={handleChange}
          />

          {/* Message */}
          <label htmlFor='message' className='text-black block text-sm mb-2 font-medium'>Message</label>
          <textarea
            id="message"
            name="message"
            className='bg-gray-100 border border-black placeholder-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5'
            placeholder="Let&apos;s talk!"
            value={formData.message}
            onChange={handleChange}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className='bg-gradient-to-br from-[#477e75] via-[#778A35] to-[#D1E2C4] hover:bg-[#D1E2C4] text-[#e3e3e1] text-bold font-medium py-2.5 px-5 rounded-lg w-full'
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send '}
          </button>
        </form>

        {responseMessage && (
          <div className={`mt-4 p-2 ${responseMessage.includes('successfully') ? 'bg-green-500' : 'bg-red-500'} text-white`}>
            {responseMessage}
          </div>
        )}
      </div>
    </section>
  );
}

export default EmailSection;
