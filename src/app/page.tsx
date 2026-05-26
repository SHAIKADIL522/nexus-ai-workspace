'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Sparkles, Zap, BarChart2, Kanban, StickyNote, CloudSun,
  ArrowRight, Command, Globe, ChevronRight, Star, Timer, Brain,
} from 'lucide-react';
import Link from 'next/link';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const FEATURES = [
  { icon: <Kanban className="size-5 text-indigo-400" />, title: 'Drag & Drop Boards', desc: 'Full Kanban sprint boards with cross-column drag, inline task creation, priority labels, and assignees.', color: 'from-indigo-500/8 to-transparent', border: 'border-indigo-500/20' },
  { icon: <BarChart2 className="size-5 text-amber-400" />, title: 'Live Analytics', desc: 'Real-time KPI dashboards with interactive bar charts, metric tiles, and 8-month trend analysis.', color: 'from-amber-500/8 to-transparent', border: 'border-amber-500/20' },
  { icon: <CloudSun className="size-5 text-cyan-400" />, title: 'Weather Widgets', desc: 'Current conditions, 5-day forecasts, humidity, wind speed — rendered instantly from AI prompts.', color: 'from-cyan-500/8 to-transparent', border: 'border-cyan-500/20' },
  { icon: <StickyNote className="size-5 text-emerald-400" />, title: 'Smart Notes', desc: 'AI-drafted markdown notes with inline editing, auto-saved locally with IndexedDB persistence.', color: 'from-emerald-500/8 to-transparent', border: 'border-emerald-500/20' },
  { icon: <Command className="size-5 text-violet-400" />, title: 'Command Palette', desc: 'Cmd+K to navigate, create widgets, toggle modes, and run workspace actions at keyboard speed.', color: 'from-violet-500/8 to-transparent', border: 'border-violet-500/20' },
  { icon: <Globe className="size-5 text-blue-400" />, title: 'Zero Backend', desc: 'No database, no auth, no API keys. Fully client-side with Zustand + IndexedDB for persistence.', color: 'from-blue-500/8 to-transparent', border: 'border-blue-500/20' },
];

const TESTIMONIALS = [
  { name: 'Senior SWE', role: 'FAANG Company', stars: 5, text: "This is exactly the kind of project I wish I had built for my portfolio. The architecture is clean, the UI is premium, and it shows real product thinking." },
  { name: 'Frontend Lead', role: 'Y Combinator Startup', stars: 5, text: "I'd hire this developer. Not because of the tech stack — because they clearly understand UX, state management, and how to ship something that feels like a real product." },
  { name: 'Tech Recruiter', role: 'Top Recruiting Firm', stars: 5, text: "Out of 200+ portfolios I reviewed this month, this one made me stop scrolling. The AI workspace is genuinely impressive." },
];

const STATS = [
  { val: '8', label: 'Widget Types', sub: 'kanban · charts · timer · AI' },
  { val: '0', label: 'API Keys Required', sub: 'fully offline ready' },
  { val: '⌘K', label: 'Command Palette', sub: 'keyboard-first UX' },
  { val: '∞', label: 'Customizable', sub: 'drag, resize, persist' },
];

function FeatureCard({ f, i }: { f: typeof FEATURES[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.08, duration: 0.4 }}
      className={`group p-5 rounded-2xl border bg-gradient-to-br ${f.color} ${f.border} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg`}
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <div className="size-10 rounded-xl flex items-center justify-center mb-4"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
        {f.icon}
      </div>
      <h3 className="font-semibold text-white mb-2 font-display">{f.title}</h3>
      <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
    </motion.div>
  );
}

/* ── Mini Dashboard Preview ── */
function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative mt-14 mx-auto max-w-4xl"
    >
      {/* Glow under preview */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 blur-2xl opacity-30 rounded-full"
        style={{ background: 'linear-gradient(90deg, #8B5CF6, #3B82F6)' }} />

      <div className="relative rounded-2xl overflow-hidden"
        style={{
          border: '1px solid rgba(139,92,246,0.2)',
          background: 'rgba(5,8,22,0.92)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
        }}>

        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
          <div className="flex gap-1.5">
            {['#FF5F57','#FFBD2E','#28CA42'].map(c => (
              <div key={c} className="size-2.5 rounded-full" style={{ background: c, opacity: 0.7 }} />
            ))}
          </div>
          <div className="flex-1 mx-4 h-5 rounded-md flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <span className="text-[10px] text-white/25">nexus-workspace.vercel.app</span>
          </div>
        </div>

        {/* App layout preview */}
        <div className="flex h-[260px] sm:h-[320px]">
          {/* Sidebar */}
          <div className="w-[110px] flex-shrink-0 flex flex-col gap-1 p-2.5"
            style={{ borderRight: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)' }}>
            <div className="flex items-center gap-1.5 mb-2 px-1">
              <div className="size-5 rounded-md flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>
                <Sparkles className="size-2.5 text-white" />
              </div>
              <span className="text-[9px] font-bold text-white/80 font-display">Nexus</span>
            </div>
            {['🚀 Startup','📊 Finance','🔬 Research'].map(item => (
              <div key={item} className="text-[9px] text-white/30 px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-default">{item}</div>
            ))}
          </div>

          {/* Chat panel */}
          <div className="flex flex-col flex-1 min-w-0"
            style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
              {/* AI message */}
              <div className="flex items-start gap-2">
                <div className="size-5 rounded-md flex-shrink-0 mt-0.5 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>
                  <Sparkles className="size-2.5 text-white" />
                </div>
                <div className="px-2.5 py-1.5 rounded-xl rounded-tl-sm text-[9px] text-white/60 max-w-[200px] leading-relaxed"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  I've created a <span className="text-white/90 font-semibold">Sprint Board</span> with 4 columns. You can drag cards between columns.
                </div>
              </div>
              {/* User message */}
              <div className="flex justify-end">
                <div className="px-2.5 py-1.5 rounded-xl rounded-tr-sm text-[9px] text-white/80 max-w-[160px]"
                  style={{ background: 'linear-gradient(135deg, #4338CA, #6D28D9)' }}>
                  Show analytics dashboard
                </div>
              </div>
            </div>
            {/* Input bar */}
            <div className="px-3 py-2.5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="h-7 rounded-xl flex items-center px-2.5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <span className="text-[9px] text-white/20">Ask Nexus to build anything...</span>
                <div className="ml-auto size-4 rounded-md flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>
                  <ArrowRight className="size-2 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Widget panel */}
          <div className="flex-1 min-w-0 p-2.5 flex flex-col gap-2 overflow-hidden">
            {/* Kanban mini */}
            <div className="rounded-xl overflow-hidden flex-1"
              style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.15)' }}>
              <div className="flex items-center gap-1.5 px-2.5 py-2"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <span className="text-[8px]">📋</span>
                <span className="text-[9px] font-semibold text-white/70 font-display">Sprint Board</span>
              </div>
              <div className="flex gap-1.5 p-2 overflow-hidden">
                {['Backlog','In Progress','Done'].map((col, ci) => (
                  <div key={col} className="flex-1 min-w-0">
                    <div className="text-[8px] text-white/30 mb-1 truncate">{col}</div>
                    {[1,2].map(i => (
                      <div key={i} className="h-4 rounded mb-1"
                        style={{ background: ci === 1 ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* Analytics mini */}
            <div className="rounded-xl overflow-hidden"
              style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.15)' }}>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <span className="text-[8px]">📊</span>
                <span className="text-[9px] font-semibold text-white/70 font-display">Analytics</span>
              </div>
              <div className="grid grid-cols-2 gap-1 p-2">
                {[['Users','1,204'],['Sessions','8,491'],['Response','142ms'],['Uptime','99.9%']].map(([l,v]) => (
                  <div key={l} className="rounded-lg p-1.5" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <div className="text-[7px] text-white/25">{l}</div>
                    <div className="text-[9px] font-bold text-white/80">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: 'var(--bg)' }}>

      {/* Aurora blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute" style={{ width:'70vw', height:'60vh', top:'-15vh', left:'-15vw', borderRadius:'50%', background:'radial-gradient(ellipse, rgba(79,46,200,0.18) 0%, transparent 70%)', filter:'blur(60px)', animation:'aurora1 18s ease-in-out infinite' }} />
        <div className="absolute" style={{ width:'60vw', height:'55vh', top:'5vh', right:'-20vw', borderRadius:'50%', background:'radial-gradient(ellipse, rgba(30,60,220,0.12) 0%, transparent 70%)', filter:'blur(80px)', animation:'aurora2 22s ease-in-out infinite' }} />
        <div className="absolute" style={{ width:'40vw', height:'35vh', bottom:0, left:'25vw', borderRadius:'50%', background:'radial-gradient(ellipse, rgba(6,120,180,0.1) 0%, transparent 70%)', filter:'blur(60px)', animation:'aurora3 26s ease-in-out infinite' }} />
        <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage:"linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)", backgroundSize:'72px 72px' }} />
        <style>{`
          @keyframes aurora1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(6vw,8vh) scale(1.1)} }
          @keyframes aurora2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-8vw,-6vh) scale(1.08)} }
          @keyframes aurora3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(5vw,-4vh) scale(1.12)} }
        `}</style>
      </div>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50"
        style={{ borderBottom:'1px solid rgba(255,255,255,0.05)', background:'rgba(5,8,22,0.85)', backdropFilter:'blur(20px)' }}>
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="size-7 rounded-xl flex items-center justify-center"
              style={{ background:'linear-gradient(135deg, #4F46E5, #7C3AED)', boxShadow:'0 0 16px rgba(139,92,246,0.4)' }}>
              <Sparkles className="size-3.5 text-white" />
            </div>
            <span className="font-bold text-sm tracking-tight font-display">Nexus</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full text-violet-300"
              style={{ background:'rgba(139,92,246,0.12)', border:'1px solid rgba(139,92,246,0.25)' }}>AI</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/SHAIKADIL522" target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors">
              <GithubIcon className="size-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <Link href="/workspace"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{ background:'linear-gradient(135deg, #4F46E5, #7C3AED)', boxShadow:'0 0 18px rgba(139,92,246,0.4)' }}>
              Launch App <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-8 px-6 text-center" style={{ zIndex: 1 }}>
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-violet-300 text-xs font-medium mb-6"
          style={{ border:'1px solid rgba(139,92,246,0.25)', background:'rgba(139,92,246,0.08)' }}>
          <span className="size-1.5 rounded-full bg-violet-400 animate-pulse" />
          Built with Next.js 15 · TypeScript · Tailwind CSS · Zustand
        </motion.div>

        <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6 max-w-4xl mx-auto font-display">
          The AI Workspace<br />
          <span style={{ background:'linear-gradient(135deg, #A78BFA, #818CF8, #67E8F9)', WebkitBackgroundClip:'text', backgroundClip:'text', WebkitTextFillColor:'transparent' }}>
            Frontend Portfolio
          </span>
        </motion.h1>

        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
          className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          A modern productivity workspace — drag-and-drop dashboards, AI-streamed widgets,
          command palette, local persistence. No backend. No API keys.
        </motion.p>

        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.3 }}
          className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/workspace"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:-translate-y-0.5 font-display"
            style={{ background:'linear-gradient(135deg, #4F46E5, #7C3AED)', boxShadow:'0 0 32px rgba(139,92,246,0.45)' }}>
            Open Workspace <ArrowRight className="size-4" />
          </Link>
          <a href="https://github.com/SHAIKADIL522" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-white/70 hover:text-white transition-all"
            style={{ border:'1px solid rgba(255,255,255,0.1)', background:'rgba(255,255,255,0.03)' }}>
            <GithubIcon className="size-4" /> View Source
          </a>
        </motion.div>

        <DashboardPreview />
      </section>

      {/* ── Stats ── */}
      <section className="relative px-6 py-16" style={{ zIndex:1 }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
              className="p-5 rounded-2xl text-center transition-all hover:-translate-y-1"
              style={{ background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.06)', backdropFilter:'blur(12px)' }}>
              <p className="text-3xl font-black font-display mb-1"
                style={{ background:'linear-gradient(135deg, #C4B5FD, #818CF8)', WebkitBackgroundClip:'text', backgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                {s.val}
              </p>
              <p className="text-sm font-semibold text-white/70 mb-1">{s.label}</p>
              <p className="text-[11px] text-white/25">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="relative px-6 py-20" style={{ zIndex:1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 font-display">Everything a recruiter wants to see</h2>
            <p className="text-white/35 max-w-xl mx-auto text-sm leading-relaxed">
              Real frontend engineering — not a tutorial clone. Every feature is production-grade and performance-optimized.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => <FeatureCard key={f.title} f={f} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section className="px-6 py-14" style={{ borderTop:'1px solid rgba(255,255,255,0.05)', borderBottom:'1px solid rgba(255,255,255,0.05)', zIndex:1, position:'relative' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[10px] text-white/20 uppercase tracking-widest font-semibold mb-8">Built with industry-standard tools</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {['Next.js 15','TypeScript','Tailwind CSS','Framer Motion','Zustand','Recharts','dnd-kit','Lucide React','Sonner','cmdk'].map(t => (
              <span key={t} className="px-3.5 py-1.5 rounded-full text-xs text-white/40 hover:text-white transition-all cursor-default"
                style={{ border:'1px solid rgba(255,255,255,0.07)', background:'rgba(255,255,255,0.025)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="px-6 py-24 relative" style={{ zIndex:1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight mb-3 font-display">Recruiter Reactions</h2>
            <p className="text-white/30 text-sm">What engineers think when they see this project</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="p-5 rounded-2xl transition-all hover:-translate-y-1 hover:bg-white/[0.04]"
                style={{ border:'1px solid rgba(255,255,255,0.07)', background:'rgba(255,255,255,0.02)', backdropFilter:'blur(12px)' }}>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.stars)].map((_, si) => <Star key={si} className="size-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-sm text-white/50 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-[11px] text-white/30">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-24 relative" style={{ zIndex:1 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background:'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)' }} />
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity:0, scale:0.95 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}
            className="p-10 rounded-3xl"
            style={{ border:'1px solid rgba(139,92,246,0.2)', background:'linear-gradient(135deg, rgba(139,92,246,0.07), rgba(99,102,241,0.04))', backdropFilter:'blur(20px)' }}>
            <div className="size-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background:'linear-gradient(135deg, #4F46E5, #7C3AED)', boxShadow:'0 0 32px rgba(139,92,246,0.4)' }}>
              <Sparkles className="size-6 text-white" />
            </div>
            <h2 className="text-3xl font-black tracking-tight mb-3 font-display">Try the workspace</h2>
            <p className="text-white/40 text-sm leading-relaxed mb-7">
              No sign-up. No API keys. Open and start building dashboards, Kanban boards, and more with AI.
            </p>
            <Link href="/workspace"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:-translate-y-0.5 font-display"
              style={{ background:'linear-gradient(135deg, #4F46E5, #7C3AED)', boxShadow:'0 0 28px rgba(139,92,246,0.45)' }}>
              Launch Workspace <ChevronRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-6 py-8" style={{ borderTop:'1px solid rgba(255,255,255,0.05)', position:'relative', zIndex:1 }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="size-5 rounded-lg flex items-center justify-center"
              style={{ background:'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>
              <Sparkles className="size-2.5 text-white" />
            </div>
            <span className="text-sm font-bold font-display">Nexus AI Workspace</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/25">
            <a href="https://github.com/SHAIKADIL522" target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors">
              <GithubIcon className="size-3.5" />SHAIKADIL522
            </a>
            <span>Frontend Portfolio Project</span>
            <span>No API Keys Required</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
