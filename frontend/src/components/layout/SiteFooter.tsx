import { ArrowUpRight, Globe2, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <Link to="/" className="site-brand">
            <span className="site-brand__mark"><Globe2 aria-hidden="true" /></span>
            <span className="site-brand__name">EA-HTS 2027<small>IEEE East Africa</small></span>
          </Link>
          <p>A regional flagship platform for humanitarian technology innovation across East Africa.</p>
        </div>
        <nav className="site-footer__column" aria-label="Footer explore navigation">
          <h2>Explore</h2>
          <Link to="/#about-preview">About</Link>
          <Link to="/#tracks">Programme</Link>
          <Link to="/#demo-village">Demo Village</Link>
          <Link to="/startup-awards">Startup Challenge</Link>
          <Link to="/partners">Partners</Link>
        </nav>
        <nav className="site-footer__column" aria-label="Get involved navigation">
          <h2>Get Involved</h2>
          <a href="mailto:ieeeahts27@gmail.com?subject=EA-HTS%202027%20Registration%20Updates">Registration updates</a>
          <a href="mailto:ieeeahts27@gmail.com?subject=EA-HTS%202027%20Partnership%20Inquiry">Partner with us</a>
          <a href="mailto:ieeeahts27@gmail.com?subject=EA-HTS%202027%20Speaker%20Inquiry">Speak at the Summit</a>
        </nav>
        <div className="site-footer__column site-footer__contact">
          <h2>Contact</h2>
          <a href="mailto:ieeeahts27@gmail.com"><Mail aria-hidden="true" /> ieeeahts27@gmail.com</a>
          <span><MapPin aria-hidden="true" /> Kigali, Rwanda</span>
          <a className="site-footer__conversation" href="mailto:ieeeahts27@gmail.com?subject=EA-HTS%202027%20Inquiry">
            Start the conversation <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}