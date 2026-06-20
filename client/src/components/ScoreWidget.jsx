import React from 'react'
import { useResumeScore } from '../hooks/useResumeScore'

export default function ScoreWidget({ data }) {
  const { score, tips } = useResumeScore(data)
  const color = score >= 80 ? '#22c55e' : score >= 50 ? '#d4a017' : '#ef4444'
  const label = score >= 80 ? '🏆 Excellent' : score >= 50 ? '⚡ Good' : '🔧 Needs Work'

  return (
    <div className="rounded-2xl p-5 mb-4 flex items-center gap-4"
      style={{ background: 'linear-gradient(135deg, #0a1a0c, #0f1a08)', border: '1px solid #1a3a1a' }}>
      {/* Circle */}
      <div className="relative w-16 h-16 flex-shrink-0">
        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#1a3a1a" strokeWidth="3"/>
          <circle cx="18" cy="18" r="15.9" fill="none" strokeWidth="3"
            stroke={color}
            strokeDasharray={`${score} 100`}
            strokeLinecap="round"
            style={{ transition: 'stroke-dasharray 0.8s ease', filter: `drop-shadow(0 0 6px ${color})` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-white">{score}</span>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="font-bold text-sm mb-1" style={{ color }}>{label}</div>
        {tips.length > 0 ? (
          <div className="space-y-0.5">
            {tips.slice(0, 3).map((tip, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs" style={{ color: '#4a8a5a' }}>
                <span style={{ color: '#d4a017' }}>→</span> {tip}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-xs" style={{ color: '#22c55e' }}>Resume looks great! 🎉</div>
        )}
      </div>
    </div>
  )
}
