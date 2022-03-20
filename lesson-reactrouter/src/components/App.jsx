import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import About from "../pages/about";
import PageNotFound from "../pages/404";
import NavBar from "./NavBar";
import Footer from "./footer";

function App() {
   return (
      <Router>
         {/* Ideally anything in this bloke is rendered in all components */}
         <NavBar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;
