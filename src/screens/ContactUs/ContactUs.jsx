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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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
          <img className="team-image-two" src={image} alt="Olorunfemi Bamgbose" />
        </div>
      </div>
    </div>
  );
};
