import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="text-center py-6 px-6 bg-bg-primary" role="contentinfo">
      <nav className="flex justify-center gap-6 mb-4" aria-label="Social links">
        <a
          href="https://github.com/Adriana-Camarotto"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub (opens in a new tab)"
          className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-text-secondary text-2xl transition-all duration-[250ms] ease-portfolio hover:text-accent hover:-translate-y-[3px]"
        >
          <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/adriana-camarotto/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
          className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-text-secondary text-2xl transition-all duration-[250ms] ease-portfolio hover:text-accent hover:-translate-y-[3px]"
        >
          <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
        </a>
      </nav>
      <p className="font-mono text-base text-text-secondary">
        &copy; Copyright {new Date().getFullYear()} | All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
