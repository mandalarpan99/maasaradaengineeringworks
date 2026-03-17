import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { useTranslation } from '../../context/LanguageContext';
import './Projects.css';

const PROJECT_IMGS = [
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=700&q=80',
  'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80',
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=700&q=80',
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
