import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import emailimg from '../media/email.png'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qhmgdug', 'template_hc794g1', form.current, 'Gf2o91xi_Qu6RoSrd')
      .then((result) => {
        console.log(result.text);
        alert(`your message is sent`)
      }, (error) => {
        console.log(error.text);
        alert(`oops something went wrong, try again`)
      });
  };

  return (
    <section id="contact" className="relative bg-indigo-800">
      <div className="container  px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <form className="lg:w-1/2 sm:w-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 mx-10" ref={form} onSubmit={sendEmail}>
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me!
          </h2>
          <p className="leading-relaxed mb-5">
            Write me about your project
          </p>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">Name</label>
            <input className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" name="user_name" />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">Email</label>
            <input type="email" name="user_email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">Message</label>
            <textarea name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" />
          </div>
          <input className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 hover:text-white rounded ring-2 ring-indigo-600 w-40" type="submit" value="Send" />

        </form>
        <div className="lg:w-1/2 md:w-1/2 sm: w-100 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-center relative">

          <div className="relative flex flex-wrap py-6 ">
            <div className=" px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-s mt-4">
                ADDRESS
              </h2>
              <p className="mt-1">
                Tel Aviv, Israel
              </p>
              <h2 className="title-font font-semibold text-white tracking-widest text-s mt-4">
                EMAIL
              </h2>
              <p className="text-pink-500 leading-relaxed mt-1">
                <a href="mailto:e.chugreeva@gmail.com " target="_blank"><img style={{width:"50%"}} src={emailimg}></img></a>
              </p>
              <h2 className="title-font font-semibold text-white tracking-widest text-s mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+972586900234</p>
              <div className="flex flex-wrap">
                <a className="title-font font-semibold text-white tracking-widest text-s mt-4 inline-flex" href="https://github.com/echugreeva/DI-Bootcamp-Stage1/tree/master/DI_JS_pt" target="_blank"><BsGithub className="hover:text-pink-500 w-7 h-7 " /></a>

                <a className="title-font font-semibold text-white tracking-widest text-s mt-4" href="https://www.linkedin.com/in/elena-chugreeva-45b282103/" target="_blank"><BsLinkedin className="hover:text-pink-500 w-7 h-7 ml-4" /></a>
              </div>


            </div>

          </div>
        </div>
      </div>




    </section>
  )
}

export default Contact


