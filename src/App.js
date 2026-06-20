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
import AccessibilityToolbar from "./Component/AccessibilityToolbar";

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
      className={`fixed bottom-[20px] right-[25px] sm:bottom-[30px] sm:right-[50px] w-11 h-11 rounded-full bg-accent text-bg-primary border-none cursor-pointer flex items-center justify-center z-[999] transition-[opacity,visibility,transform] duration-300 hover:bg-[rgba(100,255,218,0.85)] ${
        visible
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible translate-y-5"
      }`}
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

    const elements = document.querySelectorAll(
      ".reveal, .slide-from-right, .slide-from-left",
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="absolute -top-[60px] left-4 z-[9999] px-[18px] py-[10px] bg-accent text-bg-primary font-sans font-semibold rounded no-underline transition-[top] duration-200 focus:top-4"
      >
        Skip to main content
      </a>
      <Header />

      {/* Left sidebar — Social links. Kept as CSS class: ::after vertical line requires CSS */}
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

      {/* Right sidebar — Email. Kept as CSS class: ::after vertical line requires CSS */}
      <div className="side-email">
        <a href="mailto:adriana.camarotto@gmail.com">
          adriana.camarotto@gmail.com
        </a>
      </div>

      <main className="flex-1 pt-[70px]" id="main-content">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
      <ScrollToTop />
      <AccessibilityToolbar />
    </>
  );
}

export default App;
