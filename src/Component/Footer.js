import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <nav className="footer-social" aria-label="Social links">
        <a
          href="https://github.com/Adriana-Camarotto"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub (opens in a new tab)"
        >
          <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/adriana-camarotto/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
        </a>
      </nav>
      <p className="footer-credit">
        &copy; Copyright {new Date().getFullYear()} | All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
