import React from 'react'
import FormPanel from '../components/FormPanel'
import ResumePreview from '../components/ResumePreview'
import { useResumeData } from '../hooks/useResumeData'

export default function Builder() {
  return (
    <div className="flex h-[calc(100vh-64px)] mt-16 overflow-hidden">

      {/* Left — Form Panel */}
      <div className="w-[420px] min-w-[380px] h-full overflow-y-auto p-5"
        style={{ background: '#080f0a', borderRight: '1px solid #1a3a1a' }}>
        <FormPanelWrapper />
      </div>

      {/* Right — Preview */}
      <div className="flex-1 h-full overflow-y-auto p-8" style={{ background: '#060e07' }}>
        <PreviewWrapper />
      </div>
    </div>
  )
}

// Separate component so hook is shared via context pattern
import { createContext, useContext } from 'react'
const ResumeCtx = createContext(null)

export function ResumeProvider({ children }) {
  const resumeData = useResumeData()
  return <ResumeCtx.Provider value={resumeData}>{children}</ResumeCtx.Provider>
}
export function useResume() { return useContext(ResumeCtx) }

function FormPanelWrapper() {
  const ctx = useResume()
  return <FormPanel {...ctx} data={ctx.data} />
}

function PreviewWrapper() {
  const ctx = useResume()
  return (
    <div className="max-w-[780px] mx-auto">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#22c55e' }}>Live Preview</span>
        </div>
        <span className="text-xs" style={{ color: '#1a3a1a' }}>A4 · PDF Ready</span>
      </div>
      <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 60px rgba(34,197,94,0.08), 0 0 0 1px #1a3a1a' }}>
        <ResumePreview data={ctx.data} />
      </div>
      <div className="mt-6 text-center">
     <p className="text-xs" style={{ color: '#1a3a1a' }}>
  Built by <span style={{ color: '#22c55e', fontWeight: 600 }}>Md Yusuf</span>
  {' · '}
  <span style={{ color: '#d4a017' }}>m6645409@email.com</span>
</p>
      </div>
    </div>
  )
}
