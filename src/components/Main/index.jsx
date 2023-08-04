import React from "react";
import "./main.css";

import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";

function Main() {
  return (
    <main>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default Main;
