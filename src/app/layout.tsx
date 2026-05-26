import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Nexus AI Workspace — Premium Frontend Portfolio',
  description: 'A modern AI-inspired productivity workspace frontend built with Next.js 15, TypeScript, Tailwind CSS, and Zustand.',
  keywords: ['AI workspace', 'frontend portfolio', 'Next.js', 'TypeScript', 'Zustand'],
  authors: [{ name: 'Adil Shaik', url: 'https://github.com/SHAIKADIL522' }],
  openGraph: {
    title: 'Nexus AI Workspace',
    description: 'AI-inspired workspace: Kanban, Charts, Analytics, Focus Timer, AI Insights — no API keys needed.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="text-white antialiased"
        style={{ background: 'var(--bg)', fontFamily: "'DM Sans', system-ui, sans-serif" }}
      >
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'rgba(20,20,35,0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(139,92,246,0.2)',
              color: '#C4B5FD',
              fontSize: '13px',
              borderRadius: '14px',
              fontFamily: "'DM Sans', sans-serif",
            },
          }}
          richColors
        />
      </body>
    </html>
  );
}
