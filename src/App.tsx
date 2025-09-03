import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header/Header.tsx';
import IntroSection from './components/Sections/IntroSection.tsx';
import AboutSection from './components/Sections/AboutSection';
import RatingSection from './components/Sections/RatingSection.tsx';
import PortfolioSection from './components/Sections/PortfolioSection.tsx';
import MarqueeSection from './components/Sections/MarqueeSection.tsx';
import BrandsSection from './components/Sections/BrandsSection.tsx';
import Footer from './components/Footer/Footer.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <main className="container-fluid p-0">
        <Header />
        <IntroSection />
        <AboutSection />
        <RatingSection />
        <PortfolioSection />
        <MarqueeSection />
        <BrandsSection />
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;