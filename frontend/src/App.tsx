import { useEffect, useState } from 'react';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { partnerGroups, partnerMailto, sideEvents } from './data/siteContent';

type NavItem = {
  label: string;
  to: string;
};

type Track = {
  number: string;
  title: string;
  icon: JSX.Element;
  tags: string[];
  className?: string;
};

type DemoCard = {
  badge: string;
  title: string;
  description: string;
  topics: string[];
  image: string;
  alt: string;
  className?: string;
};

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about-preview' },
  { label: 'Programme', to: '/#tracks' },
  { label: 'Demo Village', to: '/demo-village' },
  { label: 'Startup & Awards', to: '/startup-awards' },
  { label: 'Side Events', to: '/side-events' },
  { label: 'Partners', to: '/partners' },
];

const tracks: Track[] = [
  {
    number: '01',
    title: 'Humanitarian Technology & Disaster Resilience',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
    tags: ['Early Warning', 'Emergency Comms', 'Crisis Mapping', 'Logistics'],
  },
  {
    number: '02',
    title: 'Artificial Intelligence for Good',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4c0 2 2 3 2 6h4c0-3 2-4 2-6a4 4 0 0 0-4-4Z" />
        <path d="M10 18h4" />
        <path d="M10 22h4" />
      </svg>
    ),
    tags: ['Responsible AI', 'AI Governance', 'Agriculture', 'Health'],
    className: 'reveal-delay-1',
  },
  {
    number: '03',
    title: 'Data for Development & Humanitarian Response',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    ),
    tags: ['Data Ethics', 'Interoperability', 'Open Data'],
    className: 'reveal-delay-2',
  },
  {
    number: '04',
    title: 'Digital Inclusion & Connected Communities',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" x2="12.01" y1="20" y2="20" />
      </svg>
    ),
    tags: ['Rural Connectivity', 'Accessibility', 'Digital Literacy'],
    className: 'reveal-delay-3',
  },
  {
    number: '05',
    title: 'ClimateTech & Environmental Sustainability',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
      </svg>
    ),
    tags: ['Renewable Energy', 'Smart Water', 'Carbon Monitoring'],
  },
  {
    number: '06',
    title: 'AgriTech & Food Security',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </svg>
    ),
    tags: ['Precision Agriculture', 'Climate Smart', 'Value Chains'],
    className: 'reveal-delay-1',
  },
  {
    number: '07',
    title: 'Digital Health Innovation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    tags: ['Telemedicine', 'AI Diagnostics', 'Public Health'],
    className: 'reveal-delay-2',
  },
  {
    number: '08',
    title: 'Inclusive Digital Finance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
    tags: ['Mobile Money', 'Cash Assistance', 'Digital Identity'],
    className: 'reveal-delay-3',
  },
];

const demoCards: DemoCard[] = [
  {
    badge: 'A',
    title: 'IEEE MOVE Demonstrations',
    description:
      'Mobile outreach and emergency response equipment in action — from satellite connectivity to portable power.',
    topics: ['Starlink Connectivity', 'Emergency Comms', 'Portable Energy', 'Disaster Ops'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    alt: 'Emergency communications equipment',
  },
  {
    badge: 'B',
    title: 'Drone Innovation Zone',
    description:
      'Aerial systems for search and rescue, disaster assessment, precision agriculture, and emergency medical delivery.',
    topics: ['Search & Rescue', 'Precision Ag', 'Blood Delivery'],
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&q=80',
    alt: 'Drone in flight',
    className: 'reveal-delay-1',
  },
  {
    badge: 'C',
    title: 'AI for Good Lab',
    description: 'Applied intelligence tools and live demonstrations of AI for development and humanitarian analytics.',
    topics: ['AI Tools', 'Humanitarian Analytics'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    alt: 'AI analytics dashboard',
  },
  {
    badge: 'D',
    title: 'GIS & Mapping Lab',
    description:
      'Geospatial intelligence and crisis mapping with OpenStreetMap, satellite imagery, and real-time data visualization.',
    topics: ['OpenStreetMap', 'Crisis Mapping', 'Geospatial Intel'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    alt: 'Geospatial mapping',
    className: 'reveal-delay-1',
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [countdown, setCountdown] = useState({ days: '--', hours: '--', mins: '--', secs: '--' });

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2027-01-27T08:00:00+02:00').getTime();
    const updateCountdown = () => {
      const now = Date.now();
      const diff = targetDate - now;
      if (diff <= 0) {
        setCountdown({ days: '0', hours: '0', mins: '0', secs: '0' });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({ days: String(days), hours: String(hours), mins: String(mins), secs: String(secs) });
    };

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      document.querySelectorAll<HTMLElement>('.stat-number[data-target]').forEach((counter) => {
        if (counter.dataset.animated) return;
        const target = Number.parseInt(counter.dataset.target || '0', 10);
        const suffix = counter.dataset.suffix || '';
        const duration = 1800;
        const start = performance.now();
        const step = (timestamp: number) => {
          const progress = Math.min((timestamp - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          counter.textContent = `${Math.floor(target * ease)}${suffix}`;
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        counter.dataset.animated = 'true';
        window.requestAnimationFrame(step);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.closest('.stats-bar')) {
              animateCounters();
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => observer.observe(element));

    const statsBar = document.querySelector<HTMLElement>('.stats-bar');
    if (statsBar) {
      const statsObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            animateCounters();
          }
        },
        { threshold: 0.3 },
      );
      statsObserver.observe(statsBar);
      return () => {
        observer.disconnect();
        statsObserver.disconnect();
      };
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (!href) return;
      const element = document.querySelector<HTMLElement>(href);
      if (element) {
        event.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    links.forEach((link) => link.addEventListener('click', handleAnchorClick));
    return () => links.forEach((link) => link.removeEventListener('click', handleAnchorClick));
  }, []);

  return (
    <>
      <nav className={`nav${isScrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <div className="nav-logo-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <div className="nav-logo-text">
              EA-HTS 2027
              <span>IEEE East Africa</span>
            </div>
          </Link>

          <ul className={`nav-links${isMenuOpen ? ' open' : ''}`} id="nav-links">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={item.to === '/' ? 'active' : undefined} onClick={() => setIsMenuOpen(false)}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <Link to="/register" className="btn btn-gold">
              Register Now
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          <button className={`nav-toggle${isMenuOpen ? ' active' : ''}`} id="nav-toggle" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} aria-controls="nav-links" type="button" onClick={() => setIsMenuOpen((open) => !open)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80" alt="Humanitarian technology in action" loading="eager" />
        </div>
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                <path d="m2 17 10 5 10-5" />
                <path d="m2 12 10 5 10-5" />
              </svg>
              IEEE Humanitarian Technologies Board
            </div>

            <h1>
              Technology for
              <span className="highlight">Humanity.</span>
            </h1>

            <p className="hero-subtitle">
              East Africa&apos;s premier humanitarian technology summit — convening engineers, researchers, humanitarian actors, and innovators to develop and scale solutions that create measurable social impact.
            </p>

            <div className="hero-meta">
              <div className="hero-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M3 10h18" />
                </svg>
                January 27–29, 2027
              </div>
              <div className="hero-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Kigali, Rwanda
              </div>
              <div className="hero-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                10+ Countries
              </div>
            </div>

            <div className="hero-actions">
              <Link to="/register" className="btn btn-gold">
                Register Now
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <a href="#tracks" className="btn btn-secondary">
                Explore Programme
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="countdown-card">
              <div className="countdown-label">Summit begins in</div>
              <div className="countdown-grid">
                <div className="countdown-unit">
                  <div className="countdown-number" id="cd-days">
                    {countdown.days}
                  </div>
                  <div className="countdown-text">Days</div>
                </div>
                <div className="countdown-unit">
                  <div className="countdown-number" id="cd-hours">
                    {countdown.hours}
                  </div>
                  <div className="countdown-text">Hours</div>
                </div>
                <div className="countdown-unit">
                  <div className="countdown-number" id="cd-mins">
                    {countdown.mins}
                  </div>
                  <div className="countdown-text">Mins</div>
                </div>
                <div className="countdown-unit">
                  <div className="countdown-number" id="cd-secs">
                    {countdown.secs}
                  </div>
                  <div className="countdown-text">Secs</div>
                </div>
              </div>
            </div>

            <div className="hero-stats-floating">
              <div className="hero-stat-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div>
                  <div className="hero-stat-number">350+</div>
                  <div className="hero-stat-text">Participants</div>
                </div>
              </div>
              <div className="hero-stat-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
                <div>
                  <div className="hero-stat-number">8</div>
                  <div className="hero-stat-text">Thematic Tracks</div>
                </div>
              </div>
              <div className="hero-stat-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
                <div>
                  <div className="hero-stat-number">20</div>
                  <div className="hero-stat-text">Startups Selected</div>
                </div>
              </div>
              <div className="hero-stat-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 9 7 12 7s5-3 7.5-3a2.5 2.5 0 0 1 0 5H18" />
                  <path d="M18 15h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M6 15H4.5a2.5 2.5 0 0 0 0 5H6" />
                  <path d="M18 15a2.5 2.5 0 0 1 0 5h-1.5" />
                  <path d="M6 9a7 7 0 0 0 0 6" />
                  <path d="M18 9a7 7 0 0 1 0 6" />
                  <line x1="8" x2="16" y1="12" y2="12" />
                </svg>
                <div>
                  <div className="hero-stat-number">9</div>
                  <div className="hero-stat-text">Award Categories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar reveal">
        <div className="container">
          <div className="stat-item">
            <div className="stat-number" data-target="350" data-suffix="+">
              0
            </div>
            <div className="stat-text">Participants</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="50" data-suffix="+">
              0
            </div>
            <div className="stat-text">Speakers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="10" data-suffix="+">
              0
            </div>
            <div className="stat-text">Countries</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="30" data-suffix="+">
              0
            </div>
            <div className="stat-text">Partners</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="20" data-suffix="">
              0
            </div>
            <div className="stat-text">Startups</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="25" data-suffix="">
              0
            </div>
            <div className="stat-text">Research Papers</div>
          </div>
        </div>
      </div>

      <section className="section" id="about-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-image reveal">
              <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80" alt="Technology innovation in East Africa" loading="lazy" />
              <div className="about-image-badge">Kigali, Rwanda</div>
            </div>
            <div className="reveal reveal-delay-1">
              <div className="eyebrow">About the Summit</div>
              <h2>Where engineering meets humanitarian impact.</h2>
              <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                East Africa is experiencing rapid digital transformation alongside increasing humanitarian challenges — climate disasters, food insecurity, public health emergencies, displacement, and digital inequality. Technology is one of the most powerful enablers for addressing these challenges, but success requires collaboration, contextual understanding, and sustainable implementation.
              </p>
              <div className="vm-cards">
                <div className="vm-card">
                  <h4>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    Our Vision
                  </h4>
                  <p>Establish East Africa as a leading region for humanitarian technology innovation, leveraging engineering excellence to improve lives and strengthen community resilience.</p>
                </div>
                <div className="vm-card">
                  <h4>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    Our Mission
                  </h4>
                  <p>Convene stakeholders across sectors to accelerate the development, adoption, and scaling of technology solutions for humanitarian and sustainable development challenges.</p>
                </div>
              </div>
              <a href="#about-preview" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
                Learn more about EA-HTS
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="tracks">
        <div className="container">
          <div className="section-header centered reveal">
            <div className="eyebrow">Conference Programme</div>
            <h2>Eight thematic tracks.</h2>
            <p>Curated streams spanning the technologies shaping resilient, inclusive, and sustainable communities across the region.</p>
          </div>

          <div className="tracks-grid">
            {tracks.map((track) => (
              <div key={track.number} className={`track-card reveal${track.className ? ` ${track.className}` : ''}`}>
                <div className="track-number">{track.number}</div>
                <div className="track-icon">{track.icon}</div>
                <h3>{track.title}</h3>
                <div className="track-tags">
                  {track.tags.map((tag) => (
                    <span key={tag} className="track-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }} className="reveal">
            <a href="#tracks" className="btn btn-primary">
              View full programme
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="demo-village">
        <div className="container">
          <div className="section-header reveal">
            <div className="eyebrow">Hands-on Experience</div>
            <h2>The Humanitarian Technology Demonstration Village.</h2>
            <p>A live, immersive zone where technologies for disaster response, agriculture, health, and connectivity are deployed in real time.</p>
          </div>

          <div className="demo-grid">
            {demoCards.map((card) => (
              <div key={card.title} className={`demo-card reveal${card.className ? ` ${card.className}` : ''}`}>
                <div className="demo-card-img">
                  <img src={card.image} alt={card.alt} loading="lazy" />
                  <div className="demo-card-badge">{card.badge}</div>
                </div>
                <div className="demo-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="demo-card-topics">
                    {card.topics.map((topic) => (
                      <span key={topic} className="demo-topic">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }} className="reveal">
            <Link to="/demo-village" className="btn btn-secondary" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>
              Explore the Demo Village
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="sdgs">
        <div className="container">
          <div className="section-header centered reveal">
            <div className="eyebrow">Global Alignment</div>
            <h2>Advancing the UN Sustainable Development Goals.</h2>
            <p>The Summit directly contributes to ten SDGs through technology-driven humanitarian solutions.</p>
          </div>

          <div className="sdg-grid reveal">
            <div className="sdg-card sdg-1"><div className="sdg-num">01</div><div className="sdg-text">No Poverty</div></div>
            <div className="sdg-card sdg-2"><div className="sdg-num">02</div><div className="sdg-text">Zero Hunger</div></div>
            <div className="sdg-card sdg-3"><div className="sdg-num">03</div><div className="sdg-text">Good Health &amp; Well-being</div></div>
            <div className="sdg-card sdg-4"><div className="sdg-num">04</div><div className="sdg-text">Quality Education</div></div>
            <div className="sdg-card sdg-5"><div className="sdg-num">05</div><div className="sdg-text">Gender Equality</div></div>
            <div className="sdg-card sdg-7"><div className="sdg-num">07</div><div className="sdg-text">Affordable &amp; Clean Energy</div></div>
            <div className="sdg-card sdg-9"><div className="sdg-num">09</div><div className="sdg-text">Industry, Innovation &amp; Infrastructure</div></div>
            <div className="sdg-card sdg-11"><div className="sdg-num">11</div><div className="sdg-text">Sustainable Cities</div></div>
            <div className="sdg-card sdg-13"><div className="sdg-num">13</div><div className="sdg-text">Climate Action</div></div>
            <div className="sdg-card sdg-17"><div className="sdg-num">17</div><div className="sdg-text">Partnerships for the Goals</div></div>
          </div>
        </div>
      </section>

      <section className="home-feature-preview" id="side-events-preview">
        <div className="home-feature-preview__heading reveal">
          <div>
            <span className="home-feature-preview__eyebrow"><CalendarDays aria-hidden="true" /> Side Events</span>
            <h2>Eight rooms for the conversations behind change.</h2>
          </div>
          <p>Leadership, policy, research, investment, inclusion, and opportunity come together around the main summit programme.</p>
        </div>
        <div className="home-event-strip reveal">
          {sideEvents.slice(0, 4).map((event) => (
            <article key={event.title}>
              <span>{event.number} / {event.category}</span>
              <h3>{event.title}</h3>
            </article>
          ))}
        </div>
        <Link className="home-feature-preview__link" to="/side-events">Explore all side events <ArrowRight aria-hidden="true" /></Link>
      </section>

      <section className="section section-alt" id="partners-preview">
        <div className="container">
          <div className="section-header centered reveal">
            <div className="eyebrow">Partnership Opportunities</div>
            <h2>Building this together.</h2>
            <p>We are seeking collaboration from leading IEEE, UN, development, and industry organizations. These are prospective partners — engagement is in progress.</p>
          </div>

          {partnerGroups.map((group) => (
            <div key={group.title} className="partners-section-group reveal">
              <h3>{group.title}</h3>
              <div className="partners-grid">
                {group.partners.slice(0, 5).map((partner) => (
                  <div key={partner.name} className="partner-card">
                    {partner.name}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '1.5rem' }} className="reveal">
            Prospective partners identified for engagement; participation is not yet confirmed.{' '}
            <Link to="/partners" style={{ color: 'var(--primary)' }}>Explore partnership opportunities →</Link>
          </p>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-content reveal">
            <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '1rem' }}>
              January 27–29, 2027
            </div>
            <h2>We&apos;ll see you in Kigali.</h2>
            <p>Join 350+ engineers, researchers, humanitarian actors, and innovators at East Africa&apos;s premier humanitarian technology event.</p>
            <div className="cta-actions">
              <Link to="/register" className="btn btn-gold">
                Register Now
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <a href={partnerMailto} className="btn btn-secondary">
                Partner with us
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="nav-logo" style={{ marginBottom: '0.5rem' }}>
                <div className="nav-logo-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <div className="nav-logo-text">
                  EA-HTS 2027
                  <span>IEEE East Africa</span>
                </div>
              </Link>
              <p>The IEEE East African Humanitarian Technology Summit — a regional flagship platform uniting humanitarian, development, engineering, academic, and innovation communities across East Africa.</p>
              <div className="footer-social">
                <a aria-disabled="true" aria-label="LinkedIn link unavailable">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a aria-disabled="true" aria-label="X link unavailable">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                </a>
                <a aria-disabled="true" aria-label="Instagram link unavailable">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" /></svg>
                </a>
                <a aria-disabled="true" aria-label="Facebook link unavailable">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h4>Explore</h4>
              <ul className="footer-links">
                <li><Link to="/#about-preview">About</Link></li>
                <li><Link to="/#tracks">Programme</Link></li>
                <li><Link to="/demo-village">Demo Village</Link></li>
                <li><Link to="/side-events">Side Events</Link></li>
                <li><Link to="/partners">Partners</Link></li>
              </ul>
            </div>

            <div>
              <h4>Get Involved</h4>
              <ul className="footer-links">
                <li><Link to="/register">Register Now</Link></li>
                <li><a href={partnerMailto}>Become a partner</a></li>
                <li><Link to="/startup-awards">Enter the Startup Challenge</Link></li>
                <li><a href="mailto:ieeeahts27@gmail.com?subject=Speaker%20Inquiry">Speak at the Summit</a></li>
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                <span>ieeeahts27@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>Kigali, Rwanda</span>
              </div>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                <span>eac-hts-2027-do2s.vercel.app</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>&copy; 2027 IEEE East African Humanitarian Technology Summit. All rights reserved.</span>
            <span>Innovate &middot; Connect &middot; Impact</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
