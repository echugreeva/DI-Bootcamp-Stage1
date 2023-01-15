import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsArrowRight } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { useState } from "react";


export default function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {

    setIsShown(current => !current);


  };

  return (

    <header className="bg-indigo-800 sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap py-5 flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl hidden md:inline-block">
            LenaChu&lt;/&gt;
          </a>
        </a>
        <div className="md:hidden ml-5">
          <button className="px-3 py-2 border rounded text-pink-200 border-pink-300 hover:text-white hover:border-white"
            onClick={handleClick}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        {
          isShown && (
            <nav id="smallMenu" className="ml-3 flex-col  mt-2 md:hidden">
              <a href="#projects" className="mr-5 hover:text-white block">
                My Projects
              </a>
              <a href="#skills" className="mr-5 hover:text-white block">
                Skills
              </a>
              <a href="#experience" className="mr-5 hover:text-white block">
                Experience
              </a>
              <a href="#education" className="mr-5 hover:text-white block">
                Education
              </a>
             <a href="#contact" className="text-pink-300 hover:text-white">Hire me <BsArrowRight className="inline-block md:w-4 md:h-4 md:ml-1" /></a>

            </nav>

          )


        }



        <nav id="bigMenu" className="hidden w-10/12 md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 items-center text-base justify-between">
          <div className="flex items-center text-base"> 
            <a href="#projects" className="mr-5 hover:text-white">
              My Projects
            </a>
            <a href="#skills" className="mr-5 hover:text-white">
              Skills
            </a>
            <a href="#experience" className="mr-5 hover:text-white">
              Experience
            </a>
            <a href="#education" className="mr-5 hover:text-white">
              Education
            </a>
            <a href="https://github.com/echugreeva/DI-Bootcamp-Stage1/tree/master/DI_JS_pt" target="_blank" className="hover:text-white text-green-300"><BsGithub className="w-8 h-8 ml-3 " /></a>
            <a href="https://www.linkedin.com/in/elena-chugreeva-45b282103/" target="_blank" className="hover:text-white text-blue-300"><BsLinkedin className="w-8 h-8 ml-3" /></a>
          </div>

          <a
            href="#contact"
            className="self-end hover:bg-pink-900 py-2 px-6 focus:outline-none rounded text-base mt-auto mr-3 md:mt-0 ring-2 ring-pink-500">

            Hire Me
            <BsArrowRight className="hidden md:inline-block md:w-4 md:h-4 md:ml-1" />
          </a>
        </nav>



      </div>
    </header>
  );
}
