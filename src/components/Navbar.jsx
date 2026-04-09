import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Work',       href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 900,
        padding: '0 clamp(20px, 8vw, 120px)',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled
          ? 'rgba(6, 6, 16, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(200, 255, 0, 0.06)'
          : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 22,
          color: 'var(--text)',
          textDecoration: 'none',
          letterSpacing: '-0.03em',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        DV
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: 'var(--primary)',
          display: 'inline-block',
          marginBottom: 2,
        }} />
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}
        className="hidden-mobile"
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'none', flexDirection: 'column', gap: 5, padding: 8,
        }}
        className="show-mobile"
      >
        {[0, 1, 2].map((i) => (
          <span key={i} style={{
            display: 'block', width: 24, height: 1.5,
            background: menuOpen && i === 1 ? 'transparent' : 'var(--text)',
            transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4px, 5px)' :
                       menuOpen && i === 2 ? 'rotate(-45deg) translate(4px, -5px)' : 'none',
            transition: 'all 0.3s ease',
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: 72, left: 0, right: 0,
              background: 'rgba(6, 6, 16, 0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '24px clamp(20px, 8vw, 120px) 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 28,
                  color: 'var(--text)',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
