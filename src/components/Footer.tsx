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
            <Image src="/logo.png" alt="PolyFix Logo" width={80} height={40} style={{ objectFit: 'contain' }} />
            <span className={styles.logoText}>POLYFIX</span>
          </Link>
          <p>{isAr
            ? 'مصنّع للآلات الصناعية ومعجون البوليستر الاحترافي. مبنى 4559، شارع الرفيعة، حي المسفلة، الرياض 14528، المملكة العربية السعودية.'
            : 'Manufacturer of industrial machinery and professional polyester putty. Building 4559, Al Rafiah St., Al Misfat District, Riyadh 14528, KSA.'
          }</p>
        </div>

        <div className={styles.col}>
          <div className={styles.heading}>{isAr ? 'التنقل' : 'Navigation'}</div>
          <ul className={styles.links}>
            <li><Link href={`${prefix}/`}>{isAr ? 'الرئيسية' : 'Home'}</Link></li>
            <li><Link href={`${prefix}/product`}>{isAr ? 'المنتج' : 'Product'}</Link></li>
            <li><Link href={`${prefix}/about`}>{isAr ? 'من نحن' : 'About'}</Link></li>
            <li><Link href={`${prefix}/contact`}>{isAr ? 'اتصل بنا' : 'Contact'}</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <div className={styles.heading}>{isAr ? 'التواصل' : 'Contact'}</div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>{isAr ? 'البريد الإلكتروني' : 'Email'}</span>
            <a href="mailto:Info@polyfixglobal.com">Info@polyfixglobal.com</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>{isAr ? 'الهاتف' : 'Phone'}</span>
            <a href="tel:+966534944752">+966 53 494 4752</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>WhatsApp</span>
            <a href="https://wa.me/966534944752" target="_blank" rel="noopener noreferrer">+966 53 494 4752</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>{isAr ? 'العنوان' : 'Address'}</span>
            <a href="https://maps.app.goo.gl/f9gh1YD8fTQtaEFw6" target="_blank" rel="noopener noreferrer">
              {isAr ? 'احصل على الاتجاهات ←' : 'Get Directions →'}
            </a>
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
