import React, { useState, useRef } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);
  const touchStartX = useRef(null);

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

  const total = experiences.length;
  const active = experiences[activeTab];

  const goTo = (i) => setActiveTab(((i % total) + total) % total);
  const prevTab = () => goTo(activeTab - 1);
  const nextTab = () => goTo(activeTab + 1);

  const handleTabKeyDown = (e) => {
    const last = total - 1;
    let next = null;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      next = activeTab === last ? 0 : activeTab + 1;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      next = activeTab === 0 ? last : activeTab - 1;
    } else if (e.key === "Home") {
      next = 0;
    } else if (e.key === "End") {
      next = last;
    }

    if (next !== null) {
      e.preventDefault();
      setActiveTab(next);
      tabRefs.current[next]?.focus();
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) delta < 0 ? nextTab() : prevTab();
    touchStartX.current = null;
  };

  return (
    <section id="experience" className="bg-bg-primary relative overflow-hidden reveal">
      <div className="section-deco" aria-hidden="true">
        <span className="section-deco-tag">&lt;experience&gt;</span>
        <span className="section-deco-tag section-deco-close">
          &lt;/experience&gt;
        </span>
      </div>
      <div className="section-inner">
        <h2 className="numbered-heading">
          <span className="heading-num" aria-hidden="true">
            &lt;/&gt;
          </span>{" "}
          Where I've Worked
        </h2>

        <div className="experience-content">
          {/* Desktop: vertical tab list */}
          <div
            className="exp-tabs"
            role="tablist"
            aria-label="Companies"
            onKeyDown={handleTabKeyDown}
          >
            {experiences.map((exp, i) => (
              <button
                key={i}
                ref={(el) => (tabRefs.current[i] = el)}
                id={`exp-tab-${i}`}
                className={`exp-tab ${activeTab === i ? "active" : ""}`}
                onClick={() => setActiveTab(i)}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls="exp-panel"
                tabIndex={activeTab === i ? 0 : -1}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Mobile: carousel navigation */}
          <div className="exp-carousel-nav" aria-label="Experience navigation">
            <button
              className="exp-carousel-btn"
              onClick={prevTab}
              aria-label="Previous company"
            >
              ‹
            </button>
            <div className="exp-carousel-indicators">
              <span className="exp-carousel-company">{active.company}</span>
              <div className="exp-carousel-dots" role="tablist" aria-label="Companies">
                {experiences.map((exp, i) => (
                  <button
                    key={i}
                    className={`exp-carousel-dot ${activeTab === i ? "active" : ""}`}
                    onClick={() => goTo(i)}
                    role="tab"
                    aria-selected={activeTab === i}
                    aria-label={exp.company}
                  />
                ))}
              </div>
            </div>
            <button
              className="exp-carousel-btn"
              onClick={nextTab}
              aria-label="Next company"
            >
              ›
            </button>
          </div>

          {/* Panel */}
          <div
            className="exp-panel"
            role="tabpanel"
            id="exp-panel"
            aria-labelledby={`exp-tab-${activeTab}`}
            tabIndex={0}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <h3 className="text-[1.4rem] font-semibold text-text-primary mb-1">
              {active.role}{" "}
              <span className="text-accent">@ {active.company}</span>
            </h3>
            <p className="font-mono text-base text-text-secondary mb-5">
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
