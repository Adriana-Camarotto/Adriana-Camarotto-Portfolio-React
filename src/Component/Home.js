import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faCss3Alt,
  faHtml5,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import myPhoto from "../Assets/AdriProfileImg.png";
import resume from "../Assets/adriana_camarotto_cv_mar_2026.docx";

function Home() {
  const fullText = "Frontend Developer";
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText]);

  return (
    <section id="home" className="hero">
      <div className="section-deco">
        <span className="section-deco-tag">&lt;home&gt;</span>
        <span className="section-deco-tag section-deco-close">
          &lt;/home&gt;
        </span>
      </div>
      <div className="hero-content">
        <div className="hero-text fade-in">
          <div className="code-decorations">
            <span className="code-tag">&lt;/html&gt;</span>
            <span className="code-tag code-indent">&lt;body&gt;</span>
          </div>
          <p className="hero-code-label">&lt;h/&gt;</p>
          <h1 className="hero-name">
            Hello
            <br />
            I'm <span className="highlight">Adri,</span>
            <br />
            Web developer
          </h1>
          <p className="hero-code-label">&lt;h1/&gt;</p>
          <p className="hero-code-label">&lt;p&gt;</p>
          <h2 className="hero-subtitle">
            {displayText}
            <span className="typing-cursor">|</span>
          </h2>
          <p className="hero-code-label">&lt;p/&gt;</p>
          <div className="hero-cta-group">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="hero-cta"
            >
              View my CV
            </a>
            <a href="#projects" className="hero-cta-link">
              Portfolio
            </a>
          </div>
        </div>
        <div className="hero-image fade-in">
          <div className="hero-photo-area">
            <div className="hero-circle-bg"></div>
            <a
              href="#about"
              className="hero-photo-wrapper"
              aria-label="Go to About section"
            >
              <img src={myPhoto} alt="Adriana Camarotto" />
            </a>
            <a
              href="#skills"
              className="floating-icon floating-icon-1"
              aria-label="Go to Skills section"
            >
              <FontAwesomeIcon icon={faReact} />
            </a>
            <a
              href="#skills"
              className="floating-icon floating-icon-2"
              aria-label="Go to Skills section"
            >
              <FontAwesomeIcon icon={faJsSquare} />
            </a>
            <a
              href="#skills"
              className="floating-icon floating-icon-3"
              aria-label="Go to Skills section"
            >
              <FontAwesomeIcon icon={faCss3Alt} />
            </a>
            <a
              href="#skills"
              className="floating-icon floating-icon-4"
              aria-label="Go to Skills section"
            >
              <FontAwesomeIcon icon={faHtml5} />
            </a>
            <a
              href="#skills"
              className="floating-icon floating-icon-5"
              aria-label="Go to Skills section"
            >
              <FontAwesomeIcon icon={faNodeJs} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
