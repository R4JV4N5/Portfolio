import { motion } from 'framer-motion'
import { FiBriefcase, FiBookOpen } from 'react-icons/fi'
import config from '../data/config.json'

const { experience, education } = config

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
}

function TimelineItem({ role, company, duration, description, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      custom={index}
      style={{ position: 'relative', paddingLeft: 36, paddingBottom: 48 }}
    >
      {/* Timeline dot */}
      <div style={{
        position: 'absolute', left: 0, top: 6,
        width: 12, height: 12, borderRadius: '50%',
        background: 'var(--primary)',
        boxShadow: '0 0 16px rgba(0,229,204,0.5)',
        zIndex: 2,
      }} />

      {/* Timeline line */}
      <div style={{
        position: 'absolute', left: 5.5, top: 20,
        width: 1, bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0,229,204,0.3), transparent)',
      }} />

      {/* Duration tag */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        color: 'var(--primary)',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        marginBottom: 10,
      }}>
        {duration}
      </div>

      {/* Card */}
      <div
        className="card"
        style={{ padding: '28px 32px', cursor: 'default' }}
      >
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap', gap: 12,
          marginBottom: 12,
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: 4,
            }}>
              {role}
            </h3>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--primary)',
              letterSpacing: '0.06em',
            }}>
              {company}
            </div>
          </div>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: 'var(--primary-dim)',
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <FiBriefcase size={15} style={{ color: 'var(--primary)' }} />
          </div>
        </div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          lineHeight: 1.7,
          color: 'var(--text-dim)',
          margin: 0,
        }}>
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-wrap">
      <div className="section-num" aria-hidden="true">04</div>

      <motion.div
        className="section-label"
        initial="hidden" whileInView="visible"
        viewport={{ once: true }} variants={fadeUp}
      >
        Experience &amp; Education
      </motion.div>

      <motion.h2
        className="section-heading"
        initial="hidden" whileInView="visible"
        viewport={{ once: true }} variants={fadeUp} custom={1}
        style={{ marginBottom: 64 }}
      >
        Where I've<br />
        <span className="text-gradient">Grown.</span>
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(40px, 6vw, 80px)',
        alignItems: 'start',
      }}>
        {/* Experience timeline */}
        <div>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp} custom={2}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: 32,
            }}
          >
            Work History
          </motion.div>

          <div>
            {experience.map((exp, i) => (
              <TimelineItem key={exp.company} {...exp} index={i} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp} custom={3}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: 32,
            }}
          >
            Education
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {/* Duration */}
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--blue)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
              {education.year}
            </div>

            <div
              className="card"
              style={{ padding: '28px 32px' }}
            >
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-start', flexWrap: 'wrap', gap: 12,
                marginBottom: 20,
              }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(20px, 2.5vw, 28px)',
                    letterSpacing: '-0.02em',
                    color: 'var(--text)',
                    marginBottom: 4,
                  }}>
                    {education.degree}
                  </h3>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    color: 'var(--blue)',
                    letterSpacing: '0.06em',
                  }}>
                    {education.college}
                  </div>
                </div>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'var(--blue-dim)',
                  border: '1px solid rgba(68,136,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <FiBookOpen size={15} style={{ color: 'var(--blue)' }} />
                </div>
              </div>

              {/* CGPA badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>
                  CGPA
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 28,
                  color: 'var(--blue)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}>
                  {education.cgpa}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--text-muted)',
                }}>
                  / 10.0
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
