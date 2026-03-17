import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import resume from "../Assets/CV0224.pdf";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const links = [
    { to: "#home", id: "home", label: "Home" },
    { to: "#projects", id: "projects", label: "Portfolio" },
    { to: "#skills", id: "skills", label: "Skills" },
    { to: "#about", id: "about", label: "About" },
    { to: "#contact", id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a
        href="#home"
        className="navbar-logo"
        onClick={() => setMenuOpen(false)}
      >
        <span className="logo-tag">&lt;AC/&gt;</span>
        <span className="logo-sep">|</span>
        <span className="logo-name">Adri Camarotto</span>
      </a>
      <button
        className={`hamburger-btn ${menuOpen ? "open" : ""}`}
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-nav">
          {links.map((link) => (
            <li key={link.id} className="nav-item">
              <a
                href={link.to}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {activeSection === link.id ? (
                  <span className="nav-active-bracket">
                    &lt;{link.label}&gt;
                  </span>
                ) : (
                  link.label
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar-social">
          <a
            href="https://www.linkedin.com/in/adriana-camarotto/"
            target="_blank"
            rel="noreferrer"
            className="navbar-social-link"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
          </a>
          <a
            href="https://github.com/Adriana-Camarotto"
            target="_blank"
            rel="noreferrer"
            className="navbar-social-link"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
          <a
            href="mailto:adriana.camarotto@outlook.com"
            className="navbar-email-btn"
            aria-label="Email"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 7L2 7" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
