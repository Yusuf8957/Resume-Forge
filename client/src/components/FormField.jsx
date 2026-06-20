import React from 'react'

export function FormField({ label, children, className = '' }) {
  return (
    <div className={`mb-4 ${className}`}>
      {label && <label className="label-text">{label}</label>}
      {children}
    </div>
  )
}

export function Input({ label, ...props }) {
  return (
    <FormField label={label}>
      <input className="input-field" {...props} />
    </FormField>
  )
}

export function Textarea({ label, rows = 3, ...props }) {
  return (
    <FormField label={label}>
      <textarea className="input-field resize-none" rows={rows} {...props} />
    </FormField>
  )
}

export function SectionCard({ title, icon, children }) {
  return (
    <div className="section-card animate-fade-in">
      <div className="section-heading">
        <span className="text-base">{icon}</span>
        {title}
      </div>
      {children}
    </div>
  )
}

export function AddButton({ onClick, children }) {
  return (
    <button onClick={onClick}
      className="w-full mt-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2"
      style={{ border: '2px dashed #1a3a1a', color: '#4a8a5a' }}
      onMouseOver={e => { e.currentTarget.style.borderColor='#22c55e'; e.currentTarget.style.color='#22c55e' }}
      onMouseOut={e => { e.currentTarget.style.borderColor='#1a3a1a'; e.currentTarget.style.color='#4a8a5a' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
      {children}
    </button>
  )
}

export function EntryBlock({ onRemove, children }) {
  return (
    <div className="rounded-xl p-4 mb-3 relative group"
      style={{ background: '#060e07', border: '1px solid #1a3a1a' }}>
      {children}
      <button onClick={onRemove}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
        style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444' }}>
        ✕
      </button>
    </div>
  )
}
