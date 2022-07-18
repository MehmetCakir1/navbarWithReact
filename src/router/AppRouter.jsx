import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About"
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Projects from "../pages/Projects";
import Navbar from "../components/Navbar";



const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter