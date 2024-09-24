import React from "react";
import image3 from "/Graduation.png"
import "./about.css"; 


export const About = () => {
  return (
    <div className="about-section">
      <div className="about-title-container">
        <h1 className="about-title">About Enrollmate</h1>
      </div>

      <div className="about-content">
        <div className="about-left">
          <h2 className="mission-title">Mission</h2>
          <p className="about-paragraph">
            EnrollMate is dedicated to simplifying the student experience by
            providing an intuitive and efficient platform for course enrollment
            and schedule management. Our mission is to empower students to take
            control of their academic journey with ease, offering seamless
            course selection, real-time updates, and personalized scheduling
            tools. With EnrollMate, we aim to enhance productivity and reduce
            the stress of course planning, so students can focus on achieving
            their educational goals.
          </p>
        </div>

        <div className="about-right">
          <img
            src={image3}
            alt="EnrollMate"
            className="about-image"
          />
        </div>
      </div>
    </div>
  );
};