import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import FindProgram from "./pages/FindProgram.jsx";
import FindInstructor from "./pages/FindInstructor.jsx";
import Logout from "./pages/Logout.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/find-program" element={<FindProgram />} />
        <Route path="/find-instructor" element={<FindInstructor />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
