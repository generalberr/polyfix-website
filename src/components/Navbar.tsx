'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const enLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

const arLinks = [
  { href: '/ar', label: 'الرئيسية' },
  { href: '/ar/services', label: 'خدماتنا' },
  { href: '/ar/about', label: 'من نحن' },
  { href: '/ar/careers', label: 'وظائف' },
  { href: '/ar/contact', label: 'اتصل بنا' },
]

// Maps EN path to AR path and vice versa
const pathMap: Record<string, string> = {
  '/': '/ar',
  '/services': '/ar/services',
  '/about': '/ar/about',
  '/careers': '/ar/careers',
  '/contact': '/ar/contact',
  '/machinery': '/ar/machinery',
  '/putty': '/ar/putty',
  '/resin': '/ar/resin',
  '/gasket': '/ar/gasket',
}

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isAr = pathname.startsWith('/ar')
  const links = isAr ? arLinks : enLinks

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Get the opposite language URL
  function getLangToggleHref() {
    if (isAr) {
      // AR -> EN: remove /ar prefix
      const enPath = pathname.replace(/^\/ar/, '') || '/'
      return enPath
    } else {
      // EN -> AR: find mapped AR path
      return pathMap[pathname] || '/ar'
    }
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${isAr ? styles.rtl : ''}`}>
        <Link href={isAr ? '/ar' : '/'} className={styles.logo}>
          <Image src="/logo.png" alt="PolyFix Logo" width={90} height={45} style={{ objectFit: 'contain', marginLeft: '-10px', marginRight: '-5px' }} />
          <span className={styles.logoText}>POLYFIX</span>
        </Link>

        <ul className={styles.links}>
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link href={href} className={`${styles.link} ${active ? styles.active : ''}`}>
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className={styles.right}>
          <Link href={getLangToggleHref()} className={styles.langToggle}>
            {isAr ? 'EN' : 'AR'}
          </Link>
          <Link href={isAr ? '/ar/contact' : '/contact'} className={styles.btnPrimary}>
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

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''} ${isAr ? styles.rtl : ''}`}>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} onClick={() => setMenuOpen(false)} className={styles.mobileLink}>
            {label}
          </Link>
        ))}
        <Link href={isAr ? '/ar/contact' : '/contact'} onClick={() => setMenuOpen(false)} className={`${styles.mobileLink} ${styles.mobileCta}`}>
          {isAr ? 'احصل على عرض سعر' : 'Get a Quote'}
        </Link>
        <Link href={getLangToggleHref()} onClick={() => setMenuOpen(false)} className={styles.mobileLink}>
          {isAr ? '🌐 English' : '🌐 العربية'}
        </Link>
      </div>
    </>
  )
}
