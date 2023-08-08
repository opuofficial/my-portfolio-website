import React from "react";
import "./about.css";

function About() {
  return (
    <section id="about">
      <h3 data-heading="Self-Taught Developer">About Me</h3>

      <p>
        I am an enthusiastic junior MERN stack developer, driven by my passion
        to create delightful and intuitive web experiences. Embracing the
        ever-evolving field of web development, I am eager to continuously learn
        and grow in this exciting domain. With a strong passion for technology,
        I love exploring web development and staying up-to-date with the latest
        tools and techniques for great-looking websites.
      </p>
      <p>
        Thank you for considering me as part of your team. I'm eager to
        collaborate, absorb knowledge, and build meaningful web solutions that
        positively impact users' lives. Let's create something incredible
        together!
      </p>

      <div className="view__resume">
        <a href="https://drive.google.com/file/d/1wt7d5w-6LtL8kqsICBJzkP1COF-nHshb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <span>View Resume</span>
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}

export default About;
