"use client";

import { Cpu, CircuitBoard, BatteryCharging, Power, RefreshCw, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './ServiceCard.module.css';
import Colors from '@/constants/colors';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallDevice(window.innerWidth < 380);
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const iconSize = isSmallDevice ? 28 : 32;

  const getIcon = () => {
    switch (icon) {
      case 'cpu':
        return <Cpu size={iconSize} color={Colors.secondary} />;
      case 'chip':
        return <CircuitBoard size={iconSize} color={Colors.secondary} />;
      case 'battery-charging':
        return <BatteryCharging size={iconSize} color={Colors.secondary} />;
      case 'power':
        return <Power size={iconSize} color={Colors.secondary} />;
      case 'refresh-cw':
        return <RefreshCw size={iconSize} color={Colors.secondary} />;
      case 'zap':
        return <Zap size={iconSize} color={Colors.secondary} />;
      default:
        return <Cpu size={iconSize} color={Colors.secondary} />;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        {getIcon()}
      </div>
      <h3 className={`${styles.title} ${isSmallDevice ? styles.smallTitle : ''}`}>
        {title}
      </h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
