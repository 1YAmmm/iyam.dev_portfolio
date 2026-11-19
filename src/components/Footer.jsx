import { personal } from '../data/portfolio'
import { Rule, Arrow } from './ui'

export default function Footer() {
  return (
    <footer className="sheet">
      <Rule />
      <div className="pad-x flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="label text-muted">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p className="label text-muted">Drawn with React · Tailwind</p>
        <a href="#hero" className="label inline-flex items-center gap-2 transition-colors hover:text-fg">
          Back to top <Arrow dir="n" size={12} />
        </a>
      </div>
    </footer>
  )
}
