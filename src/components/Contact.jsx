import { useState } from 'react'
import { personal } from '../data/portfolio'
import { IconMail, IconPhone, IconPin, IconSend } from './Icons'

const contactItems = [
  {
    label: 'EMAIL',
    value: personal.email,
    href: `mailto:${personal.email}`,
    Icon: IconMail,
  },
  {
    label: 'PHONE',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
    Icon: IconPhone,
  },
  {
    label: 'LOCATION',
    value: personal.location,
    href: null,
    Icon: IconPin,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
  
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      style={{ padding: 'clamp(60px, 8vw, 120px) clamp(1rem, 6vw, 4rem)', background: 'var(--bg2)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p className="fade-in" style={{ fontFamily: '"DM Mono", monospace', fontSize: '11px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
          05 · Contact
        </p>
        <h2 className="fade-in" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, letterSpacing: '-1px', marginBottom: '12px', color: 'var(--text)' }}>
          Let's work together
        </h2>
        <p className="fade-in" style={{ fontSize: '15px', color: 'var(--text2)', maxWidth: '480px', lineHeight: 1.7 }}>
          I'm actively looking for entry-level opportunities. Whether you have a project, a role, or just want to connect — reach out.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'clamp(24px, 4vw, 60px)',
          marginTop: '48px',
          alignItems: 'start',
        }}>
          {/* Contact info */}
          <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {contactItems.map(({ label, value, href, Icon }) => {
              const inner = (
                <>
                  <div style={{
                    width: '40px', height: '40px',
                    borderRadius: '10px',
                    background: 'var(--accent3)',
                    border: '0.5px solid rgba(124,109,250,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color="var(--accent2)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text3)', fontFamily: '"DM Mono", monospace', letterSpacing: '0.5px', marginBottom: '2px' }}>
                      {label}
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500 }}>
                      {value}
                    </div>
                  </div>
                </>
              )

              const shared = {
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                background: 'var(--surface)',
                border: '0.5px solid var(--border)',
                borderRadius: '12px',
                padding: '20px 22px',
                transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
              }

              if (href) {
                return (
                  <a
                    key={label}
                    href={href}
                    style={{ ...shared, textDecoration: 'none', cursor: 'pointer' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border2)'
                      e.currentTarget.style.background = 'var(--surface2)'
                      e.currentTarget.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.background = 'var(--surface)'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    {inner}
                  </a>
                )
              }

              return (
                <div key={label} style={{ ...shared, cursor: 'default' }}>
                  {inner}
                </div>
              )
            })}
          </div>   
        </div>
      </div>
    </section>
  )
}
