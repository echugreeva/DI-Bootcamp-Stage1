import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from 'react-icons/bs';
import Form from './Form'

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  // function encode(data) {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "test", name, email, message }),
  //   })
  //     .then(() => alert("Message sent!"))
  //     .catch((error) => alert(error));
  // }

  return (
    <section id="contact" className="relative bg-indigo-800">
      <div className="container  px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <Form/>

        <div className="lg:w-1/2 md:w-1/2 sm: w-100 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-start relative">

          <div className="relative flex flex-wrap py-6 rounded shadow-md">
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
              <p className="text-white leading-relaxed mt-1">
                e.chugreeva@gmail.com
              </p>
              <h2 className="title-font font-semibold text-white tracking-widest text-s mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+972586900234</p>
              <div className="flex flex-wrap">
                <a className="title-font font-semibold text-white tracking-widest text-s mt-4 inline-flex" href="https://github.com/echugreeva/DI-Bootcamp-Stage1/tree/master/DI_JS_pt" target="_blank"><BsGithub className="w-7 h-7 " /></a>

                <a className="title-font font-semibold text-white tracking-widest text-s mt-4" href="https://www.linkedin.com/in/elena-chugreeva-45b282103/" target="_blank"><BsLinkedin className="w-7 h-7 ml-4" /></a>
              </div>


            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
