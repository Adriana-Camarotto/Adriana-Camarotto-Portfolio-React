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
import resume from "../Assets/CV0224.pdf";

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
            <div className="hero-photo-wrapper">
              <img src={myPhoto} alt="Adriana Camarotto" />
            </div>
            <div className="floating-icon floating-icon-1">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="floating-icon floating-icon-2">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="floating-icon floating-icon-3">
              <FontAwesomeIcon icon={faCss3Alt} />
            </div>
            <div className="floating-icon floating-icon-4">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="floating-icon floating-icon-5">
              <FontAwesomeIcon icon={faNodeJs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
