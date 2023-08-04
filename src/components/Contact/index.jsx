import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section id="contact">
      <h3 data-heading="Get in Touch">Contact</h3>
      <div className="contact__info">
        <div className="email__icon">
          <i className="fa-regular fa-envelope"></i>
        </div>
        <a href="mailto:opuofficial24@gmail.com" className="email__address">
          opuofficial24@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Contact;
