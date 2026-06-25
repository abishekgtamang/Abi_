import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const navItems = [
  { label: 'Home', href: '#home', animation: 'nav-home' },
  { label: 'About', href: '#about', animation: 'nav-about' },
  { label: 'Skills', href: '#skills', animation: 'nav-skills' },
  { label: 'Projects', href: '#projects', animation: 'nav-projects' },
  { label: 'Experience', href: '#experience', animation: 'nav-experience' },
  { label: 'Contact', href: '#contact', animation: 'nav-contact' },
];

const skills = ['HTML', 'CSS', 'JavaScript', 'Adobe Creative Suite'];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Abhishek Ghalan home">
        <span>AG</span>
        <strong>Abhishek Ghalan</strong>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map(({ label, href, animation }) => (
          <a key={label} className={`nav-link ${animation}`} href={href}>
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">Personal Branding Portfolio</p>
        <h1>Developer and Designer crafting clear, polished digital experiences.</h1>
        <p className="hero-text">
          I bring concepts to life through compelling visual design. From book layouts to brand identities,
          I use typography, color, and composition to communicate messages clearly and beautifully.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">View Projects</a>
          <a className="button secondary" href="mailto:abishekgtamang@gmail.com">Contact Me</a>
        </div>
      </div>
      <div className="profile-card" aria-label="Profile highlights">
        <div className="profile-monogram">AG</div>
        <h2>Abhishek Ghalan</h2>
        <p>Based in Lalitpur, Nepal</p>
        <div className="stat-grid">
          <span><strong>Design</strong>Visual systems</span>
          <span><strong>Code</strong>Web interfaces</span>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section-shell content-section">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section id="about" eyebrow="About" title="Thoughtful design with practical development thinking.">
          <p>
            Abhishek combines visual design fundamentals with web development skills to create portfolio-ready,
            brand-conscious experiences. His work focuses on structured layouts, expressive typography, refined
            color usage, and clear communication.
          </p>
        </Section>
        <Section id="skills" eyebrow="Skills" title="Core capabilities">
          <div className="skill-grid">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </Section>
        <Section id="projects" eyebrow="Projects" title="Project showcase coming soon">
          <div className="project-placeholder">
            <h3>Reserved for upcoming work</h3>
            <p>
              Add future projects here with screenshots, short descriptions, technology stacks, GitHub links,
              and live demos when they are ready.
            </p>
          </div>
        </Section>
        <Section id="experience" eyebrow="Experience" title="Professional experience">
          <article className="timeline-card">
            <span className="timeline-dot" aria-hidden="true" />
            <div>
              <h3>Digo_TechHub</h3>
              <p>Contributing design and development support for polished, usable digital work.</p>
            </div>
          </article>
        </Section>
        <Section id="contact" eyebrow="Contact" title="Let’s build something polished together.">
          <div className="contact-card">
            <a href="mailto:abishekgtamang@gmail.com">abishekgtamang@gmail.com</a>
            <a href="https://github.com/abishekgtamang" target="_blank" rel="noreferrer">github.com/abishekgtamang</a>
            <span>Lalitpur, Nepal</span>
          </div>
        </Section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Abhishek Ghalan. Designed for personal branding.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
