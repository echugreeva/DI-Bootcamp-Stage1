import React, { useRef } from 'react';
import emailjs from 'email-js';
 
const Form = () => {
 const form = useRef();
 
 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
   emailjs.sendForm('service_qzaqlff', 'template_tri3moa', form.current, 'HHn3r_9lemsbqtPvN')
     .then((result) => {
         // show the user a success message
         alert(result)
     }, (error) => {
        alert(error)
         // show the user an error
     });
 };
 
 return (
    <form
    ref={form} onSubmit={sendEmail}
    className="lg:w-1/2 sm:w-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 mx-10">
    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
      Hire Me!
    </h2>
    <p className="leading-relaxed mb-5">
      Write me about your project
    </p>
    <div className="relative mb-4">
      <label htmlFor="name" className="leading-7 text-sm text-gray-400">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        // onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className="relative mb-4">
      <label htmlFor="email" className="leading-7 text-sm text-gray-400">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        // onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="relative mb-4">
      <label
        htmlFor="message"
        className="leading-7 text-sm text-gray-400">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        // onChange={(e) => setMessage(e.target.value)}
      />
    </div>
    <button
        
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Submit
    </button>
  </form>
 )
};

export default Form