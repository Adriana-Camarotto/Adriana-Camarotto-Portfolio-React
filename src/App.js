import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css'; 


import Home from "./Component/Home";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import ProjectGalery from "./Component/ProjectGalery";
import ContactMe from "./Component/ContactMe";
import Header from "./Component/Navbar";
import Footer from "./Component/Footer";

//This code is used to be a starting point for buildin a React application.
// Other components and fuctionality can be added to this base component to create complex applications.

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projectGalery" element={<ProjectGalery />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
