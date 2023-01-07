import React from "react";
import heroimage from '../media/port2square.jpg'

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 mx-10">
          <img
            className="rounded-lg object-cover h-70 m-0 md:mb-5"
            alt="hero"
            src={heroimage}
          />
        </div>
        <div className="lg:flex-grow md:w-2/3 lg:pr-16 md:pr-8  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-2 font-medium text-white">
            Hi, I'm Lena!
          </h1>
          <h2></h2>
          <p className="mb-8 leading-relaxed">
            A fullstack developer experienced in JavaScript based programming with a background in web creation,
            ed tech & cyber security industries. Passionate about user experience and making an impact.

          </p>
          <div className="flex justify-center">
            <button class=" inline-flex bg-pink-700 hover:bg-pink-900 border-0 text-white  py-2 px-4 rounded focus:outline-none  ring-2 ring-pink-600"><a
              href="#contact"
            >
              Hire  Me
            </a>

            </button>
            <button className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 hover:text-white rounded ring-2 ring-indigo-600">
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
