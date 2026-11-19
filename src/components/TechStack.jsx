import { techStack } from '../data/portfolio'
import { Section, gridCell, pad } from './ui'

// Monochrome line glyphs — they inherit the theme color so the grid stays calm.
const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }

function Glyph({ item }) {
  const box = { viewBox: '0 0 32 32', width: 30, height: 30, 'aria-hidden': true }

  switch (item.type) {
    case 'react':
    case 'react-native': {
      const rot = item.type === 'react' ? [0, 60, 120] : [30, 90, 150]
      return (
        <svg {...box}>
          <circle cx="16" cy="16" r="2" fill="currentColor" />
          {rot.map((r) => (
            <ellipse key={r} cx="16" cy="16" rx="12" ry="4.6" {...S} transform={`rotate(${r} 16 16)`} />
          ))}
        </svg>
      )
    }
    case 'nextjs':
      return (
        <svg {...box}>
          <circle cx="16" cy="16" r="12" {...S} />
          <path d="M12 21.5V10.5l10 13.5M20.5 10.5v7" {...S} />
        </svg>
      )
    case 'tailwind':
      return (
        <svg {...box}>
          <path d="M6 14c1.4-5 4.8-6.7 8-4.6 2 1.3 2.6 3.6 6 3.6 2.6 0 4.6-1.4 6-4" {...S} />
          <path d="M6 23c1.4-5 4.8-6.7 8-4.6 2 1.3 2.6 3.6 6 3.6 2.6 0 4.6-1.4 6-4" {...S} />
        </svg>
      )
    case 'firebase':
      return (
        <svg {...box}>
          <path d="M9 25L12 6l4.5 8.5L19 10l4 15-7 3.5L9 25z" {...S} />
        </svg>
      )
    case 'appwrite':
      return (
        <svg {...box}>
          <circle cx="16" cy="16" r="9" {...S} />
          <circle cx="16" cy="16" r="3.2" {...S} />
        </svg>
      )
    case 'supabase':
      return (
        <svg {...box}>
          <path d="M17.5 4L7 18h9l-1.5 10L25 14h-9l1.5-10z" {...S} />
        </svg>
      )
    case 'vercel':
      return (
        <svg {...box}>
          <path d="M16 7l10.5 18h-21L16 7z" {...S} />
        </svg>
      )
    case 'github':
      return (
        <svg {...box}>
          <path d="M12.5 25.5c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 00-.9-2.6c3.1-.4 6.4-1.5 6.4-6.9a5.4 5.4 0 00-1.5-3.7 5 5 0 00-.1-3.7s-1.2-.4-3.9 1.4a13.4 13.4 0 00-7 0C9.8 6.3 8.6 6.7 8.6 6.7a5 5 0 00-.1 3.7A5.4 5.4 0 007 14.1c0 5.4 3.3 6.5 6.4 6.9a3.4 3.4 0 00-.9 2.6v3.9" {...S} />
        </svg>
      )
    case 'hardware':
      return (
        <svg {...box}>
          <rect x="9" y="9" width="14" height="14" rx="1.5" {...S} />
          <rect x="13" y="13" width="6" height="6" {...S} />
          <path d="M13 5v4M19 5v4M13 23v4M19 23v4M5 13h4M5 19h4M23 13h4M23 19h4" {...S} />
        </svg>
      )
    case 'claude':
      return (
        <svg {...box}>
          <path d="M16 5v22M5 16h22M8.2 8.2l15.6 15.6M23.8 8.2L8.2 23.8" {...S} />
        </svg>
      )
    default:
      return (
        <svg {...box}>
          <rect x="3.5" y="7.5" width="25" height="17" rx="1.5" {...S} />
          <text x="16" y="17" dominantBaseline="middle" textAnchor="middle" fontSize="8.5" fontWeight="600"
            fill="currentColor" fontFamily='"JetBrains Mono", monospace'>
            {item.label || item.name.slice(0, 3).toUpperCase()}
          </text>
        </svg>
      )
  }
}

export default function TechStack() {
  return (
    <Section
      id="stack"
      title="Technologies I work with"
      intro="Spanning frontend, backend, mobile and cloud — a practical toolkit for shipping modern software."
    >
      <ul className="grid grid-cols-3 border-t border-line sm:grid-cols-5">
        {techStack.map((item, i) => (
          <li
            key={item.name}
            className={`fade-in group relative flex aspect-square flex-col items-center justify-center gap-4 text-soft transition-colors duration-300 hover:bg-surface/70 hover:text-fg lg:aspect-[2/1] ${gridCell(
              i,
              techStack.length,
              { base: 3, sm: 5 }
            )}`}
          >
            <span className="label absolute left-3 top-3 text-[10px] text-muted">T.{pad(i + 1)}</span>
            <Glyph item={item} />
            <span className="px-2 text-center font-mono text-[10px] uppercase tracking-[0.08em]">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
