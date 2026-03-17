import { useInView } from '../../hooks/useInView';
import { useTranslation } from '../../context/LanguageContext';
import './Contact.css';

// ─── Google Maps embed URL ────────────────────────────────────────────────────
const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878.8923701609953!2d88.44440782845749!3d22.220639940235852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02410027056aaf%3A0x8de0403ddd57b87d!2z4Kau4Ka-IOCmuOCmvuCmsOCmpuCmviDgpofgpp7gp43gppzgpr_gpqjgpr_gp5_gpr7gprDgpr_gpoIg4KaT4Kav4Ka84Ka-4Kaw4KeN4KaV4Ka4!5e1!3m2!1sen!2sin!4v1773687663593!5m2!1sen!2sin';

// ─── Google Form embed URL ────────────────────────────────────────────────────
// ⚠️  REPLACE THIS with your own Google Form embed URL.
//     How to get it:
//       1. Open your Google Form → click ⋮ (More) → Embed
//       2. Copy the src="..." value from the <iframe> code
//       3. Paste it below, replacing the placeholder URL
const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/viewform?embedded=true';

export default function ContactSection() {
  const [refL, inViewL] = useInView(0.08);
  const [refR, inViewR] = useInView(0.08);
  const { t }           = useTranslation();
  const c               = t.contact;

  return (
    <section id="contact" className="contact">

      {/* ── Centred section header ── */}
      <div className="contact__header container">
        <span className="section-tag">{c.tag}</span>
        <div className="section-divider" />
        <h2 className="section-title">
          {c.title} <span>{c.titleAccent}</span>
        </h2>
        <p className="contact__header-sub">{c.headerSub}</p>
      </div>

      {/* ── Two-column body ── */}
      <div className="contact__body container">

        {/* ────────────────────────────────────────────────────
            LEFT — contact detail cards + Google Map
        ──────────────────────────────────────────────────── */}
        <div ref={refL} className={`contact__left fade-up ${inViewL ? 'visible' : ''}`}>

          {/* Contact detail cards */}
          <div className="contact__details">
            {c.details.map((d) => (
              <div key={d.label} className="contact-detail">
                <div className="contact-detail__icon-wrap">
                  <span className="contact-detail__icon">{d.icon}</span>
                </div>
                <div>
                  <div className="contact-detail__label">{d.label}</div>
                  <div className="contact-detail__val">{d.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Map */}
          <div className="contact__map-wrap">
            <div className="contact__map-label">
              <span>📍</span>
              <span>{c.mapLabel}</span>
            </div>
            <div className="contact__map-frame">
              <iframe
                src={MAP_EMBED_URL}
                title="SteelCraft Workshop Location"
                className="contact__map-iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="contact__map-tint" />
            </div>
            <a
              href="https://maps.app.goo.gl/hQ2QW5yv5QKPzt868"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__map-link"
            >
              {c.mapLink}
            </a>
          </div>
        </div>

        {/* ────────────────────────────────────────────────────
            RIGHT — Google Form embed
        ──────────────────────────────────────────────────── */}
        <div
          ref={refR}
          className={`contact__right fade-up ${inViewR ? 'visible' : ''}`}
          style={{ transitionDelay: '0.12s' }}
        >
          <div className="gform__card">

            {/* Card header bar */}
            <div className="gform__header">
              <div className="gform__header-left">
                <span className="gform__header-icon">📋</span>
                <div>
                  <span className="gform__header-title">{c.form.title}</span>
                  <span className="gform__header-sub">{c.form.poweredBy}</span>
                </div>
              </div>
              <span className="gform__google-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google Forms
              </span>
            </div>

            {/* The actual Google Form iframe */}
            <div className="gform__frame-wrap">
              <iframe
                src={GOOGLE_FORM_URL}
                title="SteelCraft Quote Request Form"
                className="gform__iframe"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                loading="lazy"
              >
                Loading form…
              </iframe>
            </div>

            {/* Card footer */}
            <div className="gform__footer">
              <span className="gform__footer-note">
                ⚡ {c.form.note} <strong>{c.form.noteStrong}</strong> {c.form.noteSuffix}
              </span>
              <a
                href={GOOGLE_FORM_URL.replace('?embedded=true', '')}
                target="_blank"
                rel="noopener noreferrer"
                className="gform__open-link"
              >
                {c.form.openInNew} ↗
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}