import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { certificates, education, experiences, profile, projects, skills } from "./data/profile";

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span className="section-number">{number}</span>
      <span>{children}</span>
    </div>
  );
}

function PhotoCard() {
  const [photoFailed, setPhotoFailed] = useState(false);
  return (
    <aside className="id-card" aria-label="Kartu identitas profil" data-reveal>
      <div className="lanyard" aria-hidden="true">
        <span />
      </div>
      <div className="id-topline">
        <span className="tiny-seal">FM</span>
        <span>PERSONAL PROFILE</span>
        <span className="id-edition">NO. 026</span>
      </div>
      <div className="portrait-frame">
        {!photoFailed ? (
          <img src={profile.photo} alt={`Foto profil ${profile.fullName}`} onError={() => setPhotoFailed(true)} />
        ) : (
          <div className="portrait-fallback">
            <span>FM</span>
            <small>
              YOUR PHOTO
              <br />
              GOES HERE
            </small>
          </div>
        )}
        <span className="photo-stamp">HELLO!</span>
      </div>
      <div className="id-name-block">
        <span className="micro-label">THIS CARD BELONGS TO</span>
        <h2>
          {profile.shortName}
          <span>.</span>
        </h2>
        <p>{profile.headline}</p>
      </div>
      <div className="id-details">
        <div>
          <span className="detail-icon">⌖</span>
          <span>{profile.location}</span>
        </div>
        {profile.email && (
          <div>
            <span className="detail-icon">✉</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        )}
        <div>
          <span className="detail-icon">◎</span>
          <span>D3 · Information Technology</span>
        </div>
      </div>
      <div className="id-bottom">
        <span>KEEP IN TOUCH</span>
        <span className="barcode">▥▥▥▥▥▥▥</span>
      </div>
    </aside>
  );
}

function AboutCard() {
  return (
    <section className="about-paper paper-card" id="about" data-reveal>
      <div className="paper-holes" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="about-topline">
        <span className="handwritten">a little introduction</span>
        <span className="date-chip">PORTFOLIO / 2026</span>
      </div>
      <div className="about-heading">
        <span className="wave-mark">〰</span>
        <div>
          <p className="eyebrow">NICE TO MEET YOU!</p>
          <h1>
            about <em>me</em>
            <span className="blue-dot">.</span>
          </h1>
        </div>
      </div>
      <p className="about-copy">{profile.about}</p>
      <div className="about-bottom">
        <div className="note-sticker">
          <span>currently</span>
          <strong>
            learning, building
            <br />& figuring things out ✳
          </strong>
        </div>
        <div className="personality-tags">
          <span>Curious</span>
          <span>Adaptable</span>
          <span>Detail-oriented</span>
        </div>
      </div>
      <div className="paper-tape tape-yellow" aria-hidden="true" />
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="experience-block" id="experience" data-reveal-item>
      <div className="experience-heading">
        <SectionLabel number="04">EXPERIENCE</SectionLabel>
        <span className="paperclip" aria-hidden="true">
          ⌁
        </span>
      </div>
      {experiences.map((item) => (
        <article className="experience-card" key={`${item.company}-${item.date}`} data-reveal-item>
          <div className="experience-meta">
            <span>{item.date}</span>
            <b>INTERNSHIP</b>
          </div>
          <h3>
            {item.title} <span>@ {item.company}</span>
          </h3>
          <p>{item.description}</p>
          <div className="experience-tags">
            <span>UI Development</span>
            <span>Feature Testing</span>
            <span>Teamwork</span>
          </div>
        </article>
      ))}
    </section>
  );
}

function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState(null);
  const coreSkills = skills.filter((skill) => skill.type === "core");
  const learningSkills = skills.filter((skill) => skill.type === "learning");

  return (
    <section className="resume-column skills-column" id="skills">
      <div className="resume-column-heading">
        <SectionLabel number="01">EDUCATION</SectionLabel>
      </div>
      <div className="timeline-list">
        {education.map((item) => (
          <article className="timeline-item" key={item.title} data-reveal-item>
            <span className="timeline-date">{item.period}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
              <small>{item.note}</small>
            </div>
          </article>
        ))}
      </div>

      <div className="subsection-title">
        <SectionLabel number="02">SKILLS</SectionLabel>
        <span className="scribble">✳</span>
      </div>
      <p className="mini-intro">Tools I use and skills I'm growing.</p>
      <div className="skill-group" data-reveal-item>
        <h3>
          CORE TOOLKIT <span>✦</span>
        </h3>
        <div className="skill-pills">
          {coreSkills.map((skill) => (
            <button className="skill-pill" type="button" key={skill.name} aria-pressed={activeSkill?.name === skill.name} onClick={() => setActiveSkill(skill)}>
              {skill.name}
            </button>
          ))}
        </div>
      </div>
      <div className="skill-group learning-group" data-reveal-item>
        <h3>
          CURRENTLY EXPLORING <span>↗</span>
        </h3>
        <div className="skill-pills">
          {learningSkills.map((skill) => (
            <button className="skill-pill soft" type="button" key={skill.name} aria-pressed={activeSkill?.name === skill.name} onClick={() => setActiveSkill(skill)}>
              {skill.name}
            </button>
          ))}
        </div>
      </div>
      {activeSkill && (
        <p className="skill-feedback" role="status">
          <strong>{activeSkill.name}</strong> · {activeSkill.level}
        </p>
      )}
    </section>
  );
}

function CredentialsSection() {
  return (
    <section className="resume-column credentials-column" aria-label="Sertifikat dan pengalaman">
      <div className="cert-block" id="certificates" data-reveal-item>
        <SectionLabel number="03">CERTIFICATES</SectionLabel>
        {certificates.map((certificate) => (
          <div className="certificate" key={certificate} data-reveal-item>
            <span>✧</span>
            <p>{certificate}</p>
          </div>
        ))}
      </div>
      <ExperienceSection />
    </section>
  );
}

function ProjectVisual({ project, modal = false }) {
  return (
    <div className={`project-visual ${modal ? "project-visual-modal" : ""}`}>
      <div className="project-visual-fallback" aria-hidden="true">
        <span>{project.icon}</span>
        <small>PROJECT PREVIEW</small>
      </div>
      {project.image && (
        <img
          src={project.image}
          alt={`Screenshot ${project.title}`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      )}
      <span className="project-visual-index">/{project.number}</span>
    </div>
  );
}

function ProjectCardContent({ project }) {
  return (
    <>
      <ProjectVisual project={project} />
      <div className="project-card-content">
        <div className="project-card-top">
          <span className="project-number">/{project.number}</span>
          <span className="project-icon">{project.icon}</span>
        </div>
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <span className="project-open-label">{project.url ? "OPEN PROJECT ↗" : "VIEW PROJECT DETAILS ↗"}</span>
      </div>
    </>
  );
}

function ProjectsSection({ onProjectOpen }) {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);
  const remainingProjects = Math.max(projects.length - 3, 0);

  return (
    <section className="projects-section" id="projects" data-reveal>
      <div className="projects-heading">
        <SectionLabel number="05">PROJECTS</SectionLabel>
        <span className="handwritten small-note">made with curiosity ♡</span>
      </div>
      <p className="projects-intro">A small collection of things I've designed, developed, and learned from.</p>
      <div className="project-grid" id="project-grid" aria-live="polite">
        {visibleProjects.map((project, index) => {
          const isExtraProject = index >= 3 && showAllProjects;
          const cardClass = `project-card ${project.tone} ${isExtraProject ? "project-card-extra" : ""}`;
          const cardStyle = isExtraProject ? { "--project-reveal-index": index - 3 } : undefined;
          return project.url ? (
            <a className={cardClass} style={cardStyle} key={project.number} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Buka website ${project.title} di tab baru`} data-reveal-item>
              <ProjectCardContent project={project} />
            </a>
          ) : (
            <article
              className={cardClass}
              style={cardStyle}
              key={project.number}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`Lihat detail proyek ${project.title}`}
              onClick={() => onProjectOpen(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onProjectOpen(project);
                }
              }}
              data-reveal-item
            >
              <ProjectCardContent project={project} />
            </article>
          );
        })}
      </div>
      {remainingProjects > 0 && (
        <div className="projects-more-wrap">
          <button className={`projects-more-button ${showAllProjects ? "is-expanded" : ""}`} type="button" aria-expanded={showAllProjects} aria-controls="project-grid" onClick={() => setShowAllProjects((current) => !current)}>
            <span>{showAllProjects ? "SHOW LESS" : "MORE PROJECTS"}</span>
            <span className="projects-more-count">{showAllProjects ? "↑" : `+${remainingProjects} MORE ↓`}</span>
          </button>
          <p className="projects-more-caption">{showAllProjects ? "You are viewing all projects." : `Showing 3 selected projects out of ${projects.length}.`}</p>
        </div>
      )}
    </section>
  );
}

function ContactSection() {
  const [copied, setCopied] = useState(false);
  const phone = profile.whatsappNumber.replace(/\D/g, "");
  const whatsappUrl = useMemo(() => {
    const message = encodeURIComponent(profile.whatsappMessage);
    return phone ? `https://wa.me/${phone}?text=${message}` : `https://wa.me/?text=${message}`;
  }, [phone]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <footer className="contact-section" id="contact" data-reveal>
      <div className="contact-sun" aria-hidden="true">
        ✳
      </div>
      <div className="contact-content">
        <p className="eyebrow">HAVE A PROJECT OR AN IDEA?</p>
        <h2>
          Let's make
          <br />
          <em>something useful.</em>
        </h2>
        <p className="contact-copy">Terbuka untuk ngobrol, kolaborasi, dan kesempatan belajar bersama.</p>
        <div className="contact-actions">
          <a className="whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer">
            <span className="wa-icon">◉</span> Hubungi Saya via WhatsApp <span className="button-arrow">↗</span>
          </a>
          {profile.email && (
            <button className="email-button" type="button" onClick={copyEmail}>
              {copied ? "Email copied ✓" : "Copy email address +"}
            </button>
          )}
        </div>
        {!phone && (
          <p className="setup-hint">
            Catatan: atur nomor WhatsApp di <code>src/data/profile.js</code> sebelum website dipublikasikan.
          </p>
        )}
      </div>
      <div className="contact-side-note">
        <span>THANKS FOR STOPPING BY</span>
        <b>✳</b>
        <span>MADE WITH CURIOSITY</span>
      </div>
      <div className="footer-bottom">
        <span>© 2026 {profile.fullName}</span>
        <span>DESIGNED & BUILT WITH ♡</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;
  return (
    <div
      className="project-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button className="project-modal-close" type="button" onClick={onClose} aria-label="Tutup detail proyek">
          ×
        </button>
        <ProjectVisual project={project} modal />
        <p className="project-modal-category">
          {project.category} · PROJECT {project.number}
        </p>
        <h2 id="project-modal-title">{project.title}</h2>
        <p className="project-modal-description">{project.description}</p>
        <div className="project-modal-stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.url && (
          <a className="project-modal-link" href={project.url} target="_blank" rel="noopener noreferrer">
            VISIT PROJECT WEBSITE ↗
          </a>
        )}
        <p className="project-modal-hint">PRESS ESC OR CLICK OUTSIDE TO CLOSE</p>
      </section>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const progressRef = useRef(null);
  const closeMenu = () => setMenuOpen(false);
  const closeProject = useCallback(() => setActiveProject(null), []);

  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal], [data-reveal-item]");
    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );

    revealElements.forEach((element, index) => {
      element.classList.add("reveal-on-scroll");
      if (element.hasAttribute("data-reveal-item")) {
        element.style.setProperty("--reveal-delay", `${(index % 5) * 65}ms`);
      }
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.min(100, Math.max(0, progress)) / 100})`;
      }
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "skills", "experience", "projects", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!("IntersectionObserver" in window) || !sections.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="site-shell" id="top">
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
      <nav className="nav-bar" aria-label="Navigasi utama">
        <a className="brand-mark" href="#top" onClick={closeMenu}>
          <span>fm</span>
          <i>✳</i>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? "CLOSE −" : "MENU +"}
        </button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#about" className={activeSection === "about" ? "is-active" : ""} onClick={closeMenu}>
            About
          </a>
          <a href="#skills" className={activeSection === "skills" ? "is-active" : ""} onClick={closeMenu}>
            Skills
          </a>
          <a href="#experience" className={activeSection === "experience" ? "is-active" : ""} onClick={closeMenu}>
            Experience
          </a>
          <a href="#projects" className={activeSection === "projects" ? "is-active" : ""} onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" className={activeSection === "contact" ? "is-active" : ""} onClick={closeMenu}>
            Contact <span>↗</span>
          </a>
        </div>
        <span className="nav-caption">A SMALL COLLECTION OF MY WORK</span>
      </nav>

      <header className="hero-grid">
        <div className="hero-left" data-reveal>
          <div className="hero-kicker">
            <span className="status-dot" /> AVAILABLE FOR NEW OPPORTUNITIES
          </div>
          <PhotoCard />
        </div>
        <div className="hero-right" data-reveal>
          <AboutCard />
        </div>
      </header>

      <div className="blue-ribbon" aria-label="Bidang minat" data-reveal>
        <span>WEB DEVELOPMENT</span>
        <i>✳</i>
        <span>CREATIVE PROBLEM SOLVING</span>
        <i>✳</i>
        <span>CONTINUOUS LEARNING</span>
        <i>✳</i>
        <span>WEB DEVELOPMENT</span>
      </div>

      <section className="resume-board" aria-label="Pendidikan, keahlian, pengalaman, dan proyek" data-reveal>
        <div className="board-clip" aria-hidden="true">
          <span />
        </div>
        <div className="resume-paper">
          <div className="resume-topline">
            <span>THE DETAILS</span>
            <span>PERSONAL ARCHIVE — 2026</span>
          </div>
          <div className="resume-layout">
            <div className="resume-info-grid">
              <SkillsSection />
              <CredentialsSection />
            </div>
            <ProjectsSection onProjectOpen={setActiveProject} />
          </div>
          <div className="resume-paper-fold" aria-hidden="true" />
        </div>
        <span className="board-sticker sticker-left" aria-hidden="true">
          keep
          <br />
          creating
        </span>
        <span className="board-sticker sticker-right" aria-hidden="true">
          ✳
        </span>
      </section>

      <ContactSection />
      <div className="page-end-note" data-reveal>
        <span>END OF FILE</span>
        <span>✦</span>
        <span>SEE YOU AROUND!</span>
      </div>
      <ProjectModal project={activeProject} onClose={closeProject} />
    </main>
  );
}

export default App;
