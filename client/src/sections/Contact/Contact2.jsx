import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { CONTACT_DETAILS } from '../../data/constants';
import './Contact.css';

export default function ContactSection() {
  const [ref, inView] = useInView(0.08);
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [sent, setSent]  = useState(false);
  const [focus, setFocus] = useState('');

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: POST /api/contact when backend ready
    setSent(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner" ref={ref}>

        {/* Left — info panel */}
        <div className={`contact__info fade-up ${inView ? 'visible' : ''}`}>
          <span className="section-tag">— Get in Touch —</span>
          <div className="section-divider" />
          <h2 className="section-title">
            Let's Build<br /><span>Together.</span>
          </h2>
          <p className="contact__sub">
            Tell us about your project. We'll quote it, plan it, and build it —
            on time and to spec.
          </p>

          {/* Contact detail cards */}
          <div className="contact__details">
            {CONTACT_DETAILS.map((d) => (
              <div key={d.label} className="contact-detail">
                <span className="contact-detail__icon">{d.icon}</span>
                <div>
                  <div className="contact-detail__label">{d.label}</div>
                  <div className="contact-detail__val">{d.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="contact__map">
            <div className="contact__map-inner">
              <span className="contact__map-pin">📍</span>
              <span className="contact__map-text"></span>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className={`contact__form-wrap fade-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">✅</div>
              <h3 className="contact__success-title">Message Sent!</h3>
              <p className="contact__success-sub">
                Our team will get back to you within 4 business hours.
              </p>
              <button className="btn-primary" onClick={() => setSent(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form__header">
                <h3 className="form__title">Request a Free Quote</h3>
                <p className="form__sub">All fields marked * are required.</p>
              </div>

              <div className="form__row">
                <div className={`form__field ${focus === 'name' ? 'form__field--focus' : ''}`}>
                  <label className="form__label">Full Name *</label>
                  <input
                    className="form__input"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={update('name')}
                    onFocus={() => setFocus('name')}
                    onBlur={() => setFocus('')}
                    required
                  />
                </div>
                <div className={`form__field ${focus === 'phone' ? 'form__field--focus' : ''}`}>
                  <label className="form__label">Phone / WhatsApp *</label>
                  <input
                    className="form__input"
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    value={form.phone}
                    onChange={update('phone')}
                    onFocus={() => setFocus('phone')}
                    onBlur={() => setFocus('')}
                    required
                  />
                </div>
              </div>

              <div className={`form__field ${focus === 'service' ? 'form__field--focus' : ''}`}>
                <label className="form__label">Service Required *</label>
                <select
                  className="form__input form__select"
                  value={form.service}
                  onChange={update('service')}
                  onFocus={() => setFocus('service')}
                  onBlur={() => setFocus('')}
                  required
                >
                  <option value="">— Select a service —</option>
                  <option>Metal Fabrication</option>
                  <option>Collapsible Gate</option>
                  <option>Roof Shade / Canopy</option>
                  <option>Metal Gate</option>
                  <option>Metal Windows & Grilles</option>
                  <option>Custom Welding & Repair</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={`form__field ${focus === 'message' ? 'form__field--focus' : ''}`}>
                <label className="form__label">Project Details</label>
                <textarea
                  className="form__input form__textarea"
                  placeholder="Describe your project — size, material preference, timeline, location..."
                  value={form.message}
                  onChange={update('message')}
                  onFocus={() => setFocus('message')}
                  onBlur={() => setFocus('')}
                  rows={5}
                />
              </div>

              <button type="submit" className="btn-primary form__submit">
                Send Quote Request <span>→</span>
              </button>

              <p className="form__note">
                ⚡ Average response time: <strong>under 4 hours</strong> during business days.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
