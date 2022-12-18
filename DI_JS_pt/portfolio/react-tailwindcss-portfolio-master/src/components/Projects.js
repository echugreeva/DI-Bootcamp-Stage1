import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are the projects I worked on lately
          </p>
        </div>
        
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div key={project.image}
              className="sm:w-1/2 w-100 p-4 min">
              <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg-white max-w-sm h-400">
                  
                    <img className="rounded-t-lg object-cover h-48 w-96 object-top	" src={project.image} alt={project.title} />
                  
                  <div className="p-5">
                    <h4 className="text-gray-900 text-xl font-medium mb-2">{project.title}</h4>
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{project.subtitle}</h5>
                    <p className="text-gray-700 text-base mb-4">
                      {project.description}
                    </p>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-2">
                      <a href={project.gitHubLink}>Check on GitHub</a>
                    </button>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-2">
                      <a href={project.link}>Live site</a>
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
