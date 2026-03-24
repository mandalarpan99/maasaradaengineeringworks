import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { useTranslation } from '../../context/LanguageContext';
import './Projects.css';

const PROJECT_IMGS = [
  'https://i.pinimg.com/736x/d3/8a/e1/d38ae1c76aa816065c498ff2a150c368.jpg',
  'https://i.pinimg.com/736x/b3/f5/0d/b3f50d03a41df0fc6cdc84aa569a374e.jpg',
  'https://i.pinimg.com/1200x/64/28/c9/6428c9ff90e31e9fe80aaeab9c0ed337.jpg',
  'https://i.pinimg.com/1200x/0f/56/13/0f561332aa922924d8d82bc8143a1ecf.jpg',
  'https://i.pinimg.com/474x/e9/ca/0d/e9ca0d15c32b7163712d588738da6c62.jpg',
  'https://i.pinimg.com/736x/57/f2/17/57f217d479f28387c14e56c2bec65e3c.jpg',
];

// Structural category keys (language-agnostic index)
// filter index 0=All,1=MetalFab,2=ColGate,3=RoofShade,4=MetalGate,5=MetalWin
// item  index:  0        1          2         3           4          5
const ITEM_FILTER_IDX = [2, 3, 4, 5, 3, 1];

export default function ProjectsSection() {
  const [ref, inView]       = useInView(0.08);
  const { t }               = useTranslation();
  const p                   = t.projects;
  const [filter, setFilter] = useState(0);

  const filteredItems = p.items
    .map((item, i) => ({ ...item, img: PROJECT_IMGS[i], _fi: ITEM_FILTER_IDX[i] }))
    .filter((item) => filter === 0 || item._fi === filter);

  return (
    <section id="projects" className="projects">
      <div className="container" ref={ref}>
        <div className={`projects__header fade-up ${inView ? 'visible' : ''}`}>
          <span className="section-tag">{p.tag}</span>
          <div className="section-divider" />
          <h2 className="section-title">
            {p.title} <span>{p.titleAccent}</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>{p.sub}</p>
        </div>

        <div className={`projects__filters fade-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          {p.filters.map((f, i) => (
            <button
              key={i}
              className={`proj-filter ${filter === i ? 'proj-filter--active' : ''}`}
              onClick={() => setFilter(i)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredItems.map((proj, i) => (
            <div
              key={i}
              className={`proj-card fade-up ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.05 + i * 0.07}s` }}
              onMouseEnter={(e) => { e.currentTarget.querySelector('.proj-overlay').style.opacity = '1'; }}
              onMouseLeave={(e) => { e.currentTarget.querySelector('.proj-overlay').style.opacity = '0'; }}
            >
              <div className="proj-card__img-wrap">
                <img src={proj.img} alt={proj.title} className="proj-card__img" loading="lazy" />
                <div className="proj-overlay proj-card__overlay" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}>
                  <span className="proj-card__cat">{proj.category}</span>
                  <h3 className="proj-card__title">{proj.title}</h3>
                  <span className="proj-card__location">📍 {proj.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="projects__empty">{p.empty}</p>
        )}
      </div>
    </section>
  );
}
