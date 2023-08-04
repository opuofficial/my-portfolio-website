import React from "react";
import "./skills.css";
import skillsData from "../../data/skillsData";

function Skills() {
  return (
    <section id="skills">
      <h3 data-heading="What I Know">Technical Skills</h3>

      <div className="skills__container">
        {skillsData.map((skillCategory, index) => (
          <div className="skill__category" key={index}>
            <div className="category__name">{skillCategory.category}</div>
            {skillCategory.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <i className="fa-solid fa-caret-right"></i> {skill}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
