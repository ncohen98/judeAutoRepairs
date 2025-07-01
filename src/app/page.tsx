// src/app/page.tsx (or src/pages.tsx if you're using pages directory)
'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Colors from '@/constants/colors';

export default function HomePage() {
  return (
    <div style={{ backgroundColor: Colors.background, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* No StatusBar in web, ignore or add <Head> meta if needed */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Header />
        <Hero />
        <section id="services" style={{ margin: '20px 0' }}>
          <Services />
        </section>
        <section id="about" style={{ margin: '20px 0' }}>
          <Experience />
        </section>
        <Footer />
      </div>
    </div>
  );
}

