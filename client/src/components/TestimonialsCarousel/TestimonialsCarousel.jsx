import { useState, useEffect, useRef, useCallback } from 'react';
import './TestimonialsCarousel.css';

// How many cards are visible at once (responsive via CSS too)
const VISIBLE = 3;
// Auto-advance interval in ms
const INTERVAL = 4000;

/** Star rating renderer */
function Stars({ count = 5 }) {
  return (
    <span className="tc-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`tc-star ${i < count ? 'tc-star--on' : ''}`}>★</span>
      ))}
    </span>
  );
}

export default function TestimonialsCarousel({ items = [], prev = 'Previous', next = 'Next' }) {
  const total     = items.length;
  const maxIndex  = total - VISIBLE;            // last valid starting index

  const [current,  setCurrent]  = useState(0);
  const [paused,   setPaused]   = useState(false);
  const [animDir,  setAnimDir]  = useState('next'); // 'next' | 'prev'
  const [sliding,  setSliding]  = useState(false);
  const timerRef  = useRef(null);

  // ── advance by +1 / -1 with direction animation ──────────────────
  const go = useCallback((dir) => {
    if (sliding) return;
    setAnimDir(dir > 0 ? 'next' : 'prev');
    setSliding(true);
    setTimeout(() => {
      setCurrent((prev) => {
        const next = prev + dir;
        if (next > maxIndex) return 0;
        if (next < 0)        return maxIndex;
        return next;
      });
      setSliding(false);
    }, 420);
  }, [sliding, maxIndex]);

  // ── auto-play ─────────────────────────────────────────────────────
  useEffect(() => {
    if (paused) { clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(() => go(1), INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [paused, go]);

  // ── jump to dot index ─────────────────────────────────────────────
  const jumpTo = (idx) => {
    if (idx === current || sliding) return;
    setAnimDir(idx > current ? 'next' : 'prev');
    setSliding(true);
    setTimeout(() => { setCurrent(idx); setSliding(false); }, 420);
  };

  // ── visible slice ─────────────────────────────────────────────────
  // We always show VISIBLE cards; if near end we wrap around
  const visibleItems = Array.from({ length: VISIBLE }).map((_, i) => {
    const idx = (current + i) % total;
    return { ...items[idx], _idx: idx };
  });

  // ── dots represent each valid start position ──────────────────────
  const dots = Array.from({ length: maxIndex + 1 });

  return (
    <div
      className="tc-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* ── Progress bar (resets each cycle) ── */}
      <div className="tc-progress" key={`${current}-${paused}`}>
        <div
          className={`tc-progress__bar ${paused ? 'tc-progress__bar--paused' : ''}`}
          style={{ animationDuration: `${INTERVAL}ms` }}
        />
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        className="tc-arrow tc-arrow--prev"
        onClick={() => go(-1)}
        aria-label={prev}
        disabled={sliding}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>

      <button
        className="tc-arrow tc-arrow--next"
        onClick={() => go(1)}
        aria-label={next}
        disabled={sliding}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      {/* ── Card track ── */}
      <div
        className={`tc-track tc-track--${animDir} ${sliding ? 'tc-track--sliding' : ''}`}
      >
        {visibleItems.map((item, i) => (
          <article key={`${item._idx}-${current}`} className="tc-card" style={{ '--i': i }}>

            {/* Quote mark */}
            <span className="tc-card__quote" aria-hidden="true">"</span>

            {/* Stars */}
            <Stars count={item.rating ?? 5} />

            {/* Review text */}
            <p className="tc-card__text">{item.quote}</p>

            {/* Author */}
            <div className="tc-card__author">
              <div className="tc-card__avatar" aria-hidden="true">
                {item.name.charAt(0).toUpperCase()}
              </div>
              <div className="tc-card__author-info">
                <span className="tc-card__name">{item.name}</span>
                <span className="tc-card__role">{item.role}</span>
              </div>
            </div>

          </article>
        ))}
      </div>

      {/* ── Dot navigation ── */}
      <div className="tc-dots" role="tablist" aria-label="Select review">
        {dots.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to review ${i + 1}`}
            className={`tc-dot ${i === current ? 'tc-dot--active' : ''}`}
            onClick={() => jumpTo(i)}
          />
        ))}
      </div>

      {/* ── Counter badge ── */}
      <div className="tc-counter" aria-live="polite">
        {current + 1} / {maxIndex + 1}
      </div>
    </div>
  );
}