import React from "react";
import myPhoto2 from "../Assets/myPhoto2.webp";

function About() {
  const softSkills = [
    "Attention to Detail",
    "Team Collaboration",
    "Creative Problem-Solving",
    "Empathy & User Focus",
    "Adaptability",
    "Clear Communication",
  ];

  return (
    <section id="about" className="about-section reveal">
      <div className="about-bg-image">
        <img src={myPhoto2} alt="" aria-hidden="true" />
      </div>
      <div className="about-bg-overlay"></div>
      <div className="section-deco" aria-hidden="true">
        <span className="section-deco-tag">&lt;about&gt;</span>
        <span className="section-deco-tag section-deco-close">
          &lt;/about&gt;
        </span>
      </div>
      <div className="section-inner">
        <h2 className="numbered-heading">
          <span className="heading-num" aria-hidden="true">
            &lt;/&gt;
          </span>{" "}
          About Me
        </h2>

        <div className="about-intro">
          <div className="about-text">
            <p>
              I'm a Front-End Developer with 3 years of commercial experience
              building responsive, accessible, and user-centered web
              applications in the UK.
            </p>
            <p>
              My technical work spans two digital agencies, where I've delivered
              projects across React, Next.js, TypeScript, the TALL stack,
              headless CMS architecture, and API integrations. I enjoy working
              across the full front-end spectrum, from building reusable
              component libraries to developing custom CMS add-ons and
              integrating third-party services.
            </p>
            <p>
              My path into tech isn't conventional. I co-founded and managed a
              technology company in Brazil for over five years, which gave me a
              commercial mindset and a genuine understanding of what software
              needs to do beyond looking good.
            </p>
            <p>
              After relocating to the UK, I transitioned fully into development,
              completing an intensive bootcamp, volunteering as a mentor in the{" "}
              <a
                href="https://technovationchallenge.org/"
                target="_blank"
                rel="noreferrer"
                className="highlight"
                aria-label="Technovation Challenge (opens in a new tab)"
              >
                Technovation Challenge
              </a>{" "}
              to support girls building socially impactful apps, and landing my
              first developer role within a year.
            </p>
            <p>
              I build things outside of work too. I'm currently developing a
              freelance booking platform with React, Supabase and Stripe, and
              Job Tracker, an AI-powered job application tool that integrates
              the Claude API for real-time CV adaptation, cover letter
              generation, and job match scoring.
            </p>
            <p>
              I care about code that's clean, maintainable, and built for real
              people.
            </p>
          </div>

          <div className="about-sidebar">
            <div className="about-soft-block">
              <p className="soft-label">Human.exe skills:</p>
              <ul className="soft-list">
                {softSkills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="about-bottom">
          <div className="about-divider" aria-hidden="true">
            <span className="divider-line"></span>
            <span className="divider-symbol">&lt;/&gt;</span>
            <span className="divider-line"></span>
          </div>

          <div className="about-name-wrapper">
            <span className="about-name">Adri Camarotto</span>
            <span className="about-name-role">
              <span aria-hidden="true">{"//"} </span>Frontend Developer &amp;
              coffee lover
            </span>
          </div>

          <div className="about-wlb">
            <h3 className="wlb-heading">
              <span>WORK</span>
              <span className="wlb-slash" aria-hidden="true">
                /
              </span>
              <span>LIFE</span>
              <span className="wlb-slash" aria-hidden="true">
                /
              </span>
              <span>BALANCE</span>
            </h3>
            <p className="wlb-subtitle">
              When I'm not writing code, you'll find me...
            </p>
            <div className="wlb-hobbies">
              <div className="wlb-hobby-item">
                <span className="hobby-icon" aria-hidden="true">
                  &#9998;
                </span>
                <span className="hobby-label">Creating art</span>
              </div>
              <div className="wlb-hobby-item">
                <span className="hobby-icon" aria-hidden="true">
                  &#9737;
                </span>
                <span className="hobby-label">Taking walks</span>
              </div>
              <div className="wlb-hobby-item">
                <span className="hobby-icon" aria-hidden="true">
                  &#9654;
                </span>
                <span className="hobby-label">Watching movies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
