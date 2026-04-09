import { motion } from 'framer-motion'
import {
  SiPython, SiJavascript,
  SiReact, SiHtml5,
  SiFastapi, SiMysql, SiRedis,
  SiDotnet,
} from 'react-icons/si'
import { TbBrandCSharp, TbBrandCss3 } from 'react-icons/tb'
import { FiDatabase, FiLayers, FiCode, FiCpu } from 'react-icons/fi'
import config from '../data/config.json'

const { skills } = config

/* Marquee items — all skills combined */
const ALL_SKILLS = [
  { name: 'Python',       Icon: SiPython },
  { name: 'C#',           Icon: TbBrandCSharp },
  { name: 'JavaScript',   Icon: SiJavascript },
  { name: 'SQL',          Icon: FiDatabase },
  { name: 'React',        Icon: SiReact },
  { name: 'HTML',         Icon: SiHtml5 },
  { name: 'CSS',          Icon: TbBrandCss3 },
  { name: '.NET',         Icon: SiDotnet },
  { name: 'FastAPI',      Icon: SiFastapi },
  { name: 'Microservices',Icon: FiLayers },
  { name: 'MySQL',        Icon: SiMysql },
  { name: 'Redis',        Icon: SiRedis },
]

const CATEGORIES = [
  {
    label: 'Programming',
    icon: FiCode,
    color: 'var(--primary)',
    items: skills.programming,
  },
  {
    label: 'Frontend',
    icon: FiLayers,
    color: 'var(--secondary)',
    items: skills.frontend,
  },
  {
    label: 'Backend',
    icon: FiCpu,
    color: 'var(--blue)',
    items: skills.backend,
  },
  {
    label: 'Database',
    icon: FiDatabase,
    color: '#FF9A3C',
    items: skills.database,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
}

export default function Skills() {
  const doubled = [...ALL_SKILLS, ...ALL_SKILLS]

  return (
    <section id="skills" className="section-wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
      <div className="section-num" aria-hidden="true" style={{ right: 0 }}>02</div>

      <div style={{ padding: '0 clamp(20px, 8vw, 120px)' }}>
        <motion.div
          className="section-label"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          Skills &amp; Technologies
        </motion.div>

        <motion.h2
          className="section-heading"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} custom={1}
          style={{ marginBottom: 64 }}
        >
          The Tech<br />
          <span className="text-gradient">Stack.</span>
        </motion.h2>
      </div>

      {/* Marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          overflow: 'hidden',
          borderTop: '1px solid var(--border-sub)',
          borderBottom: '1px solid var(--border-sub)',
          background: 'var(--surface)',
          padding: '20px 0',
          marginBottom: 72,
          position: 'relative',
        }}
      >
        {/* Fade edges */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, var(--surface) 0%, transparent 8%, transparent 92%, var(--surface) 100%)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <div className="marquee-track" style={{ gap: 0 }}>
          {doubled.map(({ name, Icon }, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '0 36px',
                borderRight: '1px solid var(--border-sub)',
                flexShrink: 0,
              }}
            >
              <Icon size={18} style={{ color: 'var(--primary)', opacity: 0.8, flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--text-dim)',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
              }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skill categories grid */}
      <div style={{ padding: '0 clamp(20px, 8vw, 120px)' }}>
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 20,
          }}
        >
          {CATEGORIES.map(({ label, icon: Icon, color, items }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="skill-category"
              whileHover={{ y: -4 }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: `${color}14`,
                  border: `1px solid ${color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={16} style={{ color }} />
                </div>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--text)',
                }}>
                  {label}
                </span>
              </div>

              {/* Skills list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {items.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '8px 12px',
                      borderRadius: 6,
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: color,
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      color: 'var(--text-dim)',
                      letterSpacing: '0.04em',
                    }}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
