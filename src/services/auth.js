import toast from "react-hot-toast";

const BASE_URL =
  import.meta.env.VITE_ENVIRONMENT === "production"
    ? import.meta.env.VITE_PRODUCTION
    : import.meta.env.VITE_DEVELOPMENT;

const handleResponse = async (response) => {
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.error);
  }
  return json;
};

const storeTokenAndStudent = async (token, student) => {
  const studentString = JSON.stringify(student)
  localStorage.setItem("token", token)
  localStorage.setItem("student", studentString)
};

export const getStudent = () => {
  const studentData = localStorage.getItem("student")
  if (!studentData) return null
  const student = JSON.parse(studentData)
  return student
}

export const studentSignUp = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/students/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await handleResponse(response);
    await storeTokenAndStudent(data.access, data.student);
    toast.success("Registered Successfully");
    return data.student
  } catch (error) {
    toast.error("Something went wrong");
    console.error("Student Sign Up Error:", error);
    throw error;
  }
};

export const studentSignIn = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await handleResponse(response)
    await storeTokenAndStudent(data.access, data.student)
    toast.success("Signed In Successfully")
    return data.student
  } catch (error) {
    toast.error("Something went wrong")
    console.error("Student Sign In Error:", error)
    throw error
  }
};
