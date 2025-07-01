'use client';

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Colors from "@/constants/colors";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: Colors.background, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* StatusBar not needed on web */}
      <main style={{ flex: 1, overflowY: "auto", padding: "0 16px" }}>
        <Header />
        <Hero />
        <section id="services" style={{ margin: "20px 0" }}>
          <Services />
        </section>
        <section id="about" style={{ margin: "20px 0" }}>
          <Experience />
        </section>
      </main>
      <Footer />
    </div>
  );
}
