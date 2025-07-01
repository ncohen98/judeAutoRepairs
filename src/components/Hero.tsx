'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import BookingModal from './BookingModal';
import styles from './Hero.module.css';
import Colors from '@/constants/colors';

export default function Hero() {
  const [bookingModalVisible, setBookingModalVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="Car repair"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>
          Expert Electrical & Mechanical Car Repairs in North West London
        </h1>
        <p className={styles.subtitle}>
          Specialized in engine diagnostics, ECU repairs, and electrical systems for all vehicle makes and models. Fast, reliable service with 15+ years of experience.
        </p>

        <div className={`${styles.ctaContainer} ${isMobile ? styles.mobileCta : ''}`}>
          <button
            className={styles.primaryButton}
            onClick={() => setBookingModalVisible(true)}
          >
            Book a Service
          </button>

         <Link href="tel:+442012345678" className={styles.secondaryButton}>
            Call Now
          </Link>

          <Link
            href="https://wa.me/442012345678"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <MessageCircle size={20} color="#FFFFFF" />
            <span className={styles.whatsappButtonText}>WhatsApp</span>
          </Link>

        </div>
      </div>

      <BookingModal 
        visible={bookingModalVisible} 
        onClose={() => setBookingModalVisible(false)} 
      />
    </section>
  );
}
