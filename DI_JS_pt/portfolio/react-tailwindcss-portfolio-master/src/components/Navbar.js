import { ArrowRightIcon } from "@heroicons/react/solid";

import React from "react";
import { BsLinkedin } from "react-icons/bs";

import { BsGithub } from 'react-icons/bs'
// // BsLinkedin
//BsGithub

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
          <code>&lt;/&gt;</code>LenaChu
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            My Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#education" className="mr-5 hover:text-white">
            Education
          </a>
          <a href="https://github.com/echugreeva/DI-Bootcamp-Stage1/tree/master/DI_JS_pt" target="_blank" className="hover:text-white"><BsGithub className="w-7 h-7 ml-3"/></a>
          <a href="https://www.linkedin.com/in/elena-chugreeva-45b282103/" target="_blank"className="hover:text-white"><BsLinkedin className="w-7 h-7 ml-3"/></a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
