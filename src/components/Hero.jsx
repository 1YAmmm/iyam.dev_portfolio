import { personal } from '../data/portfolio'
import { IconProjects, IconMail } from './Icons'

function smoothScroll(e, href) {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '60px',
        padding: '60px clamp(1rem, 6vw, 4rem) 0',
      }}
    >
      {/* Background effects */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.4,
        }} />
        {/* Purple orb */}
        <div style={{
          position: 'absolute',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent), transparent 70%)',
          top: '-100px', right: '-100px',
          filter: 'blur(80px)',
          opacity: 0.35,
        }} />
        {/* Teal orb */}
        <div style={{
          position: 'absolute',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--teal), transparent 70%)',
          bottom: '-50px', left: '-100px',
          filter: 'blur(80px)',
          opacity: 0.18,
        }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        {/* Badge */}
        <div
          className="fade-in"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--accent3)',
            border: '0.5px solid rgba(124,109,250,0.3)',
            padding: '6px 14px',
            borderRadius: '100px',
            fontSize: '12px',
            color: 'var(--accent2)',
            marginBottom: '28px',
            fontFamily: '"DM Mono", monospace',
          }}
        >
          <span
            className="animate-pulse-dot"
            style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--teal)' }}
          />
          {personal.tagline}
        </div>

        {/* Name */}
        <h1
          className="fade-in delay-1"
          style={{
            fontSize: 'clamp(40px, 7vw, 88px)',
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: '-2px',
            marginBottom: '16px',
            color: 'var(--text)',
          }}
        >
          {personal.name.split(' ')[0]}
          <br />
          <span style={{ color: 'var(--accent2)' }}>{personal.name.split(' ')[1]}</span>
        </h1>

        {/* Title */}
        <p
          className="fade-in delay-2"
          style={{
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            color: 'var(--text2)',
            fontWeight: 300,
            marginBottom: '20px',
            letterSpacing: '-0.2px',
          }}
        >
          {personal.title}
        </p>

        {/* Description */}
        <p
          className="fade-in delay-2"
          style={{
            fontSize: 'clamp(14px, 1.6vw, 16px)',
            color: 'var(--text3)',
            maxWidth: '520px',
            lineHeight: 1.8,
            marginBottom: '40px',
          }}
        >
          {personal.description}
        </p>

        {/* CTA Buttons */}
        <div className="fade-in delay-3" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            onClick={(e) => smoothScroll(e, '#projects')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: 500,
              background: 'var(--accent)',
              color: '#fff',
              textDecoration: 'none',
              boxShadow: '0 0 24px var(--glow)',
              transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
              border: 'none',
              fontFamily: '"DM Sans", sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent2)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 32px var(--glow)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 24px var(--glow)'
            }}
          >
            <IconProjects size={15} color="#fff" />
            View Projects
          </a>

          <a
            href="#contact"
            onClick={(e) => smoothScroll(e, '#contact')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: 500,
              background: 'var(--surface2)',
              color: 'var(--text2)',
              border: '0.5px solid var(--border2)',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s, transform 0.2s',
              fontFamily: '"DM Sans", sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--border)'
              e.currentTarget.style.color = 'var(--text)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--surface2)'
              e.currentTarget.style.color = 'var(--text2)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <IconMail size={15} color="currentColor" />
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        color: 'var(--text3)',
        fontSize: '11px',
        fontFamily: '"DM Mono", monospace',
        letterSpacing: '1px',
      }}>
        <div
          className="animate-scroll-line"
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
          }}
        />
        <span>SCROLL</span>
      </div>
    </section>
  )
}
