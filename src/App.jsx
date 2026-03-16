import { useState } from "react";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    client: "Booking Corp.",
    title: "Fintech Dello Banking App",
    image:
      "../assets/Profile.png",
    summary:
      "A finance-first product system designed to make complex account data feel calm, fast, and trustworthy.",
  },
  {
    client: "Dazzle Inc.",
    title: "Dazzle Branding",
    image:
      "https://framerusercontent.com/images/YQgvAS4i8HeJRZmg2q1Kfwr6UM.png",
    summary:
      "A bold brand refresh that sharpened visual language, motion cues, and launch storytelling across touchpoints.",
  },
  {
    client: "CareSunset",
    title: "Healthcare Mobile App",
    image: "https://framerusercontent.com/images/JdY0YpiIaeEXQWB6oQk0zawZk.png",
    summary:
      "A patient-friendly experience focused on clarity, accessibility, and frictionless booking flows on mobile.",
  },
  {
    client: "Tech Bank Client",
    title: "Technical Infographic",
    image:
      "https://framerusercontent.com/images/GRXDkBEY59pvYkXWCPZvnEFLlKo.png",
    summary:
      "An editorial data story that translates dense infrastructure concepts into visual explanations people actually follow.",
  },
  {
    client: "Notex",
    title: "Extend & Support App Plugin",
    image:
      "https://framerusercontent.com/images/lZw1bhCVV0JpyjKh2ETJmXTjkoY.png",
    summary:
      "A plugin ecosystem concept built to feel native, modular, and easy to expand without increasing product complexity.",
  },
];

const services = [
  {
    name: "Branding",
    items: [
      "Logo Design",
      "Brand Guidelines",
      "Collateral Design",
      "Rebranding Services",
    ],
  },
  {
    name: "UX/UI Designs",
    items: [
      "User Research and Analysis",
      "Wireframing and Prototyping",
      "User Interface Design",
      "User Experience Testing",
      "Responsive Design Solutions",
    ],
  },
  {
    name: "Motion & Animation",
    items: [
      "Motion Graphics Design",
      "Animated Explainer Videos",
      "Interactive Presentations",
    ],
  },
  {
    name: "Mobile",
    items: [
      "iOS App Development",
      "Android App Development",
      "App Prototyping and Testing",
      "App Maintenance and Updates",
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
                <dt>100%</dt>
                <dd>React + Vite structure</dd>
              </div>
            </dl>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero-card hero-card--primary">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                loading="eager"
              />
            </div>
            <div className="hero-card hero-card--accent">
              <span>Design systems</span>
              <strong>Mobile products</strong>
            </div>
            <div className="hero-card hero-card--outline">
              <span>From Framer export</span>
              <strong>To maintainable React</strong>
            </div>
          </div>
        </section>

        <section className="projects-section" id="work">
          <SectionIntro
            eyebrow="Designing Success"
            title="Selected work that turns product ideas into clear, tangible experiences."
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
                  <img src={project.image} alt={project.title} loading="lazy" />
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
            eyebrow="Services"
            title="A compact React accordion for the capabilities originally buried in the export."
            description="This section is intentionally interactive so the page behaves like an app, not a pasted document."
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
              <p className="eyebrow">Currently focused</p>
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
