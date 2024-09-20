import React from "react";
import { useNavigate } from "react-router-dom";
import "./student-dashboard.css"

export const StudentDashboard = ({}) => {
  const navigate = useNavigate();

  const handleCourseCatalogClick = () => {
    navigate("/courses");
  };

  const handleCourseEnrollmentClick = () => {
    navigate("/student/enrollments");
  };

  return (
    <div>
      <h1>Student Dashboard</h1>

      <div>
        <div onClick={handleCourseEnrollmentClick}>
          <div>
            <h2>Course Enrollment</h2>
          </div>
          <div>
            <div>
              <h1>img1</h1>
              <h1>img2</h1>
            </div>
            <div>
              <h1>img3</h1>
              <h1>img4</h1>
            </div>
            <div>
              <h1>img5</h1>
              <h1>img6</h1>
            </div>
          </div>
        </div>

        <div>
          <div onClick={handleCourseCatalogClick}>
            <div>
              <h2>Course Catalog</h2>
            </div>
            <div>
              <div>
                <h1>img1</h1>
                <h1>img2</h1>
              </div>
              <div>
                <h1>img3</h1>
                <h1>img4</h1>
              </div>
              <div>
                <h1>img5</h1>
                <h1>img6</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
