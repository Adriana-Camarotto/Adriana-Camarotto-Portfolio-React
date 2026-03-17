import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Notes from "../Assets/screenshotNotes.png";
import MySpotify from "../Assets/screenshoSpotify.png";

const featured = [
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

function Projects() {
  return (
    <section id="projects" className="projects-section reveal">
      <div className="section-deco">
        <span className="section-deco-tag">&lt;projects&gt;</span>
        <span className="section-deco-tag section-deco-close">
          &lt;/projects&gt;
        </span>
      </div>
      <div className="section-inner">
        <h2 className="numbered-heading">
          <span className="heading-num">&lt;/&gt;</span> Some Things I've Built
        </h2>

        <div className="featured-projects">
          {featured.map((project, index) => (
            <div
              key={index}
              className={`featured-project ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="project-image-wrap">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay"></div>
                </a>
              </div>
              <div className="project-content">
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>
                <div className="project-description-box">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech-list">
                  {project.tech.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live demo"
                  >
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
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="other-heading">Other Noteworthy Projects</h3>
        <div className="other-projects-grid">
          {other.map((project, index) => (
            <div key={index} className="other-project-card">
              <div className="card-header">
                <div className="folder-icon">
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
                <div className="card-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live demo"
                  >
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
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <h4 className="card-title">{project.title}</h4>
              <p className="card-description">{project.description}</p>
              <ul className="card-tech">
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
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
