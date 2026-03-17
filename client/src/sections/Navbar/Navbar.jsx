import { useState, useEffect } from 'react';
import { scrollTo } from '../../hooks/useInView';
import { useTranslation } from '../../context/LanguageContext';
import LangToggle from '../../components/LangToggle/LangToggle';
import './Navbar.css';

export default function Navbar() {
  const { t }                   = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (href) => { scrollTo(href); setOpen(false); };

  const navItems = [
    { label: t.nav.services, href: 'services' },
    { label: t.nav.about,    href: 'about'    },
    { label: t.nav.projects, href: 'projects' },
    { label: t.nav.whyUs,    href: 'stats'    },
    { label: t.nav.contact,  href: 'contact'  },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Brand */}
        <button className="navbar__brand" onClick={() => go('hero')}>
          <span className="navbar__brand-icon">◈</span>
          <span className="navbar__brand-text">
            STEEL<span className="navbar__brand-accent">CRAFT</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="navbar__links">
          {navItems.map(({ label, href }) => (
            <button key={href} className="navbar__link" onClick={() => go(href)}>
              {label}
            </button>
          ))}
          <LangToggle />
          <button className="btn-primary navbar__cta" onClick={() => go('contact')}>
            {t.nav.getQuote}
          </button>
        </nav>

        {/* Mobile right: toggle + hamburger */}
        <div className="navbar__mobile-right">
          <LangToggle />
          <button
            className={`navbar__ham ${open ? 'navbar__ham--open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${open ? 'navbar__drawer--open' : ''}`}>
        {navItems.map(({ label, href }) => (
          <button key={href} className="navbar__drawer-link" onClick={() => go(href)}>
            {label}
          </button>
        ))}
        <button className="btn-primary navbar__cta navbar__cta--mobile" onClick={() => go('contact')}>
          {t.nav.getQuote}
        </button>
      </div>
    </header>
  );
}
