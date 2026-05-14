'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

const sealantTypes = [
  {
    name: 'RTV Silicone Sealant',
    icon: '🔴',
    desc: 'Room Temperature Vulcanizing silicone — flexible, heat-resistant, and waterproof. The most versatile gasket sealant for automotive and industrial use.',
    uses: ['Engine covers & sumps', 'Exhaust manifolds', 'Cooling systems', 'General sealing'],
  },
  {
    name: 'Anaerobic Gasket Maker',
    icon: '⚙️',
    desc: 'Cures in the absence of air between close-fitting metal surfaces. Creates a rigid, chemical-resistant seal ideal for machined flanges.',
    uses: ['Metal-to-metal flanges', 'Gearboxes', 'Pump housings', 'Industrial machinery'],
  },
  {
    name: 'Form-in-Place Gasket',
    icon: '🛠️',
    desc: 'Applied directly to mating surfaces to form a precision gasket on the spot. Eliminates the need for pre-cut gaskets in production environments.',
    uses: ['Mass production lines', 'Engine assemblies', 'Transmission cases', 'OEM applications'],
  },
  {
    name: 'Thread Sealant',
    icon: '🔩',
    desc: 'Seals and locks threaded pipe connections against leakage of liquids and gases. Fast cure, pressure-resistant, and easy to disassemble.',
    uses: ['Pipe fittings', 'Hydraulic systems', 'Plumbing connections', 'Gas lines'],
  },
]

const industries = [
  { icon: '🚗', title: 'Automotive', desc: 'Engine rebuilds, gearbox sealing, exhaust systems, and full workshop use.' },
  { icon: '🏭', title: 'Industrial Machinery', desc: 'Pumps, compressors, hydraulic systems, and heavy equipment maintenance.' },
  { icon: '🔧', title: 'Workshops & Garages', desc: 'Everyday gasket replacement and sealing for professional mechanics.' },
  { icon: '🏗️', title: 'Construction', desc: 'Pipe connections, structural joints, and waterproofing applications.' },
  { icon: '🚛', title: 'Heavy Vehicles & Fleet', desc: 'Trucks, buses, agricultural equipment, and commercial vehicle maintenance.' },
  { icon: '🏠', title: 'Plumbing & HVAC', desc: 'Thread sealing, pipe joints, and HVAC system connections.' },
]

const features = [
  { icon: '🌡️', title: 'High Temperature Resistance', desc: 'Our sealants are formulated to withstand extreme heat — ideal for engines, exhaust systems, and industrial equipment.' },
  { icon: '💧', title: 'Fully Waterproof', desc: 'Creates a permanent, leak-proof seal against water, oil, coolant, and most chemicals.' },
  { icon: '⚡', title: 'Fast Cure', desc: 'Quick surface cure allows fast reassembly. Full cure achieved within 24 hours under normal conditions.' },
  { icon: '🛡️', title: 'Vibration Resistant', desc: 'Flexible formulations absorb vibration and movement — the seal stays intact even under heavy mechanical stress.' },
  { icon: '🧰', title: 'Easy Application', desc: 'Tube format for clean, precise application. No mixing required — apply directly from the tube.' },
  { icon: '✅', title: 'PolyFix Quality', desc: 'Manufactured under the same strict quality standards as our flagship putty. Tested and trusted by professionals.' },
]

export default function GasketPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    country: '', sealantType: '', quantity: '', application: '', message: ''
  })
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  function handleSubmit() {
    const required = ['name', 'email', 'phone', 'sealantType']
    const newErrors: Record<string, boolean> = {}
    required.forEach(k => { if (!form[k as keyof typeof form].trim()) newErrors[k] = true })
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) setSubmitted(true)
  }

  function reset() {
    setSubmitted(false)
    setForm({ name: '', company: '', email: '', phone: '', country: '', sealantType: '', quantity: '', application: '', message: '' })
    setErrors({})
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroTag}>04 — Product</div>
        <h1 className={styles.heroH1}>Gasket<br /><span>Sealant.</span></h1>
        <p className={styles.heroSub}>
          Four professional-grade sealant types. One trusted brand. From automotive engines to industrial machinery — PolyFix gasket sealants are built to hold.
        </p>
        <div className={styles.heroCtas}>
          <a href="#quote" className={styles.btnPrimary}>Request a Quote</a>
          <a href="#types" className={styles.btnOutline}>View Sealant Types</a>
        </div>
      </section>

      {/* SEALANT TYPES */}
      <section className={styles.typesSection} id="types">
        <div className={styles.sectionTag}>What We Supply</div>
        <h2>Four sealant types.<br />Every application covered.</h2>
        <div className={styles.typesGrid}>
          {sealantTypes.map(r => (
            <div key={r.name} className={styles.typeCard}>
              <div className={styles.typeIcon}>{r.icon}</div>
              <div className={styles.typeName}>{r.name}</div>
              <div className={styles.typeDesc}>{r.desc}</div>
              <div className={styles.typeUses}>
                {r.uses.map(u => (
                  <div key={u} className={styles.typeUse}>
                    <span className={styles.typeUseDot} />
                    {u}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionTag}>Why PolyFix Sealant</div>
        <h2>Built to hold. Built to last.</h2>
        <div className={styles.featGrid}>
          {features.map(f => (
            <div key={f.title} className={styles.featCard}>
              <div className={styles.featIcon}>{f.icon}</div>
              <div className={styles.featTitle}>{f.title}</div>
              <div className={styles.featDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FORMAT */}
      <section className={styles.formatSection}>
        <div className={styles.sectionTag}>Supply Format</div>
        <h2>Available in tubes.</h2>
        <p className={styles.sectionSub}>PolyFix gasket sealants are supplied in professional-grade tubes — clean, precise, and ready to use straight from the packaging. Available for both retail and wholesale orders.</p>
        <div className={styles.formatGrid}>
          <div className={styles.formatCard}>
            <div className={styles.formatIcon}>🧴</div>
            <div className={styles.formatTitle}>Retail Tubes</div>
            <div className={styles.formatDesc}>Individual tubes for workshops, mechanics, and retail customers. Perfect for everyday use and single-job applications.</div>
          </div>
          <div className={styles.formatCard}>
            <div className={styles.formatIcon}>📦</div>
            <div className={styles.formatTitle}>Wholesale Cartons</div>
            <div className={styles.formatDesc}>Bulk carton orders for distributors, workshops with high volume, and retail stores. Contact us for wholesale pricing.</div>
          </div>
          <div className={styles.formatCard}>
            <div className={styles.formatIcon}>🏭</div>
            <div className={styles.formatTitle}>Factory Supply</div>
            <div className={styles.formatDesc}>Large-scale supply for production lines and industrial maintenance operations. Custom packaging and labeling available.</div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className={styles.industriesSection}>
        <div className={styles.sectionTag}>Who We Supply</div>
        <h2>Industries we serve.</h2>
        <div className={styles.industriesGrid}>
          {industries.map(i => (
            <div key={i.title} className={styles.industryCard}>
              <div className={styles.industryIcon}>{i.icon}</div>
              <div className={styles.industryTitle}>{i.title}</div>
              <div className={styles.industryDesc}>{i.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY POLYFIX */}
      <section className={styles.whySection}>
        <div className={styles.sectionTag}>Why PolyFix</div>
        <h2>Your trusted sealant supplier.</h2>
        <div className={styles.whyGrid}>
          {[
            { num: '01', title: 'Our Own Brand', desc: 'PolyFix gasket sealants are our own manufactured product — same quality standards as our world-class putty.' },
            { num: '02', title: 'Wholesale & Retail', desc: 'Whether you need a single tube or a full pallet — we supply at every scale with competitive pricing.' },
            { num: '03', title: 'All Types Available', desc: 'RTV silicone, anaerobic, form-in-place, and thread sealant — everything from one trusted supplier.' },
            { num: '04', title: 'Regional Stock', desc: 'Available from our facilities in Saudi Arabia and Lebanon. Fast delivery across the GCC and Middle East.' },
          ].map(w => (
            <div key={w.num} className={styles.whyItem}>
              <div className={styles.whyNum}>{w.num}</div>
              <div>
                <div className={styles.whyTitle}>{w.title}</div>
                <div className={styles.whyDesc}>{w.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE FORM */}
      <section className={styles.quoteSection} id="quote">
        <div className={styles.quoteInner}>
          <div className={styles.quoteLeft}>
            <div className={styles.sectionTagLight}>Get a Quote</div>
            <h2>Tell us what<br />you need.</h2>
            <p>Select your sealant type and quantity. We'll get back to you within 24 hours with pricing and availability.</p>
            <div className={styles.quoteContact}>
              <div className={styles.quoteContactItem}>
                <span className={styles.quoteContactLabel}>WhatsApp</span>
                <a href="https://wa.me/966534944752" target="_blank" rel="noopener noreferrer">+966 53 494 4752</a>
              </div>
              <div className={styles.quoteContactItem}>
                <span className={styles.quoteContactLabel}>Email</span>
                <a href="mailto:Info@polyfixglobal.com">Info@polyfixglobal.com</a>
              </div>
            </div>
          </div>

          <div className={styles.quoteForm}>
            {!submitted ? (
              <>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Full Name *</label>
                    <input className={`${styles.input} ${errors.name ? styles.inputError : ''}`} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Company / Workshop</label>
                    <input className={styles.input} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company name" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Email *</label>
                    <input type="email" className={`${styles.input} ${errors.email ? styles.inputError : ''}`} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Phone / WhatsApp *</label>
                    <input type="tel" className={`${styles.input} ${errors.phone ? styles.inputError : ''}`} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+966 5X XXX XXXX" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Country</label>
                    <select className={styles.input} value={form.country} onChange={e => setForm({ ...form, country: e.target.value })}>
                      <option value="">Select country</option>
                      {['Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Lebanon', 'Jordan', 'Egypt', 'Other'].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Sealant Type *</label>
                    <select className={`${styles.input} ${errors.sealantType ? styles.inputError : ''}`} value={form.sealantType} onChange={e => setForm({ ...form, sealantType: e.target.value })}>
                      <option value="">Select sealant type</option>
                      <option>RTV Silicone Sealant</option>
                      <option>Anaerobic Gasket Maker</option>
                      <option>Form-in-Place Gasket</option>
                      <option>Thread Sealant</option>
                      <option>Multiple Types</option>
                      <option>Not Sure — Need Advice</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Order Type</label>
                    <select className={styles.input} value={form.application} onChange={e => setForm({ ...form, application: e.target.value })}>
                      <option value="">Select order type</option>
                      <option>Retail — Single tubes</option>
                      <option>Wholesale — Carton quantities</option>
                      <option>Factory / Industrial supply</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Estimated Quantity</label>
                    <select className={styles.input} value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })}>
                      <option value="">Select quantity</option>
                      <option>1–10 tubes</option>
                      <option>10–50 tubes</option>
                      <option>50–200 tubes</option>
                      <option>200–500 tubes</option>
                      <option>500+ tubes</option>
                    </select>
                  </div>
                  <div className={`${styles.formGroup} ${styles.full}`}>
                    <label className={styles.label}>Application / Additional Notes</label>
                    <textarea className={`${styles.input} ${styles.textarea}`} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us what you're sealing — engine type, machinery, plumbing, etc. This helps us recommend the right sealant for your application..." />
                  </div>
                </div>
                <button onClick={handleSubmit} className={styles.submit}>Request Quote →</button>
                <p className={styles.formNote}>We respond within 24 hours on business days.</p>
              </>
            ) : (
              <div className={styles.success}>
                <div className={styles.successIcon}>✅</div>
                <h3>Quote Request Sent!</h3>
                <p>Thank you! We'll get back to you within 24 hours with pricing and availability.</p>
                <button onClick={reset} className={styles.resetBtn}>Submit Another Request →</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
