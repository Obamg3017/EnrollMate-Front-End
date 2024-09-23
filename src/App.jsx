import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import { SignUp } from './screens/Auth/SignUp/SignUp.jsx';
import { SignIn } from './screens/Auth/SignIn/SignIn.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { LandingPage } from './screens/LandingPage/LandingPage.jsx';
import { StudentDashboard } from './screens/StudentDashboard/StudentDashboard.jsx';
import { CourseCatalog } from "./components/CourseCatalog/CourseCatalog.jsx";
import { CourseEnrollment } from "./screens/CourseEnrollment/CourseEnrollment.jsx";
import { About } from "./screens/About/About.jsx";
import { ContactUs } from "./screens/ContactUs/ContactUs.jsx";
import { Footer } from "./components/Footer/Footer.jsx";


const App = () => {
  const [student, setStudent] = useState(null)
  const [query, setQuery] = useState(null)

  const handleSignOut = () => {
    setStudent(null);
  };

  return (
    <div>
      <Navbar student={student} handleSignOut={handleSignOut} setQuery={setQuery}/>
      <Routes>
        <Route
          path="/students/register"
          element={<SignUp setStudent={setStudent} />}
        />
        <Route
          path="/users/login"
          element={<SignIn setStudent={setStudent} />}
        />
        <Route
          path="/"
          element={<LandingPage setQuery={setQuery} />} />
        <Route
          path="/students/dashboard"
          element={<StudentDashboard student={student} />}
        />
        <Route path="/courses" element={<CourseCatalog query={query} />} />
        <Route path="/student/enrollments" element={<CourseEnrollment />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App
