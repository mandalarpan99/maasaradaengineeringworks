import { useState, useEffect } from 'react';
import { scrollTo } from '../../hooks/useInView';
import { useTranslation } from '../../context/LanguageContext';
import LangToggle from '../../components/LangToggle/LangToggle';
import './Navbar.css';

const SOCIALS = [
  {
    id:    'facebook',
    label: 'Facebook',
    href:  'https://facebook.com/steelcraftbd',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    id:    'whatsapp',
    label: 'WhatsApp',
    href:  'https://wa.me/8801711234567',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    id:    'instagram',
    label: 'Instagram',
    href:  'https://instagram.com/steelcraftbd',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id:    'youtube',
    label: 'YouTube',
    href:  'https://youtube.com/@steelcraftbd',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--gunmetal-dark)"/>
      </svg>
    ),
  },
];

export default function Navbar() {
  const { t }                   = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Lock body scroll when drawer is open on mobile
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

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

        {/* ── Brand ── */}
        <button className="navbar__brand" onClick={() => go('hero')}>
          <span className="navbar__brand-icon">◈</span>
          <span className="navbar__brand-text">
            STEEL<span className="navbar__brand-accent">CRAFT</span>
          </span>
        </button>

        {/* ── Desktop nav ── */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navItems.map(({ label, href }) => (
            <button key={href} className="navbar__link" onClick={() => go(href)}>
              {label}
            </button>
          ))}

          <div className="navbar__divider" aria-hidden="true" />

          {/* Social icons */}
          <div className="navbar__socials" aria-label="Social media links">
            {SOCIALS.map(({ id, label, href, icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`navbar__social navbar__social--${id}`}
                aria-label={label}
                title={label}
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="navbar__divider" aria-hidden="true" />

          <LangToggle />

          <button className="btn-primary navbar__cta" onClick={() => go('contact')}>
            {t.nav.getQuote}
          </button>
        </nav>

        {/* ── Mobile right ── */}
        <div className="navbar__mobile-right">
          <LangToggle />
          <button
            className={`navbar__ham ${open ? 'navbar__ham--open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* ── Mobile overlay backdrop ── */}
      {open && (
        <div
          className="navbar__backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile drawer ── */}
      <nav
        className={`navbar__drawer ${open ? 'navbar__drawer--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {/* Nav links */}
        <div className="navbar__drawer-links">
          {navItems.map(({ label, href }) => (
            <button key={href} className="navbar__drawer-link" onClick={() => go(href)}>
              {label}
            </button>
          ))}
        </div>

        {/* Social section */}
        <div className="navbar__drawer-social-section">
          <span className="navbar__drawer-social-title">Follow Us</span>
          <div className="navbar__drawer-socials">
            {SOCIALS.map(({ id, label, href, icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`navbar__drawer-social navbar__social--${id}`}
                aria-label={label}
              >
                <span className="navbar__drawer-social-icon">{icon}</span>
                <span className="navbar__drawer-social-label">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="navbar__drawer-cta-wrap">
          <button
            className="btn-primary navbar__cta navbar__cta--mobile"
            onClick={() => go('contact')}
          >
            {t.nav.getQuote}
          </button>
        </div>
      </nav>
    </header>
  );
}