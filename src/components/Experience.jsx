import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: 'clamp(60px, 8vw, 120px) clamp(1rem, 6vw, 4rem)', background: 'var(--bg)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p className="fade-in" style={{ fontFamily: '"DM Mono", monospace', fontSize: '11px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
          03 · Experience
        </p>
        <h2 className="fade-in" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, letterSpacing: '-1px', marginBottom: '12px', color: 'var(--text)' }}>
          Where I've worked
        </h2>

        {/* Experience card */}
        <div
          className="fade-in"
          style={{
            background: 'var(--surface)',
            border: '0.5px solid var(--border)',
            borderRadius: '24px',
            padding: 'clamp(24px, 4vw, 40px)',
            marginTop: '48px',
            backdropFilter: 'blur(12px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Accent top bar */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, var(--accent), var(--teal))',
          }} />

          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '28px',
          }}>
            <div>
              <div style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.4px', color: 'var(--text)' }}>
                {experience.role}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text2)', marginTop: '4px' }}>
                {experience.company} · {experience.location}
              </div>
            </div>
            <div style={{
              fontFamily: '"DM Mono", monospace',
              fontSize: '12px',
              color: 'var(--accent)',
              background: 'var(--accent3)',
              padding: '6px 12px',
              borderRadius: '100px',
              border: '0.5px solid rgba(124,109,250,0.25)',
              whiteSpace: 'nowrap',
            }}>
              {experience.period}
            </div>
          </div>

          {/* Description */}
          <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '24px' }}>
            {experience.description}
          </p>

          {/* Subjects */}
          <p style={{ fontSize: '11px', color: 'var(--text3)', fontFamily: '"DM Mono", monospace', letterSpacing: '1px', marginBottom: '14px' }}>
            SUBJECTS TAUGHT
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '10px',
          }}>
            {experience.subjects.map((subj) => (
              <div
                key={subj}
                style={{
                  background: 'var(--surface2)',
                  border: '0.5px solid var(--border)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  fontSize: '13px',
                  color: 'var(--text2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--teal)', flexShrink: 0 }} />
                {subj}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
