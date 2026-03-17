import React, { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Alt Design",
      role: "Web Developer",
      period: "Nov 2025 — Present",
      location: "Derby, UK · Hybrid",
      responsibilities: [
        "Building and maintaining responsive websites using the TALL stack: Tailwind CSS, Alpine.js, Livewire and Laravel",
        "Developing dynamic, reactive UI components with Livewire and Alpine.js for client-side interactivity",
        "Working with Statamic CMS (Laravel-based), including Antlers templating and content collections for UI rendering",
        "Using Vite and npm for frontend asset compilation and build tooling",
        "Applying best practices in performance optimisation, accessibility and version control with Git and GitHub",
      ],
    },
    {
      company: "Design Monkey Media",
      role: "Junior Front-end Web Developer",
      period: "Apr 2024 — Nov 2025",
      location: "Royston, Cambridgeshire, UK",
      responsibilities: [
        "Built custom WordPress themes using React, Next.js, Material UI and Node.js",
        "Leveraged headless architecture improving performance and security via REST APIs",
        "Built a library of reusable React components, reducing development time by 30%",
        "Led performance monitoring for 10+ websites with detailed reporting",
      ],
    },
    {
      company: "DizzitUp",
      role: "Front-End Web Developer Intern",
      period: "Oct 2023 — Jan 2024",
      location: "France · Remote",
      responsibilities: [
        "Developed responsive web applications using JavaScript and React",
        "Created intuitive user interfaces with HTML and Tailwind CSS",
        "Integrated Reloadly APIs (Airtime, Gift Card, Utility Payments) into web applications",
        "Collaborated on website design using Figma and Tailwind CSS",
      ],
    },
    {
      company: "Apanvi",
      role: "Front-End Web Developer (Volunteer)",
      period: "May 2023 — Oct 2023",
      location: "Remote",
      responsibilities: [
        "Collaborating with volunteers to develop an engaging website for Apanvi",
        "Building features to increase awareness, adoptions, and donations",
        "Utilizing programming skills to support the organization's mission",
        "Implementing responsive design for accessibility across devices",
      ],
    },
  ];

  const active = experiences[activeTab];

  return (
    <section id="experience" className="experience-section reveal">
      <div className="section-deco">
        <span className="section-deco-tag">&lt;experience&gt;</span>
        <span className="section-deco-tag section-deco-close">&lt;/experience&gt;</span>
      </div>
      <div className="section-inner">
        <h2 className="numbered-heading">
          <span className="heading-num">&lt;/&gt;</span> Where I've Worked
        </h2>

        <div className="experience-content">
          <div className="exp-tabs" role="tablist">
            {experiences.map((exp, i) => (
              <button
                key={i}
                className={`exp-tab ${activeTab === i ? "active" : ""}`}
                onClick={() => setActiveTab(i)}
                role="tab"
                aria-selected={activeTab === i}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="exp-panel" role="tabpanel">
            <h3 className="exp-title">
              {active.role}{" "}
              <span className="exp-company">@ {active.company}</span>
            </h3>
            <p className="exp-period">
              {active.period} · {active.location}
            </p>
            <ul className="exp-list">
              {active.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
