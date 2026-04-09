import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import config from '../data/config.json'

const { personal } = config

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
}

export default function Contact() {
  return (
    <section id="contact" className="section-wrap" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background gradient orbs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', bottom: '-30%', left: '50%',
          transform: 'translateX(-50%)',
          width: 800, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,229,204,0.07) 0%, transparent 65%)',
          filter: 'blur(2px)',
        }} />
      </div>

      <div className="section-num" aria-hidden="true">05</div>

      <motion.div
        className="section-label"
        initial="hidden" whileInView="visible"
        viewport={{ once: true }} variants={fadeUp}
      >
        Get In Touch
      </motion.div>

      {/* Big heading */}
      <motion.div
        initial="hidden" whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        style={{ marginBottom: 60 }}
      >
        {['Let\'s Build', 'Something', 'Together.'].map((line, i) => (
          <div key={i} style={{ overflow: 'hidden' }}>
            <motion.div
              variants={{
                hidden: { y: '110%', opacity: 0 },
                visible: { y: '0%', opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
              }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(36px, 8.5vw, 120px)',
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                color: i === 2 ? 'transparent' : 'var(--text)',
                ...(i === 2 ? {
                  WebkitTextStroke: '1px rgba(0,229,204,0.5)',
                } : {}),
              }}
            >
              {line}
            </motion.div>
          </div>
        ))}
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(48px, 8vw, 120px)',
        alignItems: 'start',
      }}>
        {/* Left: email + description */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true }} variants={fadeUp} custom={2}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            lineHeight: 1.8,
            color: 'var(--text-dim)',
            marginBottom: 36,
            maxWidth: 360,
          }}>
            Open to new opportunities, collaborations, and interesting problems.
            Drop me a message — I usually respond within 24 hours.
          </p>

          <div style={{ marginBottom: 20 }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--text-muted)',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}>
              Email
            </div>
            <a href={`mailto:${personal.email}`} className="email-link">
              {personal.email}
            </a>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--text-muted)',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}>
              Phone
            </div>
            <a
              href={`tel:${personal.phone}`}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(16px, 2vw, 22px)',
                color: 'var(--text-dim)',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                transition: 'color 0.2s',
              }}
            >
              {personal.phone}
            </a>
          </div>
        </motion.div>

        {/* Right: social links + location */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true }} variants={fadeUp} custom={3}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--text-muted)',
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}>
            Connect
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
            {[
              {
                label: 'GitHub',
                handle: '@R4JV4N5',
                href: personal.github,
                Icon: FiGithub,
              },
              {
                label: 'LinkedIn',
                handle: 'rajvanniyar',
                href: personal.linkedin,
                Icon: FiLinkedin,
              },
              {
                label: 'Email',
                handle: personal.email,
                href: `mailto:${personal.email}`,
                Icon: FiMail,
              },
            ].map(({ label, handle, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 6 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '18px 24px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border-sub)',
                  borderRadius: 10,
                  textDecoration: 'none',
                  transition: 'border-color 0.25s ease, background 0.25s ease',
                  cursor: 'pointer',
                  gap: 12,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,229,204,0.2)'
                  e.currentTarget.style.background = 'var(--primary-dim)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-sub)'
                  e.currentTarget.style.background = 'var(--surface)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 8,
                    background: 'var(--primary-dim)',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={16} style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 14,
                      color: 'var(--text)',
                      letterSpacing: '0.02em',
                      marginBottom: 2,
                    }}>
                      {label}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--text-muted)',
                    }}>
                      {handle}
                    </div>
                  </div>
                </div>
                <FiArrowUpRight size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              </motion.a>
            ))}
          </div>

          {/* Location */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
          }}>
            <FiMapPin size={12} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            {personal.location} · Available for remote &amp; on-site
          </div>
        </motion.div>
      </div>
    </section>
  )
}
