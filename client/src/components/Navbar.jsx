import React from 'react'

export default function Navbar({ onDownload }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ background: 'rgba(8,15,10,0.92)', borderColor: '#1a3a1a' }}>
      <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #22c55e, #d4a017)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            Resumé<span style={{ color: '#22c55e' }}>Forge</span>
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200"
            style={{ background: '#0a1a0c', border: '1px solid #1a3a1a', color: '#4a8a5a' }}
            onMouseOver={e => { e.currentTarget.style.borderColor='#22c55e'; e.currentTarget.style.color='#22c55e' }}
            onMouseOut={e => { e.currentTarget.style.borderColor='#1a3a1a'; e.currentTarget.style.color='#4a8a5a' }}>
            🏆 Built for Digital Heroes
          </a>
          <button onClick={onDownload} className="btn-primary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PDF
          </button>
        </div>
      </div>
    </header>
  )
}
