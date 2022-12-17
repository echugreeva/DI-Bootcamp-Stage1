import React from "react";
import heroimage from '../media/portrait2.jpg'
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function About() {
  return (
    <section id="about">
      <div className="container-fluid mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 mx-10">
          <img
            className="object-cover object-top w-100 h-auto rounded"
            alt="hero"
            src={heroimage}
          />
        </div>
        <div className="lg:flex-grow md:w-2/3 lg:pr-16 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Lena! 
          </h1>
          <h2></h2>
          <p className="mb-8 leading-relaxed">
          Your future fullstack developer experienced in JavaScript based programming with a background in web creation,
          ed tech & cyber security industries. Passionate about user experience and making an impact.
  
          </p>
          <div className="flex justify-center">
            <button class="ml-4 inline-flex bg-blue-500 hover:bg-blue-700 border-0 text-white  py-2 px-4 rounded focus:outline-non"><a
              href="#contact"
              >
              Hire  Me
            </a>
  
</button>
<button className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 hover:text-white rounded">
<a
              href="#projects"
             >
              My projects
            </a>
</button>
           
          </div>
        </div>
        
      </div>
    </section>
  );
}
