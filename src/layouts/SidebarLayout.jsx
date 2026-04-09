import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import config from '../data/config.json'

const { personal } = config

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Work',       href: '#projects'    },
  { label: 'Experience', href: '#experience'  },
  { label: 'Contact',    href: '#contact'     },
]

export default function SidebarLayout() {
  return (
    <>
      <ScrollProgress />

      <div className="sidebar-wrap">
        {/* ── Fixed Left Rail ── */}
        <motion.aside
          className="sidebar-rail"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0,   opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo */}
          <a
            href="#hero"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 24,
              color: 'var(--text)',
              textDecoration: 'none',
              letterSpacing: '-0.04em',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 56,
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

          {/* Nav links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1,  x: 0   }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  padding: '10px 14px',
                  borderRadius: 8,
                  transition: 'all 0.18s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--primary)'
                  e.currentTarget.style.background = 'var(--primary-dim)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-muted)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <span style={{
                  width: 20, height: 1,
                  background: 'currentColor',
                  display: 'inline-block',
                  flexShrink: 0,
                }} />
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Currently building */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ marginBottom: 28 }}
          >
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              color: 'var(--text-muted)',
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}>
              Building
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--primary)',
                display: 'inline-block',
                animation: 'pulse-dot 2s ease infinite',
                flexShrink: 0,
                marginTop: 2,
              }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                color: 'var(--text-dim)',
                lineHeight: 1.5,
              }}>
                {personal.currentlyBuilding}
              </span>
            </div>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            style={{ display: 'flex', gap: 8, marginBottom: 20 }}
          >
            {[
              { href: personal.github,              Icon: FiGithub,   label: 'GitHub'   },
              { href: personal.linkedin,            Icon: FiLinkedin, label: 'LinkedIn' },
              { href: `mailto:${personal.email}`,   Icon: FiMail,     label: 'Email'    },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-sub)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--primary)'
                  e.currentTarget.style.borderColor = 'rgba(0,229,204,0.3)'
                  e.currentTarget.style.background = 'var(--primary-dim)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-muted)'
                  e.currentTarget.style.borderColor = 'var(--border-sub)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontFamily: 'var(--font-mono)',
              fontSize: 9.5,
              color: 'var(--text-muted)',
              letterSpacing: '0.07em',
            }}
          >
            <FiMapPin size={11} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            {personal.location}
          </motion.div>
        </motion.aside>

        {/* ── Scrollable Main ── */}
        <main className="sidebar-main">
          <Hero />

          <div className="divider" style={{ margin: '0 clamp(20px, 5vw, 80px)' }} />
          <About />

          <div className="divider" style={{ margin: '0 clamp(20px, 5vw, 80px)' }} />
          <Skills />

          <div className="divider" style={{ margin: '0 clamp(20px, 5vw, 80px)' }} />
          <Projects />

          <div className="divider" style={{ margin: '0 clamp(20px, 5vw, 80px)' }} />
          <Experience />

          <div className="divider" style={{ margin: '0 clamp(20px, 5vw, 80px)' }} />
          <Contact />

          <Footer />
        </main>
      </div>
    </>
  )
}
