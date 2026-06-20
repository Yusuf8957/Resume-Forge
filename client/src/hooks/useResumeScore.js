import { useState, useEffect, useCallback } from 'react'

export function useResumeScore(data) {
  const [score, setScore] = useState(0)
  const [tips, setTips] = useState([])

  const calculate = useCallback(() => {
    let s = 0
    if (data?.personal?.name) s += 10
    if (data?.personal?.email) s += 10
    if (data?.personal?.phone) s += 5
    if (data?.personal?.location) s += 5
    if (data?.personal?.linkedin) s += 5
    if (data?.personal?.summary?.length > 50) s += 15
    if (data?.experience?.length >= 1) s += 20
    if (data?.education?.length >= 1) s += 10
    if (data?.skills?.length >= 3) s += 10
    if (data?.projects?.length >= 1) s += 10
    setScore(Math.min(s, 100))

    const t = []
    if (!data?.personal?.summary) t.push('Add a professional summary')
    if (!data?.personal?.linkedin) t.push('Add your LinkedIn profile')
    if ((data?.experience || []).length === 0) t.push('Add work experience')
    if ((data?.skills || []).length < 5) t.push('Add at least 5 skills')
    if ((data?.projects || []).length === 0) t.push('Add a project')
    setTips(t)
  }, [data])

  useEffect(() => { calculate() }, [calculate])
  return { score, tips }
}
