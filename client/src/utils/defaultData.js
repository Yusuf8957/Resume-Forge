export const defaultResumeData = {
  personal: {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: '',
    summary: '',
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
}

export const createExperience = () => ({
  id: Date.now(),
  role: '',
  company: '',
  location: '',
  startDate: '',
  endDate: '',
  current: false,
  description: '',
})

export const createEducation = () => ({
  id: Date.now(),
  degree: '',
  school: '',
  year: '',
  grade: '',
})

export const createProject = () => ({
  id: Date.now(),
  name: '',
  tech: '',
  description: '',
  link: '',
})
