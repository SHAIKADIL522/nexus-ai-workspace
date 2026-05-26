'use client';
import { useEffect, useRef } from 'react';

export default function Aurora() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pure CSS aurora — no WebGL needed, fully GPU accelerated
  }, []);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Deep base */}
      <div className="absolute inset-0" style={{ background: '#050816' }} />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.022]" style={{
        backgroundImage: 'linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }} />

      {/* Aurora blob 1 — purple */}
      <div className="absolute aurora-1" style={{
        width: '80vw', height: '60vh',
        top: '-20vh', left: '-20vw',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(88,28,220,0.22) 0%, rgba(67,20,180,0.10) 40%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'aurora1 18s ease-in-out infinite',
      }} />

      {/* Aurora blob 2 — blue */}
      <div className="absolute aurora-2" style={{
        width: '70vw', height: '70vh',
        top: '10vh', right: '-25vw',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(30,60,220,0.16) 0%, rgba(30,60,220,0.06) 50%, transparent 75%)',
        filter: 'blur(80px)',
        animation: 'aurora2 22s ease-in-out infinite',
      }} />

      {/* Aurora blob 3 — cyan */}
      <div className="absolute aurora-3" style={{
        width: '50vw', height: '40vh',
        bottom: '-10vh', left: '20vw',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(6,100,180,0.15) 0%, rgba(6,150,200,0.06) 50%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'aurora3 26s ease-in-out infinite',
      }} />

      {/* Aurora blob 4 — violet accent */}
      <div className="absolute" style={{
        width: '30vw', height: '30vh',
        top: '40vh', left: '35vw',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 60%)',
        filter: 'blur(40px)',
        animation: 'aurora4 14s ease-in-out infinite',
      }} />

      <style>{`
        @keyframes aurora1 {
          0%,100% { transform: translate(0,0) scale(1) rotate(0deg); }
          33% { transform: translate(8vw,6vh) scale(1.12) rotate(12deg); }
          66% { transform: translate(-4vw,10vh) scale(0.92) rotate(-8deg); }
        }
        @keyframes aurora2 {
          0%,100% { transform: translate(0,0) scale(1) rotate(0deg); }
          40% { transform: translate(-10vw,-8vh) scale(1.08) rotate(-15deg); }
          70% { transform: translate(6vw,5vh) scale(0.95) rotate(10deg); }
        }
        @keyframes aurora3 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(8vw,-6vh) scale(1.15); }
        }
        @keyframes aurora4 {
          0%,100% { transform: translate(0,0) scale(1); opacity:1; }
          50% { transform: translate(-5vw,8vh) scale(1.3); opacity:0.5; }
        }
      `}</style>
    </div>
  );
}
