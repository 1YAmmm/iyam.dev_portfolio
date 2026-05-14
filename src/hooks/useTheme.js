import { useState, useEffect } from 'react'

/**
 * Manages dark/light theme by toggling the `light` class on <body>.
 * Persists preference to localStorage.
 */
export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    document.body.classList.toggle('light', !isDark)
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => setIsDark((prev) => !prev)

  return { isDark, toggleTheme }
}
