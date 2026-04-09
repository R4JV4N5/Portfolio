import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (scrollable > 0) setProgress((window.scrollY / scrollable) * 100)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0,
        height: 2,
        width: `${progress}%`,
        background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
        zIndex: 1000,
        transition: 'width 0.1s ease',
        boxShadow: '0 0 8px rgba(200, 255, 0, 0.6)',
      }}
      aria-hidden="true"
    />
  )
}
