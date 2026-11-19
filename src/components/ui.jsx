// ─── Shared blueprint UI primitives ───────────────────────────────
// Every section is built from these so spacing, rules and labels match.

export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const pad = (n) => String(n).padStart(2, '0')

// Literal class names so Tailwind's scanner picks them all up.
const BPS = ['base', 'sm', 'md', 'lg', 'xl']
const R_ON = { base: 'border-r', sm: 'sm:border-r', md: 'md:border-r', lg: 'lg:border-r', xl: 'xl:border-r' }
const R_OFF = { base: '', sm: 'sm:border-r-0', md: 'md:border-r-0', lg: 'lg:border-r-0', xl: 'xl:border-r-0' }
const B_ON = { base: 'border-b', sm: 'sm:border-b', md: 'md:border-b', lg: 'lg:border-b', xl: 'xl:border-b' }
const B_OFF = { base: '', sm: 'sm:border-b-0', md: 'md:border-b-0', lg: 'lg:border-b-0', xl: 'xl:border-b-0' }

/**
 * Shared-border grid cells (blueprint "table" look).
 * Gives cell `i` of `n` a right border unless it is in the last column and a
 * bottom border unless it is in the last row — at every breakpoint.
 *   cols: e.g. { base: 1, md: 2, lg: 3 }
 */
export function gridCell(i, n, cols) {
  const out = ['border-line']
  let prev = null
  for (const bp of BPS) {
    const c = cols[bp]
    if (c == null) continue
    const r = i % c !== c - 1
    const b = Math.floor(i / c) < Math.ceil(n / c) - 1
    if (!prev) {
      if (r) out.push(R_ON.base)
      if (b) out.push(B_ON.base)
    } else {
      if (r !== prev.r) out.push(r ? R_ON[bp] : R_OFF[bp])
      if (b !== prev.b) out.push(b ? B_ON[bp] : B_OFF[bp])
    }
    prev = { r, b }
  }
  return out.join(' ')
}

/** Horizontal rule across the sheet with "+" marks where it meets the rails. */
export function Rule({ className = '' }) {
  return (
    <div className={`relative h-px bg-line ${className}`} aria-hidden="true">
      <span className="cross -left-[6px] -top-[5px]" />
      <span className="cross -right-[6px] -top-[5px]" />
    </div>
  )
}

/** A full sheet section: rule, numbered header, then content. */
export function Section({ id, title, intro, children, aside }) {
  const index = SECTIONS.findIndex((s) => s.id === id) + 1
  const label = SECTIONS[index - 1]?.label ?? id

  return (
    <section id={id} className="sheet">
      <Rule />
      <header className="pad-x pb-10 pt-14 sm:pb-14 sm:pt-20">
        <div className="fade-in flex items-center justify-between gap-4">
          <p className="label">
            <span className="text-fg">{pad(index)}</span>
            <span className="mx-2 text-muted">/</span>
            {label}
          </p>
          <p className="label hidden text-muted sm:block">
            Sheet {pad(index)} of {pad(SECTIONS.length)}
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="fade-in delay-1 font-display max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.92]">
            {title}
          </h2>
          {intro && (
            <p className="fade-in delay-2 max-w-sm text-[15px] leading-relaxed text-soft">{intro}</p>
          )}
          {aside}
        </div>
      </header>
      {children}
    </section>
  )
}

export function Tag({ children }) {
  return <span className="tag">{children}</span>
}

export function Arrow({ dir = 'ne', size = 14 }) {
  const paths = {
    ne: 'M7 17L17 7M9 7h8v8',
    e: 'M5 12h14M13 6l6 6-6 6',
    s: 'M12 5v14M6 13l6 6 6-6',
    n: 'M12 19V5M6 11l6-6 6 6',
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
      <path d={paths[dir]} />
    </svg>
  )
}
