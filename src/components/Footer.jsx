import config from '../data/config.json'

const { personal } = config

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      padding: '32px clamp(20px, 8vw, 120px)',
      borderTop: '1px solid var(--border-sub)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-muted)',
        letterSpacing: '0.08em',
      }}>
        © {year} {personal.name.toUpperCase()}
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-muted)',
        letterSpacing: '0.06em',
      }}>
        Built with React &amp; Vite
        <span style={{ color: 'var(--primary)', margin: '0 8px' }}>◆</span>
        {personal.location}
      </div>
    </footer>
  )
}
