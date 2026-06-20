import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Notes from "../Assets/screenshotNotes.webp";
import MySpotify from "../Assets/screenshoSpotify.webp";

const featured = [
  {
    title: "Personal Finance Planner",
    image:
      "https://raw.githubusercontent.com/Adriana-Camarotto/personal-finance-planner/main/screenshots/01-home.png",
    description:
      "A personal finance planner to track income, expenses, and financial goals through an intuitive local-first interface.",
    liveUrl: "https://personal-finance-planner-local.netlify.app/",
    githubUrl:
      "https://github.com/Adriana-Camarotto/personal-finance-planner/tree/main",
    tech: ["React", "Material UI", "Chart.js", "LocalStorage"],
  },
  {
    title: "My Spotify",
    image: MySpotify,
    description:
      "A Spotify-inspired music app built with React. Features include playlist creation, music playback interface, and responsive design.",
    liveUrl: "https://my-spotfy.netlify.app",
    githubUrl: "https://github.com/Adriana-Camarotto/myspotify_react",
    tech: ["React", "CSS", "API Integration"],
  },
  {
    title: "Notes App",
    image: Notes,
    description:
      "Create, edit, and delete notes with a powerful search feature. Uses Local Storage and Web Speech API for voice-to-text notes.",
    liveUrl: "https://notes-expert-nlw.netlify.app/",
    githubUrl: "https://github.com/Adriana-Camarotto/nlw-expert-notes",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
];

const other = [
  {
    title: "Odyssey",
    description:
      "A travel companion app providing details on attractions, events, and local information for tourists via search and API integration.",
    githubUrl: "https://github.com/Adriana-Camarotto/odyssey-travel-companion",
    liveUrl: "https://lovely-torrone-a23b28.netlify.app/",
    tech: ["React", "JavaScript", "REST APIs"],
  },
  {
    title: "Weekend Funtimes",
    description:
      "An event planner using APIs to filter movie options and camping locations based on weather forecasts.",
    githubUrl: "https://github.com/Adriana-Camarotto/weekend-funtimes",
    liveUrl: "https://abuttle2.github.io/weekend-funtimes/",
    tech: ["JavaScript", "HTML", "CSS", "APIs"],
  },
  {
    title: "Code Quiz",
    description:
      "A timed coding quiz on JavaScript fundamentals with multiple-choice questions and high score tracking.",
    githubUrl: "https://github.com/Adriana-Camarotto/Code-Quiz",
    liveUrl: "https://adriana-camarotto.github.io/Code-Quiz/",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Team Profile Generator",
    description:
      "A command-line application that generates an HTML webpage with summaries for each team member.",
    githubUrl: "https://github.com/Adriana-Camarotto/Team-profile-generator",
    liveUrl: "https://github.com/Adriana-Camarotto/Team-profile-generator",
    tech: ["Node.js", "JavaScript", "HTML"],
  },
];

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

function Projects() {
  return (
    <section id="projects" className="bg-bg-primary relative overflow-hidden reveal">
      <div className="section-deco" aria-hidden="true">
        <span className="section-deco-tag">&lt;projects&gt;</span>
        <span className="section-deco-tag section-deco-close">
          &lt;/projects&gt;
        </span>
      </div>
      <div className="section-inner">
        <h2 className="numbered-heading">
          <span className="heading-num" aria-hidden="true">
            &lt;/&gt;
          </span>{" "}
          Some Things I've Built
        </h2>

        {/* Featured projects — 12-col grid with .reverse modifier stays in CSS */}
        <div className="flex flex-col gap-[80px] mb-[80px]">
          {featured.map((project, index) => (
            <div
              key={index}
              className={`featured-project ${index % 2 !== 0 ? "reverse" : ""} ${index % 2 === 0 ? "slide-from-right" : "slide-from-left"}`}
            >
              <div className="project-image-wrap">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <img src={project.image} alt="" />
                  <div className="project-overlay"></div>
                </a>
              </div>
              <div className="project-content">
                <p className="font-mono text-base text-accent mb-2">
                  Featured Project
                </p>
                <h3 className="text-[1.7rem] font-bold mb-5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-primary transition-all duration-[250ms] ease-portfolio hover:text-accent"
                    aria-label={`${project.title} (opens live demo in a new tab)`}
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="bg-bg-secondary p-[28px] rounded mb-5 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] relative z-[2]">
                  <p className="text-[1.075rem] leading-[1.6]">{project.description}</p>
                </div>
                <ul className="project-tech-list">
                  {project.tech.map((t, i) => (
                    <li key={i} className="font-mono text-base text-text-secondary">{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-[1.35rem] text-text-primary transition-all duration-[250ms] ease-portfolio hover:text-accent"
                    aria-label={`${project.title} on GitHub (opens in a new tab)`}
                  >
                    <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-[1.35rem] text-text-primary transition-all duration-[250ms] ease-portfolio hover:text-accent"
                    aria-label={`${project.title} live demo (opens in a new tab)`}
                  >
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-center text-[1.7rem] text-text-primary mb-[40px]">
          Other Noteworthy Projects
        </h3>
        <div className="other-projects-grid">
          {other.map((project, index) => (
            <div
              key={index}
              className="group bg-bg-secondary rounded p-[30px] flex flex-col transition-[transform,box-shadow] duration-[250ms] ease-portfolio hover:-translate-y-[7px] hover:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]"
            >
              <div className="flex justify-between items-center mb-[30px]">
                <div className="text-accent" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex gap-[14px]">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-[1.25rem] text-text-secondary transition-all duration-[250ms] ease-portfolio hover:text-accent"
                    aria-label={`${project.title} on GitHub (opens in a new tab)`}
                  >
                    <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-[1.25rem] text-text-secondary transition-all duration-[250ms] ease-portfolio hover:text-accent"
                    aria-label={`${project.title} live demo (opens in a new tab)`}
                  >
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
              <h4 className="text-[1.35rem] font-semibold text-text-primary mb-3 transition-colors duration-[250ms] group-hover:text-accent">
                {project.title}
              </h4>
              <p className="text-base leading-[1.6] flex-1 mb-5">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-[10px]">
                {project.tech.map((t, i) => (
                  <li key={i} className="font-mono text-base text-text-secondary">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
