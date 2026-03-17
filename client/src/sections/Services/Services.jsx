import { useState } from 'react';
import { useInView, scrollTo } from '../../hooks/useInView';
import { useTranslation } from '../../context/LanguageContext';
import './Services.css';

// Images are static — keep them mapped by id
const SERVICE_IMGS = {
  fabrication: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80',
  gate:        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
  roofshade:   'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=500&q=80',
  metalgate:   'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80',
  windows:     'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80',
  welding:     'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=500&q=80',
};

export default function ServicesSection() {
  const [ref, inView]       = useInView(0.08);
  const [active, setActive] = useState(null);
  const { t }               = useTranslation();
  const s                   = t.services;

  return (
    <section id="services" className="services">
      <div className="container" ref={ref}>
        <div className={`services__header fade-up ${inView ? 'visible' : ''}`}>
          <span className="section-tag">{s.tag}</span>
          <div className="section-divider" />
          <h2 className="section-title">
            {s.title} <span>{s.titleAccent}</span>
          </h2>
          <p className="section-sub">{s.sub}</p>
        </div>

        <div className="services__grid">
          {s.items.map((item, i) => (
            <div
              key={item.id}
              className={`svc-card fade-up ${inView ? 'visible' : ''} ${active === item.id ? 'svc-card--active' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
              onMouseEnter={() => setActive(item.id)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="svc-card__img-wrap">
                <img src={SERVICE_IMGS[item.id]} alt={item.title} className="svc-card__img" loading="lazy" />
                <div className="svc-card__img-overlay" />
                <span className="svc-card__icon">{
                  { fabrication:'🔧', gate:'🚪', roofshade:'🏗️', metalgate:'⛩️', windows:'🪟', welding:'⚙️' }[item.id]
                }</span>
              </div>
              <div className="svc-card__body">
                <p className="svc-card__tagline">{item.tagline}</p>
                <h3 className="svc-card__title">{item.title}</h3>
                <p className="svc-card__desc">{item.desc}</p>
                <div className="svc-card__tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="svc-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
              <button className="svc-card__cta" onClick={() => scrollTo('contact')}>
                {s.getQuote} <span>→</span>
              </button>
              <div className="svc-card__bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
