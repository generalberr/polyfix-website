import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = { title: 'Product — PolyFix Professional Metal Putty' }

export default function ProductPage() {
  return (
    <>
      <Navbar />

      <div className={styles.pageHero}>
        <div className={styles.sectionTag}>Our Product</div>
        <h1>Professional<br /><span>Metal Putty.</span></h1>
        <p>Industrial-strength polyester putty engineered for bodyshops, fabricators, and construction professionals who demand a flawless surface the first time.</p>
        <div className={styles.heroCtas}>
          <Link href="/contact" className={styles.btnPrimary}>Request Wholesale</Link>
          <a href="#specs" className={styles.btnOutline}>Technical Sheet</a>
        </div>
      </div>

      {/* OVERVIEW */}
      <section className={styles.overview}>
        <div className={styles.imgWrap}>
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="PolyFix Metal Putty" />
          <div className={styles.imgBadge}>Pro Grade Formula</div>
        </div>
        <div className={styles.overviewText}>
          <div className={styles.sectionTag}>What Is PolyFix</div>
          <h2>Built for industrial demands.</h2>
          <p>PolyFix is a general-purpose polyester putty formulated for high-adhesion repair on steel and metal surfaces. Developed for professional use in production bodyshops, metal fabrication workshops, and construction environments.</p>
          <p>The neutral, unpigmented base accepts any topcoat without bleed-through. Each tin includes the MEKP hardener, pre-measured for consistent results across every application.</p>
          <div className={styles.tags}>
            {['Automotive', 'Construction', 'Metal Fabrication', 'Heavy Vehicles', 'Marine', 'Industrial MRO'].map(t => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SIZES */}
      <section className={styles.sizesSection}>
        <div className={styles.sectionTag}>Available Sizes</div>
        <h2>Choose your format.</h2>
        <div className={styles.sizesGrid}>
          {[
            { kg: '1', badge: 'Includes Hardener', desc: 'Ideal for small repairs, touch-ups, and DIY projects.' },
            { kg: '2', badge: 'Best Seller', desc: "The professional's choice. Enough for a full panel repair with material to spare." },
            { kg: '3', badge: 'Includes Hardener', desc: 'For bodyshops and heavy-use environments. Maximum coverage per tin.' },
          ].map(s => (
            <div key={s.kg} className={styles.sizeCard}>
              <div className={styles.sizeKg}>{s.kg}</div>
              <div className={styles.sizeUnit}>Kilogram</div>
              <div className={styles.sizeDesc}>{s.desc}</div>
              <div className={styles.sizeBadge}>{s.badge}</div>
            </div>
          ))}
        </div>
        <p className={styles.sizeNote}>Bulk and wholesale formats available — <Link href="/contact">contact us for trade pricing.</Link></p>
      </section>

      {/* SPECS */}
      <section className={styles.specsSection} id="specs">
        <div className={styles.sectionTag}>Technical Data</div>
        <h2>Full Specification Sheet.</h2>
        <div className={styles.specsLayout}>
          <div className={styles.specsTable}>
            {[
              ['Product Type', 'Polyester Metal Putty'],
              ['Base', 'Polyester Resin'],
              ['Hardener', 'MEKP (included)'],
              ['Substrate', 'Steel / Metal surfaces'],
              ['Colour', 'Neutral / Unpigmented'],
              ['Finish', 'Sandable / Paintable'],
              ['Sizes', '1 kg / 2 kg / 3 kg'],
              ['Shelf Life', '12 months (sealed, cool & dry)'],
              ['Working Temp', '+5°C to +35°C'],
              ['Max Layer', '6–8 mm per application'],
              ['Primer Required', 'No (bare steel)'],
              ['Origin', 'Saudi Arabia'],
            ].map(([k, v]) => (
              <div key={k} className={styles.specRow}>
                <div className={styles.specKey}>{k}</div>
                <div className={styles.specVal}>{v}</div>
              </div>
            ))}
          </div>
          <div>
            <div className={styles.sectionTag} style={{ marginBottom: '20px' }}>Applications</div>
            {[
              { icon: '🚗', title: 'Auto Body Repair', desc: 'Panel repair, dent filling, rust-out correction. Bonds direct to bare steel — no primer step needed.' },
              { icon: '🏗️', title: 'Construction & Steel Structures', desc: 'Surface levelling and joint filling on structural steel, frames, and fittings.' },
              { icon: '🔧', title: 'Metal Fabrication', desc: 'Weld seam filling, surface preparation before painting. Neutral base prevents topcoat bleed.' },
              { icon: '🚛', title: 'Heavy Vehicles & Fleet', desc: 'Trucks, trailers, and agricultural equipment. Works on complex curved panels.' },
              { icon: '⚙️', title: 'Industrial MRO', desc: 'Maintenance and repair on industrial equipment, plant machinery, and pipework.' },
            ].map(a => (
              <div key={a.title} className={styles.appItem}>
                <div className={styles.appIcon}>{a.icon}</div>
                <div>
                  <div className={styles.appTitle}>{a.title}</div>
                  <div className={styles.appDesc}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION STEPS */}
      <section className={styles.stepsSection}>
        <div className={styles.sectionTag}>How to Apply</div>
        <h2>Step-by-step guide.</h2>
        <div className={styles.stepsGrid}>
          {[
            { num: '01', title: 'Surface Preparation', desc: 'Sand the repair area to bare metal using 80-grit paper. Remove rust, grease, and contaminants. Clean with a solvent wipe.' },
            { num: '02', title: 'Mix the Putty', desc: 'Add 2–3% MEKP hardener by weight to the putty. Mix thoroughly on a clean board for 60–90 seconds until uniform in colour.' },
            { num: '03', title: 'Apply & Build', desc: 'Spread with a flexible applicator. Max 6–8mm per layer. For deeper repairs, build in multiple passes, allowing partial cure between coats.' },
            { num: '04', title: 'Sand & Finish', desc: 'Once fully cured, block sand with 80, then 180, then 320-grit. The neutral base is ready for primer and topcoat with no bleed-through.' },
          ].map(s => (
            <div key={s.num} className={styles.stepCard}>
              <div className={styles.stepNum}>{s.num}</div>
              <div className={styles.stepTitle}>{s.title}</div>
              <div className={styles.stepDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MIXING GUIDE */}
      <section className={styles.mixingSection}>
        <div className={styles.sectionTag}>Hardener Ratios</div>
        <h2>Temperature mixing guide.</h2>
        <div className={styles.mixGrid}>
          {[
            { temp: 'Cold', range: 'Below 15°C', ratio: '3–4%', note: 'Increase ratio to compensate for slower cure in cold environments.' },
            { temp: 'Standard', range: '15°C – 25°C', ratio: '2–3%', note: 'Optimal working time of 4–6 minutes. Recommended for most professional applications.' },
            { temp: 'Hot', range: 'Above 25°C', ratio: '1.5–2%', note: 'Reduce ratio to extend working time in high-temperature conditions.' },
          ].map(m => (
            <div key={m.temp} className={styles.mixCard}>
              <div className={styles.mixTemp}>{m.temp}</div>
              <div className={styles.mixRange}>{m.range}</div>
              <div className={styles.mixRatio}>{m.ratio}</div>
              <div className={styles.mixLabel}>Hardener by weight</div>
              <div className={styles.mixNote}>{m.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className={styles.ctaBanner}>
        <div>
          <h2>Ready to order PolyFix?</h2>
          <p>Wholesale pricing available for distributors and workshops.</p>
        </div>
        <Link href="/contact" className={styles.btnGold}>Request Wholesale →</Link>
      </div>

      <Footer />
    </>
  )
}
