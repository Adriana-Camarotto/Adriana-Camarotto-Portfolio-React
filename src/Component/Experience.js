import React, { useState, useRef } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);
  const touchStartX = useRef(null);

  const experiences = [
    {
      company: "Inkfire",
      role: "Web Developer",
      period: "June 2026 – Present",
      location: "Freelance, part-time retainer · Remote, UK",
      responsibilities: [
        "Web Developer for a UK creative agency, delivering front-end builds and WordPress development across a diverse client portfolio.",
        "Gathered client requirements and implemented UX, accessibility and responsiveness improvements during a Wix to WordPress migration.",
        "Improved site accessibility, achieving a WAVE score of 9.5/10 through semantic HTML, appropriate ARIA patterns and WCAG principles.",
        "Built self-contained HTML/CSS sections with scoped styles and responsive, accessible components, including a page redesign using CSS scroll-snap.",
        "Built client-approved homepage and page redesigns in HTML/CSS, iterating on client feedback and leading to follow-on work on further pages.",
        "Investigated WooCommerce checkout and caching issues, identifying root causes and applying fixes.",
        "Restyled WooCommerce checkout, order confirmation and payment pages to match an existing cart design, creating a consistent checkout journey.",
        "Managed client tasks through Monday.com and a ticketing system, agreeing weekly priorities with the Dev Lead.",
      ],
    },
    {
      company: "Alt Design",
      role: "Web Developer",
      period: "November 2025 – June 2026",
      location: "Full-time · Derby, UK (Hybrid)",
      responsibilities: [
        "Built and maintained around 10 client websites using the TALL stack (Tailwind CSS, Alpine.js, Livewire and Laravel) alongside Statamic CMS, including one full production launch.",
        "Developed responsive layouts, reusable templates and components with Tailwind CSS, Alpine.js and Livewire.",
        "Configured Statamic content structures, including Collections, Blueprints, Globals, Taxonomies, Forms and Navigation.",
        "Implemented dynamic features such as forms with email notifications, filters and search.",
        "Developed a custom Statamic add-on integrating the Google Maps API, including a Vue 3 control panel fieldtype and a server-side PHP geocoding controller to keep the API key secure.",
        "Developed a custom Statamic add-on allowing editors to add custom CSS to individual entries.",
        "Worked with Git and GitHub workflows in a hybrid agency environment.",
      ],
    },
    {
      company: "Design Monkey Media Ltd",
      role: "Junior Front-End Web Developer",
      period: "April 2024 – November 2025",
      location: "Full-time · Royston, UK",
      responsibilities: [
        "Built and maintained client websites using React, TypeScript, Next.js, Payload CMS and headless WordPress.",
        "Developed reusable React components and integrated REST APIs for CMS-driven projects.",
        "Built custom WordPress themes and custom post types, implementing responsive interfaces from Figma designs.",
        "Performed regular WordPress health checks and maintenance across 10+ client websites, including plugin updates, backups and troubleshooting.",
        "Collaborated with designers and developers using Git-based workflows to deliver client projects.",
      ],
    },
    {
      company: "DizzitUp",
      role: "Front-End Web Developer Intern",
      period: "October 2023 – January 2024",
      location: "Remote, France",
      responsibilities: [
        "Developed responsive web applications using JavaScript, React, HTML and Tailwind CSS.",
        "Integrated Reloadly APIs (Airtime, Gift Card and Utility Payments) to enable global gifting and payments via text message and email.",
        "Collaborated on UI design in Figma and worked with back-end and UI/UX teams to deliver integrated features.",
      ],
    },
    {
      company: "Apanvi (Non-Profit)",
      role: "Front-End Web Developer (Volunteer)",
      period: "May 2023 – October 2023",
      location: "Remote",
      responsibilities: [
        "Built and maintained the organisation’s website with JavaScript and React to increase awareness, donations and animal adoptions.",
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
