'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Product' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isAr = lang === 'ar'
  const prefix = isAr ? '/ar' : ''

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <Link href={isAr ? '/ar' : '/'} className={styles.logo}>
          <Image src="/logo.png" alt="PolyFix Logo" width={48} height={28} style={{ objectFit: 'contain' }} />
          <span className={styles.logoText}>POLYFIX</span>
        </Link>

        <ul className={styles.links}>
          {links.map(({ href, label }) => {
            const fullHref = prefix + href
            const active = pathname === fullHref || (href === '/' && pathname === prefix)
            return (
              <li key={href}>
                <Link href={fullHref} className={`${styles.link} ${active ? styles.active : ''}`}>
                  {isAr ? arLabels[label] : label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className={styles.right}>
          <Link href={isAr ? '/' : '/ar'} className={styles.langToggle}>
            {isAr ? 'EN' : 'AR'}
          </Link>
          <Link href={`${prefix}/contact`} className={styles.btnPrimary}>
            {isAr ? 'احصل على عرض سعر' : 'Get a Quote'}
          </Link>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {links.map(({ href, label }) => (
          <Link key={href} href={prefix + href} onClick={() => setMenuOpen(false)} className={styles.mobileLink}>
            {isAr ? arLabels[label] : label}
          </Link>
        ))}
        <Link href={`${prefix}/contact`} onClick={() => setMenuOpen(false)} className={`${styles.mobileLink} ${styles.mobileCta}`}>
          {isAr ? 'احصل على عرض سعر' : 'Get a Quote'}
        </Link>
      </div>
    </>
  )
}

const arLabels: Record<string, string> = {
  Home: 'الرئيسية',
  Product: 'المنتج',
  About: 'من نحن',
  Contact: 'اتصل بنا',
}
