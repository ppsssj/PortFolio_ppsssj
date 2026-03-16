import { useEffect, useState } from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineArrowLeft,
  HiOutlineAtSymbol,
  HiOutlineEnvelope,
  HiOutlineIdentification,
  HiOutlineTrophy,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import {
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNotion,
  SiPostman,
  SiReact,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  copy,
  keywordLabels,
  navigationItems,
  projectCatalog,
  sectionIds,
  serviceCatalog,
  serviceItemLabels,
  serviceLabels,
  socials,
} from "./content";
import codeGraphImage from "../assets/CodeGraph.png";
import gitEffectsImage from "../assets/git_effects.gif";
import graphMindImage from "../assets/GraphMind.png";
import prismDesignImage from "../assets/PrismDesign.gif";
import profileImage from "../assets/Profile.png";
import trafficNoiseImage from "../assets/Traffic Noise Prediction System.png";

const projectImages = {
  codeGraphImage,
  gitEffectsImage,
  graphMindImage,
  prismDesignImage,
  trafficNoiseImage,
};

const itemIcons = {
  react: SiReact,
  vite: SiVite,
  javascript: SiJavascript,
  html: SiHtml5,
  css: SiCss,
  typescript: SiTypescript,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
  figma: SiFigma,
  postman: SiPostman,
  notion: SiNotion,
  blep_competition: HiOutlineTrophy,
  best_paper: HiOutlineTrophy,
  likelion_staff: HiOutlineUserGroup,
  aics_researcher: HiOutlineAcademicCap,
  startup_club_lead: HiOutlineUserGroup,
  information_processing_engineer: HiOutlineIdentification,
};

const footerSocialIcons = {
  Gmail: HiOutlineEnvelope,
  "Naver Mail": HiOutlineAtSymbol,
  GitHub: SiGithub,
};

function renderParts(parts, baseClass) {
  return parts.map((part, index) => (
    <span
      key={`${baseClass}-${index}-${part.text}`}
      className={`${baseClass} ${baseClass}--${part.tone}`}
    >
      {part.text}
    </span>
  ));
}

function SectionIntro({
  eyebrow,
  title,
  titleClassName,
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
        <h2 className={titleClassName}>{title}</h2>
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
  const [locale, setLocale] = useState("en");
  const [activeService, setActiveService] = useState(0);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  const ui = copy[locale];
  const navigation = navigationItems.map((item) => ({
    ...item,
    label: ui.navigation[item.key],
  }));
  const projects = projectCatalog.map((project) => ({
    ...project,
    image: projectImages[project.imageKey],
    ...project.content[locale],
  }));
  const services = serviceCatalog.map((service) => ({
    key: service.key,
    name: serviceLabels[locale][service.key],
    items: service.items.map((item) => ({
      key: item,
      label: serviceItemLabels[locale][item],
    })),
  }));
  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) ?? null;
  const isProjectDetailOpen = Boolean(selectedProject);
  const activeSectionIndex = Math.max(sectionIds.indexOf(activeSection), 0);

  useEffect(() => {
    document.documentElement.lang = locale === "kr" ? "ko" : "en";
  }, [locale]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const updateActiveSection = () => {
      const scrollAnchor = window.scrollY + window.innerHeight * 0.38;
      let currentSection = sectionIds[0];

      sections.forEach((section) => {
        if (section.offsetTop <= scrollAnchor) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className="page-shell">
      <div className="page-glow page-glow--left" />
      <div className="page-glow page-glow--right" />

      <nav
        className="section-rail"
        aria-label={ui.sectionRailLabel}
        style={{ "--active-index": activeSectionIndex }}
      >
        <div className="section-rail__inner">
          <p className="section-rail__eyebrow">{ui.sectionRailEyebrow}</p>
          <div className="section-rail__list">
            <span className="section-rail__track" aria-hidden="true" />
            <span className="section-rail__thumb" aria-hidden="true" />
            {navigation.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <a
                  key={item.href}
                  className={`section-rail__link${isActive ? " is-active" : ""}`}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <header className="site-header">
        <a className="brand" href="#top">
          PPsssJ.
        </a>

        <div
          className="language-toggle"
          role="group"
          aria-label={ui.languageToggleLabel}
        >
          {["en", "kr"].map((code) => (
            <button
              key={code}
              type="button"
              className={`language-toggle__button${
                locale === code ? " is-active" : ""
              }`}
              onClick={() => setLocale(code)}
              aria-pressed={locale === code}
            >
              {ui.languageLabels[code]}
            </button>
          ))}
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__copy">
            <p className="eyebrow">{ui.hero.eyebrow}</p>
            <h1 className="hero__headline" aria-label={ui.hero.headlineAria}>
              {renderParts(ui.hero.headlineParts, "hero__word")}
            </h1>
            <p className="hero__description">{ui.hero.description}</p>
            <div className="hero__actions">
              <a className="primary-button" href="#work">
                {ui.hero.primaryAction}
              </a>
              <a className="ghost-button" href="#contact">
                {ui.hero.secondaryAction}
              </a>
            </div>
            <dl className="hero__stats">
              {ui.hero.stats.map((stat) => (
                <div key={stat.term}>
                  <dt>{stat.term}</dt>
                  <dd>{stat.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero-card hero-card--primary">
              <img src={profileImage} alt={projects[0].title} loading="eager" />
            </div>
            <div className="hero-card hero-card--accent">
              <span>{ui.hero.cards.accentEyebrow}</span>
              <strong>{ui.hero.cards.accentTitle}</strong>
            </div>
            <div className="hero-card hero-card--outline">
              <span>{ui.hero.cards.outlineEyebrow}</span>
              <strong>{ui.hero.cards.outlineTitle}</strong>
            </div>
          </div>
        </section>

        <section className="projects-section" id="work">
          <SectionIntro
            eyebrow={ui.projects.eyebrow}
            titleClassName="section-title section-title--mixed"
            title={renderParts(ui.projects.titleParts, "section-title__word")}
            description={ui.projects.description}
            actionLabel={<SiGithub />}
            actionAriaLabel={ui.projects.githubAriaLabel}
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
                    key={project.id}
                    className={`project-card project-card--${(index % 3) + 1}`}
                  >
                    <div className="project-card__image-wrap">
                      <div className="project-card__media">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="project-card__content">
                      <p>{project.client}</p>
                      <h3>{project.title}</h3>
                      <span>{project.summary}</span>
                      <button
                        type="button"
                        className="project-card__link"
                        onClick={() => setSelectedProjectId(project.id)}
                      >
                        {ui.projects.discussLabel}
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
                      onClick={() => setSelectedProjectId(null)}
                      aria-label={ui.projects.backLabel}
                    >
                      <HiOutlineArrowLeft />
                    </button>
                    <a
                      className="ghost-button icon-button project-detail-panel__repo"
                      href={selectedProject.link}
                      aria-label={ui.projects.repoAriaLabel(selectedProject.title)}
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
                      <span>{ui.projects.facts.role}</span>
                      <strong>{selectedProject.role}</strong>
                    </article>
                    <article>
                      <span>{ui.projects.facts.focus}</span>
                      <strong>{selectedProject.focus}</strong>
                    </article>
                  </div>

                  <div className="project-detail-panel__columns">
                    <article className="project-detail-card">
                      <p className="eyebrow">{ui.projects.detailCards.summary}</p>
                      <p>{selectedProject.summary}</p>
                    </article>

                    <article className="project-detail-card">
                      <p className="eyebrow">
                        {ui.projects.detailCards.highlights}
                      </p>
                      <ul>
                        {selectedProject.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>

                    <article className="project-detail-card">
                      <p className="eyebrow">{ui.projects.detailCards.stack}</p>
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
            eyebrow={ui.profile.eyebrow}
            title={ui.profile.title}
            description={ui.profile.description}
          />

          <div className="services-layout">
            <div
              className="services-list"
              role="tablist"
              aria-label={ui.profile.tabAriaLabel}
            >
              {services.map((service, index) => {
                const isActive = activeService === index;

                return (
                  <button
                    key={service.key}
                    type="button"
                    className={`service-trigger${isActive ? " is-active" : ""}`}
                    onClick={() => setActiveService(index)}
                    aria-pressed={isActive}
                  >
                    <span>{service.name}</span>
                    <span className="service-trigger__arrow" aria-hidden="true">
                      &gt;
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="service-panel">
              <p className="eyebrow">{ui.profile.selectedLabel}</p>
              <h3>{services[activeService].name}</h3>
              <ul
                className={
                  services[activeService].key === "tech_stack" ||
                  services[activeService].key === "developer_tools"
                    ? "service-panel__list service-panel__list--grid"
                    : "service-panel__list"
                }
              >
                {services[activeService].items.map((item) => {
                  const Icon = itemIcons[item.key];

                  return (
                    <li key={item.key}>
                      {Icon ? (
                        <span className="service-item__icon" aria-hidden="true">
                          <Icon />
                        </span>
                      ) : null}
                      <span>{item.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <SectionIntro
            eyebrow={ui.story.eyebrow}
            titleClassName="section-title section-title--mixed"
            title={renderParts(ui.story.titleParts, "section-title__word")}
            description={ui.story.description}
            actionLabel={<HiOutlineEnvelope />}
            actionAriaLabel={ui.story.contactAriaLabel}
            actionHref="#contact"
          />

          <div className="about-grid">
            <article className="about-card">
              <h3>{ui.story.cardTitle}</h3>
              <p>{ui.story.cardCopy}</p>
            </article>

            <div className="logo-cloud" aria-label={ui.story.keywordsAriaLabel}>
              {keywordLabels[locale].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="site-footer__content">
          <div>
            <p className="eyebrow eyebrow--light">{ui.footer.eyebrow}</p>
            <h2>{ui.footer.title}</h2>
            <p className="site-footer__copy">{ui.footer.copy}</p>
          </div>

          <div className="site-footer__actions">
            <a
              className="primary-button primary-button--light"
              href="mailto:ppssjj020222@gmail.com"
            >
              ppssjj020222@gmail.com
            </a>

            <div className="footer-links">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="footer-links footer-links--social">
              {socials.map((item) => {
                const Icon = footerSocialIcons[item.label];
                const isExternal = item.href.startsWith("http");

                return (
                  <a
                    key={item.label}
                    className="footer-social-link"
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    aria-label={item.label}
                    title={item.label}
                  >
                    {Icon ? <Icon /> : null}
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>{ui.footer.rights}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
