"use client";

import { useState, useEffect } from 'react';
import styles from './BookingModal.module.css';
import { services } from '@/constants/services';

interface BookingModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function BookingModal({ visible, onClose }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [otherService, setOtherService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!visible) {
      // Reset form when modal closes
      setName('');
      setPhone('');
      setSelectedService(null);
      setOtherService('');
      setIsSubmitting(false);
    }
  }, [visible]);

  const handleSubmit = () => {
    if (!name || !phone) {
      alert('Please enter your name and phone number');
      return;
    }
    if (!selectedService && !otherService) {
      alert('Please select a service or specify your needs');
      return;
    }
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert('Booking Received! We will contact you shortly to confirm your appointment.');
      onClose();
    }, 1000);
  };

  if (!visible) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <header className={styles.header}>
          <h2>Book a Service</h2>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">&times;</button>
        </header>

        <form className={styles.form} onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Your Name *</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>Phone Number *</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className={styles.serviceSection}>
            <p className={styles.label}>Select Service *</p>
            <p className={styles.helperText}>Choose the service you need or specify your requirements</p>

            <div className={styles.serviceList}>
              {services.map(service => (
                <button
                  key={service.id}
                  type="button"
                  className={`${styles.serviceOption} ${selectedService === service.title ? styles.selectedService : ''}`}
                  onClick={() => {
                    setSelectedService(service.title);
                    setOtherService('');
                  }}
                >
                  {service.title}
                </button>
              ))}

              <button
                type="button"
                className={`${styles.serviceOption} ${selectedService === 'other' ? styles.selectedService : ''}`}
                onClick={() => setSelectedService('other')}
              >
                Other Service
              </button>
            </div>

            {selectedService === 'other' && (
              <div className={styles.otherServiceInput}>
                <label htmlFor="otherService" className={styles.label}>Please specify</label>
                <textarea
                  id="otherService"
                  value={otherService}
                  onChange={e => setOtherService(e.target.value)}
                  placeholder="Describe the service you need"
                  rows={3}
                />
              </div>
            )}
          </div>

          <div className={styles.footer}>
            <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
              {isSubmitting ? 'Submitting...' : 'Book Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
