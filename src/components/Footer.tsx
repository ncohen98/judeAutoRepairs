"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import styles from './Footer.module.css';
import Colors from '@/constants/colors';

export default function Footer() {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallDevice(window.innerWidth < 380);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} style={{ backgroundColor: Colors.primary }}>
      <div className={styles.content}>
        <div className={styles.topSection}>
          <div className={styles.companyInfo}>
            <Logo size={isSmallDevice ? 'normal' : 'large'} />
            <p className={styles.tagline}>
              North West London&apos;s trusted auto electrical specialists
            </p>
          </div>

          <div className={styles.linksContainer}>
            <div className={styles.linkColumn}>
              <h3 className={styles.linkHeader}>Services</h3>
              <Link href="/#services" className={styles.link}>
                Engine Diagnostics
              </Link>
              <Link href="/#services" className={styles.link}>
                ECU Faults
              </Link>
              <Link href="/#services" className={styles.link}>
                Battery Replacements
              </Link>
              <Link href="/#services" className={styles.link}>
                Starter Motor Repairs
              </Link>

            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.linkHeader}>Company</h3>
              <Link href="/#about" className={styles.link}>
              About Us
            </Link>
            <Link href="/#contact" className={styles.link}>
              Contact
            </Link>
            <Link href="/privacy" className={styles.link}>
              Privacy Policy
            </Link>

            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>© {currentYear} Jude Auto Repair. All rights reserved.</p>
          <p className={styles.website}>www.judeautorepair.co.uk</p>
        </div>
      </div>
    </footer>
  );
}
