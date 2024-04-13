import React from "react";
import "./Contact.css";
import contactImage from "../assets/Logo.png"; // Import your image file here

const Contact = () => {
  return (
    <div className="mb-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl text-center font-bold mb-6 mx-auto">
          Get In Contact
        </h2>
        <div className="flex justify-center items-center">
          <img src={contactImage} alt="Contact" className="w-1/3 h-auto mr-[170px] ml-[100px]" style={{ maxWidth: '300px', maxHeight: '300px' }} />
          <div className="bg-slate-400 w-[1170px] px-6 py-8 rounded-lg shadow-md">
            <form action="">
              <div className="mb-4">
                <label className="block text-white text-sm mb-2 font-semibold" htmlFor="">Your Name</label>
                <input placeholder="John Doe" className="w-full px-3 py-2 border rounded-lg bg-slate-200 focus:border-blue-500" required type="text" />
              </div>

              <div className="mb-4">
                <label className="block text-white text-sm mb-2 font-semibold" htmlFor="">Your Email</label>
                <input placeholder="John@example.com" className="w-full px-3 py-2 border rounded-lg bg-slate-200 focus:border-blue-500" required type="email" />
              </div>

              <div className="mb-4">
                <label className="block text-white text-sm mb-2 font-semibold" htmlFor="">Your Message</label>
                <textarea rows='4' placeholder="Type your message here..." className="w-full px-3 py-2 border rounded-lg bg-slate-200 focus:border-blue-500" required type="text" />
              </div>

              <div className="flex justify-center">
                <button type="submit" className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg focus:outline-white hover:bg-pink-600">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
