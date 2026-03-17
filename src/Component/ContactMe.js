import React from "react";

function ContactUs() {
  return (
    <section id="contact" className="contact-section reveal">
      <div className="section-inner contact-inner">
        <p className="contact-overline">
          <span className="heading-num">&lt;/&gt;</span> What's Next?
        </p>
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
          I'm currently open to new opportunities and my inbox is always open.
          Whether you have a question, a project in mind, or just want to say
          hello, I'll do my best to get back to you!
        </p>
        <a className="contact-btn" href="mailto:adriana.camarotto@gmail.com">
          Say Hello
        </a>
      </div>
    </section>
  );
}

export default ContactUs;
