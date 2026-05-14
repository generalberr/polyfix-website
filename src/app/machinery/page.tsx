'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function MachineryPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', country: '',
    machineType: '', quantity: '', timeline: '', budget: '', description: ''
  })
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  function handleSubmit() {
    const required = ['name', 'email', 'phone', 'description']
    const newErrors: Record<string, boolean> = {}
    required.forEach(k => { if (!form[k as keyof typeof form].trim()) newErrors[k] = true })
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) setSubmitted(true)
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroTag}>01 — Capability</div>
        <h1 className={styles.heroH1}>
          Industrial<br /><span>Machinery.</span>
        </h1>
        <p className={styles.heroSub}>
          We don't sell off-the-shelf. Every machine we build is engineered from scratch — designed around your exact process, your space, and your output targets.
        </p>
        <a href="#quote" className={styles.btnPrimary}>Request a Custom Quote</a>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.introText}>
          <div className={styles.sectionTag}>What We Do</div>
          <h2>Built to your exact specification.</h2>
          <p>At PolyFix, we have a team of expert engineers and skilled technicians who design, fabricate, and commission industrial machines from the ground up. Whether you need a single custom unit or a full production line, we deliver equipment that's built to last and optimized for your operation.</p>
          <p>Every machine goes through rigorous testing before it leaves our facility. We don't hand over a machine until we're confident it performs exactly as specified.</p>
        </div>
        <div className={styles.introStats}>
          <div className={styles.introStat}>
            <div className={styles.introStatNum}>100%</div>
            <div className={styles.introStatLabel}>Custom Built</div>
          </div>
          <div className={styles.introStat}>
            <div className={styles.introStatNum}>15+</div>
            <div className={styles.introStatLabel}>Years Experience</div>
          </div>
          <div className={styles.introStat}>
            <div className={styles.introStatNum}>∞</div>
            <div className={styles.introStatLabel}>Machine Types</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.features}>
        <div className={styles.sectionTag}>What Sets Us Apart</div>
        <h2>Engineering that performs.</h2>
        <div className={styles.featGrid}>
          {[
            {
              icon: '⚙️',
              title: 'Full Custom Engineering',
              desc: 'No two machines are the same. Our engineers work directly with you to understand your process and design a machine that fits perfectly into your operation.'
            },
            {
              icon: '🔩',
              title: 'Heavy-Duty Construction',
              desc: 'We build for longevity. Industrial-grade steel frames, high-torque motors, hydraulic systems, and precision components rated for continuous heavy use.'
            },
            {
              icon: '🎛️',
              title: 'Smart Control Systems',
              desc: 'Every machine comes with a full control board — programmable speed, temperature, pressure, and cycle settings. Full operator control at your fingertips.'
            },
            {
              icon: '🔬',
              title: 'Tested Before Delivery',
              desc: 'Every unit is fully assembled, tested, and calibrated at our facility before shipping. You receive a machine that is ready to run from day one.'
            },
            {
              icon: '🛠️',
              title: 'After-Sales Support',
              desc: 'Our team is available after delivery for installation guidance, operator training, maintenance, and any technical support you need.'
            },
            {
              icon: '📐',
              title: 'Any Scale, Any Size',
              desc: 'From compact single-unit machines to large-scale production lines with multiple stations — we scale our engineering to match your facility and output needs.'
            },
          ].map(f => (
            <div key={f.title} className={styles.featCard}>
              <div className={styles.featIcon}>{f.icon}</div>
              <div className={styles.featTitle}>{f.title}</div>
              <div className={styles.featDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.process}>
        <div className={styles.sectionTag}>How It Works</div>
        <h2>From idea to machine.</h2>
        <div className={styles.processGrid}>
          {[
            { num: '01', title: 'Submit Your Request', desc: 'Tell us what you need — the type of machine, your production requirements, space constraints, and any specific features. The more detail, the better.' },
            { num: '02', title: 'Engineering Consultation', desc: 'Our engineering team reviews your request and gets in touch to discuss the details, ask questions, and propose a design direction.' },
            { num: '03', title: 'Design & Quotation', desc: 'We prepare a full technical design and a detailed quote covering materials, components, build time, and delivery.' },
            { num: '04', title: 'Build & Delivery', desc: 'Once approved, we build your machine, test it thoroughly, and deliver it fully commissioned and ready to operate.' },
          ].map(s => (
            <div key={s.num} className={styles.processCard}>
              <div className={styles.processNum}>{s.num}</div>
              <div className={styles.processTitle}>{s.title}</div>
              <div className={styles.processDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EXAMPLES */}
      <section className={styles.examples}>
        <div className={styles.sectionTag}>What We've Built</div>
        <h2>Examples of our work.</h2>
        <p className={styles.examplesNote}>These are examples of machine types we have engineered. Every unit is custom — yours will be designed specifically for your needs.</p>
        <div className={styles.examplesGrid}>
          {[
            { title: 'Large-Scale Mixing Machines', desc: 'High-capacity industrial mixers with heavy-duty motors, hydraulic press systems, vacuum chambers, and full temperature & speed control boards.', img: '/machine-mixing.png' },
            { title: 'Automated Filling Machines', desc: 'Precision filling systems for tubes, containers, and packaging — programmable fill volumes, high-speed operation, and minimal waste.', img: '/machine-filling.png' },
            { title: 'Conveyor & Transfer Systems', desc: 'Custom conveyor lines designed for your production flow — single or multi-stage, with integrated controls and safety systems.', img: '/machine-conveyor.png' },
            { title: 'Hydraulic Press Machines', desc: 'Heavy-duty hydraulic presses for forming, compressing, and shaping materials — built to your required tonnage and cycle specifications.', img: '/machine-hydraulic.png' },
            { title: 'Production Line Systems', desc: 'End-to-end production line design and fabrication — from raw material input to finished product output, fully integrated and automated.', img: '/machine-production.png' },
            { title: 'Any Custom Machine', desc: 'If you can describe it, we can build it. Our engineers thrive on complex, one-of-a-kind challenges. Get in touch and let\'s talk.', img: '/machine-custom.png' },
          ].map(e => (
            <div key={e.title} className={styles.exampleCard}>
              <div className={styles.exampleImg}>
                <img src={e.img} alt={e.title} />
              </div>
              <div className={styles.exampleBody}>
                <div className={styles.exampleTitle}>{e.title}</div>
                <div className={styles.exampleDesc}>{e.desc}</div>
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
            <p>Fill out the form with as much detail as possible. Our engineering team will review your request and get back to you within 24 hours to discuss your project.</p>
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
                    <label className={styles.label}>Company</label>
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
                    <label className={styles.label}>Machine Type</label>
                    <input className={styles.input} value={form.machineType} onChange={e => setForm({ ...form, machineType: e.target.value })} placeholder="e.g. Mixing machine, filling line..." />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Quantity Needed</label>
                    <select className={styles.input} value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })}>
                      <option value="">Select quantity</option>
                      <option>1 unit</option>
                      <option>2–5 units</option>
                      <option>5–10 units</option>
                      <option>10+ units</option>
                      <option>Full production line</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Expected Timeline</label>
                    <select className={styles.input} value={form.timeline} onChange={e => setForm({ ...form, timeline: e.target.value })}>
                      <option value="">Select timeline</option>
                      <option>As soon as possible</option>
                      <option>Within 3 months</option>
                      <option>Within 6 months</option>
                      <option>Within 1 year</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                  <div className={`${styles.formGroup} ${styles.full}`}>
                    <label className={styles.label}>Describe Your Machine *</label>
                    <textarea
                      className={`${styles.input} ${styles.textarea} ${errors.description ? styles.inputError : ''}`}
                      value={form.description}
                      onChange={e => setForm({ ...form, description: e.target.value })}
                      placeholder="Describe in as much detail as possible — what the machine needs to do, capacity, dimensions, special features, materials it will process, etc."
                    />
                  </div>
                </div>
                <button onClick={handleSubmit} className={styles.submit}>Submit Request →</button>
                <p className={styles.formNote}>Our engineering team will respond within 24 hours.</p>
              </>
            ) : (
              <div className={styles.success}>
                <div className={styles.successIcon}>✅</div>
                <h3>Request Received!</h3>
                <p>Thank you! Our engineering team will review your request and get back to you within 24 hours to discuss your project.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', country: '', machineType: '', quantity: '', timeline: '', budget: '', description: '' }) }} className={styles.resetBtn}>Submit Another Request →</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
