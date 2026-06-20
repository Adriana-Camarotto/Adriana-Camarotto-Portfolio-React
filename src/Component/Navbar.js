import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

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
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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
    <nav
      className={`navbar fixed top-0 left-0 right-0 z-[100] flex items-center justify-between h-[70px] px-[50px] bg-[rgba(10,25,47,0.85)] backdrop-blur-[10px] transition-all duration-[250ms] ease-portfolio${
        scrolled ? " shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]" : ""
      }`}
      aria-label="Main navigation"
    >
      <a
        href="#home"
        className="group flex items-center gap-[10px] no-underline transition-all duration-[250ms] ease-portfolio"
        onClick={() => setMenuOpen(false)}
      >
        <span
          className="font-mono text-[1.125rem] font-bold text-accent tracking-[0.04em] transition-all duration-[250ms] ease-portfolio group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(100,255,218,0.5)]"
          aria-hidden="true"
        >
          &lt;AC/&gt;
        </span>
        <span
          className="text-text-secondary font-light text-[1.125rem] opacity-40"
          aria-hidden="true"
        >
          |
        </span>
        <span className="text-text-primary font-sans text-[1.125rem] font-semibold tracking-[0.02em] transition-colors duration-[250ms] group-hover:text-accent">
          Adri Camarotto
        </span>
      </a>

      <button
        className={`hamburger-btn${menuOpen ? " open" : ""}`}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="navbar-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <div
        id="navbar-menu"
        className={`navbar-menu${menuOpen ? " open" : ""}`}
      >
        <ul className="navbar-nav">
          {links.map((link) => (
            <li key={link.id} className="nav-item">
              <a
                href={link.to}
                className={`nav-link font-sans text-base font-medium px-[14px] py-[10px] transition-all duration-[250ms] ease-portfolio hover:text-accent inline-block${
                  activeSection === link.id
                    ? " text-accent"
                    : " text-text-primary"
                }`}
                aria-current={activeSection === link.id ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {activeSection === link.id ? (
                  <span className="text-accent font-mono font-medium">
                    <span aria-hidden="true">&lt;</span>
                    {link.label}
                    <span aria-hidden="true">&gt;</span>
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
            className="navbar-social-link flex items-center justify-center w-11 h-11 rounded-full text-[1.125rem] text-text-secondary transition-all duration-[250ms] ease-portfolio hover:text-accent"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Adriana-Camarotto"
            target="_blank"
            rel="noreferrer"
            className="navbar-social-link flex items-center justify-center w-11 h-11 rounded-full text-[1.125rem] text-text-secondary transition-all duration-[250ms] ease-portfolio hover:text-accent"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span className="sr-only">Github</span>
          </a>
          <a
            href="mailto:adriana.camarotto@gmail.com"
            className="navbar-email-btn flex items-center justify-center w-11 h-11 rounded-full bg-accent text-bg-primary transition-all duration-[250ms] ease-portfolio hover:bg-[rgba(100,255,218,0.8)]"
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
              aria-hidden="true"
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
