import { useInView, scrollTo } from '../../hooks/useInView';
import { useTranslation } from '../../context/LanguageContext';
import './Hero.css';

export default function HeroSection() {
  const [ref, inView] = useInView(0.05);
  const { t }         = useTranslation();
  const h             = t.hero;
  const stats         = t.stats.items;
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
