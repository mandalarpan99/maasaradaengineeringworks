import { useTranslation } from '../../context/LanguageContext';
import { scrollTo } from '../../hooks/useInView';
import './Footer.css';
const SERVICE_HREFS = ['services','services','services','services','services','services'];
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
// ── Social links — update hrefs to your real profiles ────────────────
const SOCIALS = [
  {
    id:    'facebook',
    label: 'Facebook',
    href:  'https://www.facebook.com/profile.php?id=61574225489455',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    id:    'whatsapp',
    label: 'WhatsApp',
    href:  'https://wa.me/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    id:    'instagram',
    label: 'Instagram',
    href:  '',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1.5"/>
      </svg>
    ),
  },
  {
    id:    'youtube',
    label: 'YouTube',
    href:  '',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--gunmetal-dark)"/>
      </svg>
    ),
  },
];
export default function Footer() {
  const { t } = useTranslation();
  const f     = t.footer;
  const sv    = t.services.items;
  const nav   = [
    { label: t.nav.services, href: 'services' },
    { label: t.nav.about,    href: 'about'    },
    { label: t.nav.projects, href: 'projects' },
    { label: t.nav.whyUs,    href: 'stats'    },
    { label: t.nav.contact,  href: 'contact'  },
  ];
  // const social_links   = [
  //   { label: <FaFacebook />,    href: 'https://www.facebook.com/profile.php?id=61574225489455' },
  //   { label: <FaYoutube />,    href: 'about'    },
  //   { label: <FaInstagram />,    href: 'projects' },
  //   { label: <FaLinkedin />,    href: 'stats'    },
  // ];

  return (
    <footer className="footer">
      <div className="footer__cta-band">
        <div className="container footer__cta-inner">
          <div>
            <h3 className="footer__cta-title">{f.ctaTitle}</h3>
            <p className="footer__cta-sub">{f.ctaSub}</p>
          </div>
          <button className="btn-primary footer__cta-btn" onClick={() => scrollTo('contact')}>
            {f.ctaBtn}
          </button>
        </div>
      </div>

      <div className="footer__body">
        <div className="container footer__grid">
          <div className="footer__col footer__col--brand">
            <button className="footer__brand" onClick={() => scrollTo('hero')}>
              <span className="footer__brand-icon"><img src='./maasarada_logo2.png' width={60} /></span>
              <span className="footer__brand-text">
                {t.footer.line1}<span className="footer__brand-accent">{t.footer.line2}</span>
              </span>
            </button>
            <p className="footer__tagline">{f.tagline}</p>
            <div className="footer__socials">
              {/* {social_links.map((s) => (
                <a key={s} href={s.href} className="footer__social" target='_blank'>{s.label}</a>
              ))} */}

              {/* <---------- SOCIALS ICONS----------> */}
              {SOCIALS.map(({ id, label, href, icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`footer__social footer__social--${id}`}
                aria-label={label}
                title={label}
              >
                {icon}
              </a>
            ))}
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">{f.colServices}</h4>
            <ul className="footer__list">
              {sv.map((i) => (
                <li key={i.id}>
                  <button className="footer__list-link" onClick={() => scrollTo('services')}>
                    {i.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">{f.colNav}</h4>
            <ul className="footer__list">
              {nav.map(({ label, href }) => (
                <li key={href}>
                  <button className="footer__list-link" onClick={() => scrollTo(href)}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">{f.colContact}</h4>
            <ul className="footer__list footer__list--contact">
              {t.contact.details.map((d) => (
                <li key={d.label}>{d.icon} {d.val}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copy">
            © {new Date().getFullYear()} {f.copy}
          </span>
          <div className="footer__legal">
            {f.legal.map((l) => (
              <a key={l} href="#" className="footer__legal-link">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
