'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

function useCountUp(target: number, trigger: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let current = 0
    const step = Math.ceil(target / 40)
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(current)
      if (current >= target) clearInterval(timer)
    }, 30)
    return () => clearInterval(timer)
  }, [trigger, target])
  return count
}

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect() } }, { threshold: 0.5 })
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  const s1 = useCountUp(15, statsVisible)
  const s2 = useCountUp(8, statsVisible)
  const s3 = useCountUp(6, statsVisible)
  const s4 = useCountUp(100, statsVisible)

  const about1 = useFadeUp()
  const about2 = useFadeUp()
  const cap = useFadeUp()
  const feat = useFadeUp()

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroTag}>Industrial Machinery &amp; Chemical Products</div>
        <h1 className={styles.heroH1}>
          Industrial Engineering<br />Powered by <span>POLYFIX.</span>
        </h1>
        <p className={styles.heroSub}>
          From custom-built industrial machinery to professional-grade polyester putty, resin, and gasket sealants — PolyFix is your single source for industrial manufacturing and chemical products across the Middle East.
        </p>
        <div className={styles.heroCtas}>
          <Link href="/services" className={styles.btnPrimary}>Explore Our Services</Link>
          <Link href="/contact" className={styles.btnOutline}>Get a Quote</Link>
        </div>
      </section>

      {/* STATS */}
      <div className={styles.stats} ref={statsRef}>
        {[
          { num: s1, suffix: '+', label: 'Years of Manufacturing' },
          { num: s2, suffix: '', label: 'Production Lines' },
          { num: s3, suffix: '', label: 'Industries Served' },
          { num: s4, suffix: '%', label: 'Professional Grade' },
        ].map(({ num, suffix, label }) => (
          <div key={label} className={styles.statItem}>
            <div className={styles.statNum}>{num}<span>{suffix}</span></div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>

      {/* ABOUT */}
      <section className={styles.about}>
        <div ref={about1.ref} className={`${styles.fadeUp} ${about1.visible ? styles.visible : ''}`}>
          <div className={styles.sectionTag}>Who We Are</div>
          <h2>Built at industrial scale.</h2>
          <p>PolyFix is a leading and experienced producer of industrial and technological machinery — and a trusted manufacturer of professional polyester putty.</p>
          <p>From custom-engineered mixing lines and packaging systems to high-performance repair products, we deliver both the equipment and the materials that keep production moving.</p>
        </div>
        <div ref={about2.ref} className={`${styles.fadeUp} ${about2.visible ? styles.visible : ''} ${styles.pillars}`}>
          {[
            { num: '01', title: 'Machinery', desc: 'Industrial & technological systems engineered to spec' },
            { num: '02', title: 'Materials', desc: 'Professional polyester putty for multi-surface repair' },
            { num: '03', title: 'Custom', desc: 'Tailored formulations & line configurations' },
          ].map(p => (
            <div key={p.num} className={styles.pillar}>
              <span className={styles.pillarNum}>{p.num}</span>
              <div>
                <div className={styles.pillarTitle}>{p.title}</div>
                <div className={styles.pillarDesc}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className={styles.capabilities} id="services">
        <div ref={cap.ref} className={`${styles.fadeUp} ${cap.visible ? styles.visible : ''}`}>
          <div className={styles.sectionTag}>What We Build</div>
          <h2>Engineering across the line.</h2>
          <p className={styles.capSub}>Four core capabilities, one integrated production partner.</p>
        </div>
        <div className={styles.capGrid}>
          {[
            { num: '01', title: 'Industrial Machinery', desc: 'We design and manufacture heavy-duty commercial machines built for serious production environments — custom engineered to your exact specifications and built to perform at scale.', img: '/hero.jpg', href: '/machinery' },
            { num: '02', title: 'General Purpose Polyester Putty', desc: 'Our flagship product — a professional-grade polyester putty for steel, metal, wood, and construction surfaces. Trusted by bodyshops, fabricators, and builders across the Middle East. Made in Saudi Arabia.', img: '/putty-hero.png', href: '/putty' },
            { num: '03', title: 'Industrial Resin', desc: 'Polyester, epoxy, vinyl ester, and gel coat — supplied by the kilogram, drum, or ton. Wholesale and retail for factories, workshops, and builders across the region.', img: '/resin-hero.png', href: '/resin' },
            { num: '04', title: 'Gasket Sealant', desc: 'Four professional-grade sealant types under the PolyFix brand — RTV silicone, anaerobic, form-in-place, and thread sealant. Available retail and wholesale.', img: '/gasket-hero.png', href: '/gasket' },
          ].map(c => {
            const cardContent = (
              <>
                <img src={c.img} alt={c.title} className={styles.capImg} />
                <div className={styles.capBody}>
                  <div className={styles.capNum}>{c.num} — CAPABILITY</div>
                  <div className={styles.capTitle}>{c.title}</div>
                  <div className={styles.capDesc}>{c.desc}</div>
                  {c.href && <div className={styles.capCta}>Learn More →</div>}
                </div>
              </>
            )
            return c.href ? (
              <Link key={c.num} href={c.href} className={`${styles.capCard} ${styles.capCardLink}`}>
                {cardContent}
              </Link>
            ) : (
              <div key={c.num} className={styles.capCard}>
                {cardContent}
              </div>
            )
          })}
        </div>
      </section>

      {/* MARQUEE */}
      <section className={styles.marqueeSection}>
        <div className={styles.sectionTag} style={{ justifyContent: 'center' }}>Stocked &amp; Trusted Across</div>
        <h2>Our Reach</h2>
        <div className={styles.marqueeWrap}>
          <div className={styles.marqueeTrack}>
            {['Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Lebanon', 'Jordan',
              'Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Lebanon', 'Jordan'].map((c, i) => (
              <div key={i} className={styles.marqueeItem}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.features}>
        <div ref={feat.ref} className={`${styles.fadeUp} ${feat.visible ? styles.visible : ''}`}>
          <div className={styles.sectionTag}>Core Advantages</div>
          <h2>Built for Professionals</h2>
        </div>
        <div className={styles.featGrid}>
          {[
            { num: '01', title: 'Extreme Adhesion', desc: 'Bonds powerfully to steel. No primer required for standard applications.' },
            { num: '02', title: 'Easy Application', desc: 'Smooth spreadable consistency. High coverage ratio — each kg goes further.' },
            { num: '03', title: 'Perfect Sanding', desc: 'Sands cleanly without clogging paper. Flawless surface for primer and topcoat.' },
            { num: '04', title: 'Neutral Base', desc: 'No pigmentation — accepts any topcoat colour with zero bleed-through.' },
            { num: '05', title: 'Pro-Grade Formula', desc: 'Engineered for production bodyshops, metal fabricators, and construction pros.' },
            { num: '06', title: 'Fast Cure', desc: 'Controlled working time with fast hardening — keeps your workflow moving.' },
          ].map(f => (
            <div key={f.title} className={styles.featCard}>
              <div className={styles.featNum}>{f.num}</div>
              <div className={styles.featTitle}>{f.title}</div>
              <div className={styles.featDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.sectionTag}>What Professionals Say</div>
        <h2>Trusted by Experts</h2>
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

      {/* CTA */}
      <div className={styles.ctaBanner}>
        <div>
          <h2>Ready to order or partner with us?</h2>
          <p>Get in touch for wholesale pricing, technical support, or machinery inquiries.</p>
        </div>
        <Link href="/contact" className={styles.btnDark}>Get a Quote →</Link>
      </div>

      <Footer />
    </>
  )
}
