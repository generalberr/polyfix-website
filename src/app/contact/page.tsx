'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

const tabs = ['Wholesale', 'Technical', 'Machinery', 'General']
const placeholders: Record<string, string> = {
  Wholesale: 'Tell us what you need — quantities, sizes, pricing, or distribution inquiries...',
  Technical: 'Describe your surface type, environment, and any technical questions about PolyFix...',
  Machinery: "Describe the machinery or production line you're interested in...",
  General: 'How can we help you?',
}

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('Wholesale')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', country: '', quantity: '', message: '' })
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  function handleSubmit() {
    const required = ['firstName', 'lastName', 'email', 'message']
    const newErrors: Record<string, boolean> = {}
    required.forEach(k => { if (!form[k as keyof typeof form].trim()) newErrors[k] = true })
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) setSubmitted(true)
  }

  function reset() {
    setSubmitted(false)
    setForm({ firstName: '', lastName: '', email: '', phone: '', company: '', country: '', quantity: '', message: '' })
    setErrors({})
  }

  return (
    <>
      <Navbar />

      <div className={styles.pageHero}>
        <div className={styles.sectionTag}>Get In Touch</div>
        <h1>Let&apos;s talk<br /><span>business.</span></h1>
        <p>Wholesale inquiries, technical questions, or machinery specs — our team responds within 24 hours.</p>
      </div>

      <div className={styles.layout}>
        {/* INFO PANEL */}
        <div className={styles.infoPanel}>
          <div>
            <div className={styles.sectionTagLight}>Contact Info</div>
            <h2>We&apos;re based<br />in Riyadh.</h2>
            <p>Reach us directly or fill out the form and we&apos;ll get back to you promptly with pricing, technical data, or anything else you need.</p>
            <div className={styles.details}>
              {[
                { label: 'Email', value: 'Info@polyfixglobal.com', href: 'mailto:Info@polyfixglobal.com' },
                { label: 'Phone', value: '+966 53 494 4752', href: 'tel:+966534944752' },
                { label: 'Address', value: 'Building 4559, Al Rafiah St.\nAl Misfat District\nRiyadh 14528, KSA', href: undefined },
              ].map(d => (
                <div key={d.label} className={styles.detail}>
                  <span className={styles.detailLabel}>{d.label}</span>
                  {d.href
                    ? <a href={d.href} className={styles.detailValue}>{d.value}</a>
                    : <span className={styles.detailValue} style={{ whiteSpace: 'pre-line' }}>{d.value}</span>
                  }
                </div>
              ))}
            </div>
          </div>
          <div className={styles.hours}>
            <div className={styles.hoursTitle}>Working Hours</div>
            <div className={styles.hoursRow}><span>Sunday – Thursday</span><span>8:00 AM – 5:00 PM</span></div>
            <div className={styles.hoursRow}><span>Friday</span><span>Closed</span></div>
            <div className={styles.hoursRow}><span>Saturday</span><span>9:00 AM – 1:00 PM</span></div>
          </div>
        </div>

        {/* FORM PANEL */}
        <div className={styles.formPanel}>
          {!submitted ? (
            <>
              <h2>Send a message.</h2>
              <p>Tell us what you need and we&apos;ll get back to you within 24 hours.</p>

              <div className={styles.tabs}>
                {tabs.map(t => (
                  <button key={t} onClick={() => setActiveTab(t)} className={`${styles.tab} ${activeTab === t ? styles.tabActive : ''}`}>{t}</button>
                ))}
              </div>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>First Name *</label>
                  <input className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`} value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} placeholder="Ahmed" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Last Name *</label>
                  <input className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`} value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} placeholder="Al-Rashid" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address *</label>
                  <input type="email" className={`${styles.input} ${errors.email ? styles.inputError : ''}`} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="ahmed@company.com" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input type="tel" className={styles.input} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+966 5X XXX XXXX" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Company / Workshop</label>
                  <input className={styles.input} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Your company name" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Country</label>
                  <select className={styles.input} value={form.country} onChange={e => setForm({ ...form, country: e.target.value })}>
                    <option value="">Select country</option>
                    {['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Lebanon', 'Jordan', 'Egypt', 'Other'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                {activeTab === 'Wholesale' && (
                  <div className={`${styles.formGroup} ${styles.full}`}>
                    <label className={styles.label}>Estimated Monthly Volume</label>
                    <select className={styles.input} value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })}>
                      <option value="">Select volume</option>
                      {['Under 50 kg/month', '50–200 kg/month', '200–500 kg/month', '500 kg–1 ton/month', 'Over 1 ton/month'].map(v => <option key={v}>{v}</option>)}
                    </select>
                  </div>
                )}
                <div className={`${styles.formGroup} ${styles.full}`}>
                  <label className={styles.label}>Message *</label>
                  <textarea className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder={placeholders[activeTab]} />
                </div>
              </div>
              <button onClick={handleSubmit} className={styles.submit}>Send Message →</button>
              <p className={styles.formNote}>We respond within 24 hours on business days.</p>
            </>
          ) : (
            <div className={styles.success}>
              <div className={styles.successIcon}>✅</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              <button onClick={reset} className={styles.resetBtn}>Send Another →</button>
            </div>
          )}
        </div>
      </div>

      {/* LOCATION */}
      <section className={styles.locationSection}>
        <div className={styles.sectionTag}>Find Us</div>
        <h2>Our Location.</h2>
        <div className={styles.locationGrid}>
          <div className={styles.mapWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.6!2d46.6800!3d24.6800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQwJzQ4LjAiTiA0NsKwNDAnNDguMCJF!5e0!3m2!1sen!2ssa!4v1620000000000!5m2!1sen!2ssa"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PolyFix Location"
            />
          </div>
          <div className={styles.locationDetails}>
            {[
              { icon: '📍', label: 'Address', value: 'Building 4559, Al Rafiah Street\nAl Misfat District\nRiyadh 14528, Saudi Arabia' },
              { icon: '📞', label: 'Phone', value: '+966 53 494 4752', href: 'tel:+966534944752' },
              { icon: '✉️', label: 'Email', value: 'Info@polyfixglobal.com', href: 'mailto:Info@polyfixglobal.com' },
              { icon: '🗺️', label: 'Directions', value: 'Open in Google Maps →', href: 'https://maps.app.goo.gl/f9gh1YD8fTQtaEFw6' },
            ].map(l => (
              <div key={l.label} className={styles.locationItem}>
                <div className={styles.locationIcon}>{l.icon}</div>
                <div>
                  <div className={styles.locationLabel}>{l.label}</div>
                  {l.href
                    ? <a href={l.href} className={styles.locationValue} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ whiteSpace: 'pre-line' }}>{l.value}</a>
                    : <div className={styles.locationValue} style={{ whiteSpace: 'pre-line' }}>{l.value}</div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
