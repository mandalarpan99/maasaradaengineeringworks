import { useTranslation } from '../../context/LanguageContext';
import { scrollTo } from '../../hooks/useInView';
import './Footer.css';

const SERVICE_HREFS = ['services','services','services','services','services','services'];

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
              <span className="footer__brand-icon">◈</span>
              <span className="footer__brand-text">
                STEEL<span className="footer__brand-accent">CRAFT</span>
              </span>
            </button>
            <p className="footer__tagline">{f.tagline}</p>
            <div className="footer__socials">
              {['FB', 'WA', 'IN', 'YT'].map((s) => (
                <a key={s} href="#" className="footer__social">{s}</a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">{f.colServices}</h4>
            <ul className="footer__list">
              {sv.map((s) => (
                <li key={s.id}>
                  <button className="footer__list-link" onClick={() => scrollTo('services')}>
                    {s.title}
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
