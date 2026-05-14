'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

const resinTypes = [
  {
    name: 'Polyester Resin',
    icon: '🧪',
    desc: 'The most widely used resin in industrial and construction applications. Excellent strength, fast cure, and outstanding value for high-volume use.',
    uses: ['Automotive body repair', 'Construction composites', 'Marine hulls', 'Industrial molds'],
  },
  {
    name: 'Epoxy Resin',
    icon: '⚗️',
    desc: 'Premium-grade resin with superior adhesion, chemical resistance, and mechanical strength. The go-to choice for demanding structural applications.',
    uses: ['Structural bonding', 'Floor coatings', 'Marine & aerospace', 'Electronics & tooling'],
  },
  {
    name: 'Vinyl Ester Resin',
    icon: '🔬',
    desc: 'Combines the best of polyester and epoxy — outstanding corrosion resistance and toughness for the most demanding environments.',
    uses: ['Chemical tanks', 'Pipes & vessels', 'Marine structures', 'Corrosive environments'],
  },
  {
    name: 'Gel Coat',
    icon: '✨',
    desc: 'The finishing layer that provides a smooth, high-gloss surface with UV and water resistance. Essential for marine, automotive, and decorative composites.',
    uses: ['Boat hulls & decks', 'Automotive panels', 'Swimming pools', 'Decorative surfaces'],
  },
]

const industries = [
  { icon: '🚗', title: 'Automotive', desc: 'Body repair, panel fabrication, and composite parts for production workshops and bodyshops.' },
  { icon: '🏗️', title: 'Construction', desc: 'Structural composites, flooring systems, cladding panels, and waterproofing applications.' },
  { icon: '⛵', title: 'Boat Building', desc: 'Hull layup, deck construction, and marine repair — salt-water resistant grades available.' },
  { icon: '🎨', title: 'Crafts & Design', desc: 'Art, sculpture, furniture, and decorative casting for designers and artisan workshops.' },
  { icon: '🏭', title: 'Industrial', desc: 'Mold making, tooling, tanks, pipes, and custom composite manufacturing for factories.' },
  { icon: '🔧', title: 'Workshops & Fabricators', desc: 'General-purpose fabrication, repairs, and custom composite work for professional workshops.' },
]

const formats = [
  { label: 'By Kilogram', desc: 'Small quantities for workshops, repairs, and retail customers. Minimum order applies.', icon: '⚖️' },
  { label: 'By Drum', desc: 'Standard industrial drums for regular production use. Most popular format for workshops and factories.', icon: '🛢️' },
  { label: 'By Ton', desc: 'Bulk wholesale pricing for high-volume manufacturers and distributors. Best price per kg.', icon: '🏗️' },
]

export default function ResinPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    country: '', resinType: '', format: '', quantity: '', message: ''
  })
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  function handleSubmit() {
    const required = ['name', 'email', 'phone', 'resinType']
    const newErrors: Record<string, boolean> = {}
    required.forEach(k => { if (!form[k as keyof typeof form].trim()) newErrors[k] = true })
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) setSubmitted(true)
  }

  function reset() {
    setSubmitted(false)
    setForm({ name: '', company: '', email: '', phone: '', country: '', resinType: '', format: '', quantity: '', message: '' })
    setErrors({})
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroTag}>03 — Product</div>
        <h1 className={styles.heroH1}>Industrial<br /><span>Resin.</span></h1>
        <p className={styles.heroSub}>
          Four types. Every format. Wholesale and retail. Whatever your application demands — we supply the right resin at the right volume for your operation.
        </p>
        <div className={styles.heroCtas}>
          <a href="#quote" className={styles.btnPrimary}>Request a Quote</a>
          <a href="#types" className={styles.btnOutline}>View Resin Types</a>
        </div>
      </section>

      {/* RESIN TYPES */}
      <section className={styles.typesSection} id="types">
        <div className={styles.sectionTag}>What We Supply</div>
        <h2>Four types of resin.<br />Every application covered.</h2>
        <div className={styles.typesGrid}>
          {resinTypes.map(r => (
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

      {/* FORMATS */}
      <section className={styles.formatsSection}>
        <div className={styles.sectionTag}>Supply Formats</div>
        <h2>Any volume. Any format.</h2>
        <p className={styles.sectionSub}>From a single kilogram to full-ton bulk orders — we supply at every scale for both retail and wholesale customers.</p>
        <div className={styles.formatsGrid}>
          {formats.map(f => (
            <div key={f.label} className={styles.formatCard}>
              <div className={styles.formatIcon}>{f.icon}</div>
              <div className={styles.formatLabel}>{f.label}</div>
              <div className={styles.formatDesc}>{f.desc}</div>
            </div>
          ))}
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
        <h2>Your trusted resin supplier.</h2>
        <div className={styles.whyGrid}>
          {[
            { num: '01', title: 'All Types in One Place', desc: 'Polyester, epoxy, vinyl ester, and gel coat — all available from one supplier. Simplify your procurement.' },
            { num: '02', title: 'Wholesale & Retail', desc: 'Whether you need 1kg or 10 tons, we have the right format and the right price for your volume.' },
            { num: '03', title: 'Fast Availability', desc: 'Stock held locally in Saudi Arabia and Lebanon. Quick turnaround for regional orders across the GCC.' },
            { num: '04', title: 'Expert Advice', desc: 'Not sure which resin is right for your application? Our team will guide you to the correct grade and formulation.' },
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
            <p>Select your resin type, format, and quantity. We'll get back to you within 24 hours with pricing and availability.</p>
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
                    <label className={styles.label}>Resin Type *</label>
                    <select className={`${styles.input} ${errors.resinType ? styles.inputError : ''}`} value={form.resinType} onChange={e => setForm({ ...form, resinType: e.target.value })}>
                      <option value="">Select resin type</option>
                      <option>Polyester Resin</option>
                      <option>Epoxy Resin</option>
                      <option>Vinyl Ester Resin</option>
                      <option>Gel Coat</option>
                      <option>Multiple Types</option>
                      <option>Not Sure — Need Advice</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Supply Format</label>
                    <select className={styles.input} value={form.format} onChange={e => setForm({ ...form, format: e.target.value })}>
                      <option value="">Select format</option>
                      <option>By Kilogram</option>
                      <option>By Drum</option>
                      <option>By Ton</option>
                      <option>Mixed / Flexible</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Estimated Quantity</label>
                    <select className={styles.input} value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })}>
                      <option value="">Select quantity</option>
                      <option>Under 50 kg</option>
                      <option>50–200 kg</option>
                      <option>200–500 kg</option>
                      <option>500 kg – 1 ton</option>
                      <option>1–5 tons</option>
                      <option>Over 5 tons</option>
                    </select>
                  </div>
                  <div className={`${styles.formGroup} ${styles.full}`}>
                    <label className={styles.label}>Application / Additional Notes</label>
                    <textarea className={`${styles.input} ${styles.textarea}`} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us what you're using the resin for — this helps us recommend the right grade and formulation for your needs..." />
                  </div>
                </div>
                <button onClick={handleSubmit} className={styles.submit}>Request Quote →</button>
                <p className={styles.formNote}>We respond within 24 hours on business days.</p>
              </>
            ) : (
              <div className={styles.success}>
                <div className={styles.successIcon}>✅</div>
                <h3>Quote Request Sent!</h3>
                <p>Thank you! We'll review your request and get back to you within 24 hours with pricing and availability.</p>
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
