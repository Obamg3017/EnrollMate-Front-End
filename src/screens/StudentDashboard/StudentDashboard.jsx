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
   <div className="dashboard-container">
     <h1 className="dashboard-title">Student Dashboard</h1>

     <div className="cards-container">
       {/* Course Enrollment Card */}
       <div
         className="card enrollment-card"
         onClick={handleCourseEnrollmentClick}
       >
         <h2 className="card-title">Course Enrollment</h2>
         <div className="icon-grid">
           <div className="icon">
             <i className="fa fa-book"></i>
           </div>
           <div className="icon">
             <i className="fa fa-user"></i>
           </div>
           <div className="icon">
             <i className="fa fa-check"></i>
           </div>
           <div className="icon">
             <i className="fa fa-pencil"></i>
           </div>
         </div>
       </div>

       {/* Course Catalog Card */}
       <div className="card catalog-card" onClick={handleCourseCatalogClick}>
         <h2 className="card-title">Course Catalog</h2>
         <div className="icon-grid">
           <div className="icon">
             <i className="fa fa-book"></i>
           </div>
           <div className="icon">
             <i className="fa fa-user"></i>
           </div>
           <div className="icon">
             <i className="fa fa-check"></i>
           </div>
           <div className="icon">
             <i className="fa fa-pencil"></i>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};
