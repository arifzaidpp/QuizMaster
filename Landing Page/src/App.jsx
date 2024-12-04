import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Demo } from './components/Demo';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const target = e.target;
      if (!(target instanceof HTMLAnchorElement)) return;
      const id = target.getAttribute('href')?.replace('#', '');
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <main className="relative">
        {/* Hero Section - Full viewport height with navbar offset */}
        <section className="min-h-[calc(100vh-4rem)]">
          <Hero />
        </section>

        {/* Features Section - Auto height with proper spacing */}
        <section className="py-20 px-4 relative overflow-hidden lg:py-32 bg-gray-50 dark:bg-gray-800" id='features'>
          <Features />
        </section>

        {/* Demo Section - Fixed aspect ratio container */}
        <section className="py-24 lg:py-32">
          <Demo />
        </section>

        {/* Stats Section - Compact height with proper spacing */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <Stats />
        </section>

        {/* About Section - Auto height with proper spacing */}
        <section className="py-24 lg:py-32"  id="about">
          <About />
        </section>

        {/* Testimonials Section - Fixed height for consistent appearance */}
        <section className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <Testimonials />
        </section>

        {/* Call to Action Section - Compact height with focus */}
        <section className="py-20">
          <CallToAction />
        </section>

        {/* Contact Section - Auto height with proper spacing */}
        <section id='contact'>
          <Contact />
        </section>
      </main>

      {/* Footer - Auto height */}
      <Footer />
    </div>
  );
}

export default App;