import { motion } from 'framer-motion'
import config from '../data/config.json'

const { about } = config

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
}

export default function About() {
  return (
    <section id="about" className="section-wrap">
      <div className="section-num" aria-hidden="true">01</div>

      <motion.div
        className="section-label"
        initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
      >
        About Me
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(40px, 6vw, 100px)',
        alignItems: 'start',
      }}>
        {/* Left: heading + bio */}
        <div>
          <motion.h2
            className="section-heading"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={0}
          >
            The Person<br />
            <span className="text-gradient">Behind the Code.</span>
          </motion.h2>
        </div>

        {/* Right: bio + competencies */}
        <div>
          <motion.p
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={1}
            style={{
              fontSize: 'clamp(15px, 1.4vw, 17px)',
              lineHeight: 1.8,
              color: 'var(--text-dim)',
              marginBottom: 40,
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
            }}
          >
            {about.bio}
          </motion.p>

          {/* Divider */}
          <motion.div
            className="divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left', marginBottom: 32 }}
          />

          {/* Competency chips */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
            }}
          >
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--text-muted)',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              Core Competencies
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {about.competencies.map((comp) => (
                <motion.span
                  key={comp}
                  variants={fadeUp}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: 13,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '8px 16px',
                    borderRadius: 4,
                    border: '1px solid rgba(0, 229, 204, 0.2)',
                    color: 'var(--primary)',
                    background: 'var(--primary-dim)',
                    cursor: 'default',
                    transition: 'all 0.2s ease',
                  }}
                  whileHover={{
                    background: 'rgba(0, 229, 204, 0.15)',
                    boxShadow: '0 0 20px rgba(0,229,204,0.15)',
                  }}
                >
                  {comp}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
            className="stats-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 44 }}
          >
            {[
              { value: '1+', label: 'Years Experience' },
              { value: '2', label: 'AI Products Built' },
              { value: '8.19', label: 'CGPA' },
            ].map(({ value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border-sub)',
                  borderRadius: 10,
                  padding: '20px 16px',
                  textAlign: 'center',
                }}
                whileHover={{ borderColor: 'var(--border)', y: -4 }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  color: 'var(--primary)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  marginBottom: 8,
                }}>
                  {value}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
