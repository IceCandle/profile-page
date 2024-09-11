import './App.css';

import pfp from './assets/pfp.png';

function App() {
  return (
    <>
      <header className="header">
        <img src={pfp} alt="Profile" className="pfp" />
        <h1>양진혁</h1>
        <p className="tagline">JinHyeok Yang</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <ul>
          <li>SNU CSE 23</li>
          <li>단풍 드럼장</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <p>More projects coming soon...</p>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <div className="contact-buttons">
          <a href="https://github.com/icecandle" target="_blank" rel="noreferrer" className="button">
            GitHub
          </a>
          <a href="mailto:icecandle@snu.ac.kr" className="button">
            Email
          </a>
        </div>
      </section>

      <footer className="footer">
        <p></p>
      </footer>
    </>
  );
}

export default App;
