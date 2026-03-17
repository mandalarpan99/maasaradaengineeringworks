import './styles/global.css';

// ── Sections ──────────────────────────────────────────────────────────
import Navbar          from './sections/Navbar/Navbar';
import HeroSection     from './sections/Hero/Hero';
import ServicesSection from './sections/Services/Services';
import AboutSection    from './sections/About/About';
import ProjectsSection from './sections/Projects/Projects';
import StatsSection    from './sections/Stats/Stats';
import ContactSection  from './sections/Contact/Contact';
import Footer          from './sections/Footer/Footer';
//-------------------Icons____________________


export default function App() {
  return (
    <>
      {/* Global noise texture gives the "raw industrial steel" feel */}
      <div className="noise-overlay" />

      <Navbar />

      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <StatsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
