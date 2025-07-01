'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import Colors from '@/constants/colors';
import Logo from './Logo';
import BookingModal from './BookingModal';
import styles from './Header.module.css';

export default function Header() {
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [bookingModalVisible, setBookingModalVisible] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallDevice(window.innerWidth < 380);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className={styles.header} style={{ backgroundColor: Colors.background, borderBottomColor: Colors.border }}>
        <div className={styles.logoContainer}>
          <Logo size={isSmallDevice ? 'small' : 'normal'} />
        </div>

        <div className={styles.contactContainer}>
          <Link
            href="https://wa.me/442012345678"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <MessageCircle size={isSmallDevice ? 16 : 18} color="#FFFFFF" />
            <span className={`${styles.whatsappButtonText} ${isSmallDevice ? styles.smallButtonText : ''}`}>
              WhatsApp
            </span>
          </Link>

          <button
            type="button"
            className={styles.bookButton}
            onClick={() => setBookingModalVisible(true)}
          >
            <span className={`${styles.bookButtonText} ${isSmallDevice ? styles.smallButtonText : ''}`}>
              Book Now
            </span>
          </button>

          <Link href="/contact" className={styles.contactButton}>
            <Phone size={isSmallDevice ? 16 : 18} color="#FFFFFF" />
            <span className={`${styles.contactButtonText} ${isSmallDevice ? styles.smallButtonText : ''}`}>
              Contact Us
            </span>
          </Link>

        </div>
      </header>

      <BookingModal
        visible={bookingModalVisible}
        onClose={() => setBookingModalVisible(false)}
      />
    </>
  );
}
