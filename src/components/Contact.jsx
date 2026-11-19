import { personal } from '../data/portfolio'
import { Section, Arrow, gridCell } from './ui'

// Email is the big call-to-action above, so the cells cover the rest.
const items = [
  { label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
  { label: 'GitHub', value: personal.github?.replace(/^https?:\/\//, ''), href: personal.github, external: true },
  { label: 'Location', value: personal.location },
].filter((x) => x.value)

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Let's work together"
      intro="I'm open to new opportunities. Have a project, a role, or just want to connect — reach out."
    >
      {/* Primary call to action */}
      <a
        href={`mailto:${personal.email}`}
        className="fade-in pad-x group flex items-center justify-between gap-6 border-t border-line py-10 transition-colors hover:bg-surface/60 sm:py-14"
      >
        <span className="min-w-0">
          <span className="label block text-muted">Write to me</span>
          <span className="mt-4 block break-all text-[clamp(1.4rem,4.4vw,3.25rem)] font-medium leading-none tracking-tight text-fg">
            {personal.email}
          </span>
        </span>
        <span className="grid h-12 w-12 shrink-0 place-items-center border border-line-strong transition-colors group-hover:border-fg group-hover:bg-fg group-hover:text-bg sm:h-16 sm:w-16">
          <Arrow size={20} />
        </span>
      </a>

      <ul className="grid border-t border-line sm:grid-cols-3">
        {items.map(({ label, value, href, external }, i) => {
          const cls = `pad-x flex h-full items-start justify-between gap-3 py-6 ${
            href ? 'transition-colors hover:bg-surface/60' : ''
          }`
          const body = (
            <>
              <span className="min-w-0">
                <span className="label block text-muted">{label}</span>
                <span className="mt-3 block truncate text-[15px] text-fg">{value}</span>
              </span>
              {href && (
                <span className="text-muted">
                  <Arrow />
                </span>
              )}
            </>
          )
          return (
            <li key={label} className={`fade-in ${gridCell(i, items.length, { base: 1, sm: 3 })}`}>
              {href ? (
                <a
                  href={href}
                  className={cls}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {body}
                </a>
              ) : (
                <div className={cls}>{body}</div>
              )}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
