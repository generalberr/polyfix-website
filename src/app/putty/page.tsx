'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

const sizes = [
  { kg: '1', desc: 'Perfect for small repairs and touch-ups.', badge: 'Includes Hardener' },
  { kg: '2', desc: "The professional's choice. Full panel repair with material to spare.", badge: 'Best Seller' },
  { kg: '3', desc: 'For busy workshops and heavy-use environments.', badge: 'Includes Hardener' },
  { kg: '4', desc: 'Maximum coverage. Ideal for large-scale operations.', badge: 'Best Value' },
]

const features = [
  { icon: '⚡', title: 'Extreme Adhesion', desc: 'Bonds powerfully to steel with no primer required for standard applications. Once it sets, it stays.' },
  { icon: '🎯', title: 'Easy Application', desc: 'Smooth, spreadable consistency that goes on clean. High coverage ratio means each kilogram goes further.' },
  { icon: '✦', title: 'Perfect Sanding', desc: 'Sands cleanly without clogging the paper. Delivers a flawless surface ready for primer and topcoat.' },
  { icon: '◎', title: 'Neutral Base', desc: 'No pigmentation means zero bleed-through. Accepts any topcoat color with perfect results every time.' },
  { icon: '🔥', title: 'Oven Compatible', desc: 'Can be used inside or outside the oven — giving you full flexibility in professional bodyshop environments.' },
  { icon: '🛡️', title: 'Lead & Asbestos Free', desc: 'Fully compliant and safe for professional use. Lead and asbestos exempt for your peace of mind.' },
  { icon: '⏱', title: 'Fast & Controlled Cure', desc: 'Hardening speed is controlled by the amount of hardener used — giving you the working time you need.' },
  { icon: '🏭', title: 'Made in Saudi Arabia', desc: 'Manufactured in our facility in Riyadh, KSA. Formulated specifically for the climate and demands of the region.' },
]

const specs = [
  ['Product Type', 'Polyester Putty for Steel'],
  ['Base', 'Polyester Resin'],
  ['Hardener', 'MEKP (included in every tin)'],
  ['Substrate', 'Steel / Metal surfaces'],
  ['Color', 'Neutral / Unpigmented'],
  ['Finish', 'Sandable / Paintable'],
  ['Sizes Available', '1 kg / 2 kg / 3 kg / 4 kg'],
  ['Oven Use', 'Inside & outside the oven'],
  ['Lead & Asbestos', 'Exempt'],
  ['Origin', 'Kingdom of Saudi Arabia'],
  ['Shelf Life', '12 months (sealed, cool & dry)'],
  ['Working Temp', '+5°C to +35°C'],
]

const steps = [
  { num: '01', title: 'Prepare the Surface', desc: 'Sand the repair area down to bare metal using 80-grit sandpaper. Remove all rust, grease, oil, and contaminants. Wipe clean with a dry cloth.' },
  { num: '02', title: 'Mix with Hardener', desc: 'Add a small dose of the included MEKP hardener to the desired quantity of putty. Mix thoroughly until the color is completely uniform. More hardener = faster cure.' },
  { num: '03', title: 'Apply the Putty', desc: 'Spread the mixed putty onto the clean, dry surface using a flexible applicator. Work quickly and build up layers as needed for deeper repairs.' },
  { num: '04', title: 'Sand & Finish', desc: 'Once cured, sand smooth starting with 80-grit, then 180, then 320. The neutral base is fully ready for primer and any topcoat color.' },
]

const industries = [
  'Auto Bodyshops', 'Construction', 'Metal Fabrication',
  'Heavy Vehicles & Fleets', 'Marine', 'Industrial MRO',
  'Furniture Manufacturing', 'Agricultural Equipment',
]

export default function PuttyPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    country: '', size: '', quantity: '', message: ''
  })
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  function handleSubmit() {
    const required = ['name', 'email', 'phone', 'size', 'quantity']
    const newErrors: Record<string, boolean> = {}
    required.forEach(k => { if (!form[k as keyof typeof form].trim()) newErrors[k] = true })
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) setSubmitted(true)
  }

  function reset() {
    setSubmitted(false)
    setForm({ name: '', company: '', email: '', phone: '', country: '', size: '', quantity: '', message: '' })
    setErrors({})
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.heroTag}>02 — Product</div>
            <h1>Polyester Putty<br /><span>for Steel.</span></h1>
            <p>The professional-grade metal putty trusted by bodyshops, fabricators, and builders across the Middle East. Engineered in Saudi Arabia. Built to outperform.</p>
            <div className={styles.heroCtas}>
              <a href="#quote" className={styles.btnPrimary}>Request a Wholesale Quote</a>
              <a href="#specs" className={styles.btnOutline}>View Specs</a>
            </div>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>Made in KSA</span>
              <span className={styles.badge}>Lead & Asbestos Free</span>
              <span className={styles.badge}>Oven Compatible</span>
            </div>
          </div>
        </div>
      </section>

      {/* SIZES */}
      <section className={styles.sizesSection}>
        <div className={styles.sectionTag}>Available Sizes</div>
        <h2>Choose your format.</h2>
        <p className={styles.sectionSub}>Every tin includes the MEKP hardener. Wholesale pricing available — contact us for volume rates.</p>
        <div className={styles.sizesGrid}>
          {sizes.map(s => (
            <div key={s.kg} className={styles.sizeCard}>
              <div className={styles.sizeKg}>{s.kg}</div>
              <div className={styles.sizeUnit}>Kilogram</div>
              <div className={styles.sizeDesc}>{s.desc}</div>
              <div className={styles.sizeBadge}>{s.badge}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionTag}>Why PolyFix</div>
        <h2>The formula that outperforms.</h2>
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

      {/* SPECS */}
      <section className={styles.specsSection} id="specs">
        <div className={styles.sectionTag}>Technical Data</div>
        <h2>Full Specification Sheet.</h2>
        <div className={styles.specsLayout}>
          <div className={styles.specsTable}>
            {specs.map(([k, v]) => (
              <div key={k} className={styles.specRow}>
                <div className={styles.specKey}>{k}</div>
                <div className={styles.specVal}>{v}</div>
              </div>
            ))}
          </div>
          <div className={styles.specsRight}>
            <div className={styles.sectionTag} style={{ marginBottom: '24px' }}>Mixing Ratios by Temperature</div>
            {[
              { temp: 'Cold', range: 'Below 15°C', ratio: '3–4%', note: 'Increase hardener to compensate for slower cure in cold weather.' },
              { temp: 'Standard', range: '15°C – 25°C', ratio: '2–3%', note: 'Optimal working time of 4–6 minutes. Best for most applications.' },
              { temp: 'Hot', range: 'Above 25°C', ratio: '1.5–2%', note: 'Reduce hardener to extend working time in high temperatures.' },
            ].map(m => (
              <div key={m.temp} className={styles.mixCard}>
                <div className={styles.mixLeft}>
                  <div className={styles.mixTemp}>{m.temp}</div>
                  <div className={styles.mixRange}>{m.range}</div>
                </div>
                <div className={styles.mixRight}>
                  <div className={styles.mixRatio}>{m.ratio}</div>
                  <div className={styles.mixLabel}>hardener by weight</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className={styles.stepsSection}>
        <div className={styles.sectionTag}>How to Apply</div>
        <h2>Step-by-step guide.</h2>
        <div className={styles.stepsGrid}>
          {steps.map(s => (
            <div key={s.num} className={styles.stepCard}>
              <div className={styles.stepNum}>{s.num}</div>
              <div className={styles.stepTitle}>{s.title}</div>
              <div className={styles.stepDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className={styles.industriesSection}>
        <div className={styles.sectionTag}>Who Uses PolyFix</div>
        <h2>Industries we serve.</h2>
        <div className={styles.industriesList}>
          {industries.map(i => (
            <div key={i} className={styles.industryTag}>{i}</div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialsSection}>
        <div className={styles.sectionTag}>What Professionals Say</div>
        <h2>Trusted by experts.</h2>
        <div className={styles.testGrid}>
          {[
            { quote: 'We switched to PolyFix across all our bays. The adhesion is in a different league — and it sands out beautifully every time.', name: 'Khalid R.', role: 'Owner, Premium Auto Bodyshop' },
            { quote: 'On construction sites you need a product that works first time. PolyFix has never let us down — excellent coverage and reliable cure.', name: 'Yusuf M.', role: 'Site Manager, Steel Structures Ltd.' },
            { quote: 'As a fabricator, surface finish is everything. PolyFix gives us the neutral base we need — no colour bleed, no surprises under paint.', name: 'Amira S.', role: 'Head Fabricator, MetalWorks Pro' },
          ].map(t => (
            <div key={t.name} className={styles.testCard}>
              <div className={styles.testQuote}>&ldquo;</div>
              <p className={styles.testText}>{t.quote}</p>
              <div className={styles.testName}>{t.name}</div>
              <div className={styles.testRole}>{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE FORM */}
      <section className={styles.quoteSection} id="quote">
        <div className={styles.quoteInner}>
          <div className={styles.quoteLeft}>
            <div className={styles.sectionTagLight}>Wholesale Enquiry</div>
            <h2>Request a<br />quote.</h2>
            <p>Select your preferred size and quantity and we'll get back to you with wholesale pricing within 24 hours.</p>
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
                    <label className={styles.label}>Preferred Size *</label>
                    <select className={`${styles.input} ${errors.size ? styles.inputError : ''}`} value={form.size} onChange={e => setForm({ ...form, size: e.target.value })}>
                      <option value="">Select size</option>
                      <option>1 kg</option>
                      <option>2 kg</option>
                      <option>3 kg</option>
                      <option>4 kg</option>
                      <option>Mixed sizes</option>
                    </select>
                  </div>
                  <div className={`${styles.formGroup} ${styles.full}`}>
                    <label className={styles.label}>Quantity Required *</label>
                    <select className={`${styles.input} ${errors.quantity ? styles.inputError : ''}`} value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })}>
                      <option value="">Select quantity</option>
                      <option>Under 50 kg/month</option>
                      <option>50–200 kg/month</option>
                      <option>200–500 kg/month</option>
                      <option>500 kg – 1 ton/month</option>
                      <option>Over 1 ton/month</option>
                    </select>
                  </div>
                  <div className={`${styles.formGroup} ${styles.full}`}>
                    <label className={styles.label}>Additional Notes</label>
                    <textarea className={`${styles.input} ${styles.textarea}`} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Any specific requirements, delivery location, or questions..." />
                  </div>
                </div>
                <button onClick={handleSubmit} className={styles.submit}>Request Quote →</button>
                <p className={styles.formNote}>We respond within 24 hours on business days.</p>
              </>
            ) : (
              <div className={styles.success}>
                <div className={styles.successIcon}>✅</div>
                <h3>Quote Request Sent!</h3>
                <p>Thank you! We'll review your request and get back to you within 24 hours with wholesale pricing.</p>
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
