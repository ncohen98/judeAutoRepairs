'use client';

import { useEffect, useState } from 'react';
import styles from './Services.module.css';
import ServiceCard from './ServiceCard';
import { services } from '@/constants/services';

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);
  const [cardWidth, setCardWidth] = useState(280);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setCardWidth(width < 380 ? 260 : 280);
    }

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <p className={styles.sectionSubtitle}>
        Comprehensive electrical and mechanical repair services for all vehicle makes and models
      </p>

      {isMobile ? (
        <div className={styles.scrollContainer}>
          {services.map((service) => (
            <div key={service.id} className={styles.mobileCardContainer} style={{ width: cardWidth }}>
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.cardContainer}>
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
