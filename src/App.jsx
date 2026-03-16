import { useState } from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineArrowLeft,
  HiOutlineIdentification,
  HiOutlineTrophy,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { SiGit, SiGithub, SiJavascript, SiReact, SiVite } from "react-icons/si";
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
    role: "Frontend Engineer",
    focus: "Interactive graph system",
    stack: ["React", "Vite", "JavaScript", "Graph UI"],
    detail:
      "GraphMind is designed to make mathematical relationships easier to explore by connecting equations, graph rendering, and user interaction in a single web experience. The interface focuses on helping users move between expressions and visual output without friction.",
    highlights: [
      "Built an interactive graph interface that links equations and visual output in real time.",
      "Designed the flow so graph updates feel immediate and exploratory instead of static.",
      "Structured the product around math learning, concept discovery, and AI-assisted interaction.",
    ],
    link: "https://github.com/ppsssj/GraphMind-monorepo.git",
  },
  {
    client: "VS Code Extension",
    title: "Git-Effects",
    image: gitEffectsImage,
    summary:
      "A VS Code extension that turns Git actions like commit, push, and pull into immediate visual feedback instead of plain terminal logs.",
    role: "Extension Developer",
    focus: "Developer experience",
    stack: ["VS Code API", "Webview", "JavaScript", "Git"],
    detail:
      "Git-Effects rethinks how Git feedback is delivered inside VS Code. Instead of asking users to parse terminal output after each action, it provides direct visual responses through a Webview-based panel that feels lightweight and immediate.",
    highlights: [
      "Converted commit, push, and pull feedback into visual UI events instead of plain text logs.",
      "Used Webview-based presentation to make extension feedback feel clear and noticeable.",
      "Focused on reducing context switching during everyday Git workflows in the editor.",
    ],
    link: "https://github.com/ppsssj/Git-Effects.git",
  },
  {
    client: "Code Visualization",
    title: "CodeGraph",
    image: codeGraphImage,
    summary:
      "A source relationship visualizer that extracts structures from TS/JS code and maps call graphs, type relations, and data flow as node-edge views.",
    role: "Frontend Engineer",
    focus: "Static analysis visualization",
    stack: ["React", "TypeScript", "Webview", "Graph Visualization"],
    detail:
      "CodeGraph helps developers understand large codebases by translating static analysis output into a navigable visual graph. It is built to reveal structural relationships that are difficult to read from files alone, especially during onboarding or refactoring.",
    highlights: [
      "Visualized functions, classes, interfaces, and types as connected graph structures.",
      "Mapped call graphs, type relations, and data flow in a single interactive view.",
      "Improved codebase readability for dependency tracking and impact analysis.",
    ],
    link: "https://github.com/ppsssj/CodeGraph.git",
  },
  {
    client: "AI + Data Product",
    title: "Traffic Noise Prediction System",
    image: trafficNoiseImage,
    summary:
      "A prediction system that combines a CatBoost regression model with a React map UI to estimate traffic noise levels from environmental metadata.",
    role: "Frontend / AI Product Builder",
    focus: "Prediction interface",
    stack: ["React", "Flask", "CatBoost", "JSON Metadata"],
    detail:
      "This project combines machine learning and interface design to predict traffic noise from environmental metadata. The frontend emphasizes quick experimentation, giving users an immediate way to explore noise curves and contributing factors through a map-based workflow.",
    highlights: [
      "Connected a CatBoost regression model to a React interface for fast prediction feedback.",
      "Built a map-driven UI to input location and environmental conditions intuitively.",
      "Presented 24-hour noise curves and contribution data in a readable product format.",
    ],
    link: "https://github.com/ppsssj/Traffic-Noise-Prediction-System.git",
  },
  {
    client: "Visual Programming",
    title: "PrismDesign",
    image: prismDesignImage,
    summary:
      "A web-based node programming system inspired by TouchDesigner, focused on real-time graph evaluation and visual pipeline composition.",
    role: "Frontend System Designer",
    focus: "Node-based runtime UI",
    stack: ["React", "Node Graph UI", "Runtime Evaluation", "Visual Programming"],
    detail:
      "PrismDesign explores how node-based visual programming can work on the web. Inspired by TouchDesigner, it focuses on building a canvas where users can compose processing pipelines visually and inspect changing states through a runtime-driven interface.",
    highlights: [
      "Created a web canvas for node placement, linking, and pipeline composition.",
      "Applied runtime and evaluator concepts to propagate values across the graph.",
      "Focused on real-time interaction patterns that make visual logic design approachable.",
    ],
    link: "https://github.com/SHOUT-TO-THE-SCREEN/touchdesign-fullstack.git",
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

const itemIcons = {
  React: SiReact,
  Vite: SiVite,
  JavaScript: SiJavascript,
  Git: SiGit,
  GitHub: SiGithub,
  "BLEP Data Utilization Competition": HiOutlineTrophy,
  "Best Paper Award, Korea Data Science Society": HiOutlineTrophy,
  "Leadership Staff, LikeLion Club": HiOutlineUserGroup,
  "AICS Undergraduate Researcher": HiOutlineAcademicCap,
  "Information Processing Engineer": HiOutlineIdentification,
};

function SectionIntro({
  eyebrow,
  title,
  description,
  actionLabel,
  actionAriaLabel,
  actionHref,
  actionExternal,
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
          <a
            className="ghost-button icon-button"
            href={actionHref}
            aria-label={actionAriaLabel}
            target={actionExternal ? "_blank" : undefined}
            rel={actionExternal ? "noreferrer" : undefined}
          >
            {actionLabel}
          </a>
        ) : null}
      </div>
    </div>
  );
}

function App() {
  const [activeService, setActiveService] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const isProjectDetailOpen = Boolean(selectedProject);

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
            description="Selected projects that reflect how I approach interaction design, frontend systems, and developer-focused product thinking."
            actionLabel={<SiGithub />}
            actionAriaLabel="View my GitHub profile"
            actionHref="https://github.com/ppsssj"
            actionExternal
          />

          <div
            className={`projects-stage${isProjectDetailOpen ? " is-detail-open" : ""}`}
          >
            <div className="projects-gallery" aria-hidden={isProjectDetailOpen}>
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
                      <button
                        type="button"
                        className="project-card__link"
                        onClick={() => setSelectedProject(project)}
                      >
                        Discuss this project
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside
              className="project-detail-panel"
              aria-live="polite"
              aria-hidden={!isProjectDetailOpen}
            >
              {selectedProject ? (
                <>
                  <div className="project-detail-panel__header">
                    <button
                      type="button"
                      className="ghost-button icon-button project-detail-panel__back"
                      onClick={() => setSelectedProject(null)}
                      aria-label="Back to projects"
                    >
                      <HiOutlineArrowLeft />
                    </button>
                    <a
                      className="ghost-button icon-button project-detail-panel__repo"
                      href={selectedProject.link}
                      aria-label={`View ${selectedProject.title} repository`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SiGithub />
                    </a>
                  </div>

                  <div className="project-detail-panel__image-wrap">
                    <div className="project-detail-panel__image">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="project-detail-panel__intro">
                    <p className="eyebrow">{selectedProject.client}</p>
                    <h3>{selectedProject.title}</h3>
                    <p className="project-detail-panel__summary">
                      {selectedProject.detail}
                    </p>
                  </div>

                  <div className="project-detail-panel__facts">
                    <article>
                      <span>Role</span>
                      <strong>{selectedProject.role}</strong>
                    </article>
                    <article>
                      <span>Focus</span>
                      <strong>{selectedProject.focus}</strong>
                    </article>
                  </div>

                  <div className="project-detail-panel__columns">
                    <article className="project-detail-card">
                      <p className="eyebrow">Project summary</p>
                      <p>{selectedProject.summary}</p>
                    </article>

                    <article className="project-detail-card">
                      <p className="eyebrow">Highlights</p>
                      <ul>
                        {selectedProject.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>

                    <article className="project-detail-card">
                      <p className="eyebrow">Stack</p>
                      <ul className="project-detail-card__tags">
                        {selectedProject.stack.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </>
              ) : null}
            </aside>
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
                {services[activeService].items.map((item) => {
                  const Icon = itemIcons[item];

                  return (
                    <li key={item}>
                      {Icon ? (
                        <span className="service-item__icon" aria-hidden="true">
                          <Icon />
                        </span>
                      ) : null}
                      <span>{item}</span>
                    </li>
                  );
                })}
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
        </div>
      </footer>
    </div>
  );
}

export default App;
