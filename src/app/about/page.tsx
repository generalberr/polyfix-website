import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = { title: 'About — PolyFix' }

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className={styles.pageHero}>
        <div className={styles.sectionTag}>Who We Are</div>
        <h1>About<br /><span>PolyFix.</span></h1>
        <p>A leading manufacturer of industrial machinery and professional polyester putty, headquartered in Riyadh, Saudi Arabia.</p>
      </div>

      <section className={styles.story}>
        <div className={styles.sectionTag}>Our Story</div>
        <h2>Built on decades of manufacturing expertise.</h2>
        <div className={styles.storyGrid}>
          <p>PolyFix was founded with a single mission: to produce industrial machinery and repair materials that professionals can rely on, every time. From our facility in Riyadh, we supply bodyshops, fabricators, construction companies, and distributors across the Middle East.</p>
          <p>Our product line spans custom-engineered industrial machinery — mixing lines, packaging systems, and automated production equipment — alongside our flagship professional polyester putty, trusted by thousands of professionals across the GCC and beyond.</p>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.sectionTag}>Our Values</div>
        <h2>What drives us.</h2>
        <div className={styles.valuesGrid}>
          {[
            { num: '01', title: 'Quality First', desc: 'Every batch of PolyFix putty meets strict quality controls. Same performance, every tin, every time.' },
            { num: '02', title: 'Built for Professionals', desc: 'Our products are engineered for production environments — not the DIY shelf. Professional demands, professional solutions.' },
            { num: '03', title: 'Regional Expertise', desc: 'We understand the climate, workflow, and standards of the Middle East market. Our formulations reflect that.' },
            { num: '04', title: 'Long-Term Partnerships', desc: "We don't just sell product — we build relationships with distributors, workshops, and contractors for the long run." },
          ].map(v => (
            <div key={v.num} className={styles.valueCard}>
              <div className={styles.valueNum}>{v.num}</div>
              <div className={styles.valueTitle}>{v.title}</div>
              <div className={styles.valueDesc}>{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.reach}>
        <div className={styles.sectionTag}>Our Reach</div>
        <h2>Across the region.</h2>
        <div className={styles.countries}>
          {['Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Lebanon', 'Jordan'].map(c => (
            <div key={c} className={styles.country}>{c}</div>
          ))}
        </div>
      </section>

      <div className={styles.ctaBanner}>
        <div>
          <h2>Want to work with us?</h2>
          <p>Distributors, workshops, and contractors — reach out to discuss a partnership.</p>
        </div>
        <Link href="/contact" className={styles.btnDark}>Get in Touch →</Link>
      </div>

      <Footer />
    </>
  )
}
