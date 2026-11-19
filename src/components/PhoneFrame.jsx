import { useEffect, useRef, useState } from 'react'

/**
 * Samples the average color of a screenshot's top edge so the iOS status bar
 * blends into each app/site. Same-origin images only (served from /public).
 */
function useEdgeColor(src, trim = 0) {
  const [tone, setTone] = useState(null)

  useEffect(() => {
    if (!src) return
    let alive = true
    const img = new Image()
    img.onload = () => {
      try {
        const w = 32
        const canvas = document.createElement('canvas')
        canvas.width = w
        canvas.height = 1
        const ctx = canvas.getContext('2d', { willReadFrequently: true })
        const y = Math.round(img.naturalHeight * trim) + 2
        ctx.drawImage(img, 0, y, img.naturalWidth, 6, 0, 0, w, 1)
        const d = ctx.getImageData(0, 0, w, 1).data
        let r = 0, g = 0, b = 0
        for (let i = 0; i < d.length; i += 4) { r += d[i]; g += d[i + 1]; b += d[i + 2] }
        const n = d.length / 4
        r = Math.round(r / n); g = Math.round(g / n); b = Math.round(b / n)
        const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
        if (alive) setTone({ bg: `rgb(${r} ${g} ${b})`, light: lum > 0.55 })
      } catch {
        /* canvas unavailable — keep default dark status bar */
      }
    }
    img.src = src
    return () => { alive = false }
  }, [src, trim])

  return tone
}

function StatusBar({ tone }) {
  const color = tone?.light ? '#000' : '#fff'
  return (
    <div className="phone__status" style={{ background: tone?.bg ?? '#06141b', color }}>
      <span className="phone__time">9:41</span>
      <span className="flex items-center" style={{ gap: '1.4em' }}>
        <svg viewBox="0 0 18 12" fill="currentColor" aria-hidden="true">
          <rect x="0" y="8" width="3" height="4" rx="0.8" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
          <rect x="10" y="3" width="3" height="9" rx="0.8" />
          <rect x="15" y="0" width="3" height="12" rx="0.8" />
        </svg>
        <svg viewBox="0 0 16 12" fill="currentColor" aria-hidden="true">
          <path d="M8 2.2c2.3 0 4.4.9 6 2.4l1.3-1.3A10.3 10.3 0 008 .3 10.3 10.3 0 00.7 3.3L2 4.6a8.5 8.5 0 016-2.4zm0 3.6c1.3 0 2.5.5 3.4 1.3l1.3-1.3A6.6 6.6 0 008 3.9a6.6 6.6 0 00-4.7 1.9l1.3 1.3c.9-.8 2.1-1.3 3.4-1.3zm0 3.6c-.4 0-.8.2-1.1.4L8 11l1.1-1.2c-.3-.2-.7-.4-1.1-.4z" />
        </svg>
        <svg viewBox="0 0 27 12" fill="none" aria-hidden="true">
          <rect x="0.5" y="0.5" width="23" height="11" rx="3.2" stroke="currentColor" opacity="0.4" />
          <rect x="2" y="2" width="20" height="8" rx="2" fill="currentColor" />
          <path d="M25 4v4c.8-.3 1.4-1.1 1.4-2s-.6-1.7-1.4-2z" fill="currentColor" opacity="0.4" />
        </svg>
      </span>
    </div>
  )
}

/** Image that hides `trim` (fraction of its height) from the top. */
function Shot({ src, alt, trim, visible = true, eager = false }) {
  const extra = trim / (1 - trim)
  return (
    <div
      className="absolute inset-x-0 transition-opacity duration-700 ease-out"
      style={{ top: `${-extra * 100}%`, height: `${(1 + extra) * 100}%`, opacity: visible ? 1 : 0 }}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        draggable="false"
        className="h-full w-full object-cover object-top"
      />
    </div>
  )
}

function Placeholder({ name }) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('')
  return (
    <div className="grid-dense absolute inset-0 flex flex-col items-center justify-center gap-[6em] bg-[#11212d] text-[#9ba8ab]">
      <span className="font-display text-[#ccd0cf]" style={{ fontSize: '26em', lineHeight: 1 }}>{initials}</span>
      <span className="font-mono uppercase" style={{ fontSize: '4.6em', letterSpacing: '0.14em' }}>Preview pending</span>
    </div>
  )
}

/**
 * iPhone frame.
 *  - images: one screenshot = static, several = crossfading carousel
 *  - trim:   fraction of each screenshot's height to crop from the top
 *            (e.g. to hide an Android status bar under the iOS one)
 */
export default function PhoneFrame({ images = [], name, width = 200, trim = 0, interval = 2800 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef(null)
  const count = images.length
  const tone = useEdgeColor(images[index], trim)

  // Only animate while on screen
  useEffect(() => {
    const el = ref.current
    if (!el || count < 2) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [count])

  useEffect(() => {
    if (count < 2 || paused || !inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setIndex((i) => (i + 1) % count), interval)
    return () => clearInterval(t)
  }, [count, paused, inView, interval])

  return (
    <div className="flex flex-col items-center" ref={ref}>
      <div
        className="phone"
        style={{ width, fontSize: width / 100 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* hardware buttons */}
        <span className="phone__btn" style={{ left: '-0.7em', top: '20%', height: '6%' }} />
        <span className="phone__btn" style={{ left: '-0.7em', top: '29%', height: '10.5%' }} />
        <span className="phone__btn" style={{ left: '-0.7em', top: '42%', height: '10.5%' }} />
        <span className="phone__btn" style={{ right: '-0.7em', top: '31%', height: '15%' }} />

        <div className="phone__bezel">
          <div className="phone__screen">
            <div className="phone__island" />
            {count > 0 ? (
              <>
                <StatusBar tone={tone} />
                <div className="phone__viewport">
                  {images.map((src, i) => (
                    <Shot
                      key={src}
                      src={src}
                      alt={count > 1 ? `${name} — screen ${i + 1} of ${count}` : `${name} preview`}
                      trim={trim}
                      visible={i === index}
                      eager={i === 0}
                    />
                  ))}
                </div>
              </>
            ) : (
              <Placeholder name={name} />
            )}
          </div>
        </div>
      </div>

      {count > 1 && (
        <div className="mt-5 flex items-center gap-1.5" role="group" aria-label={`${name} screenshots`}>
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show screen ${i + 1}`}
              aria-current={i === index}
              className="group/dot flex h-4 items-center"
            >
              <span
                className={`block h-px transition-all duration-300 ${
                  i === index ? 'w-6 bg-fg' : 'w-3 bg-muted group-hover/dot:bg-soft'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
