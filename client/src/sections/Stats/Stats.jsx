import { useInView } from '../../hooks/useInView';
import { useTranslation } from '../../context/LanguageContext';
import CountUp from '../../components/countUp/CountUp';
import TestimonialsCarousel from '../../components/TestimonialsCarousel/TestimonialsCarousel';
import { STATS } from '../../data/constants';
import './Stats.css';

export default function StatsSection() {
  const [ref,  inView]  = useInView(0.1);
  const [refT, inViewT] = useInView(0.08);
  const { t }           = useTranslation();

  return (
    <>
      {/* ─── Stats bar new ────────────────────────────────── */}
      {/* <section id="stats" className="stats">
        <div className="container stats__inner" ref={ref}>
          {t.stats.items.map((s, i) => (
            <div
              key={i}
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
      </section> */}

      {/* ── Stats bar — always English, never translated --old── */}
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

      {/* ─── Testimonials Carousel ────────────────────── */}
      <section className="testimonials">
        <div className="container">
          {/* Section header */}
          <div
            ref={refT}
            className={`testimonials__header fade-up ${inViewT ? 'visible' : ''}`}
          >
            <span className="section-tag">{t.testimonials.tag}</span>
            <div className="section-divider" />
            <h2 className="section-title">
              {t.testimonials.title}{' '}
              <span>{t.testimonials.titleAccent}</span>
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              {t.testimonials.subline ?? ''}
            </p>
          </div>

          {/* Auto-play carousel — 3 visible, arrows, dots, progress bar */}
          <div className={`testimonials__carousel-wrap fade-up ${inViewT ? 'visible' : ''}`}
               style={{ transitionDelay: '0.18s' }}>
            <TestimonialsCarousel
              items={t.testimonials.items}
              prev={t.testimonials.prev}
              next={t.testimonials.next}
            />
          </div>
        </div>
      </section>
    </>
  );
}
