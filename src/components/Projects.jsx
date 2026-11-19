import { projects } from '../data/portfolio'
import PhoneFrame from './PhoneFrame'
import { Section, Tag, Arrow, gridCell, pad } from './ui'

const COLS = { base: 1, md: 2, lg: 3 }

function host(url) {
  try {
    return new URL(url).host
  } catch {
    return null
  }
}

function ProjectCard({ project, i }) {
  const { name, description, tags, link, preview, images, isMobile, screenTrim = 0 } = project
  const shots = isMobile ? images ?? [] : preview ? [preview] : []
  const domain = link && host(link)

  return (
    <article className={`fade-in group flex flex-col ${gridCell(i, projects.length, COLS)}`}>
      {/* Stage */}
      <div className="grid-dense relative flex justify-center overflow-hidden px-6 pb-8 pt-14">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgb(var(--c-surface)/0.9),transparent_70%)]"
          aria-hidden="true"
        />
        <span className="label absolute left-4 top-4 text-muted">Fig. {pad(i + 1)}</span>
        <span className="absolute right-4 top-3.5">
          <Tag>{isMobile ? 'Mobile app' : 'Web app'}</Tag>
        </span>

        <div className="relative flex flex-col items-center transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
          <PhoneFrame images={shots} name={name} width={196} trim={screenTrim} />
          {shots.length < 2 && (
            <div className="dim-ends mt-5 w-[196px]" aria-hidden="true">
              <div className="dim">
                <span className="font-mono text-[9px] tracking-[0.12em]">390 × 844</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col border-t border-line px-6 py-6">
        <p className="label text-muted">P.{pad(i + 1)}</p>
        <h3 className="font-display mt-3 text-[1.65rem] leading-[0.95]">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-soft">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between gap-4 border-t border-line pt-4">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="label inline-flex items-center gap-2 text-fg transition-opacity hover:opacity-70"
              >
                Visit live <Arrow />
              </a>
            ) : (
              <span className="label">Android build</span>
            )}
            <span className="truncate font-mono text-[10px] text-muted">{domain ?? 'React Native'}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const web = projects.filter((p) => !p.isMobile).length
  const mobile = projects.length - web

  return (
    <Section
      id="projects"
      title="Selected work"
      intro={`${projects.length} builds — ${web} web platforms and ${mobile} mobile apps — each shipped for real users.`}
    >
      <div className="grid border-t border-line md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} i={i} />
        ))}
      </div>
    </Section>
  )
}
