import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const isAr = lang === 'ar'
  const prefix = isAr ? '/ar' : ''

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href={isAr ? '/ar' : '/'} className={styles.logo}>
            <Image src="/logo.png" alt="PolyFix Logo" width={280} height={140} style={{ objectFit: 'contain', marginLeft: '-30px', marginRight: '-15px' }} />
            <span className={styles.logoText}>POLYFIX</span>
          </Link>
          <p>{isAr
            ? 'مصنّع للآلات الصناعية ومعجون البوليستر الاحترافي. مبنى 4559، شارع الرفيعة، حي المسفلة، الرياض 14528، المملكة العربية السعودية.'
            : 'Manufacturer of industrial machinery and professional polyester putty. Two branches: Riyadh, Saudi Arabia & Mount Lebanon, Lebanon.'
          }</p>
        </div>

        <div className={styles.col}>
          <div className={styles.heading}>Navigation</div>
          <ul className={styles.links}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <div className={styles.heading}>Contact</div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>General Inquiries</span>
            <a href="mailto:Info@polyfixglobal.com">Info@polyfixglobal.com</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Sales</span>
            <a href="mailto:sales@polyfixglobal.com">sales@polyfixglobal.com</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Careers</span>
            <a href="mailto:careers@polyfixglobal.com">careers@polyfixglobal.com</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>KSA Branch</span>
            <span>Building 4559, Al Rafiah St., Riyadh 14528</span>
            <a href="tel:+966534944752">+966 53 494 4752</a>
            <a href="https://wa.me/966534944752" target="_blank" rel="noopener noreferrer">WhatsApp: +966 53 494 4752</a>
            <a href="https://maps.app.goo.gl/f9gh1YD8fTQtaEFw6" target="_blank" rel="noopener noreferrer">Get Directions →</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Lebanon Branch</span>
            <span>Mount Lebanon, Lebanon</span>
            <a href="tel:+96181637675">+961 81 637 675</a>
            <a href="https://wa.me/96181637675" target="_blank" rel="noopener noreferrer">WhatsApp: +961 81 637 675</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>
          {isAr ? '© 2025 شركة بولي فيكس. جميع الحقوق محفوظة.' : '© 2025 PolyFix Company. All rights reserved.'}
        </span>
        <span className={styles.tagline}>
          {isAr ? 'معجون معادن احترافي' : 'Professional Metal Putty'}
        </span>
      </div>
    </footer>
  )
}
