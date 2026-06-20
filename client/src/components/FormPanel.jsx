import React from 'react'
import { Input, Textarea, SectionCard, AddButton, EntryBlock } from './FormField'
import ScoreWidget from './ScoreWidget'

export default function FormPanel({
  data,
  updatePersonal,
  addExperience, updateExperience, removeExperience,
  addEducation, updateEducation, removeEducation,
  addProject, updateProject, removeProject,
  updateSkills,
}) {
  return (
    <div className="h-full overflow-y-auto pb-8 pr-1">

      {/* Score Widget */}
      <ScoreWidget data={data} />

      {/* Personal Info */}
      <SectionCard title="Personal Info" icon="👤">
        <div className="grid grid-cols-2 gap-x-3">
          <Input label="Full Name" placeholder="Rahul Sharma"
            value={data.personal.name} onChange={e => updatePersonal('name', e.target.value)} />
          <Input label="Job Title" placeholder="Full Stack Developer"
            value={data.personal.title} onChange={e => updatePersonal('title', e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-x-3">
          <Input label="Email" type="email" placeholder="rahul@email.com"
            value={data.personal.email} onChange={e => updatePersonal('email', e.target.value)} />
          <Input label="Phone" placeholder="+91 9876543210"
            value={data.personal.phone} onChange={e => updatePersonal('phone', e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-x-3">
          <Input label="Location" placeholder="Lucknow, UP"
            value={data.personal.location} onChange={e => updatePersonal('location', e.target.value)} />
          <Input label="LinkedIn" placeholder="linkedin.com/in/username"
            value={data.personal.linkedin} onChange={e => updatePersonal('linkedin', e.target.value)} />
        </div>
        <Input label="Portfolio / Website (optional)" placeholder="yourportfolio.com"
          value={data.personal.website} onChange={e => updatePersonal('website', e.target.value)} />
        <Textarea label="Professional Summary" rows={3}
          placeholder="2-3 lines about your expertise, skills, and career goal..."
          value={data.personal.summary} onChange={e => updatePersonal('summary', e.target.value)} />
      </SectionCard>

      {/* Experience */}
      <SectionCard title="Work Experience" icon="💼">
        {data.experience.map(exp => (
          <EntryBlock key={exp.id} onRemove={() => removeExperience(exp.id)}>
            <div className="grid grid-cols-2 gap-x-3">
              <Input label="Job Title" placeholder="Software Developer"
                value={exp.role} onChange={e => updateExperience(exp.id, 'role', e.target.value)} />
              <Input label="Company" placeholder="Google / Startup XYZ"
                value={exp.company} onChange={e => updateExperience(exp.id, 'company', e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-x-3">
              <Input label="Start Date" placeholder="Jun 2022"
                value={exp.startDate} onChange={e => updateExperience(exp.id, 'startDate', e.target.value)} />
              <Input label="End Date" placeholder="Present"
                value={exp.endDate} onChange={e => updateExperience(exp.id, 'endDate', e.target.value)} />
            </div>
            <Textarea label="Key Achievements / Responsibilities" rows={3}
              placeholder="• Built X that improved Y by Z%&#10;• Led a team of 3 engineers..."
              value={exp.description} onChange={e => updateExperience(exp.id, 'description', e.target.value)} />
          </EntryBlock>
        ))}
        <AddButton onClick={addExperience}>Add Experience</AddButton>
      </SectionCard>

      {/* Education */}
      <SectionCard title="Education" icon="🎓">
        {data.education.map(edu => (
          <EntryBlock key={edu.id} onRemove={() => removeEducation(edu.id)}>
            <div className="grid grid-cols-2 gap-x-3">
              <Input label="Degree / Course" placeholder="B.Tech Computer Science"
                value={edu.degree} onChange={e => updateEducation(edu.id, 'degree', e.target.value)} />
              <Input label="College / University" placeholder="AKTU, Lucknow"
                value={edu.school} onChange={e => updateEducation(edu.id, 'school', e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-x-3">
              <Input label="Year" placeholder="2020 – 2024"
                value={edu.year} onChange={e => updateEducation(edu.id, 'year', e.target.value)} />
              <Input label="Grade / CGPA" placeholder="8.5 CGPA / 85%"
                value={edu.grade} onChange={e => updateEducation(edu.id, 'grade', e.target.value)} />
            </div>
          </EntryBlock>
        ))}
        <AddButton onClick={addEducation}>Add Education</AddButton>
      </SectionCard>

      {/* Skills */}
      <SectionCard title="Skills" icon="⚡">
        <Textarea label="Skills (comma separated)" rows={3}
          placeholder="React, Node.js, Python, Figma, SQL, AWS, Git..."
          value={data.skills.join(', ')}
          onChange={e => updateSkills(e.target.value)} />
        {data.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {data.skills.map((s, i) => <span key={i} className="tag">{s}</span>)}
          </div>
        )}
      </SectionCard>

      {/* Projects */}
      <SectionCard title="Projects" icon="🚀">
        {data.projects.map(proj => (
          <EntryBlock key={proj.id} onRemove={() => removeProject(proj.id)}>
            <div className="grid grid-cols-2 gap-x-3">
              <Input label="Project Name" placeholder="Resume Builder"
                value={proj.name} onChange={e => updateProject(proj.id, 'name', e.target.value)} />
              <Input label="Tech Stack" placeholder="React, Node.js, MongoDB"
                value={proj.tech} onChange={e => updateProject(proj.id, 'tech', e.target.value)} />
            </div>
            <Textarea label="Description" rows={2}
              placeholder="What it does and your role in it..."
              value={proj.description} onChange={e => updateProject(proj.id, 'description', e.target.value)} />
            <Input label="GitHub / Live Link (optional)" placeholder="github.com/you/project"
              value={proj.link} onChange={e => updateProject(proj.id, 'link', e.target.value)} />
          </EntryBlock>
        ))}
        <AddButton onClick={addProject}>Add Project</AddButton>
      </SectionCard>

    </div>
  )
}
