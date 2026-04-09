import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import config from '../data/config.json'

const { projects } = config

/* 3D Tilt card hook */
function useTilt() {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`
  }
  const onMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)'
    }
  }

  return { ref, onMouseMove, onMouseLeave }
}

const TAG_COLORS = ['var(--primary)', 'var(--secondary)', 'var(--blue)', '#FF9A3C']

function ProjectCard({ project, index }) {
  const tilt = useTilt()
  const isFirst = index === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="project-card"
        style={{ transition: 'transform 0.3s ease, border-color 0.4s ease, box-shadow 0.4s ease' }}
      >
        {/* Project number watermark */}
        <div style={{
          position: 'absolute', top: 24, right: 28,
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 80,
          color: 'var(--primary)',
          opacity: 0.06,
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.04em',
        }}>
          {project.number}
        </div>

        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 10,
            background: isFirst ? 'var(--primary-dim)' : 'var(--secondary-dim)',
            border: `1px solid ${isFirst ? 'rgba(0,229,204,0.2)' : 'rgba(255,87,87,0.2)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 14, height: 14, borderRadius: '50%',
              background: isFirst ? 'var(--primary)' : 'var(--secondary)',
              opacity: 0.8,
            }} />
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <a
              href={config.personal.github}
              target="_blank" rel="noopener noreferrer"
              style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border-sub)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              aria-label="View on GitHub"
            >
              <FiGithub size={14} />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(26px, 3.5vw, 40px)',
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          lineHeight: 1.05,
          marginBottom: 16,
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 15,
          lineHeight: 1.7,
          color: 'var(--text-dim)',
          marginBottom: 32,
          maxWidth: 420,
        }}>
          {project.description}
        </p>

        {/* Footer: tags + CTA */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {project.tech.map((t, i) => (
              <span
                key={t}
                className="tag"
                style={{
                  color: TAG_COLORS[i % TAG_COLORS.length],
                  background: `${TAG_COLORS[i % TAG_COLORS.length]}14`,
                  borderColor: `${TAG_COLORS[i % TAG_COLORS.length]}28`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 6,
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: isFirst ? 'var(--primary)' : 'var(--secondary)',
              padding: 0,
            }}
          >
            View Project <FiArrowUpRight size={15} />
          </motion.button>
        </div>

        {/* Bottom accent line */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, ${isFirst ? 'var(--primary)' : 'var(--secondary)'}, transparent)`,
          borderRadius: '0 0 16px 16px',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }} className="card-bottom-line" />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <div className="section-num" aria-hidden="true">03</div>

      <motion.div
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Selected Work
      </motion.div>

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        style={{ marginBottom: 64 }}
      >
        What I've<br />
        <span className="text-gradient">Built.</span>
      </motion.h2>

      <div className="projects-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 24,
      }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
