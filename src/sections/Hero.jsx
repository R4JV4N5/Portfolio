import { motion } from 'framer-motion'
import { FiArrowDownRight, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'
import LineWaves from '../components/LineWaves'
import config from '../data/config.json'

const { personal } = config

/* ── Word reveal — overflow clip masks the slide-up animation ── */
function HeroWord({ word, delay }) {
  return (
    /* paddingBottom gives cap letters room; overflow hidden acts as reveal mask */
    <div style={{
      overflow: 'hidden',
      display: 'block',
      lineHeight: 1,
      paddingTop: '0.15em',
      paddingBottom: '0.12em',
      marginTop: '-0.15em',   /* cancel the extra space so lines stay tight */
    }}>
      <motion.span
        style={{ display: 'block' }}
        initial={{ y: '110%', opacity: 0 }}
        animate={{ y: '0%',   opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {word}
      </motion.span>
    </div>
  )
}

export default function Hero() {
  const nameParts = personal.name.toUpperCase().split(' ')

  return (
    <section
      id="hero"
      className="dot-grid"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        /* horizontal overflow guard only — vertical must stay visible for name */
        overflowX: 'hidden',
        overflowY: 'visible',
      }}
    >
      {/* ── Layer 0: LineWaves – NO pointerEvents block so hover works ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        /* pointerEvents defaults to 'auto' → canvas receives mouse events */
      }}>
        <LineWaves
          color1="#00E5CC"
          color2="#6C8EFF"
          color3="#E8F2FF"
          brightness={0.42}
          speed={0.22}
          warpIntensity={0.9}
          rotation={-42}
          innerLineCount={30}
          outerLineCount={34}
          colorCycleSpeed={0.6}
          enableMouseInteraction={true}
          mouseInfluence={2.2}
        />
      </div>

      {/* ── Layer 1a: Left-side text backdrop — strongest where text lives ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: `
          linear-gradient(
            105deg,
            rgba(6,12,20,0.92) 0%,
            rgba(6,12,20,0.78) 35%,
            rgba(6,12,20,0.38) 65%,
            transparent 100%
          )
        `,
      }} />

      {/* ── Layer 1b: Top + bottom edge darkening ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: `
          linear-gradient(to bottom,
            rgba(6,12,20,0.6) 0%,
            transparent 18%,
            transparent 75%,
            rgba(6,12,20,0.55) 100%
          )
        `,
      }} />

      {/* ── Layer 2: All foreground content ── */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(100px, 15vh, 160px) clamp(20px, 8vw, 120px) 80px',
      }}>

        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(90deg, var(--primary) 0%, rgba(0,229,204,0.1) 40%, transparent 70%)',
            transformOrigin: 'left',
          }}
        />

        {/* Currently building badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 44, maxWidth: '100%' }}
        >
          <span style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--primary)',
            display: 'inline-block',
            animation: 'pulse-dot 2s ease infinite',
            flexShrink: 0,
            marginTop: 3,
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--primary)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            overflowWrap: 'anywhere',
            lineHeight: 1.5,
          }}>
            Building → {personal.currentlyBuilding}
          </span>
        </motion.div>

        {/* Giant name — paddingRight prevents letter-spacing overflow clip */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(52px, 13vw, 192px)',
          letterSpacing: '-0.03em',
          marginBottom: 44,
          paddingRight: '0.06em',       /* room for last glyph's right edge */
        }}>
          {nameParts.map((part, i) => (
            <HeroWord key={part} word={part} delay={0.35 + i * 0.18} />
          ))}
        </div>

        {/* Meta row */}
        <div style={{
          display: 'flex',
          gap: 'clamp(24px, 6vw, 80px)',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          marginBottom: 52,
        }}>
          {[
            { label: 'ROLE',     value: personal.title },
            { label: 'FOCUS',    value: personal.tagline },
            { label: 'LOCATION', value: personal.location, icon: <FiMapPin size={12} /> },
          ].map(({ label, value, icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 + i * 0.1 }}
              style={{ maxWidth: 260, minWidth: 0, flex: '1 1 200px' }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: 'var(--text-muted)',
                letterSpacing: '0.07em',
                marginBottom: 8,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                — {label}
              </div>
              <div style={{
                fontFamily: i === 0 ? 'var(--font-display)' : 'var(--font-body)',
                fontWeight: i === 0 ? 700 : 400,
                fontSize: i === 0 ? 'clamp(16px, 1.8vw, 22px)' : 15,
                color: 'var(--text)',          /* full white — wave backdrop dims it enough */
                lineHeight: 1.5,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                {icon}{value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTAs + Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.15 }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a href="#projects" className="btn-primary">
            View Work <FiArrowDownRight size={15} />
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
          <div style={{ display: 'flex', gap: 10, marginLeft: 8 }}>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FiGithub size={17} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FiLinkedin size={17} />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="scroll-indicator"
          style={{
            position: 'absolute',
            bottom: 40, right: 'clamp(20px, 8vw, 120px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
          }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--text-muted)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}>
            scroll
          </span>
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 1, height: 56,
              background: 'linear-gradient(to bottom, var(--primary), transparent)',
              transformOrigin: 'top',
            }}
          />
        </motion.div>

      </div>{/* end Layer 2 */}
    </section>
  )
}
