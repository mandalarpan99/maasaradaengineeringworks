import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { useTranslation } from '../../context/LanguageContext';
import './Contact.css';

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878.8923701609953!2d88.44440782845749!3d22.220639940235852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02410027056aaf%3A0x8de0403ddd57b87d!2z4Kau4Ka-IOCmuOCmvuCmsOCmpuCmviDgpofgpp7gp43gppzgpr_gpqjgpr_gp5_gpr7gprDgpr_gpoIg4KaT4Kav4Ka84Ka-4Kaw4KeN4KaV4Ka4!5e1!3m2!1sen!2sin!4v1773687663593!5m2!1sen!2sin';

export default function ContactSection() {
  const [refL, inViewL] = useInView(0.08);
  const [refR, inViewR] = useInView(0.08);
  const { t }           = useTranslation();
  const c               = t.contact;
  const f               = c.form;

  const [form,  setForm]  = useState({ name: '', phone: '', service: '', message: '' });
  const [sent,  setSent]  = useState(false);
  const [focus, setFocus] = useState('');

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" className="contact">
      <div className="contact__header container">
        <span className="section-tag">{c.tag}</span>
        <div className="section-divider" />
        <h2 className="section-title">
          {c.title} <span>{c.titleAccent}</span>
        </h2>
        <p className="contact__header-sub">{c.headerSub}</p>
      </div>

      <div className="contact__body container">
        {/* LEFT */}
        <div ref={refL} className={`contact__left fade-up ${inViewL ? 'visible' : ''}`}>
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

        {/* RIGHT */}
        <div
          ref={refR}
          className={`contact__right fade-up ${inViewR ? 'visible' : ''}`}
          style={{ transitionDelay: '0.12s' }}
        >
          <div className="contact__form-card">
            {sent ? (
              <div className="contact__success">
                <div className="contact__success-ring">
                  <span className="contact__success-icon">✓</span>
                </div>
                <h3 className="contact__success-title">{c.success.title}</h3>
                <p className="contact__success-sub">{c.success.sub}</p>
                <button className="btn-primary" onClick={() => setSent(false)}>
                  {c.success.btnAgain}
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="form__header">
                  <h3 className="form__title">{f.title}</h3>
                  <p className="form__sub">
                    {f.sub} <span className="form__req">*</span> {f.subReq}
                  </p>
                </div>

                <div className="form__row">
                  <div className={`form__field ${focus === 'name' ? 'form__field--focus' : ''}`}>
                    <label className="form__label">{f.nameLbl} <span className="form__req">*</span></label>
                    <input className="form__input" type="text" placeholder={f.namePh}
                      value={form.name} onChange={update('name')}
                      onFocus={() => setFocus('name')} onBlur={() => setFocus('')} required />
                  </div>
                  <div className={`form__field ${focus === 'phone' ? 'form__field--focus' : ''}`}>
                    <label className="form__label">{f.phoneLbl} <span className="form__req">*</span></label>
                    <input className="form__input" type="tel" placeholder={f.phonePh}
                      value={form.phone} onChange={update('phone')}
                      onFocus={() => setFocus('phone')} onBlur={() => setFocus('')} required />
                  </div>
                </div>

                <div className={`form__field ${focus === 'service' ? 'form__field--focus' : ''}`}>
                  <label className="form__label">{f.serviceLbl} <span className="form__req">*</span></label>
                  <select className="form__input form__select" value={form.service}
                    onChange={update('service')} onFocus={() => setFocus('service')}
                    onBlur={() => setFocus('')} required>
                    <option value="">{f.servicePh}</option>
                    {f.services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div className={`form__field ${focus === 'message' ? 'form__field--focus' : ''}`}>
                  <label className="form__label">{f.msgLbl}</label>
                  <textarea className="form__input form__textarea" placeholder={f.msgPh}
                    value={form.message} onChange={update('message')}
                    onFocus={() => setFocus('message')} onBlur={() => setFocus('')} rows={5} />
                </div>

                <button type="submit" className="btn-primary form__submit">
                  {f.submit} <span className="form__submit-arrow">→</span>
                </button>

                <p className="form__note">
                  ⚡ {f.note} <strong>{f.noteStrong}</strong> {f.noteSuffix}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
