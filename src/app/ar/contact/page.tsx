'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

const tabs = ['جملة', 'استفسار فني', 'آلات', 'عام']

export default function ArContactPage() {
  const [activeTab, setActiveTab] = useState('جملة')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', country: '', message: '' })
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  async function handleSubmit() {
    const required = ['firstName', 'email', 'message']
    const newErrors: Record<string, boolean> = {}
    required.forEach(k => { if (!form[k as keyof typeof form].trim()) newErrors[k] = true })
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return
    setLoading(true)
    try {
      const res = await fetch('https://formspree.io/f/mojbngpd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...form, inquiryType: activeTab, _language: 'Arabic' }),
      })
      if (res.ok) setSubmitted(true)
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }

  return (
    <>
      <Navbar />
      <section className={styles.contactSection}>
        <div className={styles.contactLeft}>
          <div className={styles.sectionTagLight}>معلومات التواصل</div>
          <h2>فرعان.<br />فريق واحد.</h2>
          <p>تواصل معنا مباشرة أو املأ النموذج وسنرد عليك في أقرب وقت.</p>

          <div className={styles.branchBlock}>
            <div className={styles.branchTitle}>المملكة العربية السعودية</div>
            <div className={styles.branchItem}>مبنى 4559، شارع الرفيعة، حي المسفلة، الرياض 14528</div>
            <div className={styles.branchItem}><a href="tel:+966534944752">+966 53 494 4752</a></div>
            <div className={styles.branchItem}><a href="https://wa.me/966534944752" target="_blank" rel="noopener noreferrer">واتساب: +966 53 494 4752</a></div>
          </div>
          <div className={styles.branchBlock}>
            <div className={styles.branchTitle}>لبنان</div>
            <div className={styles.branchItem}>جبل لبنان، لبنان</div>
            <div className={styles.branchItem}><a href="tel:+96181637675">+961 81 637 675</a></div>
            <div className={styles.branchItem}><a href="https://wa.me/96181637675" target="_blank" rel="noopener noreferrer">واتساب: +961 81 637 675</a></div>
          </div>
          <div className={styles.branchBlock}>
            <div className={styles.branchTitle}>البريد الإلكتروني</div>
            <div className={styles.branchItem}><a href="mailto:Info@polyfixglobal.com">استفسارات عامة: Info@polyfixglobal.com</a></div>
            <div className={styles.branchItem}><a href="mailto:sales@polyfixglobal.com">المبيعات: sales@polyfixglobal.com</a></div>
          </div>
          <div className={styles.hours}>
            <div className={styles.hoursTitle}>ساعات العمل</div>
            <div className={styles.hoursRow}><span>الأحد – السبت</span><span>8:00 صباحاً – 6:00 مساءً</span></div>
          </div>
        </div>

        <div className={styles.contactRight}>
          {!submitted ? (
            <>
              <div className={styles.tabs}>
                {tabs.map(t => (
                  <button key={t} onClick={() => setActiveTab(t)} className={`${styles.tab} ${activeTab === t ? styles.tabActive : ''}`}>{t}</button>
                ))}
              </div>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>الاسم الأول *</label>
                  <input className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`} value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} placeholder="اسمك الأول" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>اسم العائلة</label>
                  <input className={styles.input} value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} placeholder="اسم العائلة" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>البريد الإلكتروني *</label>
                  <input type="email" className={`${styles.input} ${errors.email ? styles.inputError : ''}`} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="بريدك الإلكتروني" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>رقم الهاتف</label>
                  <input type="tel" className={styles.input} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+966 5X XXX XXXX" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>الشركة / الورشة</label>
                  <input className={styles.input} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="اسم شركتك" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>الدولة</label>
                  <select className={styles.input} value={form.country} onChange={e => setForm({ ...form, country: e.target.value })}>
                    <option value="">اختر الدولة</option>
                    {['المملكة العربية السعودية', 'الإمارات', 'الكويت', 'قطر', 'البحرين', 'عُمان', 'لبنان', 'الأردن', 'مصر', 'أخرى'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className={`${styles.formGroup} ${styles.full}`}>
                  <label className={styles.label}>رسالتك *</label>
                  <textarea className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="أخبرنا كيف يمكننا مساعدتك..." />
                </div>
              </div>
              <button onClick={handleSubmit} disabled={loading} className={styles.submit}>{loading ? 'جارٍ الإرسال...' : 'إرسال الرسالة ←'}</button>
              <p className={styles.formNote}>نرد على جميع الاستفسارات خلال 24 ساعة من أيام العمل.</p>
            </>
          ) : (
            <div className={styles.success}>
              <div className={styles.successIcon}>✅</div>
              <h3>تم إرسال رسالتك!</h3>
              <p>شكراً لتواصلك معنا. سيرد فريقنا خلال 24 ساعة.</p>
              <button onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', phone: '', company: '', country: '', message: '' }); setErrors({}) }} className={styles.resetBtn}>إرسال رسالة أخرى ←</button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}
