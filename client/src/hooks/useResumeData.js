import { useState, useCallback } from 'react'
import { defaultResumeData, createExperience, createEducation, createProject } from '../utils/defaultData'

export function useResumeData() {
  const [data, setData] = useState(defaultResumeData)

  const updatePersonal = useCallback((field, value) => {
    setData(prev => ({ ...prev, personal: { ...prev.personal, [field]: value } }))
  }, [])

  const addExperience = useCallback(() => {
    setData(prev => ({ ...prev, experience: [...prev.experience, createExperience()] }))
  }, [])

  const updateExperience = useCallback((id, field, value) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.map(e => e.id === id ? { ...e, [field]: value } : e)
    }))
  }, [])

  const removeExperience = useCallback((id) => {
    setData(prev => ({ ...prev, experience: prev.experience.filter(e => e.id !== id) }))
  }, [])

  const addEducation = useCallback(() => {
    setData(prev => ({ ...prev, education: [...prev.education, createEducation()] }))
  }, [])

  const updateEducation = useCallback((id, field, value) => {
    setData(prev => ({
      ...prev,
      education: prev.education.map(e => e.id === id ? { ...e, [field]: value } : e)
    }))
  }, [])

  const removeEducation = useCallback((id) => {
    setData(prev => ({ ...prev, education: prev.education.filter(e => e.id !== id) }))
  }, [])

  const addProject = useCallback(() => {
    setData(prev => ({ ...prev, projects: [...prev.projects, createProject()] }))
  }, [])

  const updateProject = useCallback((id, field, value) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, [field]: value } : p)
    }))
  }, [])

  const removeProject = useCallback((id) => {
    setData(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== id) }))
  }, [])

  const updateSkills = useCallback((skillsString) => {
    const skills = skillsString.split(',').map(s => s.trim()).filter(Boolean)
    setData(prev => ({ ...prev, skills }))
  }, [])

  return {
    data,
    updatePersonal,
    addExperience, updateExperience, removeExperience,
    addEducation, updateEducation, removeEducation,
    addProject, updateProject, removeProject,
    updateSkills,
  }
}
