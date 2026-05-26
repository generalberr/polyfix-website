'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

const jobs = [
  {
    id: 'sales',
    title: 'مندوب مبيعات',
    dept: 'المبيعات',
    location: 'الرياض، المملكة العربية السعودية',
    type: 'دوام كامل',
    desc: 'نبحث عن مندوب مبيعات متحمس وذو خبرة للانضمام إلى فريق بولي فيكس في الرياض. ستكون مسؤولاً عن تنمية قاعدة عملائنا وبناء علاقات قوية مع الموزعين والورش.',
    responsibilities: ['تحديد وتطوير فرص أعمال جديدة في منطقة الخليج', 'بناء والحفاظ على علاقات قوية مع الموزعين وعملاء قطاع السيارات والصناعة', 'تقديم وترويج منتجات بولي فيكس للعملاء الحاليين والمحتملين', 'تحقيق أهداف المبيعات الشهرية والربع سنوية', 'إعداد تقارير المبيعات والحفاظ على سجلات دقيقة للعملاء', 'التعاون مع فريق التسويق لتنفيذ الحملات والعروض الترويجية'],
    requirements: ['خبرة لا تقل عن سنتين في المبيعات، ويفضل في المنتجات الصناعية أو الكيميائية', 'مهارات تواصل وتفاوض قوية', 'رخصة قيادة سعودية سارية', 'القدرة على العمل باستقلالية وإدارة منطقة مبيعات', 'إجادة اللغتين العربية والإنجليزية', 'معرفة بقطاع السيارات أو البناء تُعدّ ميزة إضافية'],
  },
  {
    id: 'marketing',
    title: 'متخصص تسويق',
    dept: 'التسويق',
    location: 'الرياض، المملكة العربية السعودية',
    type: 'دوام كامل',
    desc: 'نبحث عن متخصص تسويق مبدع وموجه نحو النتائج للانضمام إلى بولي فيكس. ستكون مسؤولاً عن تطوير وتنفيذ استراتيجيات تسويقية تزيد من الوعي بالعلامة التجارية.',
    responsibilities: ['تطوير وتنفيذ حملات تسويقية عبر القنوات الرقمية والتقليدية', 'إدارة حسابات بولي فيكس على وسائل التواصل الاجتماعي وإنشاء محتوى جذاب', 'التنسيق مع فريق المبيعات لإنشاء المواد الترويجية والعروض التقديمية', 'متابعة وتحليل أداء التسويق والإبلاغ عن المقاييس الرئيسية', 'إدارة الموقع الإلكتروني للشركة والتأكد من تحديث المحتوى', 'تمثيل بولي فيكس في المعارض التجارية وفعاليات القطاع'],
    requirements: ['خبرة لا تقل عن سنتين في التسويق، ويفضل في قطاعات B2B أو الصناعية', 'إتقان إدارة وسائل التواصل الاجتماعي وأدوات التسويق الرقمي', 'مهارات إبداعية قوية مع خبرة في إنشاء المحتوى', 'خبرة في أدوات التصميم الجرافيكي (Canva أو Adobe أو ما يماثلها)', 'إجادة اللغتين العربية والإنجليزية', 'معرفة بالسوق السعودي تُعدّ ميزة قوية'],
  },
]

export default function ArCareersPage() {
  const [activeJob, setActiveJob] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', experience: '', message: '', cv: null as File | null })
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  function handleApply(jobId: string) {
    setActiveJob(jobId)
    setSubmitted(false)
    setForm({ name: '', email: '', phone: '', position: jobId === 'sales' ? 'مندوب مبيعات' : 'متخصص تسويق', experience: '', message: '', cv: null })
    setErrors({})
    setTimeout(() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  async function handleSubmit() {
    const required = ['name', 'email', 'phone']
    const newErrors: Record<string, boolean> = {}
    required.forEach(k => { if (!form[k as keyof typeof form]) newErrors[k] = true })
    if (!form.cv) newErrors.cv = true
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return
    setLoading(true)
    try {
      const data = new FormData()
      data.append('name', form.name)
      data.append('email', form.email)
      data.append('phone', form.phone)
      data.append('position', form.position)
      data.append('experience', form.experience)
      data.append('message', form.message)
      data.append('_language', 'Arabic')
      if (form.cv) data.append('cv', form.cv)
      const res = await fetch('https://formspree.io/f/xnjrbeor', { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
      if (res.ok) setSubmitted(true)
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }

  return (
    <>
      <Navbar />
      <div className={styles.pageHero}>
        <div className={styles.sectionTag}>انضم إلى فريقنا</div>
        <h1>الوظائف في<br /><span>بولي فيكس.</span></h1>
        <p>نحن نبني شيئاً كبيراً. إذا كنت طموحاً وتريد النمو مع شركة صناعية متسارعة — نريد أن نسمع منك.</p>
      </div>

      <section className={styles.whySection}>
        <div className={styles.sectionTag}>لماذا بولي فيكس</div>
        <h2>لماذا تعمل معنا.</h2>
        <div className={styles.whyGrid}>
          {[
            { num: '01', title: 'نمو سريع', desc: 'انضم إلى شركة تتوسع بسرعة في منطقة الخليج والشرق الأوسط.' },
            { num: '02', title: 'راتب تنافسي', desc: 'نقدم رواتب تنافسية وحوافز مبنية على الأداء.' },
            { num: '03', title: 'فرص تطوير', desc: 'نستثمر في موظفينا. طوّر مسيرتك المهنية بينما ننمو معاً.' },
            { num: '04', title: 'بيئة عمل قوية', desc: 'فريق متماسك ببيئة عمل تعاونية وموجهة نحو النتائج.' },
          ].map(w => (
            <div key={w.num} className={styles.whyCard}>
              <div className={styles.whyNum}>{w.num}</div>
              <div className={styles.whyTitle}>{w.title}</div>
              <div className={styles.whyDesc}>{w.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.jobsSection}>
        <div className={styles.sectionTag}>الوظائف المتاحة</div>
        <h2>الوظائف الحالية.</h2>
        <div className={styles.jobsList}>
          {jobs.map(job => (
            <div key={job.id} className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <div className={styles.jobLeft}>
                  <div className={styles.jobDept}>{job.dept}</div>
                  <div className={styles.jobTitle}>{job.title}</div>
                  <div className={styles.jobMeta}><span>📍 {job.location}</span><span>⏱ {job.type}</span></div>
                </div>
                <button className={styles.applyBtn} onClick={() => handleApply(job.id)}>قدّم الآن ←</button>
              </div>
              <p className={styles.jobDesc}>{job.desc}</p>
              <div className={styles.jobDetails}>
                <div className={styles.jobSection}>
                  <div className={styles.jobSectionTitle}>المهام والمسؤوليات</div>
                  <ul className={styles.jobList}>{job.responsibilities.map(r => <li key={r}>{r}</li>)}</ul>
                </div>
                <div className={styles.jobSection}>
                  <div className={styles.jobSectionTitle}>المتطلبات</div>
                  <ul className={styles.jobList}>{job.requirements.map(r => <li key={r}>{r}</li>)}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeJob && (
        <section className={styles.formSection} id="apply-form">
          <div className={styles.formInner}>
            <div className={styles.formLeft}>
              <div className={styles.sectionTagLight}>قدّم الآن</div>
              <h2>أرسل<br />طلبك.</h2>
              <p>أكمل بياناتك وأرفق سيرتك الذاتية. نراجع جميع الطلبات ونتواصل خلال 5 أيام عمل.</p>
              <div className={styles.formContact}>
                <div className={styles.formContactItem}><span className={styles.formContactLabel}>البريد الإلكتروني</span><a href="mailto:careers@polyfixglobal.com">careers@polyfixglobal.com</a></div>
                <div className={styles.formContactItem}><span className={styles.formContactLabel}>واتساب</span><a href="https://wa.me/966534944752" target="_blank" rel="noopener noreferrer">+966 53 494 4752</a></div>
              </div>
            </div>
            <div className={styles.formPanel}>
              {!submitted ? (
                <>
                  <div className={styles.applyingFor}>التقديم على وظيفة: <strong>{activeJob === 'sales' ? 'مندوب مبيعات' : 'متخصص تسويق'}</strong></div>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}><label className={styles.label}>الاسم الكامل *</label><input className={`${styles.input} ${errors.name ? styles.inputError : ''}`} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="اسمك الكامل" /></div>
                    <div className={styles.formGroup}><label className={styles.label}>البريد الإلكتروني *</label><input type="email" className={`${styles.input} ${errors.email ? styles.inputError : ''}`} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="بريدك الإلكتروني" /></div>
                    <div className={styles.formGroup}><label className={styles.label}>رقم الهاتف *</label><input type="tel" className={`${styles.input} ${errors.phone ? styles.inputError : ''}`} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+966 5X XXX XXXX" /></div>
                    <div className={styles.formGroup}><label className={styles.label}>سنوات الخبرة</label><select className={styles.input} onChange={e => setForm({ ...form, experience: e.target.value })}><option value="">اختر الخبرة</option><option>أقل من سنة</option><option>1-2 سنة</option><option>2-5 سنوات</option><option>5-10 سنوات</option><option>أكثر من 10 سنوات</option></select></div>
                    <div className={`${styles.formGroup} ${styles.full}`}><label className={styles.label}>رسالة تعريفية</label><textarea className={`${styles.input} ${styles.textarea}`} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="أخبرنا لماذا تريد الانضمام إلى بولي فيكس وما الذي يجعلك مناسباً لهذا الدور..." /></div>
                    <div className={`${styles.formGroup} ${styles.full}`}>
                      <label className={styles.label}>رفع السيرة الذاتية *</label>
                      <div className={`${styles.fileUpload} ${errors.cv ? styles.inputError : ''}`}>
                        <input type="file" accept=".pdf,.doc,.docx" className={styles.fileInput} onChange={e => setForm({ ...form, cv: e.target.files?.[0] || null })} id="cv-upload-ar" />
                        <label htmlFor="cv-upload-ar" className={styles.fileLabel}><span>📎</span><span>{form.cv ? form.cv.name : 'اضغط لرفع سيرتك الذاتية (PDF, DOC, DOCX)'}</span></label>
                      </div>
                    </div>
                  </div>
                  <button onClick={handleSubmit} disabled={loading} className={styles.submit}>{loading ? 'جارٍ الإرسال...' : 'إرسال الطلب ←'}</button>
                  <p className={styles.formNote}>نراجع جميع الطلبات ونرد خلال 5 أيام عمل.</p>
                </>
              ) : (
                <div className={styles.success}>
                  <div className={styles.successIcon}>✅</div>
                  <h3>تم إرسال طلبك!</h3>
                  <p>شكراً للتقديم في بولي فيكس. سنراجع طلبك ونتواصل معك خلال 5 أيام عمل.</p>
                  <button onClick={() => { setSubmitted(false); setActiveJob(null) }} className={styles.resetBtn}>التقديم على وظيفة أخرى ←</button>
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
