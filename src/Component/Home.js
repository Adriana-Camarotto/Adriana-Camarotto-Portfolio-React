import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faCss3Alt,
  faHtml5,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import myPhoto from "../Assets/AdriProfileImg.webp";
import resume from "../Assets/adriana_camarotto_cv_mar_2026.docx";

const hasNoMotion = () =>
  document.body.classList.contains("a11y-no-motion") ||
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Home() {
  const fullText = `Front-End Developer specialised in React, Next.js and modern CMS architectures.
Building performant, responsive and scalable user experiences.`;
  const [displayText, setDisplayText] = useState(() =>
    hasNoMotion() ? fullText : ""
  );
  const [charIndex, setCharIndex] = useState(() =>
    hasNoMotion() ? fullText.length : 0
  );

  // Jump to full text when a11y-no-motion is toggled on mid-animation
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (hasNoMotion()) {
        setDisplayText(fullText);
        setCharIndex(fullText.length);
      }
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [fullText]);

  useEffect(() => {
    if (hasNoMotion() || charIndex >= fullText.length) return;
    const timeout = setTimeout(() => {
      setDisplayText(fullText.slice(0, charIndex + 1));
      setCharIndex((i) => i + 1);
    }, 80);
    return () => clearTimeout(timeout);
  }, [charIndex, fullText]);

  return (
    <section id="home" className="hero">
      <div className="section-deco" aria-hidden="true">
        <span className="section-deco-tag">&lt;home&gt;</span>
        <span className="section-deco-tag section-deco-close">
          &lt;/home&gt;
        </span>
      </div>
      <div className="hero-content">
        <div className="hero-text fade-in">
          {/* Code decorations — hidden on mobile */}
          <div className="hidden md:block mb-5" aria-hidden="true">
            <span className="block font-mono text-base text-text-secondary opacity-50 leading-[1.8]">
              &lt;/html&gt;
            </span>
            <span className="block font-mono text-base text-text-secondary opacity-50 leading-[1.8] pl-5">
              &lt;body&gt;
            </span>
          </div>
          <p
            className="hidden md:block font-mono text-base text-text-secondary opacity-40 my-1"
            aria-hidden="true"
          >
            &lt;h1/&gt;
          </p>
          <h1 className="hero-name">
            Hello{" "}
            <br className="hidden md:inline" />
            I'm <span className="text-accent">Adri,</span>
            <br />
            Web developer
          </h1>
          <p
            className="hidden md:block font-mono text-base text-text-secondary opacity-40 my-1"
            aria-hidden="true"
          >
            &lt;h1/&gt;
          </p>
          <p
            className="hidden md:block font-mono text-base text-text-secondary opacity-40 my-1"
            aria-hidden="true"
          >
            &lt;p&gt;
          </p>
          <h2 className="hero-subtitle">
            {displayText}
            <span className="typing-cursor" aria-hidden="true">
              |
            </span>
          </h2>
          <p
            className="hidden md:block font-mono text-base text-text-secondary opacity-40 my-1"
            aria-hidden="true"
          >
            &lt;p/&gt;
          </p>
          <div className="flex items-center justify-center md:justify-start gap-[30px] mt-[10px]">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-base text-accent border border-accent px-[28px] py-[14px] rounded inline-block transition-all duration-[250ms] ease-portfolio hover:bg-accent-tint"
              aria-label="View my CV (opens in a new tab, Word document)"
            >
              View my CV
            </a>
            <a
              href="#projects"
              className="font-sans text-[1.075rem] text-text-primary underline underline-offset-4 transition-all duration-[250ms] ease-portfolio hover:text-accent"
            >
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
              <FontAwesomeIcon icon={faReact} aria-hidden="true" />
            </a>
            <a
              href="#skills"
              className="floating-icon floating-icon-2"
              aria-hidden="true"
              tabIndex={-1}
            >
              <FontAwesomeIcon icon={faJsSquare} aria-hidden="true" />
            </a>
            <a
              href="#skills"
              className="floating-icon floating-icon-3"
              aria-hidden="true"
              tabIndex={-1}
            >
              <FontAwesomeIcon icon={faCss3Alt} aria-hidden="true" />
            </a>
            <a
              href="#skills"
              className="floating-icon floating-icon-4"
              aria-hidden="true"
              tabIndex={-1}
            >
              <FontAwesomeIcon icon={faHtml5} aria-hidden="true" />
            </a>
            <a
              href="#skills"
              className="floating-icon floating-icon-5"
              aria-hidden="true"
              tabIndex={-1}
            >
              <FontAwesomeIcon icon={faNodeJs} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
