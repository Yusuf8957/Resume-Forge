import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: ['http://localhost:5173', 'https://*.vercel.app'] }))
app.use(express.json({ limit: '2mb' }))

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'ResuméForge API is running 🚀' })
})

// Validate resume data
app.post('/api/validate', (req, res) => {
  const { data } = req.body
  const errors = []

  if (!data?.personal?.name?.trim()) errors.push('Name is required')
  if (!data?.personal?.email?.trim()) errors.push('Email is required')
  if (data?.personal?.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.personal.email)) {
    errors.push('Invalid email address')
  }

  const score = calculateScore(data)

  res.json({ valid: errors.length === 0, errors, score, tips: generateTips(data) })
})

// Score the resume
function calculateScore(data) {
  let score = 0
  if (data?.personal?.name) score += 10
  if (data?.personal?.email) score += 10
  if (data?.personal?.phone) score += 5
  if (data?.personal?.location) score += 5
  if (data?.personal?.linkedin) score += 5
  if (data?.personal?.summary?.length > 50) score += 15
  if (data?.experience?.length >= 1) score += 20
  if (data?.education?.length >= 1) score += 10
  if (data?.skills?.length >= 3) score += 10
  if (data?.projects?.length >= 1) score += 10
  return Math.min(score, 100)
}

function generateTips(data) {
  const tips = []
  if (!data?.personal?.summary) tips.push('Add a professional summary to stand out')
  if (!data?.personal?.linkedin) tips.push('Add your LinkedIn profile URL')
  if ((data?.experience || []).length === 0) tips.push('Add at least one work experience')
  if ((data?.skills || []).length < 5) tips.push('Add more skills — aim for at least 5')
  if ((data?.projects || []).length === 0) tips.push('Add a project to showcase your work')
  return tips
}

app.listen(PORT, () => {
  console.log(`\n🚀 ResuméForge API running at http://localhost:${PORT}`)
  console.log(`   Health: http://localhost:${PORT}/api/health\n`)
})
