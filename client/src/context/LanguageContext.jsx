import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

// ─── Context ──────────────────────────────────────────────────────────
const LanguageContext = createContext(null);

// ─── Provider ─────────────────────────────────────────────────────────
export function LanguageProvider({ children }) {
  // Read persisted preference; default to 'en'
  const [lang, setLang] = useState(
    () => localStorage.getItem('sc_lang') || 'en'
  );

  // Keep <html lang="..."> attribute in sync for accessibility + SEO
  useEffect(() => {
    document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
    localStorage.setItem('sc_lang', lang);
  }, [lang]);

  const toggle = () => setLang((prev) => (prev === 'en' ? 'bn' : 'en'));

  const t = translations[lang];   // current translation object

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────
/**
 * useTranslation()
 * Returns { lang, toggle, t }
 *   lang   — 'en' | 'bn'
 *   toggle — function to switch language
 *   t      — full translation object for current language
 *
 * Usage:
 *   const { t, toggle, lang } = useTranslation();
 *   <h1>{t.hero.line1}</h1>
 */
export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useTranslation must be used inside <LanguageProvider>');
  return ctx;
}
