# SteelCraft BD — Metal Fabrication Landing Page

A modern, fully responsive React landing page for a metal fabrication business.
Built with Vite + React. Ready for MERN backend integration.

---

## Design System

| Token          | Value     | Use                          |
|----------------|-----------|------------------------------|
| Gunmetal Gray  | `#2C3539` | Page background, nav, footer |
| Brushed Aluminum | `#D1D1D1` | Borders, muted text         |
| Cobalt Blue    | `#0047AB` | Accents, CTAs, highlights    |
| Off-white      | `#F8F9FA` | Body text                    |

**Fonts:** Oswald (display/headings) + DM Sans (body text)

---

## Folder Structure

```
src/
├── App.jsx                          ← assembles all sections (clean)
├── main.jsx                         ← React entry point
│
├── styles/
│   ├── global.css                   ← CSS variables, resets, utilities
│   └── tokens.js                    ← JS colour tokens for inline use
│
├── data/
│   └── constants.js                 ← all site content (services, projects, stats…)
│
├── hooks/
│   └── useInView.js                 ← IntersectionObserver + scrollTo utility
│
├── components/
│   └── CountUp/
│       ├── CountUp.jsx              ← animated number component
│       └── CountUp.css
│
└── sections/                        ← one folder per page section
    ├── Navbar/    Navbar.jsx  + Navbar.css
    ├── Hero/      Hero.jsx    + Hero.css
    ├── Services/  Services.jsx + Services.css
    ├── About/     About.jsx   + About.css
    ├── Projects/  Projects.jsx + Projects.css
    ├── Stats/     Stats.jsx   + Stats.css
    ├── Contact/   Contact.jsx + Contact.css
    └── Footer/    Footer.jsx  + Footer.css
```

---

## Getting Started

```bash
npm install
npm run dev
# → http://localhost:3000
```

### Production build
```bash
npm run build
npm run preview
```

---

## Sections

| Section   | Features                                                          |
|-----------|-------------------------------------------------------------------|
| Navbar    | Fixed, blur-on-scroll, mobile hamburger drawer                    |
| Hero      | Full-viewport, photo BG with dark overlay, grid lines, stat cards |
| Services  | 6-card grid (Metal Fab, Gates, Roof Shades, Windows…) with hover  |
| About     | Split layout, overlapping image stack, why-us grid                |
| Projects  | Category-filter tabs, 3-col hover-reveal grid                     |
| Stats     | Cobalt full-width bar with animated CountUp numbers               |
| Testimonials | 3-col quote cards (within Stats section)                       |
| Contact   | Info panel + polished form with select, success state             |
| Footer    | CTA band, 4-col grid, social links, legal bar                     |

---

## Backend Integration (MERN)

When your Express API is ready, swap the contact form submit handler in
`src/sections/Contact/Contact.jsx`:

```js
// Replace: setSent(true)
// With:
const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
if (res.ok) setSent(true);
```

Then uncomment the proxy in `vite.config.js`:
```js
proxy: {
  '/api': 'http://localhost:5000',
},
```

-----

## Responsive Breakpoints

| Breakpoint | Behaviour                                          |
|------------|----------------------------------------------------|
| > 960px    | Full desktop layout (2-col hero, 3-col services…)  |
| ≤ 960px    | Stacked single-column layouts                      |
| ≤ 640px    | Mobile-optimised typography, full-width buttons    |
| ≤ 520px    | Single-column projects grid, compact filters       |
