import React from "react";
import "./about.css";

function About() {
  return (
    <section id="about">
      <h3 data-heading="Self-Taught Developer">About Me</h3>

      <p>
        Passionate Frontend Developer with solid knowledge of React, dedicated
        to crafting dynamic user experiences. Proficient in HTML, CSS, and
        JavaScript, I am committed to continuous learning and growth in this
        exciting field. I prioritize staying up-to-date with the latest tools
        and techniques for creating outstanding websites.
      </p>
      <p>
        I'm eager to collaborate, absorb knowledge, and contribute to the
        development of visually stunning and user-centric frontend solutions.
        Let's work together to create web interfaces that captivate and delight
        users at every interaction!
      </p>

      <div className="view__resume">
        <a
          href="https://drive.google.com/file/d/1p_OSWn6cZM-6LIMcDPwhswiNo3USIMym/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Resume</span>
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}

export default About;
