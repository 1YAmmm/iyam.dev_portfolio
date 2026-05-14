import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { IconSun, IconMoon, IconMenu, IconX } from './Icons'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function smoothScroll(e, href, close) {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  close?.()
}

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(1rem, 4vw, 3rem)',
        background: isDark ? 'rgba(10,10,15,0.75)' : 'rgba(245,245,250,0.8)',
        backdropFilter: 'blur(20px) saturate(1.8)',
        borderBottom: '0.5px solid var(--border)',
      }}>

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => smoothScroll(e, '#hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--text)',
            fontWeight: 600,
            fontSize: '15px',
          }}
        >
          <span style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--accent)',
            boxShadow: '0 0 8px var(--glow)',
          }} />
          Iyam.Dev
        </a>

        {/* Desktop links */}
        <div className="desktop" style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => smoothScroll(e, href)}
              className="desktop-link"
              style={{
                fontSize: '13px',
                color: 'var(--text2)',
                textDecoration: 'none',
              }}
            >
              {label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'var(--surface2)',
              border: '0.5px solid var(--border2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isDark ? <IconSun size={16} /> : <IconMoon size={16} />}
          </button>

          {/* Mobile button */}
          <button
            className="mobile-btn"
            onClick={() => setOpen(true)}
            style={{
              display: 'none',
              width: 36,
              height: 36,
              borderRadius: 10,
              border: '0.5px solid var(--border2)',
              background: 'var(--surface2)',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconMenu size={18} />
          </button>
        </div>

      </nav>

      {/* BACKDROP */}
      <div
        onClick={closeMenu}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.35)',
          backdropFilter: 'blur(6px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: '0.25s ease',
          zIndex: 200,
        }}
      />

      {/* SIDEBAR */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100%',
          width: '78%',
          maxWidth: 320,
          background: isDark
            ? 'rgba(15,15,20,0.92)'
            : 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(22px)',
          zIndex: 300,
          padding: '20px',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.15)',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ fontWeight: 600 }}>Menu</span>

          <button
            onClick={closeMenu}
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              border: '0.5px solid var(--border2)',
              background: 'var(--surface2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconX size={18} />
          </button>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => smoothScroll(e, href, closeMenu)}
              style={{
                fontSize: 16,
                color: 'var(--text)',
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '0.5px solid var(--border)',
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </aside>

      {/* responsive */}
      <style>{`
        @media (max-width: 600px) {
          .desktop-link { display: none; }
          .mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}