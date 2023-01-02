import React from "react";
import { education, languages } from "../data";
import { FaGraduationCap } from "react-icons/fa";
import { ImLibrary } from "react-icons/im"
import { FaLanguage } from "react-icons/fa"

export default function Education() {
  return (
    <section id="education">
      <div className="container px-5 py-10 mx-auto text-center">
        <FaGraduationCap className="mx-auto inline-block mb-2 w-9 h-9 " />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Education
        </h1>
        <ul className="flex flex-wrap m-4">
          {education.map((education) => (
            <li className="p-4 md:w-1/2 w-full">
              <ImLibrary className="mx-auto" />
              <span>{education}</span>
            </li>
          ))}


        </ul>
        <h4 className="sm:text-4xl text-3xl  text-white mb-8 mt-2">
          Languages
        </h4>
        <ul className="flex flex-wrap justify-center items-center">
          {languages.map((lang) => (<li className="flex flex-wrap m-4"><FaLanguage className="mx-2 inline-block w-3 h-3" />{lang}</li>))}
        </ul>

      </div>
    </section>
  );
}
