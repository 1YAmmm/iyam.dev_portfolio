import { experience } from '../data/portfolio'
import { Section, gridCell, pad } from './ui'

export default function Experience() {
  const meta = [
    ['Period', experience.period],
    ['Company', experience.company],
    ['Location', experience.location],
  ]

  return (
    <Section id="experience" title="Where I've worked">
      <div className="grid border-t border-line lg:grid-cols-12">
        {/* Meta column */}
        <dl className="fade-in lg:col-span-4 lg:border-r lg:border-line">
          {meta.map(([k, v], i) => (
            <div key={k} className={`pad-x py-5 ${i > 0 ? 'border-t border-line' : ''}`}>
              <dt className="label text-muted">{k}</dt>
              <dd className="mt-2 text-[15px] text-fg">{v}</dd>
            </div>
          ))}
        </dl>

        {/* Role */}
        <div className="fade-in delay-1 border-t border-line lg:col-span-8 lg:border-t-0">
          <div className="pad-x py-8 sm:py-10">
            <h3 className="font-display text-3xl sm:text-4xl">{experience.role}</h3>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-soft">{experience.description}</p>
          </div>

          <p className="label pad-x border-t border-line py-4">Subjects taught</p>
          <ul className="grid border-t border-line sm:grid-cols-2 xl:grid-cols-3">
            {experience.subjects.map((subj, i) => (
              <li
                key={subj}
                className={`pad-x flex items-center gap-4 py-4 text-sm text-fg ${gridCell(i, experience.subjects.length, {
                  base: 1,
                  sm: 2,
                  xl: 3,
                })}`}
              >
                <span className="label text-muted">{pad(i + 1)}</span>
                {subj}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
