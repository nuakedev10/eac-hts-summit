import { useEffect, useState } from 'react';
import { ArrowRight, Globe2, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about-preview' },
  { label: 'Programme', to: '/#tracks' },
  { label: 'Demo Village', to: '/#demo-village' },
  { label: 'Startup & Awards', to: '/startup-awards' },
  { label: 'Side Events', to: '/side-events' },
  { label: 'Partners', to: '/partners' },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = '';
    if (location.hash) {
      window.requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <Link to="/" className="site-brand" aria-label="EA-HTS 2027 home" onClick={() => setIsOpen(false)}>
          <span className="site-brand__mark"><Globe2 aria-hidden="true" /></span>
          <span className="site-brand__name">EA-HTS 2027<small>IEEE East Africa</small></span>
        </Link>

        <nav id="primary-navigation" className={`site-nav${isOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => isActive && !item.to.includes('#') ? 'is-active' : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a className="site-nav__mobile-cta" href="mailto:ieeeahts27@gmail.com?subject=EA-HTS%202027%20Registration%20Updates">
            Registration updates <ArrowRight aria-hidden="true" />
          </a>
        </nav>

        <a className="site-header__cta" href="mailto:ieeeahts27@gmail.com?subject=EA-HTS%202027%20Registration%20Updates">
          Registration updates <ArrowRight aria-hidden="true" />
        </a>
        <button
          className="site-header__menu"
          type="button"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}