import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import { SignUp } from './screens/Auth/SignUp/SignUp.jsx'
import { SignIn } from './screens/Auth/SignIn/SignIn.jsx'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { LandingPage } from './screens/LandingPage/LandingPage.jsx'
import { StudentDashboard } from './screens/StudentDashboard/StudentDashboard.jsx'
import { CourseCatalog } from "./components/CourseCatalog/CourseCatalog.jsx"
import { CourseEnrollment } from './screens/CourseEnrollment/CourseEnrollment.jsx'


const App = () => {
  const [student, setStudent] = useState(null)
  const [query, setQuery] = useState(null)

  return (
    <div>
      <Navbar />
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
        <Route
          path="/courses"
          element={<CourseCatalog query={query} />} />
        <Route path='/students/enrollments' element={<CourseEnrollment />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App
