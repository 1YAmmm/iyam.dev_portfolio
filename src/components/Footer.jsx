import { personal } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        padding: '32px clamp(1rem, 6vw, 4rem)',
        borderTop: '0.5px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        background: 'var(--bg)',
      }}
    >
      <div style={{ fontSize: '12px', color: 'var(--text3)', fontFamily: '"DM Mono", monospace' }}>
        © {year} {personal.name}. All rights reserved.
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* Quick links */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {['#about', '#projects', '#contact'].map((href) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                fontSize: '12px',
                color: 'var(--text3)',
                textDecoration: 'none',
                fontFamily: '"DM Mono", monospace',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--accent2)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text3)')}
            >
              {href.replace('#', '')}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text3)' }}>
          <span style={{ fontFamily: '"DM Mono", monospace' }}>Built with</span>
          <span style={{ color: 'var(--coral)' }}>♥</span>
          <span style={{ fontFamily: '"DM Mono", monospace' }}>React · Tailwind</span>
        </div>
      </div>
    </footer>
  )
}
