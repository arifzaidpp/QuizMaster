import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { Demo } from './Demo';
import { Stats } from './Stats';
import { About } from './About';
import { Testimonials } from './Testimonials';
import { CallToAction } from './CallToAction';
import { Contact } from './Contact';
import { Footer } from './Footer';

export function LandingPage() {
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
                <section className="py-24 lg:py-32" id="about">
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
};