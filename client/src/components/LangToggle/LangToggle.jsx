import { useTranslation } from '../../context/LanguageContext';
import './LangToggle.css';

/**
 * LangToggle
 * Renders an animated pill toggle: [EN | বাং]
 * Can be placed inside the Navbar or anywhere on the page.
 */
export default function LangToggle() {
  const { lang, toggle } = useTranslation();
  const isBn = lang === 'bn';

  return (
    <button
      className={`lang-toggle ${isBn ? 'lang-toggle--bn' : ''}`}
      onClick={toggle}
      aria-label={isBn ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
      title={isBn ? 'Switch to English' : 'Switch to Bengali'}
    >
      {/* Track */}
      <span className="lang-toggle__track">
        {/* Sliding thumb */}
        <span className="lang-toggle__thumb" />

        {/* Labels */}
        <span className={`lang-toggle__label lang-toggle__label--en ${!isBn ? 'active' : ''}`}>
          EN
        </span>
        <span className={`lang-toggle__label lang-toggle__label--bn ${isBn ? 'active' : ''}`}>
          বাং
        </span>
      </span>
    </button>
  );
}
