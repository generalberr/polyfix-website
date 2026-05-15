'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="PolyFix Logo" width={180} height={90} style={{ objectFit: 'contain', marginLeft: '-20px', marginRight: '-10px' }} />
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
          <Link href="/contact" className={styles.btnPrimary}>Get a Quote</Link>
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
          <Link key={href} href={href} onClick={() => setMenuOpen(false)} className={styles.mobileLink}>
            {label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setMenuOpen(false)} className={`${styles.mobileLink} ${styles.mobileCta}`}>
          Get a Quote
        </Link>
      </div>
    </>
  )
}
