import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import Home from "./routes/Home";
// import Title from "./routes/Title";
import Portfolio from "./routes/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Resume from "./routes/Resume";



function App() {
  return (
    <div>
     <BrowserRouter>
      
        <Navbar />
        <div>
            <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Navigate to="/about" />} />

          </Routes>
        </div>
        <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;