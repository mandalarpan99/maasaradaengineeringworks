import { useInView } from '../../hooks/useInView';
import { useTranslation } from '../../context/LanguageContext';
import { STATS } from '../../data/constants';
import CountUp from '../../components/CountUp/CountUp';
import './Stats.css';

export default function StatsSection() {
  const [ref,  inView]  = useInView(0.1);
  const [refT, inViewT] = useInView(0.1);
  const { t }           = useTranslation();

  return (
    <>
      {/* ── Stats bar — always English, never translated ── */}
      <section id="stats" className="stats">
        <div className="container stats__inner" ref={ref}>
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`stat-item fade-up ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="stat-item__icon">{s.icon}</span>
              <span className="stat-item__val">
                <CountUp target={s.value} />
              </span>
              <span className="stat-item__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials — translated normally ── */}
      <section className="testimonials">
        <div className="container" ref={refT}>
          <div className={`testimonials__header fade-up ${inViewT ? 'visible' : ''}`}>
            <span className="section-tag">{t.testimonials.tag}</span>
            <div className="section-divider" />
            <h2 className="section-title">
              {t.testimonials.title} <span>{t.testimonials.titleAccent}</span>
            </h2>
          </div>

          <div className="testimonials__grid">
            {t.testimonials.items.map((item, i) => (
              <div
                key={i}
                className={`testi-card fade-up ${inViewT ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
              >
                <span className="testi-card__quote-mark">"</span>
                <p className="testi-card__text">{item.quote}</p>
                <div className="testi-card__author">
                  <div className="testi-card__avatar">{item.name.charAt(0)}</div>
                  <div>
                    <div className="testi-card__name">{item.name}</div>
                    <div className="testi-card__role">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
