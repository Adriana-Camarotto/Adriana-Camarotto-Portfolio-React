import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faGit,
  faGithub,
  faReact,
  faNode,
  faNpm,
  faJs,
  faFigma,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";

const WORDPRESS_LOGO =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg";
const MATERIALUI_LOGO =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg";
const LIVEWIRE_LOGO =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/livewire/livewire-original.svg";
const ALPINE_LOGO =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg";

const NextjsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    className="text-[2.25rem] text-accent"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.7V41.8h7.5v42.8z"
    />
  </svg>
);

const StatamicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    className="text-[2.25rem] text-accent"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M109.5 77.5c-4.5-5.3-11.7-8.5-21.5-9.5-6.1-.6-14.2.1-22.8 2.4-1.7.4-3.3.9-4.9 1.5-2.4.8-4.8 1.8-7 2.8l-.7.3c-5.3 2.5-9.8 4.2-13.5 5.1-4.9 1.2-8.5 1-10.8-.6-1.6-1.1-2.3-2.7-2-4.9.5-3.8 3.6-8.3 8.9-13 5.9-5.2 13.3-9.8 20.1-12.5.3-.1.5-.2.8-.3l1.2-.5c5.9-2.3 12.2-4.1 18.7-5.2 8.4-1.5 16.1-1.6 22.3-.3l.9.2.2-.9c.3-1.3.4-2.5.4-3.6 0-3.3-1.4-6-4.1-7.8-3.7-2.5-9.6-3.5-17.1-2.9-6.2.5-13.2 2-20.7 4.5-2.3.8-4.7 1.6-7.1 2.6l-1.5.6c-4.1 1.7-8.6 3.9-13.2 6.6C24.9 49.2 17.5 57 14.3 64.5c-2 4.8-2.5 9.3-1.4 13.3 1.3 4.9 4.9 8.5 10.4 10.3 3 1 6.4 1.4 10.2 1.4 4.7-.1 9.9-1 15.5-2.7 3.1-.9 6.3-2.2 9.8-3.7l1.6-.7c4.8-2.2 8.7-3.6 12-4.4 5.3-1.3 9.7-1.4 13-.3 2.3.8 3.7 2.1 4.1 3.9.6 2.8-.8 6.1-4.1 9.7-3.8 4-9.1 7.6-14.5 9.8-.5.2-.9.4-1.4.5l-.5.2c-4.1 1.5-8.6 2.7-13.3 3.5-6.6 1.1-12.6 1.2-17.8.3l-.9-.2-.2.9c-.2 1-.3 2.1-.3 3.2 0 3.8 1.5 6.8 4.4 8.8 3.3 2.2 8.2 3.1 14.5 2.8 6.9-.4 14.6-2.2 22.2-5.2 2.1-.8 4.2-1.7 6.3-2.8l.9-.4c7.3-3.6 14.1-8.5 19.2-14 5.5-5.9 8.7-11.7 9.4-17.1.5-3.6-.4-6.8-2.8-9.6z"
    />
  </svg>
);

export default function Skills() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    const fontSize = 14;
    let columns;
    let drops;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const hasNoMotion = () =>
      document.body.classList.contains("a11y-no-motion") ||
      prefersReducedMotion.matches;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(10, 25, 47, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#64ffda";
      ctx.font = `${fontSize}px "Fira Code", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? "1" : "0";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      if (!hasNoMotion()) {
        animationId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const skills = [
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "TypeScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "Next.js", icon: null, customIcon: NextjsIcon },
    { name: "Node.js", icon: faNode },
    { name: "Git", icon: faGit },
    { name: "GitHub", icon: faGithub },
    { name: "Tailwind CSS", icon: faCss3Alt },
    { name: "SASS", icon: faCss3Alt },
    { name: "Material UI", icon: null, image: MATERIALUI_LOGO },
    { name: "Bootstrap", icon: faBootstrap },
    { name: "Figma", icon: faFigma },
    { name: "WordPress", icon: null, image: WORDPRESS_LOGO },
    { name: "Statamic", icon: null, customIcon: StatamicIcon },
    { name: "Alpine.js", icon: null, image: ALPINE_LOGO },
    { name: "Laravel", icon: faLaravel },
    { name: "Livewire", icon: null, image: LIVEWIRE_LOGO },
    { name: "npm", icon: faNpm },
  ];

  return (
    <section id="skills" className="bg-bg-primary relative overflow-hidden reveal">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-[0.12]"
        aria-hidden="true"
      />
      <div className="skills-matrix-overlay" aria-hidden="true"></div>
      <div className="section-deco z-[3]" aria-hidden="true">
        <span className="section-deco-tag">&lt;skills&gt;</span>
        <span className="section-deco-tag section-deco-close">
          &lt;/skills&gt;
        </span>
      </div>
      <div className="section-inner relative z-[2]">
        <h2 className="numbered-heading">
          <span className="heading-num" aria-hidden="true">
            &lt;/&gt;
          </span>{" "}
          Skills &amp; Technologies
        </h2>
        <p className="max-w-[600px] mb-[40px] text-[1.125rem] leading-[1.7]">
          Through my studies and professional experience, I developed a solid
          repertoire of skills related to web development. I dedicate my time to
          creating new projects and improving my knowledge as a developer.
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-[10px] py-5 px-[10px] bg-bg-secondary rounded-lg transition-all duration-[250ms] ease-portfolio hover:bg-bg-tertiary hover:-translate-y-[5px]"
            >
              {skill.customIcon ? (
                <skill.customIcon />
              ) : skill.image ? (
                <img src={skill.image} alt="" className="skill-icon-img" />
              ) : (
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-[2.25rem] text-accent"
                  aria-hidden="true"
                />
              )}
              <span className="font-mono text-base text-text-primary text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
