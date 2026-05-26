# Nexus AI Workspace

> A modern AI-inspired productivity workspace frontend built with Next.js 15, TypeScript, Tailwind CSS, Zustand, and modular widget architecture.

**No API keys required. Works 100% offline.**

## 🚀 Live Demo

Deploy to Vercel → [vercel.com/new](https://vercel.com/new)

## ✨ Features

### Core Workspace
- **AI Chat Interface** — Fake-streaming responses with realistic typing animation and tool execution timelines
- **8 Widget Types** — Kanban boards, stock charts, analytics dashboards, weather, notes, focus timer, activity timeline, AI insights
- **Drag & Drop Kanban** — Cross-column drag with `@dnd-kit`, inline task creation, priority labels
- **Command Palette** — `⌘K` to create widgets, navigate, and run workspace actions
- **Persistent State** — All widgets, sessions, and preferences saved to `localStorage`

### UI/UX
- **Landing Page** — Full SaaS-style landing with feature grid, testimonials, and CTA
- **Aurora Background** — WebGL animated gradient background via `ogl`
- **Framer Motion** — Page transitions, widget entrance animations, streaming text effects
- **Responsive** — Works on mobile, tablet, and desktop
- **Dark Mode** — Consistent dark theme throughout

### New Widgets (v0.2)
- 🍅 **Focus Timer** — Pomodoro timer with animated ring, session tracking, mode switching
- ⏱ **Activity Timeline** — Recent workspace activity with color-coded event types
- 🧠 **AI Insights** — Smart productivity summaries with categorized insight cards

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| State | Zustand (persisted) |
| Charts | Recharts |
| DnD | @dnd-kit |
| Icons | Lucide React |
| Toasts | Sonner |
| Command | cmdk |

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   └── workspace/
│       └── page.tsx          # Main workspace (fully local AI)
├── components/
│   ├── aurora/               # WebGL background
│   ├── chat/                 # Chat input + message bubbles
│   ├── command/              # ⌘K Command palette
│   ├── sidebar/              # Collapsible sidebar
│   └── workspace/
│       └── widgets/          # All 8 widget components
├── store/                    # Zustand stores
├── data/                     # Workspace templates
├── services/                 # Mock data services (no API keys)
├── types/                    # TypeScript interfaces
└── ai/                       # Widget registry
```

## 🏃 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Deploy

```bash
# Vercel (recommended)
npx vercel

# Or push to GitHub and import at vercel.com
```

## 📝 Resume Description

> Built a modern AI-inspired productivity workspace frontend using Next.js 15, TypeScript, Tailwind CSS, Zustand, and modular widget architecture — featuring drag-and-drop Kanban boards, command palette (⌘K), local persistence, responsive layouts, 8 interactive widget types (analytics, stock charts, weather, focus timer, AI insights), and AI-style streaming experiences — 100% offline, no API keys required.

---

Built by [Adil Shaik](https://github.com/SHAIKADIL522) · No API keys · Runs offline
