'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { MoonPhase, fetchMoonPhase, calculateLocalMoonPhase } from '@/lib/moonPhase'

interface ThemeContextType {
  moonPhase: MoonPhase | null
  isLoading: boolean
}

const ThemeContext = createContext<ThemeContextType>({
  moonPhase: null,
  isLoading: true,
})

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [moonPhase, setMoonPhase] = useState<MoonPhase | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadMoonPhase() {
      try {
        // Try fetching from API first
        const phase = await fetchMoonPhase()
        setMoonPhase(phase)
        applyTheme(phase)
      } catch (error) {
        // Fallback to local calculation
        const localPhase = calculateLocalMoonPhase()
        setMoonPhase(localPhase)
        applyTheme(localPhase)
      } finally {
        setIsLoading(false)
      }
    }

    loadMoonPhase()

    // Refresh every hour
    const interval = setInterval(loadMoonPhase, 3600000)
    return () => clearInterval(interval)
  }, [])

  function applyTheme(phase: MoonPhase) {
    const root = document.documentElement
    root.style.setProperty('--background', phase.theme.background)
    root.style.setProperty('--foreground', phase.theme.foreground)
    root.style.setProperty('--primary', phase.theme.primary)
    root.style.setProperty('--secondary', phase.theme.secondary)
    root.style.setProperty('--accent', phase.theme.accent)
    root.style.setProperty('--glow', phase.theme.glow)
  }

  return (
    <ThemeContext.Provider value={{ moonPhase, isLoading }}>
      {children}
    </ThemeContext.Provider>
  )
}
