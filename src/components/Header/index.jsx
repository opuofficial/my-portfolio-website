import React, { useEffect, useState } from "react";
import "./header.css";

function Header() {
  const sections = [
    { id: "about", displayText: "About Me" },
    { id: "skills", displayText: "Technical Skills" },
    { id: "projects", displayText: "My Work" },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const activeSection = sections.find((section) => {
      const element = document.getElementById(section.id);
      return element.offsetTop > scrollPosition - 250;
    });

    setActiveSection(
      activeSection ? activeSection.id : sections[sections.length - 1].id
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="personal__info">
        <h1>Opu Das</h1>
        <h4>Frontend Developer</h4>
        <p>
          Passionate about crafting user-friendly and visually appealing web
          experiences.
        </p>
      </div>

      <nav>
        {sections.map((section) => (
          <a
            href={`#${section.id}`}
            key={section.id}
            className={section.id === activeSection ? "active" : ""}
          >
            {section.displayText}
          </a>
        ))}
      </nav>

      <div className="social__links">
        <a
          href="https://github.com/opuofficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="mailto:devopu17@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/opudas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
