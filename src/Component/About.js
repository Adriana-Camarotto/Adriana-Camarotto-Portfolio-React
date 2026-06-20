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

  const hobbies = [
    { icon: "✎", label: "Creating art" },
    { icon: "☉", label: "Taking walks" },
    { icon: "▶", label: "Watching movies" },
  ];

  return (
    <section id="about" className="bg-bg-primary relative overflow-hidden reveal">
      {/* Background decorative image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src={myPhoto2} alt="" className="about-bg-img" aria-hidden="true" />
      </div>
      {/* Gradient overlay */}
      <div className="about-bg-overlay" aria-hidden="true"></div>

      {/* HTML-tag decorations */}
      <div className="section-deco" aria-hidden="true">
        <span className="section-deco-tag">&lt;about&gt;</span>
        <span className="section-deco-tag section-deco-close">&lt;/about&gt;</span>
      </div>

      <div className="section-inner relative z-[2]">
        <h2 className="numbered-heading">
          <span className="heading-num" aria-hidden="true">&lt;/&gt;</span>{" "}
          About Me
        </h2>

        <div className="about-text grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-[30px] md:gap-[50px] items-start">
          {/* Text column */}
          <div>
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
                className="inline-link text-accent"
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
            <p>I care about code that's clean, maintainable, and built for real people.</p>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            <div className="bg-bg-secondary rounded-lg p-6 border-l-[3px] border-l-text-secondary">
              <p className="font-mono text-base text-text-primary mb-[14px] tracking-[0.05em]">
                Human.exe skills:
              </p>
              <ul className="soft-list">
                {softSkills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom decorative block */}
        <div className="mt-[80px] text-center">
          <div className="flex items-center justify-center gap-4 mb-[40px]" aria-hidden="true">
            <span className="block w-[80px] h-px bg-[linear-gradient(90deg,transparent,#64ffda,transparent)]"></span>
            <span className="font-mono text-base text-accent opacity-60">&lt;/&gt;</span>
            <span className="block w-[80px] h-px bg-[linear-gradient(90deg,transparent,#64ffda,transparent)]"></span>
          </div>

          <div className="text-center mb-8 flex flex-col items-center gap-1">
            <span className="about-name">Adri Camarotto</span>
            <span className="font-mono text-base text-text-secondary tracking-[0.05em] mt-2 opacity-70">
              <span aria-hidden="true">{"// "}</span>Frontend Developer &amp; coffee lover
            </span>
          </div>

          <div className="text-center">
            <h3 className="flex justify-center items-center text-[clamp(0.95rem,4.5vw,1.3rem)] md:text-[2rem] font-bold text-text-primary mb-4 tracking-[0.05em] md:tracking-[0.15em]">
              <span className="transition-all duration-[250ms] ease-portfolio hover:text-accent">WORK</span>
              <span className="text-accent mx-[8px] md:mx-[14px] font-light opacity-70 transition-opacity duration-[250ms] hover:opacity-100" aria-hidden="true">
                /
              </span>
              <span className="transition-all duration-[250ms] ease-portfolio hover:text-accent">LIFE</span>
              <span className="text-accent mx-[8px] md:mx-[14px] font-light opacity-70 transition-opacity duration-[250ms] hover:opacity-100" aria-hidden="true">
                /
              </span>
              <span className="transition-all duration-[250ms] ease-portfolio hover:text-accent">BALANCE</span>
            </h3>
            <p className="font-mono text-base text-text-secondary opacity-70 mb-7">
              When I'm not writing code, you'll find me...
            </p>
            <div className="flex justify-center gap-[12px] md:gap-[40px] flex-wrap">
              {hobbies.map(({ icon, label }) => (
                <div
                  key={label}
                  className="group flex flex-col items-center gap-[10px] py-[14px] px-[10px] md:py-5 md:px-6 bg-bg-secondary border border-transparent rounded-lg transition-all duration-[250ms] ease-portfolio flex-1 min-w-[80px] md:flex-none md:w-[150px] hover:border-accent hover:-translate-y-[4px] hover:shadow-[0_8px_25px_rgba(2,12,27,0.5)]"
                >
                  <span
                    className="text-[1.7rem] text-accent transition-all duration-[250ms] ease-portfolio group-hover:scale-[1.15]"
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                  <span className="font-mono text-base text-text-primary">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
