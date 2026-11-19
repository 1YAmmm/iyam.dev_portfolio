import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { IconSun, IconMoon } from './Icons'
import { SECTIONS, pad } from './ui'

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return active
}

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const iconBtn =
    'flex h-9 w-9 items-center justify-center border border-line text-soft transition-colors hover:border-fg hover:text-fg'

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 h-16 border-b border-line bg-bg/80 backdrop-blur-md">
        <div className="sheet pad-x flex h-full items-center justify-between">
          <a href="#hero" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-7 w-7 place-items-center border border-fg">
              <span className="h-2 w-2 bg-fg" />
            </span>
            <span className="font-display text-lg leading-none">Iyam.Dev</span>
          </a>

          <div className="flex items-center gap-1">
            <ul className="mr-3 hidden items-center md:flex">
              {SECTIONS.map(({ id, label }, i) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={active === id ? 'true' : undefined}
                    className={`label flex items-center gap-1.5 px-3 py-2 transition-colors hover:text-fg ${
                      active === id ? 'text-fg' : ''
                    }`}
                  >
                    <span className={active === id ? 'text-fg' : 'text-muted'}>{pad(i + 1)}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={toggleTheme}
              className={iconBtn}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? <IconSun size={15} /> : <IconMoon size={15} />}
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`${iconBtn} ml-2 md:hidden`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className="relative block h-2.5 w-4">
                <span className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ${open ? 'top-1/2 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ${open ? 'top-1/2 -rotate-45' : 'bottom-0'}`} />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 bottom-0 top-16 z-40 bg-bg/95 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <ul className="sheet h-full border-x-0">
          {SECTIONS.map(({ id, label }, i) => (
            <li key={id} className="border-b border-line">
              <a
                href={`#${id}`}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="pad-x flex items-baseline justify-between py-6"
              >
                <span className="font-display text-4xl">{label}</span>
                <span className="label">{pad(i + 1)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
