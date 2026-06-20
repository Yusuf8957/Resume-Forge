import React from 'react'

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <div style={{
        fontSize: '9px', fontWeight: 800, letterSpacing: '2.5px',
        textTransform: 'uppercase', marginBottom: '8px', paddingBottom: '5px',
        borderBottom: '2px solid transparent',
        backgroundImage: 'linear-gradient(90deg, #22c55e, #d4a017)',
        backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent',
        borderImage: 'linear-gradient(90deg, #22c55e, #d4a017) 1',
        borderBottomStyle: 'solid',
      }}>
        {title}
      </div>
      {children}
    </div>
  )
}

export default function ResumePreview({ data }) {
  const { personal, experience, education, skills, projects } = data
  const hasContent = personal.name || personal.email || personal.summary || experience.length > 0

  if (!hasContent) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center px-8 py-20">
        <div className="text-6xl mb-4 opacity-30">📄</div>
        <p className="text-sm font-medium" style={{ color: '#2a5a2a' }}>Your resume preview appears here</p>
        <p className="text-xs mt-1" style={{ color: '#1a3a1a' }}>Start filling details on the left</p>
      </div>
    )
  }

  return (
    <div id="resume-print" style={{
      fontFamily: "'Inter', sans-serif",
      color: '#111827',
      background: '#fff',
      padding: '36px 40px',
      minHeight: '842px',
      lineHeight: 1.55,
      fontSize: '13px',
    }}>
      {/* Header */}
      <div style={{ marginBottom: '20px', paddingBottom: '16px',
        borderBottom: '3px solid transparent',
        borderImage: 'linear-gradient(90deg, #22c55e, #d4a017) 1' }}>
        {personal.name && (
          <h1 data-resume-name style={{
            fontFamily: "'Plus Jakarta Sans','Inter',sans-serif",
            fontSize: '30px', fontWeight: 800, letterSpacing: '-0.5px',
            lineHeight: 1.1, marginBottom: '4px',
            background: 'linear-gradient(135deg, #15803d, #a16207)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>{personal.name}</h1>
        )}
        {personal.title && (
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#15803d', marginBottom: '8px' }}>
            {personal.title}
          </div>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', fontSize: '11px', color: '#555' }}>
          {personal.email && <span>✉ {personal.email}</span>}
          {personal.phone && <span>📞 {personal.phone}</span>}
          {personal.location && <span>📍 {personal.location}</span>}
          {personal.linkedin && <span>🔗 {personal.linkedin}</span>}
          {personal.website && <span>🌐 {personal.website}</span>}
        </div>
      </div>

      {personal.summary && (
        <Section title="Professional Summary">
          <p style={{ fontSize: '12px', color: '#374151', lineHeight: 1.7 }}>{personal.summary}</p>
        </Section>
      )}

      {experience.length > 0 && (
        <Section title="Work Experience">
          {experience.map(exp => (
            <div key={exp.id} style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: '13px', color: '#111' }}>{exp.role || 'Role'}</span>
                  {exp.company && <span style={{ color: '#555', fontSize: '12px' }}> — {exp.company}</span>}
                </div>
                {(exp.startDate || exp.endDate) && (
                  <span style={{ fontSize: '11px', color: '#15803d', fontWeight: 600 }}>
                    {[exp.startDate, exp.endDate].filter(Boolean).join(' – ')}
                  </span>
                )}
              </div>
              {exp.description && (
                <div style={{ fontSize: '12px', color: '#444', marginTop: '4px', whiteSpace: 'pre-line' }}>
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </Section>
      )}

      {education.length > 0 && (
        <Section title="Education">
          {education.map(edu => (
            <div key={edu.id} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: '13px', color: '#111' }}>{edu.degree || 'Degree'}</span>
                  {edu.school && <span style={{ color: '#555', fontSize: '12px' }}> — {edu.school}</span>}
                </div>
                <span style={{ fontSize: '11px', color: '#a16207', fontWeight: 600 }}>
                  {[edu.year, edu.grade].filter(Boolean).join(' · ')}
                </span>
              </div>
            </div>
          ))}
        </Section>
      )}

      {projects.length > 0 && (
        <Section title="Projects">
          {projects.map(proj => (
            <div key={proj.id} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontWeight: 700, fontSize: '13px', color: '#111' }}>{proj.name || 'Project'}</span>
                {proj.tech && <span style={{ fontSize: '10px', color: '#15803d', fontWeight: 700 }}>{proj.tech}</span>}
              </div>
              {proj.description && <div style={{ fontSize: '12px', color: '#444', marginTop: '3px' }}>{proj.description}</div>}
              {proj.link && <div style={{ fontSize: '11px', color: '#15803d', marginTop: '2px' }}>{proj.link}</div>}
            </div>
          ))}
        </Section>
      )}

      {skills.length > 0 && (
        <Section title="Skills">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {skills.map((s, i) => (
              <span key={i} style={{
                background: i % 2 === 0 ? '#f0fdf4' : '#fefce8',
                color: i % 2 === 0 ? '#15803d' : '#a16207',
                border: `1px solid ${i % 2 === 0 ? '#bbf7d0' : '#fde68a'}`,
                fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px'
              }}>{s}</span>
            ))}
          </div>
        </Section>
      )}

      {/* Footer */}
      <div style={{ marginTop: '24px', paddingTop: '12px', borderTop: '1px solid #e5e7eb',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '10px', color: '#aaa' }}>Created with ResuméForge</span>
        <a href="https://digitalheroesco.com"
          style={{
            fontSize: '10px', fontWeight: 800, padding: '4px 14px', borderRadius: '20px',
            textDecoration: 'none', color: '#000',
            background: 'linear-gradient(135deg, #22c55e, #d4a017)',
          }}>
          Built for Digital Heroes
        </a>
      </div>
    </div>
  )
}
