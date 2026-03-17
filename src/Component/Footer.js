import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a
          href="https://github.com/Adriana-Camarotto"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/adriana-camarotto/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
      <p className="footer-credit">
        &copy; Copyright {new Date().getFullYear()} | All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
