import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./contact-us.css";
import image from "/Femi.png";
import image1 from "/Ismael.png";

export const ContactUs = () => {
  return (
    <div className="contact-main">
      <h1 className="contact-title">Contact Us</h1>
      <h2 className="contact-subtitle">Application Software Engineers</h2>
      <div className="team-container">
        <div className="team-member">
          <div className="team-info">
            <h3 className="team-name">Ismael Perez</h3>
            <p className="team-bio">
              Ismael Perez is a former mathematics teacher turned software
              engineer who brings his love for math into the world of coding.
              With a deep passion for problem-solving, he combines his
              analytical skills and technical expertise to develop innovative
              solutions and tackle complex challenges in software development.
              Ismael enjoys exploring new technologies, continuously learning,
              and applying his mathematical insights to enhance his work as an
              engineer. His unique background fuels his approach to coding,
              where he sees each project as an opportunity to blend logic,
              creativity, and precision.
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/iperez08"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ismaelperez13/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <img className="team-image" src={image1} alt="Ismael Perez" />
        </div>
        <div className="team-member">
          <div className="team-info">
            <h3 className="team-name">Olorunfemi Bamgbose</h3>
            <p className="team-bio">
              Femi is a dedicated problem solver with a background in
              underwriting that shapes his approach to software development. He
              thrives on tackling complex challenges and is always eager to
              learn new technologies. Outside of coding, Femi enjoys biking,
              hiking, and any adventurous activity. Whether he’s debugging code
              or exploring the outdoors, he applies his adaptability and
              problem-solving skills to overcome obstacles and continuously
              grow.
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/Obamg3017"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a
                href="http://www.linkedin.com/in/olorunfemi-bamgbose"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <img
            className="team-image-two"
            src={image}
            alt="Olorunfemi Bamgbose"
          />
        </div>
      </div>
    </div>
  );
};
