import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiZap } from 'react-icons/fi'
import config from '../data/config.json'

const { personal, about, skills, projects, experience, education } = config

/* ── Shared card wrapper ── */
function Card({ area, children, style, accent = false, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        gridArea: area,
        background: 'var(--surface)',
        border: `1px solid ${accent ? 'rgba(0,229,204,0.18)' : 'var(--border-sub)'}`,
        borderRadius: 20,
        padding: 28,
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        ...style,
      }}
      whileHover={{
        borderColor: 'rgba(0,229,204,0.22)',
        boxShadow: '0 16px 48px rgba(0,0,0,0.5), 0 0 32px rgba(0,229,204,0.05)',
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

const allSkills = [
  ...config.skills.programming.map(s => ({ name: s, color: 'var(--primary)' })),
  ...config.skills.frontend.map(s    => ({ name: s, color: 'var(--secondary)' })),
  ...config.skills.backend.map(s     => ({ name: s, color: 'var(--blue)' })),
  ...config.skills.database.map(s    => ({ name: s, color: '#FF9A3C' })),
]

export default function BentoLayout() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      position: 'relative',
    }}>
      {/* Ambient gradient */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 60% 40% at 25% 15%, rgba(0,229,204,0.06) 0%, transparent 70%),
          radial-gradient(ellipse 40% 30% at 75% 80%, rgba(108,142,255,0.05) 0%, transparent 70%)
        `,
      }} />

      {/* Header bar */}
      <div style={{
        position: 'sticky',
        top: 0, zIndex: 100,
        padding: '0 clamp(16px, 3vw, 40px)',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(6,12,20,0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-sub)',
      }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 18,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          display: 'flex',
          alignItems: 'center',
          gap: 7,
        }}>
          DV
          <span style={{
            width: 5, height: 5, borderRadius: '50%',
            background: 'var(--primary)',
            display: 'inline-block',
            marginBottom: 2,
          }} />
        </div>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          Portfolio overview
        </div>
      </div>

      {/* Bento grid */}
      <div
        className="bento-grid"
        style={{ position: 'relative', zIndex: 1 }}
      >

        {/* ── HERO CARD ── */}
        <Card area="hero" accent style={{
          background: 'linear-gradient(135deg, rgba(0,229,204,0.1) 0%, rgba(108,142,255,0.06) 50%, var(--surface) 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          minHeight: 320,
        }}>
          {/* Decorative circle */}
          <div style={{
            position: 'absolute', top: -60, right: -60,
            width: 200, height: 200, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,229,204,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', top: 24, left: 28,
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--primary)',
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--primary)',
              animation: 'pulse-dot 2s ease infinite',
              display: 'inline-block',
            }} />
            Available
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
              color: 'var(--text)',
              marginBottom: 16,
            }}>
              {personal.name.toUpperCase().split(' ').map((w, i) => (
                <div key={i}>{w}</div>
              ))}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--primary)',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}>
              {personal.title}
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '9px 16px',
                  background: 'var(--primary)',
                  color: '#060C14',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: 6,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <FiGithub size={12} /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px',
                  background: 'transparent',
                  color: 'var(--text)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <FiLinkedin size={12} /> LinkedIn
              </a>
            </div>
          </div>
        </Card>

        {/* ── BUILDING CARD ── */}
        <Card area="build" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'var(--primary-dim)',
            border: '1px solid rgba(0,229,204,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 4,
          }}>
            <FiZap size={16} style={{ color: 'var(--primary)' }} />
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--text-muted)',
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
          }}>
            Currently Building
          </div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            lineHeight: 1.6,
            color: 'var(--text-dim)',
            flex: 1,
          }}>
            {personal.currentlyBuilding}
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--primary)',
            letterSpacing: '0.07em',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <span style={{
              width: 5, height: 5, borderRadius: '50%',
              background: 'var(--primary)',
              display: 'inline-block',
              animation: 'pulse-dot 2s ease infinite',
            }} />
            In progress
          </div>
        </Card>

        {/* ── LOCATION CARD ── */}
        <Card area="loc" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'rgba(108,142,255,0.08)',
            border: '1px solid rgba(108,142,255,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 'auto',
          }}>
            <FiMapPin size={16} style={{ color: 'var(--blue)' }} />
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              color: 'var(--text-muted)',
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}>
              Location
            </div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 15,
              color: 'var(--text)',
              letterSpacing: '-0.01em',
              marginBottom: 4,
            }}>
              {personal.location}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              color: 'var(--text-muted)',
              letterSpacing: '0.06em',
            }}>
              Remote &amp; on-site
            </div>
          </div>
        </Card>

        {/* ── STATS CARD ── */}
        <Card area="stats" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          padding: 0,
          overflow: 'hidden',
          background: 'transparent',
          border: '1px solid var(--border-sub)',
        }}>
          {[
            { value: '1+',   label: 'Years Exp.'   },
            { value: '2',    label: 'AI Products'  },
            { value: '8.19', label: 'CGPA'         },
          ].map(({ value, label }, i) => (
            <div key={label} style={{
              background: 'var(--surface)',
              padding: '24px 16px',
              textAlign: 'center',
              borderRight: i < 2 ? '1px solid var(--border-sub)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 6,
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                color: 'var(--primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}>
                {value}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 9,
                color: 'var(--text-muted)',
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
              }}>
                {label}
              </div>
            </div>
          ))}
        </Card>

        {/* ── BIO CARD ── */}
        <Card area="bio">
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--primary)',
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            marginBottom: 16,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ width: 24, height: 1, background: 'var(--primary)', display: 'inline-block' }} />
            About
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            lineHeight: 1.8,
            color: 'var(--text-dim)',
            marginBottom: 24,
          }}>
            {about.bio}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {about.competencies.map(c => (
              <span
                key={c}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  padding: '5px 10px',
                  borderRadius: 4,
                  background: 'var(--primary-dim)',
                  color: 'var(--primary)',
                  border: '1px solid rgba(0,229,204,0.15)',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </Card>

        {/* ── SKILLS CARD ── */}
        <Card area="skills">
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--primary)',
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            marginBottom: 16,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ width: 24, height: 1, background: 'var(--primary)', display: 'inline-block' }} />
            Tech Stack
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {allSkills.map(({ name, color }) => (
              <span
                key={name}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '6px 12px',
                  borderRadius: 5,
                  background: `${color}14`,
                  color: color,
                  border: `1px solid ${color}28`,
                  transition: 'all 0.18s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${color}22`
                  e.currentTarget.style.borderColor = `${color}50`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = `${color}14`
                  e.currentTarget.style.borderColor = `${color}28`
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </Card>

        {/* ── PROJECT 1 CARD ── */}
        <Card area="proj1" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--text-muted)',
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>
            Featured project
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(22px, 3vw, 32px)',
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            lineHeight: 1.05,
            marginBottom: 12,
          }}>
            {projects[0].title}
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            lineHeight: 1.7,
            color: 'var(--text-dim)',
            marginBottom: 20,
            flex: 1,
          }}>
            {projects[0].description}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {projects[0].tech.map((t, i) => {
                const colors = ['var(--primary)', 'var(--secondary)', 'var(--blue)']
                const c = colors[i % colors.length]
                return (
                  <span key={t} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 9,
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                    padding: '4px 9px', borderRadius: 4,
                    background: `${c}14`, color: c, border: `1px solid ${c}28`,
                  }}>{t}</span>
                )
              })}
            </div>
            <a href={personal.github} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 5,
                fontFamily: 'var(--font-mono)', fontSize: 10,
                color: 'var(--primary)', textDecoration: 'none',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <FiGithub size={13} /> View
            </a>
          </div>
          {/* accent line */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
            background: 'linear-gradient(90deg, var(--primary), transparent)',
            borderRadius: '0 0 20px 20px',
          }} />
        </Card>

        {/* ── PROJECT 2 CARD ── */}
        <Card area="proj2" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--text-muted)',
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>
            Project 02
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(18px, 2.2vw, 24px)',
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            lineHeight: 1.1,
            marginBottom: 10,
          }}>
            {projects[1].title}
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 12.5,
            lineHeight: 1.65,
            color: 'var(--text-dim)',
            flex: 1,
            marginBottom: 16,
          }}>
            {projects[1].description}
          </p>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {projects[1].tech.map((t, i) => {
              const colors = ['var(--secondary)', 'var(--blue)']
              const c = colors[i % colors.length]
              return (
                <span key={t} style={{
                  fontFamily: 'var(--font-mono)', fontSize: 9,
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                  padding: '4px 9px', borderRadius: 4,
                  background: `${c}14`, color: c, border: `1px solid ${c}28`,
                }}>{t}</span>
              )
            })}
          </div>
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
            background: 'linear-gradient(90deg, var(--secondary), transparent)',
            borderRadius: '0 0 20px 20px',
          }} />
        </Card>

        {/* ── EXPERIENCE CARD ── */}
        <Card area="exp" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              color: 'var(--primary)',
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              marginBottom: 16,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ width: 24, height: 1, background: 'var(--primary)', display: 'inline-block' }} />
              Experience
            </div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 16,
              color: 'var(--text)',
              letterSpacing: '-0.01em',
              marginBottom: 4,
            }}>
              {experience[0].role}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--primary)',
              letterSpacing: '0.06em',
              marginBottom: 12,
            }}>
              {experience[0].company}
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              lineHeight: 1.65,
              color: 'var(--text-dim)',
            }}>
              {experience[0].description}
            </p>
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--text-muted)',
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            marginTop: 16,
            paddingTop: 16,
            borderTop: '1px solid var(--border-sub)',
          }}>
            {experience[0].duration}
          </div>
        </Card>

        {/* ── CONTACT CARD ── */}
        <Card area="cta" accent style={{
          background: 'linear-gradient(135deg, rgba(0,229,204,0.08) 0%, var(--surface) 60%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              color: 'var(--primary)',
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              Get in touch
            </div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(24px, 3.5vw, 40px)',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              color: 'var(--text)',
              marginBottom: 16,
            }}>
              Let's Build<br />
              <span style={{
                WebkitTextStroke: '1px rgba(0,229,204,0.5)',
                WebkitTextFillColor: 'transparent',
              }}>
                Together.
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              lineHeight: 1.7,
              color: 'var(--text-dim)',
              maxWidth: 320,
            }}>
              Open to new opportunities, collaborations, and interesting problems.
            </p>
          </div>
          <a
            href={`mailto:${personal.email}`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px',
              background: 'var(--primary)',
              color: '#060C14',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 8,
              alignSelf: 'flex-start',
              marginTop: 24,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <FiMail size={13} /> {personal.email}
          </a>
        </Card>

        {/* ── SOCIAL CARD ── */}
        <Card area="soc" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--text-muted)',
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            marginBottom: 6,
          }}>
            Connect
          </div>
          {[
            { label: 'GitHub',   handle: '@R4JV4N5',        href: personal.github,            Icon: FiGithub   },
            { label: 'LinkedIn', handle: 'rajvanniyar',      href: personal.linkedin,          Icon: FiLinkedin },
            { label: 'Email',    handle: personal.email,     href: `mailto:${personal.email}`, Icon: FiMail     },
          ].map(({ label, handle, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 16px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--border-sub)',
                borderRadius: 10,
                textDecoration: 'none',
                transition: 'all 0.18s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,229,204,0.2)'
                e.currentTarget.style.background = 'var(--primary-dim)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-sub)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon size={14} style={{ color: 'var(--primary)' }} />
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700, fontSize: 12,
                    color: 'var(--text)', marginBottom: 1,
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.05em',
                  }}>
                    {handle}
                  </div>
                </div>
              </div>
              <FiArrowUpRight size={13} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            </a>
          ))}

          {/* Education footnote */}
          <div style={{
            marginTop: 'auto',
            paddingTop: 16,
            borderTop: '1px solid var(--border-sub)',
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--text-muted)',
            letterSpacing: '0.07em',
            lineHeight: 1.6,
          }}>
            {education.college}<br />
            {education.degree} · {education.year}
          </div>
        </Card>

      </div>
    </div>
  )
}
