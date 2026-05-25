'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', position: '', message: '', cv: null as File | null
  })
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const jobs = [
    {
      id: 'sales',
      title: 'Sales Representative',
      dept: 'Sales',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full Time',
      desc: 'We are looking for a driven and experienced Sales Representative to join the PolyFix team in Riyadh. You will be responsible for growing our customer base, building strong relationships with distributors and workshops, and driving revenue across our product lines.',
      responsibilities: [
        'Identify and develop new business opportunities across the GCC region',
        'Build and maintain strong relationships with distributors, bodyshops, and industrial clients',
        'Present and promote PolyFix products to potential and existing customers',
        'Achieve monthly and quarterly sales targets',
        'Prepare sales reports and maintain accurate customer records',
        'Collaborate with the marketing team to execute campaigns and promotions',
      ],
      requirements: [
        '2+ years of sales experience, preferably in industrial or chemical products',
        'Strong communication and negotiation skills',
        'Valid Saudi driving license',
        'Ability to work independently and manage a sales territory',
        'Arabic and English proficiency',
        'Knowledge of the automotive or construction industry is a plus',
      ],
    },
    {
      id: 'marketing',
      title: 'Marketing Specialist',
      dept: 'Marketing',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full Time',
      desc: 'We are looking for a creative and results-driven Marketing Specialist to join PolyFix. You will be responsible for developing and executing marketing strategies that increase brand awareness, generate leads, and support our sales team across digital and traditional channels.',
      responsibilities: [
        'Develop and execute marketing campaigns across digital and offline channels',
        'Manage PolyFix social media accounts and create engaging content',
        'Coordinate with the sales team to create promotional materials and presentations',
        'Track and analyse marketing performance and report on key metrics',
        'Manage the company website and ensure content is up to date',
        'Organise and represent PolyFix at trade shows and industry events',
      ],
      requirements: [
        '2+ years of marketing experience, preferably in B2B or industrial sectors',
        'Proficiency in social media management and digital marketing tools',
        'Strong creative skills with experience in content creation',
        'Experience with graphic design tools (Canva, Adobe, or similar)',
        'Arabic and English proficiency',
        'Knowledge of the Saudi market is a strong advantage',
      ],
    },
  ]

  function handleApply(jobId: string) {
    setActiveJob(jobId)
    setSubmitted(false)
    setForm({ name: '', email: '', phone: '', position: jobId === 'sales' ? 'Sales Representative' : 'Marketing Specialist', message: '', cv: null })
    setErrors({})
    setTimeout(() => {
      document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  function handleSubmit() {
    const required = ['name', 'email', 'phone']
    const newErrors: Record<string, boolean> = {}
    required.forEach(k => { if (!form[k as keyof typeof form]) newErrors[k] = true })
    if (!form.cv) newErrors.cv = true
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) setSubmitted(true)
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className={styles.pageHero}>
        <div className={styles.sectionTag}>Join Our Team</div>
        <h1>Careers at<br /><span>PolyFix.</span></h1>
        <p>We're building something big. If you're driven, ambitious, and want to grow with a fast-moving industrial company — we want to hear from you.</p>
      </div>

      {/* WHY WORK WITH US */}
      <section className={styles.whySection}>
        <div className={styles.sectionTag}>Why PolyFix</div>
        <h2>Why work with us.</h2>
        <div className={styles.whyGrid}>
          {[
            { num: '01', title: 'Fast Growing', desc: 'Join a company that is expanding rapidly across the GCC and Middle East.' },
            { num: '02', title: 'Competitive Pay', desc: 'We offer competitive salaries and performance-based incentives.' },
            { num: '03', title: 'Growth Opportunities', desc: 'We invest in our people. Grow your career as we grow the business.' },
            { num: '04', title: 'Strong Culture', desc: 'A tight-knit team with a collaborative, results-driven work environment.' },
          ].map(w => (
            <div key={w.title} className={styles.whyCard}>
              <div className={styles.whyNum}>{w.num}</div>
              <div className={styles.whyTitle}>{w.title}</div>
              <div className={styles.whyDesc}>{w.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className={styles.jobsSection}>
        <div className={styles.sectionTag}>Open Positions</div>
        <h2>Current openings.</h2>
        <div className={styles.jobsList}>
          {jobs.map(job => (
            <div key={job.id} className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <div className={styles.jobLeft}>
                  <div className={styles.jobDept}>{job.dept}</div>
                  <div className={styles.jobTitle}>{job.title}</div>
                  <div className={styles.jobMeta}>
                    <span>📍 {job.location}</span>
                    <span>⏱ {job.type}</span>
                  </div>
                </div>
                <button className={styles.applyBtn} onClick={() => handleApply(job.id)}>
                  Apply Now →
                </button>
              </div>
              <p className={styles.jobDesc}>{job.desc}</p>
              <div className={styles.jobDetails}>
                <div className={styles.jobSection}>
                  <div className={styles.jobSectionTitle}>Responsibilities</div>
                  <ul className={styles.jobList}>
                    {job.responsibilities.map(r => <li key={r}>{r}</li>)}
                  </ul>
                </div>
                <div className={styles.jobSection}>
                  <div className={styles.jobSectionTitle}>Requirements</div>
                  <ul className={styles.jobList}>
                    {job.requirements.map(r => <li key={r}>{r}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION FORM */}
      {activeJob && (
        <section className={styles.formSection} id="apply-form">
          <div className={styles.formInner}>
            <div className={styles.formLeft}>
              <div className={styles.sectionTagLight}>Apply Now</div>
              <h2>Submit your<br />application.</h2>
              <p>Fill in your details and upload your CV. We review all applications and will get back to you within 5 business days.</p>
              <div className={styles.formContact}>
                <div className={styles.formContactItem}>
                  <span className={styles.formContactLabel}>Email</span>
                  <a href="mailto:careers@polyfixglobal.com">careers@polyfixglobal.com</a>
                </div>
                <div className={styles.formContactItem}>
                  <span className={styles.formContactLabel}>WhatsApp</span>
                  <a href="https://wa.me/966534944752" target="_blank" rel="noopener noreferrer">+966 53 494 4752</a>
                </div>
              </div>
            </div>

            <div className={styles.formPanel}>
              {!submitted ? (
                <>
                  <div className={styles.applyingFor}>
                    Applying for: <strong>{activeJob === 'sales' ? 'Sales Representative' : 'Marketing Specialist'}</strong>
                  </div>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Full Name *</label>
                      <input className={`${styles.input} ${errors.name ? styles.inputError : ''}`} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Email Address *</label>
                      <input type="email" className={`${styles.input} ${errors.email ? styles.inputError : ''}`} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Phone / WhatsApp *</label>
                      <input type="tel" className={`${styles.input} ${errors.phone ? styles.inputError : ''}`} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+966 5X XXX XXXX" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Years of Experience</label>
                      <select className={styles.input} onChange={e => setForm({ ...form, message: e.target.value })}>
                        <option value="">Select experience</option>
                        <option>Less than 1 year</option>
                        <option>1–2 years</option>
                        <option>2–5 years</option>
                        <option>5–10 years</option>
                        <option>10+ years</option>
                      </select>
                    </div>
                    <div className={`${styles.formGroup} ${styles.full}`}>
                      <label className={styles.label}>Cover Letter / Message</label>
                      <textarea className={`${styles.input} ${styles.textarea}`} placeholder="Tell us why you want to join PolyFix and what makes you a great fit for this role..." onChange={e => setForm({ ...form, message: e.target.value })} />
                    </div>
                    <div className={`${styles.formGroup} ${styles.full}`}>
                      <label className={styles.label}>Upload CV *</label>
                      <div className={`${styles.fileUpload} ${errors.cv ? styles.inputError : ''}`}>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className={styles.fileInput}
                          onChange={e => setForm({ ...form, cv: e.target.files?.[0] || null })}
                          id="cv-upload"
                        />
                        <label htmlFor="cv-upload" className={styles.fileLabel}>
                          <span className={styles.fileIcon}>📎</span>
                          <span>{form.cv ? form.cv.name : 'Click to upload your CV (PDF, DOC, DOCX)'}</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <button onClick={handleSubmit} className={styles.submit}>Submit Application →</button>
                  <p className={styles.formNote}>We review all applications and respond within 5 business days.</p>
                </>
              ) : (
                <div className={styles.success}>
                  <div className={styles.successIcon}>✅</div>
                  <h3>Application Submitted!</h3>
                  <p>Thank you for applying to PolyFix. We'll review your application and get back to you within 5 business days.</p>
                  <button onClick={() => { setSubmitted(false); setActiveJob(null) }} className={styles.resetBtn}>Apply for Another Position →</button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}
