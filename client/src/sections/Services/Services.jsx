import { useState } from 'react';
import { useInView, scrollTo } from '../../hooks/useInView';
import { useTranslation } from '../../context/LanguageContext';
import './Services.css';

// Images are static — keep them mapped by id
const SERVICE_IMGS = {
  fabrication: 'https://i.pinimg.com/736x/91/dd/5d/91dd5d5701e3de91b93e0f27e4b55645.jpg',
  gate:        'https://i.pinimg.com/1200x/bc/58/14/bc5814c50a17bd6561b725b65db0c9ef.jpg',
  roofshade:   'https://i.pinimg.com/1200x/1a/46/49/1a4649d8970a6ae116bf75e7e8b8897e.jpg',
  metalgate:   'https://i.pinimg.com/1200x/39/2a/1c/392a1ca41fada577cb49a08f1c895cf7.jpg',
  windows:     'https://i.pinimg.com/736x/3b/5d/cc/3b5dcc9d5ad4d0dd59a989e447bc4995.jpg',
  welding:     'https://i.pinimg.com/736x/ef/67/14/ef6714786802ec9da6309be92e69b85f.jpg',
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
