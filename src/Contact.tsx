import './Contact.css';

import React from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact">
      <h2>Contact Me</h2>
      <div className="contact-buttons">
        <a
          href="https://github.com/icecandle"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="contact-icon" />
        </a>
        <a href="mailto:icecandle@snu.ac.kr" aria-label="Email">
          <FaEnvelope className="contact-icon" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
