# Jeremiah Laman — Portfolio

A modern, minimalist **blueprint-style** developer portfolio built with **React + Vite + Tailwind CSS**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build
# Output goes to /dist — deploy this folder to Vercel
```

### Deploy to Vercel (recommended)
```bash
npm install -g vercel
vercel
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui.jsx            # Shared primitives: Section, Rule, Tag, Arrow, gridCell()
│   ├── PhoneFrame.jsx    # iPhone mockup (status bar auto-tinted, carousel)
│   ├── Navbar.jsx        # Fixed nav, active-section highlight, theme toggle
│   ├── Hero.jsx          # Title block + spec strip
│   ├── About.jsx         # Bio + core strengths
│   ├── TechStack.jsx     # Tech grid with monochrome line glyphs
│   ├── Experience.jsx    # IT Instructor role
│   ├── Projects.jsx      # Project sheets, each in an iPhone frame
│   ├── Contact.jsx       # Email CTA + contact cells
│   ├── Footer.jsx
│   └── Icons.jsx         # Sun / moon icons
│
├── hooks/
│   ├── useScrollAnimation.js   # IntersectionObserver for .fade-in reveals
│   └── useTheme.js             # Blueprint / whiteprint toggle + localStorage
│
├── data/
│   └── portfolio.js      # ← Edit ALL your content here
│
├── App.jsx
├── main.jsx
└── index.css             # Palette tokens, blueprint grid, iPhone frame styles

public/img/previews/      # iPhone-size screenshots of the web projects (780×1688)
public/img/*.jpg          # Mobile app screenshots
```

---

## ✏️ How to Update Content

**All portfolio content lives in one file:**

```
src/data/portfolio.js
```

Edit `personal`, `stats`, `strengths`, `techStack`, `experience`, and `projects` — everything updates automatically across all components.

---

## 📬 Enable Contact Form

The contact form is wired up with state but needs a backend to actually send emails.

### Option A — Formspree (easiest, free)
1. Go to [formspree.io](https://formspree.io) and create a form
2. In `src/components/Contact.jsx`, find the `handleSubmit` function
3. Replace the comment with:

```js
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' },
})
```

### Option B — EmailJS (no backend)
1. Go to [emailjs.com](https://emailjs.com) and set up a service
2. Install: `npm install @emailjs/browser`
3. Use `emailjs.send(...)` inside `handleSubmit`

---

## 🎨 Design System

Palette tokens are RGB channels in `src/index.css`, exposed to Tailwind as
`bg`, `surface`, `raised`, `muted`, `soft`, `fg` and `line`.

| Token      | Blueprint (dark) | Whiteprint (light) |
|------------|------------------|--------------------|
| `bg`       | `#06141B`        | `#CCD0CF`          |
| `surface`  | `#11212D`        | `#DADDDC`          |
| `raised`   | `#253745`        | `#9BA8AB`          |
| `muted`    | `#4A5C6A`        | `#4A5C6A`          |
| `soft`     | `#9BA8AB`        | `#253745`          |
| `fg`       | `#CCD0CF`        | `#06141B`          |

Light mode adds the `light` class to `<body>` (handled by `useTheme.js`).

### Project previews

- **Web projects:** set `preview: "/img/previews/<name>.jpg"` — a 390×844 @2x mobile screenshot.
- **Mobile apps:** set `isMobile: true` and `images: [...]` — they crossfade in the phone.
  `screenTrim` crops the top fraction of each screenshot (hides an Android status bar).
- No preview? The phone shows a blueprint placeholder with the project's initials.

---

## 🖋️ Fonts

- **QUINN** — display headings. Free for personal use (by arraf studio), so it is
  self-hosted: save the font as `public/fonts/Quinn.otf`. Until it's there, headings
  fall back to Archivo Black-weight.
- **Archivo** — body text (Google Fonts)
- **JetBrains Mono** — blueprint labels, tags and annotations (Google Fonts)

---

## 📦 Dependencies

| Package              | Purpose                  |
|----------------------|--------------------------|
| `react`              | UI library               |
| `react-dom`          | DOM renderer             |
| `vite`               | Build tool & dev server  |
| `@vitejs/plugin-react` | React fast refresh     |
| `tailwindcss`        | Utility-first CSS        |
| `autoprefixer`       | CSS vendor prefixes      |
| `postcss`            | CSS processing           |

No icon libraries. No UI component libraries. Pure React + custom SVGs.

---

## 📄 License

MIT — feel free to use this as a template for your own portfolio.
# iyam.dev_portfolio
