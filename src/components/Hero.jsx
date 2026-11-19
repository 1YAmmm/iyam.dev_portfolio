import { personal, stats } from '../data/portfolio'
import { Arrow, gridCell } from './ui'

export default function Hero() {
  const [first, ...rest] = personal.name.split(' ')

  return (
    <section id="hero" className="pt-16">
      <div className="sheet">
        <div className="pad-x pb-14 pt-14 sm:pb-20 sm:pt-24">
          {/* Title-block meta */}
          <div className="fade-in flex flex-wrap items-center justify-between gap-4">
            <p className="label inline-flex items-center gap-2.5 border border-line px-3 py-2">
              <span className="animate-blink h-1.5 w-1.5 bg-fg" />
              {personal.tagline}
            </p>
            <p className="label text-muted">Portfolio — Rev. {new Date().getFullYear()}</p>
          </div>

          {/* Name */}
          <h1 className="fade-in delay-1 font-display mt-10 text-[clamp(3.25rem,12.5vw,10.5rem)] leading-[0.84] sm:mt-14">
            {first}
            <br />
            <span className="text-soft">{rest.join(' ')}</span>
          </h1>

          {/* Dimension line */}
          <div className="fade-in delay-2 dim-ends mt-8 sm:mt-10">
            <div className="dim">
              <span className="label shrink-0 text-soft">
                {personal.role}
                <span className="mx-1.5 hidden text-muted sm:inline">·</span>
                <span className="hidden sm:inline">{personal.title}</span>
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-12 lg:items-end">
            <p className="fade-in delay-2 max-w-xl text-base leading-relaxed text-soft sm:text-lg lg:col-span-7">
              {personal.description}
            </p>
            <div className="fade-in delay-3 flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              <a href="#projects" className="btn-primary">
                View projects <Arrow dir="s" />
              </a>
              <a href="#contact" className="btn-ghost">
                Contact me <Arrow dir="e" />
              </a>
            </div>
          </div>
        </div>

        {/* Spec strip */}
        <dl className="grid grid-cols-2 border-t border-line md:grid-cols-4">
          {stats.map(({ num, label }, i) => (
            <div key={label} className={`fade-in pad-x py-6 sm:py-8 ${gridCell(i, stats.length, { base: 2, md: 4 })}`}>
              <dt className="label">{label}</dt>
              <dd className="font-display mt-3 text-4xl sm:text-5xl">{num}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
