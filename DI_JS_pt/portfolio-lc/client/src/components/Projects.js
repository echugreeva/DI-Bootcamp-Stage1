
import React from "react";
import { projects } from "../data";
import {HiCode} from 'react-icons/hi'

export default function Projects() {
  return (
    
    <section id="projects" className="text-gray-400 body-font">
      <div className="container px-5 lg:py-10 py-1 mx-auto text-center lg:px-60">
        <div className="flex flex-col w-full mb-10">
          <HiCode className="mx-auto inline-block  w-12 h-12 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are the projects I worked on lately
          </p>
        </div>
        
        <div className="flex flex-wrap lg:-m-4  ">
          {projects.map((project) => (
            <div key={project.image}
              className="w-100 sm:w-1/2 py-4">
              <div className="flex justify-center min-h-full">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                  
                    <img className="rounded-t-lg object-cover h-48 w-96 object-top	" src={project.image} alt={project.title} />
                  
                  <div className="p-5 h-full">
                    <h4 className="text-gray-900 text-xl font-medium mb-2">{project.title}</h4>
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{project.subtitle}</h5>
                    <p className="text-gray-700 text-base mb-4">
                      {project.description}
                    </p>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-indigo-500 text-white font-medium text-s leading-tight  rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-2 mb-1">
                        <a href={project.link} target="_blank">Live site</a>
                    </button>
                    <button type="button" className=" inline-block px-6 py-2.5 border border-indigo-500 bg-white text-indigo-900 font-medium text-s leading-tight  rounded shadow-md hover:bg-indigo-700 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-2 mb-1">
          
                      <a href={project.gitHubLink} target="_blank">Check on GitHub</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
        
        
      </div>
    </section>
  );
}
