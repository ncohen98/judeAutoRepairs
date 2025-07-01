'use client';

import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Upload,
  X,
  MessageCircle,
} from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Car issue related states
  const [isCarStarting, setIsCarStarting] = useState<boolean | null>(null);
  const [engineWontStartAfterOff, setEngineWontStartAfterOff] = useState(false);
  const [engineStoppedWhileDriving, setEngineStoppedWhileDriving] = useState(false);

  // Media upload state (File objects)
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);

  // Handle file input change
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    // Convert FileList to array and limit max 3
    const selectedFiles = Array.from(e.target.files).slice(0, 3 - mediaFiles.length);
    setMediaFiles([...mediaFiles, ...selectedFiles]);
  };

  // Remove selected media
  const removeMedia = (index: number) => {
    setMediaFiles(mediaFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!name || !email || !phone) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank You! Your message has been received. We will contact you shortly.');

      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsCarStarting(null);
      setEngineWontStartAfterOff(false);
      setEngineStoppedWhileDriving(false);
      setMediaFiles([]);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.subtitle}>
          Fill out the form below and we&apos;ll  get back to you as soon as possible.
        </p>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className={styles.input}
            />
          </div>

          {/* Car Starting Issue Section */}
          <fieldset className={styles.carIssueSection}>
            <legend className={styles.sectionLabel}>Car Starting Status</legend>

            <div className={styles.toggleGroup}>
              <label className={styles.toggleLabel}>Is your car starting?</label>
              <div className={styles.toggleOptions}>
                <button
                  type="button"
                  className={`${styles.toggleOption} ${
                    isCarStarting === false ? styles.toggleOptionSelected : ''
                  }`}
                  onClick={() => setIsCarStarting(false)}
                >
                  No
                </button>
                <button
                  type="button"
                  className={`${styles.toggleOption} ${
                    isCarStarting === true ? styles.toggleOptionSelected : ''
                  }`}
                  onClick={() => setIsCarStarting(true)}
                >
                  Yes
                </button>
              </div>
            </div>

            {isCarStarting === false && (
              <div className={styles.checkboxGroup}>
                <p className={styles.checkboxGroupLabel}>Please select what applies:</p>

                <label className={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={engineWontStartAfterOff}
                    onChange={() => setEngineWontStartAfterOff(!engineWontStartAfterOff)}
                  />
                  Engine won&apos;t start after being turned off
                </label>

                <label className={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={engineStoppedWhileDriving}
                    onChange={() => setEngineStoppedWhileDriving(!engineStoppedWhileDriving)}
                  />
                  Engine stopped while driving
                </label>
              </div>
            )}
          </fieldset>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>
              Additional Details
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Please provide any additional details about your vehicle issue"
              className={`${styles.input} ${styles.textArea}`}
              rows={4}
            />
          </div>

          {/* Media Upload Section */}
          <div className={styles.mediaSection}>
            <label className={styles.label}>Upload Images/Videos (Optional)</label>
            <p className={styles.mediaHelp}>
              Upload images or videos of your vehicle issue to help us better understand the problem
            </p>

            <div className={styles.mediaPreviewContainer}>
              {mediaFiles.map((file, index) => {
                const url = URL.createObjectURL(file);
                return (
                  <div key={index} className={styles.mediaPreview}>
                    <Image
                      src={url}
                      alt={`upload-preview-${index}`}
                      className={styles.mediaPreviewImage}
                      width={100}        // <-- set appropriate width
                      height={100}       // <-- set appropriate height
                      objectFit="cover"  // optional, for cropping/fitting
                    />
                    <button
                      type="button"
                      className={styles.removeMediaButton}
                      onClick={() => removeMedia(index)}
                      aria-label="Remove media"
                    >
                      <X size={16} color="#FFFFFF" />
                    </button>
                  </div>
                );
              })}

              {mediaFiles.length < 3 && (
                <label htmlFor="media-upload" className={styles.uploadButton}>
                  <Upload size={24} color="#0D6EFD" />
                  <span className={styles.uploadButtonText}>
                    {mediaFiles.length === 0 ? 'Upload' : 'Add More'}
                  </span>
                  <input
                    type="file"
                    id="media-upload"
                    accept="image/*,video/*"
                    multiple
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                </label>
              )}
            </div>
          </div>

          <button
            type="submit"
            className={`${styles.submitButton} ${isSubmitting ? styles.submittingButton : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>

      <aside className={styles.infoSection}>
        <div className={styles.infoCard}>
          <h3 className={styles.infoTitle}>Contact Information</h3>

          <div className={styles.infoItems}>
            <div className={styles.infoItem}>
              <Phone size={20} color="#6B7280" />
              <div>
                <p className={styles.infoLabel}>Phone</p>
                <p className={styles.infoText}>+44 20 1234 5678</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <Mail size={20} color="#6B7280" />
              <div>
                <p className={styles.infoLabel}>Email</p>
                <p className={styles.infoText}>info@judeautorepairs.co.uk</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <MapPin size={20} color="#6B7280" />
              <div>
                <p className={styles.infoLabel}>Address</p>
                <p className={styles.infoText}>123 Repair Street, North West London, NW1 2AB</p>
              </div>
            </div>
          </div>

          <div className={styles.businessHours}>
            <h4 className={styles.businessHoursTitle}>Business Hours</h4>
            <div className={styles.hoursRow}>
              <span className={styles.dayText}>Monday - Friday</span>
              <span className={styles.timeText}>8:00 AM - 6:00 PM</span>
            </div>
            <div className={styles.hoursRow}>
              <span className={styles.dayText}>Saturday</span>
              <span className={styles.timeText}>9:00 AM - 4:00 PM</span>
            </div>
            <div className={styles.hoursRow}>
              <span className={styles.dayText}>Sunday</span>
              <span className={styles.timeText}>Closed</span>
            </div>
          </div>

          <Link href="https://wa.me/442012345678" passHref>
            <a className={styles.whatsappButton} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} color="#FFFFFF" />
              <span className={styles.whatsappButtonText}>Contact via WhatsApp</span>
            </a>
          </Link>
        </div>
      </aside>
    </div>
  );
}
