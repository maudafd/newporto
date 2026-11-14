import { useMemo, useState } from 'react';
import { certificates, education, experiences, profile, projects, skills } from './data/profile';

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
    <aside className="id-card" aria-label="Kartu identitas profil">
      <div className="lanyard" aria-hidden="true"><span /></div>
      <div className="id-topline"><span className="tiny-seal">FM</span><span>PERSONAL PROFILE</span><span className="id-edition">NO. 026</span></div>
      <div className="portrait-frame">
        {!photoFailed ? (
          <img src={profile.photo} alt={`Foto profil ${profile.fullName}`} onError={() => setPhotoFailed(true)} />
        ) : (
          <div className="portrait-fallback"><span>FM</span><small>YOUR PHOTO<br />GOES HERE</small></div>
        )}
        <span className="photo-stamp">HELLO!</span>
      </div>
      <div className="id-name-block">
        <span className="micro-label">THIS CARD BELONGS TO</span>
        <h2>{profile.shortName}<span>.</span></h2>
        <p>{profile.headline}</p>
      </div>
      <div className="id-details">
        <div><span className="detail-icon">⌖</span><span>{profile.location}</span></div>
        {profile.email && <div><span className="detail-icon">✉</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>}
        <div><span className="detail-icon">◎</span><span>D3 · Information Technology</span></div>
      </div>
      <div className="id-bottom"><span>KEEP IN TOUCH</span><span className="barcode">▥▥▥▥▥▥▥</span></div>
    </aside>
  );
}

function AboutCard() {
  return (
    <section className="about-paper paper-card" id="about">
      <div className="paper-holes" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="about-topline"><span className="handwritten">a little introduction</span><span className="date-chip">PORTFOLIO / 2026</span></div>
      <div className="about-heading">
        <span className="wave-mark">〰</span>
        <div><p className="eyebrow">NICE TO MEET YOU!</p><h1>about <em>me</em><span className="blue-dot">.</span></h1></div>
      </div>
      <p className="about-copy">{profile.about}</p>
      <div className="about-bottom">
        <div className="note-sticker"><span>currently</span><strong>learning, building<br />& figuring things out ✳</strong></div>
        <div className="personality-tags"><span>Curious</span><span>Adaptable</span><span>Detail-oriented</span></div>
      </div>
      <div className="paper-tape tape-yellow" aria-hidden="true" />
    </section>
  );
}

function SkillsSection() {
  const coreSkills = skills.filter((skill) => skill.type === 'core');
  const learningSkills = skills.filter((skill) => skill.type === 'learning');
  return (
    <section className="resume-column skills-column" id="skills">
      <SectionLabel number="01">EDUCATION</SectionLabel>
      <div className="timeline-list">
        {education.map((item) => (
          <article className="timeline-item" key={item.title}>
            <span className="timeline-date">{item.period}</span>
            <div><h3>{item.title}</h3><p>{item.place}</p><small>{item.note}</small></div>
          </article>
        ))}
      </div>

      <div className="subsection-title"><SectionLabel number="02">SKILLS</SectionLabel><span className="scribble">✳</span></div>
      <p className="mini-intro">Tools I use and skills I'm growing.</p>
      <div className="skill-group">
        <h3>CORE TOOLKIT <span>✦</span></h3>
        <div className="skill-pills">{coreSkills.map((skill) => <span className="skill-pill" key={skill.name}>{skill.name}</span>)}</div>
      </div>
      <div className="skill-group learning-group">
        <h3>CURRENTLY EXPLORING <span>↗</span></h3>
        <div className="skill-pills">{learningSkills.map((skill) => <span className="skill-pill soft" key={skill.name}>{skill.name}</span>)}</div>
      </div>

      <div className="cert-block">
        <SectionLabel number="03">CERTIFICATES</SectionLabel>
        {certificates.map((certificate) => <div className="certificate" key={certificate}><span>✧</span><p>{certificate}</p></div>)}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="resume-column experience-column" id="experience">
      <div className="experience-heading"><SectionLabel number="04">EXPERIENCE</SectionLabel><span className="paperclip" aria-hidden="true">⌁</span></div>
      {experiences.map((item) => (
        <article className="experience-card" key={item.company}>
          <div className="experience-meta"><span>{item.date}</span><b>INTERNSHIP</b></div>
          <h3>{item.title} <span>@ {item.company}</span></h3>
          <p>{item.description}</p>
          <div className="experience-tags"><span>UI Development</span><span>Feature Testing</span><span>Teamwork</span></div>
        </article>
      ))}

      <div className="projects-heading" id="projects"><SectionLabel number="05">SELECTED PROJECTS</SectionLabel><span className="handwritten small-note">made with curiosity ♡</span></div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.tone}`} key={project.number}>
            <div className="project-card-top"><span className="project-number">/{project.number}</span><span className="project-icon">{project.icon}</span></div>
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const [copied, setCopied] = useState(false);
  const phone = profile.whatsappNumber.replace(/\D/g, '');
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
    <footer className="contact-section" id="contact">
      <div className="contact-sun" aria-hidden="true">✳</div>
      <div className="contact-content">
        <p className="eyebrow">HAVE A PROJECT OR AN IDEA?</p>
        <h2>Let's make<br /><em>something useful.</em></h2>
        <p className="contact-copy">Terbuka untuk ngobrol, kolaborasi, dan kesempatan belajar bersama.</p>
        <div className="contact-actions">
          <a className="whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer"><span className="wa-icon">◉</span> Hubungi Saya via WhatsApp <span className="button-arrow">↗</span></a>
          {profile.email && <button className="email-button" type="button" onClick={copyEmail}>{copied ? 'Email copied ✓' : 'Copy email address +'}</button>}
        </div>
      </div>
      <div className="contact-side-note"><span>THANKS FOR STOPPING BY</span><b>✳</b><span>MADE WITH CURIOSITY</span></div>
      <div className="footer-bottom"><span>© 2026 {profile.fullName}</span><span>DESIGNED & BUILT WITH ♡</span><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main className="site-shell" id="top">
      <nav className="nav-bar" aria-label="Navigasi utama">
        <a className="brand-mark" href="#top" onClick={closeMenu}><span>fm</span><i>✳</i></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? 'CLOSE −' : 'MENU +'}</button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#contact" onClick={closeMenu}>Contact <span>↗</span></a>
        </div>
        <span className="nav-caption">A SMALL COLLECTION OF MY WORK</span>
      </nav>

      <header className="hero-grid">
        <div className="hero-left"><div className="hero-kicker"><span className="status-dot" /> AVAILABLE FOR NEW OPPORTUNITIES</div><PhotoCard /></div>
        <div className="hero-right"><AboutCard /></div>
      </header>

      <div className="blue-ribbon" aria-label="Bidang minat"><span>WEB DEVELOPMENT</span><i>✳</i><span>CREATIVE PROBLEM SOLVING</span><i>✳</i><span>CONTINUOUS LEARNING</span><i>✳</i><span>WEB DEVELOPMENT</span></div>

      <section className="resume-board" aria-label="Pendidikan, keahlian, pengalaman, dan proyek">
        <div className="board-clip" aria-hidden="true"><span /></div>
        <div className="resume-paper">
          <div className="resume-topline"><span>THE DETAILS</span><span>PERSONAL ARCHIVE — 2026</span></div>
          <div className="resume-layout"><SkillsSection /><ExperienceSection /></div>
          <div className="resume-paper-fold" aria-hidden="true" />
        </div>
        <span className="board-sticker sticker-left" aria-hidden="true">keep<br />creating</span>
        <span className="board-sticker sticker-right" aria-hidden="true">✳</span>
      </section>

      <ContactSection />
      <div className="page-end-note"><span>END OF FILE</span><span>✦</span><span>SEE YOU AROUND!</span></div>
    </main>
  );
}

export default App;
