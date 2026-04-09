import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLayout, LAYOUTS } from '../context/LayoutContext'

/* ── Mini SVG previews representing each layout ── */
const FlowIcon = () => (
  <svg viewBox="0 0 44 32" fill="currentColor" width="44" height="32">
    <rect x="2" y="3"  width="40" height="7"  rx="2.5"/>
    <rect x="2" y="13" width="40" height="7"  rx="2.5" opacity="0.65"/>
    <rect x="2" y="23" width="40" height="6"  rx="2.5" opacity="0.35"/>
  </svg>
)

const SidebarIcon = () => (
  <svg viewBox="0 0 44 32" fill="currentColor" width="44" height="32">
    <rect x="2"  y="2" width="10" height="28" rx="2.5"/>
    <rect x="15" y="2" width="27" height="12" rx="2.5"/>
    <rect x="15" y="17" width="27" height="13" rx="2.5" opacity="0.65"/>
  </svg>
)

const BentoIcon = () => (
  <svg viewBox="0 0 44 32" fill="currentColor" width="44" height="32">
    <rect x="2"  y="2"  width="24" height="14" rx="2.5"/>
    <rect x="29" y="2"  width="13" height="6"  rx="2.5"/>
    <rect x="29" y="10" width="13" height="6"  rx="2.5"/>
    <rect x="2"  y="19" width="12" height="11" rx="2.5"/>
    <rect x="17" y="19" width="25" height="11" rx="2.5" opacity="0.65"/>
  </svg>
)

const OPTIONS = [
  { id: LAYOUTS.FLOW,    label: 'Flow',    desc: 'Full scroll',  Icon: FlowIcon    },
  { id: LAYOUTS.SIDEBAR, label: 'Sidebar', desc: 'Fixed rail',   Icon: SidebarIcon },
  { id: LAYOUTS.BENTO,   label: 'Bento',   desc: 'Grid view',    Icon: BentoIcon   },
]

export default function LayoutSwitcher() {
  const { layout, setLayout } = useLayout()
  const [open, setOpen] = useState(false)

  return (
    <div style={{
      position: 'fixed',
      bottom: 32,
      right: 32,
      zIndex: 9990,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 10,
    }}>
      {/* Options panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.93 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{    opacity: 0, y: 12, scale: 0.93 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              boxShadow: '0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,229,204,0.06)',
            }}
          >
            {/* Header */}
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              paddingLeft: 6,
              paddingBottom: 4,
              borderBottom: '1px solid var(--border-sub)',
              marginBottom: 2,
            }}>
              Layout
            </div>

            {OPTIONS.map(({ id, label, desc, Icon }) => {
              const active = layout === id
              return (
                <button
                  key={id}
                  onClick={() => { setLayout(id); setOpen(false) }}
                  style={{
                    background: active ? 'var(--primary-dim)' : 'transparent',
                    border: `1px solid ${active ? 'rgba(0,229,204,0.35)' : 'var(--border-sub)'}`,
                    borderRadius: 10,
                    padding: '10px 12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    color: active ? 'var(--primary)' : 'var(--text-dim)',
                    transition: 'all 0.18s ease',
                    textAlign: 'left',
                    width: '100%',
                  }}
                  onMouseEnter={e => {
                    if (!active) {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.color = 'var(--text)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      e.currentTarget.style.borderColor = 'var(--border-sub)'
                      e.currentTarget.style.color = 'var(--text-dim)'
                    }
                  }}
                >
                  <div style={{ opacity: active ? 1 : 0.45, flexShrink: 0 }}>
                    <Icon />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 13,
                      letterSpacing: '0.01em',
                      lineHeight: 1.2,
                    }}>
                      {label}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 9.5,
                      color: active ? 'rgba(0,229,204,0.7)' : 'var(--text-muted)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      marginTop: 3,
                    }}>
                      {desc}
                    </div>
                  </div>
                  {active && (
                    <div style={{
                      marginLeft: 'auto',
                      width: 6, height: 6, borderRadius: '50%',
                      background: 'var(--primary)',
                      flexShrink: 0,
                    }} />
                  )}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        style={{
          width: 46,
          height: 46,
          borderRadius: '50%',
          background: open ? 'var(--primary)' : 'var(--surface)',
          border: `1px solid ${open ? 'var(--primary)' : 'var(--border)'}`,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: open ? '#060C14' : 'var(--primary)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          transition: 'background 0.22s ease, color 0.22s ease, border-color 0.22s ease',
        }}
        aria-label="Switch layout"
      >
        {/* 2×2 grid icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <rect x="1" y="1" width="6" height="6" rx="1.5"/>
          <rect x="9" y="1" width="6" height="6" rx="1.5"/>
          <rect x="1" y="9" width="6" height="6" rx="1.5"/>
          <rect x="9" y="9" width="6" height="6" rx="1.5"/>
        </svg>
      </motion.button>
    </div>
  )
}
