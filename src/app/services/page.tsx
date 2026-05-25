import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = { title: 'Services — PolyFix' }

const services = [
  {
    num: '01',
    title: 'Industrial Machinery',
    desc: 'We design and manufacture heavy-duty commercial machines built for serious production environments — custom engineered to your exact specifications and built to perform at scale.',
    img: '/hero.jpg',
    href: '/machinery',
    features: ['Custom engineered to spec', 'Heavy-duty construction', 'Smart control systems', 'After-sales support'],
  },
  {
    num: '02',
    title: 'General Purpose Polyester Putty',
    desc: 'Our flagship product — a professional-grade polyester putty suitable for steel, metal, wood, and construction surfaces. Trusted by bodyshops, fabricators, and builders across the Middle East.',
    img: '/putty-hero.png',
    href: '/putty',
    features: ['Extreme adhesion', 'Easy application', 'Perfect sanding', 'KSA & Lebanon'],
  },
  {
    num: '03',
    title: 'Industrial Resin',
    desc: 'Polyester, epoxy, vinyl ester, and gel coat — supplied by the kilogram, drum, or ton. Wholesale and retail for factories, workshops, and builders across the region.',
    img: '/resin-hero.png',
    href: '/resin',
    features: ['4 resin types', 'Kg, drum & ton formats', 'Wholesale & retail', 'Fast availability'],
  },
  {
    num: '04',
    title: 'Gasket Sealant',
    desc: 'Four professional-grade sealant types under the PolyFix brand — RTV silicone, anaerobic, form-in-place, and thread sealant. Available retail and wholesale.',
    img: '/gasket-hero.png',
    href: '/gasket',
    features: ['4 sealant types', 'High temp resistance', 'Fully waterproof', 'PolyFix brand'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className={styles.pageHero}>
        <div className={styles.sectionTag}>What We Offer</div>
        <h1>Our <span>Services.</span></h1>
        <p>From custom industrial machinery to professional-grade chemical products — four capabilities, one trusted partner.</p>
      </div>

      {/* SERVICES LIST */}
      <section className={styles.servicesList}>
        {services.map((s, i) => (
          <div key={s.num} className={`${styles.serviceRow} ${i % 2 === 1 ? styles.serviceRowReverse : ''}`}>
            <div className={styles.serviceImg}>
              <img src={s.img} alt={s.title} />
              <div className={styles.serviceImgOverlay} />
            </div>
            <div className={styles.serviceContent}>
              <div className={styles.serviceNum}>{s.num}</div>
              <div className={styles.sectionTag}>{s.num === '01' ? 'Manufacturing' : s.num === '02' ? 'Product' : s.num === '03' ? 'Supply' : 'Product'}</div>
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
              <div className={styles.serviceFeatures}>
                {s.features.map(f => (
                  <div key={f} className={styles.serviceFeature}>
                    <span className={styles.featureDot} />
                    {f}
                  </div>
                ))}
              </div>
              <Link href={s.href} className={styles.btnPrimary}>Learn More →</Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className={styles.ctaBanner}>
        <div>
          <h2>Not sure what you need?</h2>
          <p>Get in touch and our team will point you in the right direction.</p>
        </div>
        <Link href="/contact" className={styles.btnDark}>Contact Us →</Link>
      </div>

      <Footer />
    </>
  )
}
