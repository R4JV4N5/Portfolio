import { createContext, useContext, useState, useEffect } from 'react'

export const LAYOUTS = {
  FLOW:    'flow',
  SIDEBAR: 'sidebar',
  BENTO:   'bento',
}

const LayoutContext = createContext(null)

export function LayoutProvider({ children }) {
  const [layout, setLayout] = useState(
    () => localStorage.getItem('pf-layout') || LAYOUTS.FLOW
  )

  useEffect(() => {
    localStorage.setItem('pf-layout', layout)
  }, [layout])

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayout = () => useContext(LayoutContext)
