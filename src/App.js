import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./index.css";

import Home from "./Component/Home";
import About from "./Component/About";
import Experience from "./Component/Experience";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import ContactMe from "./Component/ContactMe";
import Header from "./Component/Navbar";
import Footer from "./Component/Footer";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <button
      className={`scroll-top-btn ${visible ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

function App() {
  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" },
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      {/* Left sidebar - Social links */}
      <div className="side-social">
        <ul>
          <li>
            <a
              href="https://github.com/Adriana-Camarotto"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/adriana-camarotto/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </div>

      {/* Right sidebar - Email */}
      <div className="side-email">
        <a href="mailto:adriana.camarotto@outlook.com">
          adriana.camarotto@outlook.com
        </a>
      </div>

      <main className="main-content">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
