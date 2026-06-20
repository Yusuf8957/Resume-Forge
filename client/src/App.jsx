import React from 'react'
import Navbar from './components/Navbar'
import Builder, { ResumeProvider } from './pages/Builder'

function App() {
  const handleDownload = () => {
    const el = document.getElementById('resume-print')
    if (!el) return
    import('html2pdf.js').then(({ default: html2pdf }) => {
      const nameEl = document.querySelector('[data-resume-name]')
      const filename = nameEl ? `${nameEl.textContent.replace(/\s+/g, '_')}_resume.pdf` : 'resume.pdf'
      html2pdf().set({
        margin: [8, 10],
        filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2.5, useCORS: true, backgroundColor: '#fff' },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      }).from(el).save()
    })
  }

  return (
    <ResumeProvider>
      <div className="min-h-screen" style={{ background: '#080f0a' }}>
        <Navbar onDownload={handleDownload} />
        <Builder />
      </div>
    </ResumeProvider>
  )
}

export default App
