import { personal, strengths } from '../data/portfolio'
import { Section, pad } from './ui'

// "Frontend Development (HTML, CSS, JS, React)" → ["Frontend Development", "HTML, CSS, JS, React"]
function splitLabel(label) {
  const m = label.match(/^(.*?)\s*\((.*)\)\s*$/)
  return m ? [m[1], m[2].replace(/,(?=\S)/g, ', ')] : [label, null]
}

export default function About() {
  return (
    <Section id="about" title="Turning ideas into real-world software">
      <div className="grid border-t border-line lg:grid-cols-12">
        {/* Bio */}
        <div className="fade-in pad-x space-y-5 py-10 text-[15px] leading-[1.8] text-soft sm:py-14 sm:text-base lg:col-span-7 lg:border-r lg:border-line">
          <p>
            I'm <strong className="font-medium text-fg">{personal.name}</strong> — a Computer
            Engineering graduate and full-stack developer from {personal.location}, with 2+ years of
            experience as an IT Instructor. I build clean, efficient, user-centered applications that
            solve real-world problems.
          </p>
          <p>
            Serving as an <strong className="font-medium text-fg">IT Instructor</strong> for over two
            years, I've shipped systems used by real people — and deepened my grasp of software
            fundamentals by teaching them.
          </p>
          <p>
            I work where clean code meets thoughtful design — whether it's a mobile app, a web
            platform, or an attendance system built on QR codes.
          </p>
        </div>

        {/* Strengths */}
        <div className="fade-in delay-1 lg:col-span-5">
          <p className="label pad-x border-t border-line py-4 lg:border-t-0">Core strengths</p>
          <ol>
            {strengths.map(({ label }, i) => {
              const [title, detail] = splitLabel(label)
              return (
                <li
                  key={label}
                  className="pad-x group flex gap-5 border-t border-line py-4 transition-colors hover:bg-surface/60"
                >
                  <span className="label pt-1 text-muted group-hover:text-fg">S.{pad(i + 1)}</span>
                  <span>
                    <span className="block text-[15px] font-medium text-fg">{title}</span>
                    {detail && <span className="mt-1 block font-mono text-xs text-soft">{detail}</span>}
                  </span>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </Section>
  )
}
