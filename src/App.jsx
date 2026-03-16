import { useState } from "react";
import codeGraphImage from "../assets/CodeGraph.png";
import gitEffectsImage from "../assets/git_effects.gif";
import graphMindImage from "../assets/GraphMind.png";
import prismDesignImage from "../assets/PrismDesign.gif";
import profileImage from "../assets/Profile.png";
import trafficNoiseImage from "../assets/Traffic Noise Prediction System.png";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    client: "Interactive Math Tool",
    title: "GraphMind",
    image: graphMindImage,
    summary:
      "A web-based graph visualization tool that connects math expressions, graph interaction, and AI-assisted generation in one exploratory interface.",
  },
  {
    client: "VS Code Extension",
    title: "Git-Effects",
    image: gitEffectsImage,
    summary:
      "A VS Code extension that turns Git actions like commit, push, and pull into immediate visual feedback instead of plain terminal logs.",
  },
  {
    client: "Code Visualization",
    title: "CodeGraph",
    image: codeGraphImage,
    summary:
      "A source relationship visualizer that extracts structures from TS/JS code and maps call graphs, type relations, and data flow as node-edge views.",
  },
  {
    client: "AI + Data Product",
    title: "Traffic Noise Prediction System",
    image: trafficNoiseImage,
    summary:
      "A prediction system that combines a CatBoost regression model with a React map UI to estimate traffic noise levels from environmental metadata.",
  },
  {
    client: "Visual Programming",
    title: "PrismDesign",
    image: prismDesignImage,
    summary:
      "A web-based node programming system inspired by TouchDesigner, focused on real-time graph evaluation and visual pipeline composition.",
  },
];

const services = [
  {
    name: "Tech Stack",
    items: [
      "React",
      "Vite",
      "JavaScript",
    ],
  },
  {
    name: "Developer Tools",
    items: [
      "Git",
      "GitHub",
    ],
  },
  {
    name: "Awards",
    items: [
      "BLEP Data Utilization Competition",
      "Best Paper Award, Korea Data Science Society",
    ],
  },
  {
    name: "Activities",
    items: [
      "Leadership Staff, LikeLion Club",
      "AICS Undergraduate Researcher",
    ],
  },
  {
    name: "Certification",
    items: [
      "Information Processing Engineer",
    ],
  },
];

const clients = [
  "Union",
  "Dazzle",
  "Copay",
  "Exodus",
  "Ket:Ko",
  "Notex",
  "CareSunset",
  "Booking",
];

const socials = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Dribbble", href: "https://dribbble.com/dawidpietrasiak" },
  { label: "Instagram", href: "https://www.instagram.com/dawid_pietrasiak/" },
];

function SectionIntro({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
}) {
  return (
    <div className="section-intro">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="section-intro__aside">
        <p>{description}</p>
        {actionLabel ? (
          <a className="ghost-button" href={actionHref}>
            {actionLabel}
          </a>
        ) : null}
      </div>
    </div>
  );
}

function App() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="page-shell">
      <div className="page-glow page-glow--left" />
      <div className="page-glow page-glow--right" />

      <header className="site-header">
        <a className="brand" href="#top">
          PPsssJ.
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__copy">
            <p className="eyebrow">Frontend • AI Experiences</p>
            <h1>Building interactive products with frontend and AI.</h1>
            <p className="hero__description">
              A portfolio focused on frontend engineering, interactive experiences, and turning ideas into real products.
            </p>
            <div className="hero__actions">
              <a className="primary-button" href="#work">
                View projects
              </a>
              <a className="ghost-button" href="#contact">
                Let&apos;s talk
              </a>
            </div>
            <dl className="hero__stats">
              <div>
                <dt>05</dt>
                <dd>Featured projects</dd>
              </div>
              <div>
                <dt>04</dt>
                <dd>Core services</dd>
              </div>
              <div>
                <dt>End-to-end</dt>
                <dd>Idea → Design → Build</dd>
              </div>
            </dl>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero-card hero-card--primary">
              <img
                src={profileImage}
                alt={projects[0].title}
                loading="eager"
              />
            </div>
            <div className="hero-card hero-card--accent">
              <span>Frontend systems</span>
              <strong>Interactive & AI-driven experiences</strong>
            </div>
            <div className="hero-card hero-card--outline">
              <span>Concept to product</span>
              <strong>Ideas built into real interfaces</strong>
            </div>
          </div>
        </section>

        <section className="projects-section" id="work">
          <SectionIntro
            eyebrow="From Idea to Interface"
            title="A selection of projects built to test concepts, refine user flows, and ship usable products."
            description="Each card is now rendered from React data, making updates far easier than editing a giant exported HTML file."
            actionLabel="Explore all work"
            actionHref="#services"
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`project-card project-card--${(index % 3) + 1}`}
              >
                <div className="project-card__image-wrap">
                  <div className="project-card__media">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                </div>
                <div className="project-card__content">
                  <p>{project.client}</p>
                  <h3>{project.title}</h3>
                  <span>{project.summary}</span>
                  <a className="project-card__link" href="#contact">
                    Discuss this project
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="services">
          <SectionIntro
            eyebrow="Profile"
            title="A quick overview of the stack, recognition, and experiences behind my work."
            description="This interactive panel highlights the technologies I use, the awards I have received, and the communities I have contributed to."
          />

          <div className="services-layout">
            <div className="services-list" role="tablist" aria-label="Services">
              {services.map((service, index) => {
                const isActive = activeService === index;

                return (
                  <button
                    key={service.name}
                    type="button"
                    className={`service-trigger${isActive ? " is-active" : ""}`}
                    onClick={() => setActiveService(index)}
                    aria-pressed={isActive}
                  >
                    <span>{service.name}</span>
                    <span>{String(service.items.length).padStart(2, "0")}</span>
                  </button>
                );
              })}
            </div>

            <div className="service-panel">
              <p className="eyebrow">Selected category</p>
              <h3>{services[activeService].name}</h3>
              <ul>
                {services[activeService].items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <SectionIntro
            eyebrow="Our Story"
            title="Explore our journey and learn what sets us apart in crafting impactful digital experiences."
            description="The original page used custom SVG logos and heavy layout wrappers. Here, the same idea is kept with a lighter, editable component structure."
            actionLabel="See contact"
            actionHref="#contact"
          />

          <div className="about-grid">
            <article className="about-card">
              <h3>Why this version is better to maintain</h3>
              <p>
                Content, project cards, navigation, and services now live as
                plain JavaScript data. That means you can swap copy, reorder
                sections, or connect an API later without fighting a 17,000-line
                export.
              </p>
            </article>

            <div className="logo-cloud" aria-label="Client list">
              {clients.map((client) => (
                <span key={client}>{client}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="site-footer__content">
          <div>
            <p className="eyebrow eyebrow--light">Contact</p>
            <h2>Let&apos;s start creating together.</h2>
            <p className="site-footer__copy">
              The static export has been replaced with a React-first landing
              page that is ready for further componentization, routing, or
              CMS/API wiring.
            </p>
          </div>

          <div className="site-footer__actions">
            <a
              className="primary-button primary-button--light"
              href="mailto:hello@ppsssj.studio"
            >
              hello@ppsssj.studio
            </a>

            <div className="footer-links">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="footer-links footer-links--social">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>2026 ppsssj</span>
          <span>Rebuilt with React + Vite</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
