"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Award, CheckCircle } from 'lucide-react';
import Colors from '@/constants/colors';
import styles from './Experience.module.css';

export default function Experience() {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallDevice(window.innerWidth < 380);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.container} style={{ backgroundColor: Colors.background }}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <div className={styles.headingContainer}>
            <Award
              size={isSmallDevice ? 20 : 24}
              color={Colors.secondary}
            />
            <span
              className={`${styles.overline} ${isSmallDevice ? styles.smallOverline : ''}`}
              style={{ color: Colors.secondary }}
            >
              15+ YEARS OF EXPERIENCE
            </span>
          </div>

          <h2
            className={`${styles.title} ${isSmallDevice ? styles.smallTitle : ''}`}
            style={{ color: Colors.text }}
          >
            North West London's Trusted Auto Electrical Specialists
          </h2>

          <p className={styles.description} style={{ color: Colors.lightText }}>
            At Jude Auto Repair, we've been serving the North West London community for over 15 years, 
            providing expert electrical and mechanical repairs for all vehicle makes and models.
          </p>

          <div className={styles.benefitsList}>
            {[
              'Certified technicians with specialized training in vehicle electronics',
              'Advanced diagnostic equipment for precise fault detection',
              'Honest, transparent pricing with no hidden fees',
              'Fast turnaround times to get you back on the road',
            ].map((text, idx) => (
              <div key={idx} className={styles.benefitItem}>
                <CheckCircle
                  size={isSmallDevice ? 18 : 20}
                  color={Colors.secondary}
                  style={{ flexShrink: 0 }}
                />
                <p className={styles.benefitText} style={{ color: Colors.text }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Auto repair tools"
            fill
            style={{ objectFit: 'cover', borderRadius: '12px' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
