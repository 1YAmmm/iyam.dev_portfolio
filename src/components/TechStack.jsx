import { techStack } from '../data/portfolio'

// Inline SVG renderers per tech type
function TechSVG({ item }) {
  const { color, label, bg, type, name } = item

  if (type === 'tailwind') {
    return (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect width="32" height="32" rx="8" fill="#38BDF8" fillOpacity=".15" />
        <path d="M8 12.5c1.3-5.3 5.3-7.9 8-5.3 2.7 2.6.7 7.9-2.7 8 3.4 0 6.7-2.6 8-7.9" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M8 19.5c1.3-5.3 5.3-7.9 8-5.3 2.7 2.6.7 7.9-2.7 8 3.4 0 6.7-2.6 8-7.9" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    )
  }

  if (type === 'react' || type === 'react-native') {
    const rotations = type === 'react' ? [0, 60, 120] : [30, 90, 150]
    return (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect width="32" height="32" rx="8" fill="#61DAFB" fillOpacity=".12" />
        <circle cx="16" cy="16" r="3" fill="#61DAFB" />
        {rotations.map((r) => (
          <ellipse key={r} cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform={`rotate(${r} 16 16)`} />
        ))}
      </svg>
    )
  }

  if (type === 'firebase') {
    return (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect width="32" height="32" rx="8" fill="#FFCA28" fillOpacity=".15" />
        <path d="M10 22L13 10l4 6 3-9 4 14H10z" stroke="#FFCA28" strokeWidth="1.5" strokeLinejoin="round" fill="#FFCA28" fillOpacity=".6" />
      </svg>
    )
  }

  if (type === 'appwrite') {
    return (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect width="32" height="32" rx="8" fill="#FD366E" fillOpacity=".15" />
        <circle cx="16" cy="16" r="6" stroke="#FD366E" strokeWidth="2" fill="none" />
        <circle cx="16" cy="16" r="2.5" fill="#FD366E" />
      </svg>
    )
  }

  if (type === 'vercel') {
    return (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect width="32" height="32" rx="8" fill="#888" fillOpacity=".15" />
        <path d="M16 8l9 15H7L16 8z" fill="currentColor" fillOpacity=".7" />
      </svg>
    )
  }

  if (type === 'github') {
    return (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect width="32" height="32" rx="8" fill="#888" fillOpacity=".12" />
        <path d="M16 7a9 9 0 00-2.846 17.54c.45.083.615-.195.615-.433 0-.214-.008-.78-.012-1.53-2.503.545-3.031-1.206-3.031-1.206-.409-1.04-1-1.317-1-1.317-.817-.559.062-.547.062-.547.904.064 1.38.929 1.38.929.803 1.375 2.107.978 2.62.748.082-.581.314-.978.571-1.203-1.999-.227-4.102-1-4.102-4.453 0-.983.351-1.787.927-2.417-.093-.228-.402-1.143.088-2.383 0 0 .756-.242 2.477.922A8.626 8.626 0 0116 11.9c.765.004 1.535.103 2.254.302 1.72-1.164 2.475-.922 2.475-.922.491 1.24.182 2.155.09 2.383.577.63.926 1.434.926 2.417 0 3.462-2.106 4.224-4.112 4.447.323.278.611.828.611 1.668 0 1.203-.01 2.175-.01 2.47 0 .24.162.52.62.432A9.001 9.001 0 0016 7z" fill="currentColor" fillOpacity=".7" />
      </svg>
    )
  }

  if (type === 'claude') {
    return (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
        <rect width="32" height="32" rx="8" fill="#cc785c" fillOpacity=".15" />
        <circle cx="16" cy="14" r="5" stroke="#cc785c" strokeWidth="1.5" fill="none" />
        <path d="M10 24c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#cc785c" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    )
  }

  // Default: text label badge
  return (
    <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
      <rect width="32" height="32" rx="8" fill={bg || color} fillOpacity=".15" />
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
        fontSize="11" fontWeight="700" fill={color} fontFamily="DM Mono, monospace">
        {label || name.slice(0, 3).toUpperCase()}
      </text>
    </svg>
  )
}

export default function TechStack() {
  return (
    <section
      id="stack"
      style={{ padding: 'clamp(60px, 8vw, 120px) clamp(1rem, 6vw, 4rem)', background: 'var(--bg2)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p className="fade-in" style={{ fontFamily: '"DM Mono", monospace', fontSize: '11px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
          02 · Stack
        </p>
        <h2 className="fade-in" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, letterSpacing: '-1px', marginBottom: '12px', color: 'var(--text)' }}>
          Technologies I work with
        </h2>
        <p className="fade-in" style={{ fontSize: '15px', color: 'var(--text2)', maxWidth: '480px', lineHeight: 1.7 }}>
          Spanning frontend, backend, mobile, and cloud — a practical toolkit for building modern software.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
          gap: '12px',
          marginTop: '48px',
        }}>
          {techStack.map((item, i) => (
            <div
              key={item.name}
              className={`fade-in${i % 3 === 1 ? ' delay-1' : i % 3 === 2 ? ' delay-2' : ''}`}
              style={{
                background: 'var(--surface)',
                border: '0.5px solid var(--border)',
                borderRadius: '12px',
                padding: '16px 12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                transition: 'background 0.25s, border-color 0.25s, transform 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--surface2)'
                e.currentTarget.style.borderColor = 'var(--border2)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--surface)'
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <TechSVG item={item} />
              <span style={{ fontSize: '11px', color: 'var(--text2)', fontFamily: '"DM Mono", monospace', textAlign: 'center' }}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
