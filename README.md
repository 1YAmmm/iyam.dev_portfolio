# Jeremiah Laman — Portfolio

A modern, macOS-inspired developer portfolio built with **React + Vite + Tailwind CSS**.

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
│   ├── Navbar.jsx        # Sticky nav with dark/light toggle
│   ├── Hero.jsx          # Landing section with animated orbs
│   ├── About.jsx         # Bio, stats, strengths
│   ├── TechStack.jsx     # Tech grid with SVG icons
│   ├── Experience.jsx    # IT Instructor work card
│   ├── Projects.jsx      # 8 project cards with live links
│   ├── Contact.jsx       # Contact info + form
│   ├── Footer.jsx        # Footer with quick links
│   └── Icons.jsx         # All SVG icons (no icon libraries)
│
├── hooks/
│   ├── useScrollAnimation.js   # IntersectionObserver for fade-ins
│   └── useTheme.js             # Dark/light mode toggle + localStorage
│
├── data/
│   └── portfolio.js      # ← Edit ALL your content here
│
├── App.jsx               # Root — assembles all sections
├── main.jsx              # React entry point
└── index.css             # CSS variables + global base styles
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

All colors are CSS custom properties defined in `src/index.css`:

| Variable       | Dark Mode           | Light Mode          |
|----------------|---------------------|---------------------|
| `--bg`         | `#0a0a0f`           | `#f5f5fa`           |
| `--bg2`        | `#111118`           | `#ebebf5`           |
| `--surface`    | `rgba(255,255,255,0.04)` | `rgba(0,0,0,0.03)` |
| `--accent`     | `#7c6dfa`           | `#5b4ee8`           |
| `--accent2`    | `#a594ff`           | `#7c6dfa`           |
| `--teal`       | `#22d3b8`           | `#22d3b8`           |
| `--text`       | `#f0f0f5`           | `#0d0d1a`           |
| `--text2`      | `#a0a0b8`           | `#4a4a6a`           |

Toggle light mode by adding the `light` class to `<body>` (handled by `useTheme.js`).

---

## 🖋️ Fonts

- **DM Sans** — headings & body (loaded from Google Fonts)
- **DM Mono** — labels, tags, badges

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
