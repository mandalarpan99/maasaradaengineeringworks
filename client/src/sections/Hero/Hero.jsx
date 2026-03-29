import { useInView, scrollTo } from '../../hooks/useInView';
import { useTranslation } from '../../context/LanguageContext';
import './Hero.css';
const SOCIALS = [
  {
    id:    'facebook',
    label: 'Facebook',
    href:  'https://www.facebook.com/profile.php?id=61574225489455',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    id:    'whatsapp',
    label: 'WhatsApp',
    href:  '',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    id:    'instagram',
    label: 'Instagram',
    href:  '',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id:    'youtube',
    label: 'YouTube',
    href:  '',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--gunmetal-dark)"/>
      </svg>
    ),
  },
];

export default function HeroSection() {
  const [ref, inView] = useInView(0.05);
  const { t }         = useTranslation();
  const h             = t.hero;
  const stats         = t.stats.items;
  console.log(h.socialLink)
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />
      <div className="hero__grid" />
      <div className="hero__overlay" />
      <div className="hero__stripe" />

      <div className="hero__content container" ref={ref}>
        <div className={`hero__text ${inView ? 'hero__text--visible' : ''}`}>
          <div className="hero__eyebrow">
            <span className="hero__dot" />
            <span>{h.eyebrow}</span>
          </div>

          <h1 className="hero__title">
            {h.line1}<br />
            <span className="hero__title-accent">{h.line2}</span><br />
            {h.line3}
          </h1>

          <p className="hero__sub">{h.sub}</p>
          <div className="hero_socials" aria-label="Social media links">
            <div className='hero_social_sub'>
              {h.socialLink} <span>→</span>
            </div>
            <div className="hero__socials">
                {SOCIALS.map(({ id, label, href, icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hero__social hero__social--${id}`}
                aria-label={label}
                title={label}
              >
                {icon}
              </a>
            ))}
            </div>
          </div>
          <div className="hero__ctas">
            {/* <button className="btn-primary" onClick={() => scrollTo('contact')}>
              {h.ctaPrimary}
            </button> */}
            <button className="btn-outline" onClick={() => scrollTo('projects')}>
              {h.ctaSecond} <span>→</span>
            </button>
          </div>
          
          <div className="hero__pills">
            {h.pills.map((s) => (
              <span key={s} className="hero__pill">{s}</span>
            ))}
          </div>
        </div>
        
        <div className={`hero__cards ${inView ? 'hero__cards--visible' : ''}`}>
          {stats.map((s, i) => (
            <div key={i} className="hero__stat-card" style={{ animationDelay: `${0.15 + i * 0.1}s` }}>
              <span className="hero__stat-icon">{s.icon}</span>
              <span className="hero__stat-val">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text">SCROLL</span>
      </div>
    </section>
  );
}
