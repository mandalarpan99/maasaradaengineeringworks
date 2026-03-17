import { useInView, scrollTo } from '../../hooks/useInView';
import { useTranslation } from '../../context/LanguageContext';
import './About.css';

export default function AboutSection() {
  const [refL, inViewL] = useInView(0.1);
  const [refR, inViewR] = useInView(0.1);
  const { t }           = useTranslation();
  const a               = t.about;

  return (
    <section id="about" className="about">
      <div className="about::after" />
      <div className="container about__inner">
        {/* Left */}
        <div ref={refL} className={`about__left fade-up ${inViewL ? 'visible' : ''}`}>
          <span className="section-tag">{a.tag}</span>
          <div className="section-divider" />
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            {a.title}<br /><span>{a.titleAccent}</span>
          </h2>
          <p className="about__body">{a.body1}</p>
          <p className="about__body">{a.body2}</p>

          <div className="about__creds">
            {a.creds.map((c) => (
              <div key={c.lbl} className="about__cred">
                <span className="about__cred-val">{c.val}</span>
                <span className="about__cred-lbl">{c.lbl}</span>
              </div>
            ))}
          </div>

          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            {a.cta}
          </button>
        </div>

        {/* Right */}
        <div
          ref={refR}
          className={`about__right fade-up ${inViewR ? 'visible' : ''}`}
          style={{ transitionDelay: '0.15s' }}
        >
          <div className="about__img-stack">
            <img
              className="about__img about__img--back"
              src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80"
              alt="workshop overview"
              loading="lazy"
            />
            <img
              className="about__img about__img--front"
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&q=80"
              alt="fabrication detail"
              loading="lazy"
            />
            <div className="about__badge">
              <span className="about__badge-num">12K</span>
              <span className="about__badge-lbl">{a.badgeLbl}</span>
            </div>
          </div>

          <div className="about__why-grid">
            {a.whyUs.map((w) => (
              <div key={w.title} className="why-card">
                <span className="why-card__icon">{w.icon}</span>
                <div>
                  <h4 className="why-card__title">{w.title}</h4>
                  <p className="why-card__desc">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
