// App.js

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Numbers from "./components/Numbers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const slides = [
    {
      heading: "Your Health, Our Priority",
      paragraph: "This is a paragraph for slide 1.",
      button1: "Button 1",
      button2: "Button 2",
    },
    {
      heading: "Slide 2 Heading",
      paragraph: "This is a paragraph for slide 2.",
      button1: "Button 1",
      button2: "Button 2",
    },
    {
      heading: "Slide 3 Heading",
      paragraph: "This is a paragraph for slide 3.",
      button1: "Button 1",
      button2: "Button 2",
    },
  ];

  return (
    <div>
      <div className="app">
        <Navbar />
        <Hero slides={slides} />
      </div>
      <div>
        <Numbers />
      </div>
      <div>
        <Reviews />
      </div>
      <div className="flex justify-center items-center w-[100%] h-[100%]">
        <Contact/>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
