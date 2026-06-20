import React from "react";

function ContactUs() {
  return (
    <section id="contact" className="bg-bg-primary text-center relative overflow-hidden reveal">
      <div
        className="absolute inset-0 pointer-events-none flex flex-col justify-between py-[40px] px-[60px] z-0"
        aria-hidden="true"
      >
        <span className="font-mono text-[1.125rem] text-accent opacity-[0.08] block text-left">
          &lt;contact&gt;
        </span>
        <span className="font-mono text-[1.125rem] text-accent opacity-[0.08] block text-right">
          &lt;/contact&gt;
        </span>
      </div>

      <div className="max-w-[620px] mx-auto px-6 pt-[88px] pb-[160px] relative z-[1]">
        <p className="font-mono text-base text-accent mb-4">
          <span className="text-accent" aria-hidden="true">&lt;/&gt;</span>{" "}
          What's Next?
        </p>

        <h2 className="text-[clamp(2.25rem,5.6vw,4rem)] font-bold text-text-primary mb-5">
          Get In Touch
        </h2>

        <p className="text-[1.2rem] leading-[1.8] mb-[44px] text-text-secondary">
          I'm currently open to new opportunities and my inbox is always open.
          Whether you have a question, a project in mind, or just want to say
          hello, I'll do my best to get back to you!
        </p>

        <a
          className="font-mono text-[1.075rem] text-accent border border-accent px-[40px] py-[16px] inline-flex items-center gap-[10px] tracking-[0.05em] transition-all duration-[250ms] ease-portfolio hover:bg-accent-tint hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(100,255,218,0.1)]"
          href="mailto:adriana.camarotto@gmail.com"
        >
          <span className="text-[1.25rem]" aria-hidden="true">&#9993;</span>
          Say Hello
        </a>
      </div>
    </section>
  );
}

export default ContactUs;
