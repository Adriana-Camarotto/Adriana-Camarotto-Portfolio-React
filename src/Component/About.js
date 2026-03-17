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
      <div className="section-deco">
        <span className="section-deco-tag">&lt;about&gt;</span>
        <span className="section-deco-tag section-deco-close">
          &lt;/about&gt;
        </span>
      </div>
      <div className="section-inner">
        <h2 className="numbered-heading">
          <span className="heading-num">&lt;/&gt;</span> About Me
        </h2>

        <div className="about-intro">
          <div className="about-text">
            <p>
              I'm a Front-End Developer with over 2 years of experience, focused
              on building inclusive, responsive, and user-centered digital
              experiences. Currently working as a{" "}
              <span className="highlight">Web Developer at Alt Design</span>, I
              build interfaces using modern technologies and develop custom
              WordPress and Statamic sites, leveraging headless architecture for
              enhanced performance and design flexibility.
            </p>
            <p>
              My journey into tech started when I co-founded a tech startup in
              Brazil, which introduced me to the power of digital innovation.
              After that, I spent over three years at Tesco in customer-facing
              roles — experiences that gave me a strong foundation in empathy,
              active listening, and delivering human-centered solutions under
              pressure.
            </p>
            <p>
              I also volunteered as a mentor in the{" "}
              <span className="highlight">Technovation Challenge</span>, guiding
              girls in creating socially impactful apps — reflecting my
              commitment to inclusive and purpose-driven technology.
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
          <div className="about-divider">
            <span className="divider-line"></span>
            <span className="divider-symbol">&lt;/&gt;</span>
            <span className="divider-line"></span>
          </div>

          <div className="about-name-wrapper">
            <span className="about-name">Adri Camarotto</span>
            <span className="about-name-role">
              {"//"} Frontend Developer &amp; coffee lover
            </span>
          </div>

          <div className="about-wlb">
            <h3 className="wlb-heading">
              <span>WORK</span>
              <span className="wlb-slash">/</span>
              <span>LIFE</span>
              <span className="wlb-slash">/</span>
              <span>BALANCE</span>
            </h3>
            <p className="wlb-subtitle">
              When I'm not writing code, you'll find me...
            </p>
            <div className="wlb-hobbies">
              <div className="wlb-hobby-item">
                <span className="hobby-icon">&#9998;</span>
                <span className="hobby-label">Creating art</span>
              </div>
              <div className="wlb-hobby-item">
                <span className="hobby-icon">&#9737;</span>
                <span className="hobby-label">Taking walks</span>
              </div>
              <div className="wlb-hobby-item">
                <span className="hobby-icon">&#9654;</span>
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
