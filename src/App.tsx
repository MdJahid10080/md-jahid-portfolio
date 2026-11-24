import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  ArrowDown,
  ArrowUpRight,
  ArrowUp,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Code2,
  Database,
  FileSpreadsheet,
  Monitor,
  NotebookTabs,
  Award,
  ExternalLink,
  CheckCircle2,
  Send,
  Sparkles,
  BarChart3,
  Brain,
  ChevronRight,
  Download,
} from 'lucide-react';

const GITHUB = 'https://github.com/MdJahid10080';
const LINKEDIN = 'https://www.linkedin.com/in/md-jahid-039207371';
const EMAIL = 'jmd10080@gmail.com';

const nav = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Education', 'education'],
  ['Certifications', 'certifications'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
];

const skills = [
  { title: 'Programming Language', icon: Code2, items: ['Python'] },
  { title: 'Database & SQL Environment', icon: Database, items: ['SQL', 'PostgreSQL'] },
  {
    title: 'Spreadsheet Analysis',
    icon: FileSpreadsheet,
    items: [
      'Microsoft Excel',
      'Data cleaning',
      'Data manipulation',
      'Data analysis',
    ],
  },
  {
    title: 'Reporting & Visualization',
    icon: ChartNoAxesCombined,
    items: [
      'Microsoft Power BI',
      'Power BI dashboards',
      'Data visualization',
      'Interactive reporting',
    ],
  },
  { title: 'Development Environment', icon: NotebookTabs, items: ['Jupyter Notebook'] },
];

const learning = [
  'Advanced Python for Data Analytics',
  'SQL for Data Analysis',
  'Advanced Microsoft Excel',
  'Microsoft Power BI',
  'Power BI Dashboard Development',
  'Data Cleaning & Visualization',
  'Machine Learning Fundamentals',
];

const projects = [
  {
    number: '01',
    title: 'Customer Lifetime Value Analysis',
    type: 'PYTHON · RFM ANALYSIS · RANDOM FOREST · STREAMLIT',
    description:
      'A historical RFM customer-segmentation project. It uses Python and a Random Forest classifier to classify customers into five segments and provides an interactive Streamlit app for predictions and what-if RFM scenarios. This is segmentation, not a direct forecast of future customer lifetime value.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'RFM Analysis', 'Streamlit'],
    features: [
      'Customer segments: Champions, Loyal, Potential Loyalists, At Risk & Lost',
      'RFM-based feature transformation',
      'Model evaluation and feature importance',
      'Interactive predictions and what-if scenarios',
    ],
    url: 'https://github.com/MdJahid10080/customer-life-time-value-analysis',
    art: 'customer',
  },
  {
    number: '02',
    title: 'Sales Performance Dashboard',
    type: 'MICROSOFT EXCEL · SALES ANALYSIS',
    description:
      'An Excel dashboard that analyzes sales executives, regional performance, target achievement and sales gaps using formula-driven calculations and visual summaries.',
    tags: ['Microsoft Excel', 'Sales Analysis', 'KPI Reporting', 'Data Visualization'],
    features: [
      'Sales totals across Day 1 to Day 5',
      'Target Hit % and Away From Target %',
      'Top 5 and bottom 5 sales executives',
      'Regional analysis, charts and dashboard controls',
    ],
    url: 'https://github.com/MdJahid10080/Sales-Performance-Dashboard',
    art: 'sales',
  },
  {
    number: '03',
    title: 'Samsung Sales Analysis Dashboard',
    type: 'MICROSOFT POWER BI · INTERACTIVE DASHBOARD',
    description:
      'An interactive Power BI dashboard exploring mobile sales performance across brands, months, Indian cities, payment methods, customer ratings and years.',
    tags: ['Power BI', 'Data Analysis', 'KPI Reporting', 'Interactive Visualization'],
    features: [
      'KPIs: total sales, quantity sold, transactions and average unit price',
      'Monthly and yearly performance trends',
      'City-wise sales and brand comparison',
      'Payment methods, customer ratings and interactive slicers',
    ],
    url: 'https://github.com/MdJahid10080/samsung-sales-analysis-power-bi',
    art: 'samsung',
  },
  {
    number: '04',
    title: 'Online Book Store SQL Analysis',
    type: 'POSTGRESQL · SQL ANALYSIS · DATASET EXPLORATION',
    description:
      'A PostgreSQL project that explores an online bookstore using Books, Customers and Orders datasets. The SQL workflow creates relational tables, imports CSV data and analyzes orders, customers, book sales, revenue and inventory.',
    tags: ['PostgreSQL', 'SQL', 'Joins', 'Aggregate Functions', 'CSV Data Analysis'],
    features: [
      'Three datasets: Books, Customers and Orders',
      'Relational tables with primary and foreign keys',
      'CSV imports using PostgreSQL psql commands',
      'Sales, revenue, customer and inventory analysis',
    ],
    url: 'https://github.com/MdJahid10080/Online-Book-Store',
    art: 'bookstore',
  },
];

function SectionTitle({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className={'section-title ' + (light ? 'light' : '')}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRole, setActiveRole] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [formState, setFormState] = useState('idle');
  const [formError, setFormError] = useState('');
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const roles = [
      'Data Analyst',
      'Python Enthusiast',
      'SQL Practitioner',
      'Excel & Power BI Enthusiast',
      'Data Visualization Enthusiast',
    ];
    const timer = window.setInterval(
      () => setActiveRole(v => (v + 1) % roles.length),
      2600
    );
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => {
      window.clearInterval(timer);
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const go = id => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://md-jahid-data-analyst-portfolio-9gr0r6.v2.appdeploy.ai/resources/Md_Jahid_Resume.pdf';
    link.download = 'Md_Jahid_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const sendMessage = async e => {
    e.preventDefault();
    setFormError('');
    if (
      !form.from_name.trim() ||
      !form.from_email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setFormError('Please complete all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    setFormState('sending');
    try {
      await emailjs.send(
        'service_b8mpeq9',
        'template_tnzw74a',
        {
          ...form,
          time: new Date().toLocaleString(),
        },
        'Euev6_WyHfl5cGIKv'
      );
      setFormState('success');
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS submission failed:', err);
      setFormState('error');
      setFormError(
        'Your message could not be sent. Please try again or email me directly.'
      );
    }
  };

  return (
    <div className="site-shell">
      <div className="top-note">
        <span>DATA ANALYTICS · PYTHON · SQL · EXCEL · POWER BI</span>
        <span>PORTFOLIO / 2026</span>
      </div>
      <header className="navbar">
        <a
          className="brand"
          href="#home"
          onClick={e => {
            e.preventDefault();
            go('home');
          }}
        >
          <span>MJ</span>
          <i>.</i>
        </a>
        <nav
          className={menuOpen ? 'nav-links open' : 'nav-links'}
          aria-label="Main navigation"
        >
          {nav.map(([label, id]) => (
            <a
              key={id}
              href={'#' + id}
              onClick={e => {
                e.preventDefault();
                go(id);
              }}
            >
              {label}
            </a>
          ))}
        </nav>
        <button className="nav-cv" onClick={downloadCV}>
          Download CV <Download size={15} />
        </button>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> HELLO, I'M
            </div>
            <h1>
              Md Jahid<span className="period">.</span>
            </h1>
            <div className="hero-role">
              Data Analyst <span>|</span> Turning Data into Insights
            </div>
            <div className="typing-line">
              <span className="typing-dot" />{' '}
              {
                [
                  'Data Analyst',
                  'Python Enthusiast',
                  'SQL Practitioner',
                  'Excel & Power BI Enthusiast',
                  'Data Visualization Enthusiast',
                ][activeRole]
              }
            </div>
            <p className="hero-description">
              I'm passionate about analyzing data, discovering meaningful
              patterns, and transforming raw information into valuable insights
              using Python, SQL, Microsoft Excel, and Power BI.
            </p>
            <p className="hero-description second">
              I enjoy solving problems through data analysis, cleaning,
              visualization, and building insightful dashboards.
            </p>
            <p className="hero-tagline">
              “Turning Numbers into Insights, and Insights into Better
              Decisions.”
            </p>
            <div className="hero-actions">
              <button className="btn btn-dark" onClick={() => go('projects')}>
                Explore My Projects <ArrowUpRight size={17} />
              </button>
              <button className="btn btn-outline" onClick={() => go('contact')}>
                Let's Connect <ArrowDown size={16} />
              </button>
            </div>
            <div className="social-row">
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a href={'mailto:' + EMAIL} aria-label="Email">
                <Mail />
              </a>
              <span className="social-caption">LET'S CONNECT</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-blob">
              <img
                src="https://md-jahid-data-analyst-portfolio-9gr0r6.v2.appdeploy.ai/resources/md-jahid-profile.png"
                alt="Md Jahid"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="photo-orbit orbit-one" />
            <div className="photo-orbit orbit-two" />
            <div className="float-card float-top">
              <span className="float-icon">
                <BarChart3 size={18} />
              </span>
              <div>
                <b>Data mindset</b>
                <small>Curious by nature</small>
              </div>
            </div>
            <div className="float-card float-bottom">
              <span className="float-icon">
                <Sparkles size={18} />
              </span>
              <div>
                <b>Passionate about</b>
                <small>Data Analytics</small>
              </div>
            </div>
            <div className="visual-caption">
              DELHI, INDIA <span>•</span> OPEN TO OPPORTUNITIES
            </div>
          </div>
          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <div />
            <span>01 — 09</span>
          </div>
        </section>

        <section id="about" className="section section-muted">
          <div className="section-wrap">
            <SectionTitle
              eyebrow="A LITTLE INTRODUCTION"
              title="About Me"
              subtitle="Get to know me and my journey with data."
            />
            <div className="about-grid reveal">
              <div className="about-mark">
                <span>MJ</span>
                <b>
                  DATA
                  <br />
                  CURIOUS.
                </b>
                <small>LEARNING · BUILDING · ANALYSING</small>
              </div>
              <div className="about-copy">
                <p className="lead">
                  Hi, I'm Md Jahid, a BCA third-year student at Jagannath
                  University NCR with a strong interest in Data Analytics.
                </p>
                <p>
                  I enjoy exploring datasets, cleaning data, identifying
                  patterns, and creating meaningful visualizations that help
                  transform complex information into understandable insights.
                </p>
                <p>
                  My technical interests include Python, SQL, Microsoft Excel,
                  and Microsoft Power BI. I have participated in Data Science
                  training through GrasTech at my college and completed
                  certifications in Python, SQL, Machine Learning, and Excel
                  from different organizations.
                </p>
                <p>
                  I continuously work on improving my analytical and technical
                  skills through practical projects and hands-on learning. My
                  goal is to build a career in Data Analytics, where I can apply
                  my knowledge to solve real-world problems and support better
                  business decisions.
                </p>
                <button className="text-link" onClick={downloadCV}>
                  Download CV <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
            <div className="info-grid reveal">
              {[
                [GraduationCap, 'EDUCATION', 'BCA · 3rd Year'],
                [BriefcaseBusiness, 'EXPERIENCE', 'Fresher'],
                [ChartNoAxesCombined, 'FOCUS AREA', 'Data Analytics'],
                [MapPin, 'LOCATION', 'Delhi, India'],
              ].map(([Icon, label, value]) => (
                <div className="info-card" key={label}>
                  <Icon />
                  <span>{label}</span>
                  <b>{value}</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section section-wrap">
          <SectionTitle
            eyebrow="MY TOOLKIT"
            title="Technical Skills"
            subtitle="Technologies and tools I use to analyze, understand, and visualize data."
          />
          <div className="skills-grid reveal">
            {skills.map(({ title, icon: Icon, items }, i) => (
              <article className="skill-card" key={title}>
                <div className="skill-head">
                  <span>0{i + 1}</span>
                  <Icon size={25} />
                </div>
                <h3>{title}</h3>
                <div className="skill-chips">
                  {items.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section section-muted">
          <div className="section-wrap">
            <SectionTitle
              eyebrow="ACADEMIC BACKGROUND"
              title="Education"
              subtitle="My academic background."
            />
            <div className="timeline reveal">
              <div className="timeline-icon">
                <GraduationCap />
              </div>
              <div className="timeline-card">
                <span className="eyebrow">CURRENT EDUCATION</span>
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <p className="timeline-school">Jagannath University NCR</p>
                <div className="timeline-meta">
                  <span>Currently in 3rd Year</span>
                  <span>Computer Applications</span>
                </div>
              </div>
              <div className="timeline-icon">
                <GraduationCap />
              </div>
              <div className="timeline-card">
                <span className="eyebrow">CLASS XII</span>
                <h3>Senior Secondary Education</h3>
                <p className="timeline-school">CBSE Board</p>
                <div className="timeline-meta">
                  <span>83.2%</span>
                  <span>Class XII</span>
                </div>
              </div>
              <div className="timeline-icon">
                <GraduationCap />
              </div>
              <div className="timeline-card">
                <span className="eyebrow">CLASS X</span>
                <h3>Secondary Education</h3>
                <p className="timeline-school">CBSE Board</p>
                <div className="timeline-meta">
                  <span>78.6%</span>
                  <span>Class X</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="section section-wrap">
          <SectionTitle
            eyebrow="CONTINUOUS LEARNING"
            title="Training & Certifications"
            subtitle="Building technical knowledge through continuous learning."
          />
          <div className="cert-link-wrap">
            <a
              className="text-link"
              href="https://www.linkedin.com/in/md-jahid-039207371/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all certificates on LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="cert-grid reveal">
            <article className="cert-card featured-cert">
              <div className="cert-icon"><Award /></div>
              <span className="eyebrow">TRAINING</span>
              <h3>Data Science Training</h3>
              <p>Participated in Data Science training conducted by GrasTech personnel at college.</p>
              <b>GrasTech</b>
            </article>
            {[
              { title: 'SQL Database Programming', issuer: 'Cursa - Free online courses with Certificate', id: '08e75cfbb446b5f17b0517cfed5aa661' },
              { title: 'SQL Course (Self Learning)', issuer: 'SkillCourse', id: 'SC-606DF2F935', issued: 'Nov 2026' },
              { title: 'Microsoft Power BI (Self Learning)', issuer: 'SkillCourse', id: 'SC-02B15CCBAD' },
              { title: '30 Days Power BI Micro Course', issuer: 'SkillCourse', id: 'SC-EVOGQWIVRZ' },
              { title: 'Free SQL Certification Course', issuer: 'Intellipaat', id: '31679-619-276902' },
              { title: 'SQL Intermediate', issuer: 'Sololearn', id: 'CC-4JL1UNOH' },
              { title: 'Introduction to SQL', issuer: 'Sololearn', id: 'CC-DYMOP0BG' },
              { title: 'SQL for Business Intelligence: From Zero to Confident Querying', issuer: 'Cursa - Free online courses with Certificate', id: '620eadedb544e66b5dea66beeea1f180' },
              { title: 'Python Developer', issuer: 'Sololearn', id: 'CC-SMDYC2AE' },
              { title: 'Coding for Data', issuer: 'Sololearn', id: 'CC-CJDIVPF4' },
              { title: 'Microsoft Excel (Self Learning)', issuer: 'SkillCourse', id: 'SC-5COA9308DA' },
              { title: 'MongoDB', issuer: 'Cursa - Free online courses with Certificate', id: 'b9e93a316ae54fb34ed1e7f3ab3f7293' },
              { title: 'Free Machine Learning Certification Course', issuer: 'Intellipaat', id: '31679-4688-276902' },
              { title: 'Free Python Certification Course', issuer: 'Intellipaat', id: '31679-1543-276902' },
              { title: 'The Joy of Computing using Python', issuer: 'SWAYAM MHRD', id: 'NPTEL25CS69S953700094' },
              { title: 'Data Science Using Python', issuer: 'SWAYAM MHRD', id: 'INI25CS04S265400420' },
            ].map(cert => (
              <article className="cert-card" key={cert.title}>
                <div className="cert-icon"><CheckCircle2 /></div>
                <span className="eyebrow">CERTIFICATION</span>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                {cert.issued && <small className="cert-issued">Issued {cert.issued}</small>}
                <small className="cert-credential">Credential ID: {cert.id}</small>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-dark">
          <div className="section-wrap">
            <SectionTitle
              eyebrow="SELECTED WORK"
              title="Featured Projects"
              subtitle="Practical projects where I transform data into meaningful insights."
              light
            />
            <div className="project-grid">
              {projects.map(project => (
                <article className="project-card reveal" key={project.number}>
                  <div className={'project-art ' + project.art}>
                    <div className="art-top">
                      <span>PROJECT / {project.number}</span>
                      <span>CASE STUDY</span>
                    </div>
                    {project.art === 'customer' ? (
                      <div className="customer-visual">
                        <div className="chart-label">CUSTOMER VALUE</div>
                        <div className="bars">
                          {[38, 62, 48, 82, 58, 94, 70].map((v, i) => (
                            <i key={i} style={{ height: v + '%' }} />
                          ))}
                        </div>
                        <div className="chart-foot">
                          <span>COHORT A</span>
                          <span>COHORT B</span>
                          <span>COHORT C</span>
                        </div>
                      </div>
                    ) : project.art === 'bakery' ? (
                      <div className="sales-visual">
                        <div className="sales-kpis">
                          <span>BAKERY OPERATIONS</span>
                          <b>Management overview</b>
                        </div>
                        <div className="sales-line">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="sales-pie" />
                      </div>
                    ) : project.art === 'bookstore' ? (
                      <div className="sales-visual">
                        <div className="sales-kpis">
                          <span>POSTGRESQL · ONLINE BOOK STORE</span>
                          <b>Books · Customers · Orders</b>
                        </div>
                        <div className="sales-line">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="sales-pie" />
                      </div>
                    ) : (
                      <div className="sales-visual">
                        <div className="sales-kpis">
                          <span>REVENUE TREND</span>
                          <b>Sales overview</b>
                        </div>
                        <div className="sales-line">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="sales-pie" />
                      </div>
                    )}
                  </div>
                  <div className="project-body">
                    <div className="project-type">{project.type}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-features">
                      {project.features.map(f => (
                        <span key={f}>
                          <CheckCircle2 size={14} />
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="tag-row">
                      {project.tags.map(tag => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a
                      className="project-link"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub <ArrowUpRight size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="all-projects">
              <a href={GITHUB} target="_blank" rel="noreferrer">
                Explore GitHub profile <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section power-section">
          <div className="section-wrap power-grid">
            <div>
              <SectionTitle
                eyebrow="VISUAL STORYTELLING"
                title="Power BI & Data Visualization"
                subtitle="Exploring data through interactive dashboards and visual storytelling."
              />
              <p className="power-note">
                Developing my skills in Microsoft Power BI and exploring how
                thoughtful visual design can make data easier to understand.
              </p>
              <a
                className="text-link"
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                Explore my work <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="dashboard-art reveal">
              <div className="dash-head">
                <span>DATA OVERVIEW</span>
                <span className="dash-pill">ILLUSTRATIVE</span>
              </div>
              <div className="dash-kpis">
                <div>
                  <small>REPORTING</small>
                  <b>Insights</b>
                </div>
                <div>
                  <small>VISUALS</small>
                  <b>Clarity</b>
                </div>
                <div>
                  <small>ANALYSIS</small>
                  <b>Context</b>
                </div>
              </div>
              <div className="dash-chart">
                <div className="dash-y">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="dash-columns">
                  {[42, 70, 54, 86, 63, 94, 75, 58, 82].map((h, i) => (
                    <span key={i} style={{ height: h + '%' }} />
                  ))}
                </div>
              </div>
              <div className="dash-bottom">
                <span>
                  <i /> DATA VISUALIZATION
                </span>
                <span>
                  <i /> BUSINESS REPORTING
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="section-wrap">
            <SectionTitle
              eyebrow="NEXT STEPS"
              title="Learning & Growing"
              subtitle="Continuously improving my technical and analytical skills."
            />
            <div className="learning-grid reveal">
              {learning.map((item, i) => (
                <div className="learning-item" key={item}>
                  <span>0{i + 1}</span>
                  <div>
                    <b>{item}</b>
                    <small>IN PROGRESS</small>
                  </div>
                  <ChevronRight size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-wrap contact-section">
          <SectionTitle
            eyebrow="SAY HELLO"
            title="Let's Connect"
            subtitle="Have an opportunity, project idea, or want to discuss data? I'd love to connect."
          />
          <div className="contact-grid reveal">
            <a className="contact-card" href={'mailto:' + EMAIL}>
              <Mail />
              <span>EMAIL</span>
              <b>{EMAIL}</b>
              <small>
                Send Email <ArrowUpRight size={14} />
              </small>
            </a>
            <a
              className="contact-card"
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
              <span>LINKEDIN</span>
              <b>Connect professionally</b>
              <small>
                Connect on LinkedIn <ArrowUpRight size={14} />
              </small>
            </a>
            <a
              className="contact-card"
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
            >
              <Github />
              <span>GITHUB</span>
              <b>Explore my repositories</b>
              <small>
                Explore My GitHub <ArrowUpRight size={14} />
              </small>
            </a>
          </div>
          <div className="form-layout reveal">
            <div className="form-intro">
              <span className="eyebrow">HAVE A QUESTION?</span>
              <h3>
                Send me a<br />
                <em>message.</em>
              </h3>
              <p>
                Use the form to get in touch. I'll be happy to hear from you.
              </p>
              <div className="form-email">
                <Mail size={17} />
                {EMAIL}
              </div>
            </div>
            <form className="contact-form" onSubmit={sendMessage}>
              <div className="form-row">
                <label>
                  Full Name
                  <input
                    value={form.from_name}
                    onChange={e =>
                      setForm({ ...form, from_name: e.target.value })
                    }
                    placeholder="Your name"
                    required
                  />
                </label>
                <label>
                  Email Address
                  <input
                    type="email"
                    value={form.from_email}
                    onChange={e =>
                      setForm({ ...form, from_email: e.target.value })
                    }
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>
              <label>
                Subject
                <input
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  placeholder="What is this about?"
                  required
                />
              </label>
              <label>
                Message
                <textarea
                  rows="5"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your message..."
                  required
                />
              </label>
              {formError && (
                <p className="form-error" role="alert">
                  {formError}
                </p>
              )}
              {formState === 'success' && (
                <p className="form-success" role="status">
                  Your message has been sent successfully. Thank you!
                </p>
              )}
              <button
                className="btn btn-dark send-btn"
                type="submit"
                disabled={formState === 'sending'}
              >
                {formState === 'sending' ? 'Sending…' : 'Send Message'}{' '}
                <Send size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-main">
          <div>
            <a className="brand footer-brand" href="#home">
              MJ<i>.</i>
            </a>
            <p>
              Turning Numbers into Insights,
              <br />
              and Insights into Better Decisions.
            </p>
          </div>
          <div className="footer-nav">
            {nav
              .filter(([label]) => label !== 'Certifications')
              .map(([label, id]) => (
                <a key={id} href={'#' + id}>
                  {label}
                </a>
              ))}
          </div>
          <div className="footer-social">
            <a href={GITHUB} target="_blank" rel="noreferrer">
              <Github />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
            <a href={'mailto:' + EMAIL}>
              <Mail />
            </a>
          </div>
        </div>
        <div className="footer-bottom section-wrap">
          <span>© 2026 Md Jahid. All Rights Reserved.</span>
          <span>
            DESIGNED WITH PURPOSE <span className="period">•</span> DELHI, INDIA
          </span>
        </div>
      </footer>
      {showTop && (
        <button
          className="back-top"
          aria-label="Back to top"
          onClick={() => go('home')}
        >
          <ArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;
