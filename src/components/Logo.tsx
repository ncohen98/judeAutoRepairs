"use client";

import { useEffect, useState } from 'react';
import { Settings, Wrench } from 'lucide-react';
import styles from './Logo.module.css';
import Colors from '@/constants/colors';

type LogoSize = 'small' | 'normal' | 'large';

interface LogoProps {
  size?: LogoSize;
}

export default function Logo({ size = 'normal' }: LogoProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (size === 'small') setScale(0.8);
    else if (size === 'large') setScale(1.2);
    else setScale(1);
  }, [size]);

  return (
    <div className={styles.logoContainer} style={{ transform: `scale(${scale})` }}>
      {/* Gear icon */}
      <div className={styles.gearContainer}>
        <Settings size={28} color="#0A1A2F" />
      </div>

      {/* Main text and wrench */}
      <div className={styles.mainContent}>
        <h1 className={styles.judeText}>JUDE</h1>

        <div className={styles.wrenchContainer}>
          <div className={styles.wrenchBackground}>
            <Wrench size={16} color="#FFFFFF" />
            <span className={styles.autoRepairText}>AUTO REPAIR</span>
          </div>
        </div>

        <span className={styles.specialistsText}>
          ELECTRICAL & MECHANICAL SPECIALISTS
        </span>
      </div>
    </div>
  );
}
