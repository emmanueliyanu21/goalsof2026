'use client'

import { useState, useEffect } from 'react'

interface GoalsData {
  incomeProgress: number
  feanpayUsers: number
  articlesCount: number
  routineScore: number
  weeklyApplications: number
  globalTalentProgress: number
  weekStartDate: string
}

export default function GoalsTracker() {
  const [data, setData] = useState<GoalsData>({
    incomeProgress: 0,
    feanpayUsers: 0,
    articlesCount: 0,
    routineScore: 0,
    weeklyApplications: 0,
    globalTalentProgress: 0,
    weekStartDate: new Date().toDateString()
  })

  const [incomeInput, setIncomeInput] = useState('')
  const [feanpayInput, setFeanpayInput] = useState('')
  const [articlesInput, setArticlesInput] = useState('')
  const [routineInput, setRoutineInput] = useState('')
  const [dailyApps, setDailyApps] = useState('')
  const [globalTalentInput, setGlobalTalentInput] = useState('')
  
  // Accordion state - track which accordion is open
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('goalsData')
    if (savedData) {
      const parsed = JSON.parse(savedData)
      
      // Check if it's a new week (Monday)
      const today = new Date()
      if (parsed.weekStartDate !== today.toDateString() && today.getDay() === 1) {
        parsed.weeklyApplications = 0
        parsed.weekStartDate = today.toDateString()
      }
      
      setData(parsed)
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('goalsData', JSON.stringify(data))
  }, [data])

  const updateProgress = () => {
    const value = parseInt(incomeInput)
    if (value >= 0 && value <= 100) {
      setData({ ...data, incomeProgress: value })
      setIncomeInput('')
    }
  }

  const updateFeanPay = () => {
    const value = parseInt(feanpayInput)
    if (value >= 0) {
      setData({ ...data, feanpayUsers: value })
      setFeanpayInput('')
    }
  }

  const updateArticles = () => {
    const value = parseInt(articlesInput)
    if (value >= 0 && value <= 5) {
      setData({ ...data, articlesCount: value })
      setArticlesInput('')
    }
  }

  const updateRoutine = () => {
    const value = parseInt(routineInput)
    if (value >= 0 && value <= 100) {
      setData({ ...data, routineScore: value })
      setRoutineInput('')
    }
  }

  const updateGlobalTalent = () => {
    const value = parseInt(globalTalentInput)
    if (value >= 0 && value <= 100) {
      setData({ ...data, globalTalentProgress: value })
      setGlobalTalentInput('')
    }
  }

  const addDailyApplications = () => {
    const value = parseInt(dailyApps)
    if (value >= 0) {
      setData({ ...data, weeklyApplications: data.weeklyApplications + value })
      setDailyApps('')
    }
  }

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  const feanpayProgress = Math.min((data.feanpayUsers / 500) * 100, 100)
  const articlesProgress = (data.articlesCount / 5) * 100
  const weeklyProgress = Math.min((data.weeklyApplications / 40) * 100, 100)

  return (
    <div className="min-h-screen p-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="bg-white p-[30px] rounded-xl mb-5 shadow-md">
          <h1 className="text-gray-800 mb-2.5 text-3xl font-bold">🎯 Emmanuel&apos;s 2026 Goals Dashboard</h1>
          <p className="text-[#667eea] text-xl font-semibold italic">&quot;Stability + Leverage + One Breakout Win&quot;</p>
        </div>

        {/* 90-Day Sprint Accordions */}
        <div className="bg-white rounded-xl shadow-md mb-5 overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2]">
            <h2 className="text-2xl font-bold text-white">📅 90-Day Sprint Plans</h2>
            <p className="text-white/90 mt-1">Click each goal to see the detailed 90-day roadmap</p>
          </div>

          {/* Career & Income Sprint */}
          <Accordion
            id="career"
            title="💰 Career & Income - 90-Day Remote Income Sprint"
            isOpen={openAccordion === 'career'}
            onToggle={() => toggleAccordion('career')}
          >
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">🎯 Objective</h4>
                <p className="text-gray-700">Secure at least one $2k–$6k/month remote contract or role</p>
              </div>

              <SprintPhase
                phase="Phase 1: Positioning"
                days="Days 1-14"
                description="You don't job-hunt. You repackage your value."
                tasks={[
                  "Rewrite CV for remote-first audience",
                  "Rewrite LinkedIn headline & About section",
                  "Create one clean portfolio case study (Stanbic/enterprise system)"
                ]}
                deliverables={[
                  "CV: 1 main version + 1 fintech-focused version",
                  "LinkedIn optimized",
                  "1 strong case study page (Notion or personal site)"
                ]}
              />

              <SprintPhase
                phase="Phase 2: Pipeline Creation"
                days="Days 15-45"
                description="This is where money enters your life."
                tasks={[
                  "Daily minimum: 5-10 targeted applications/day",
                  "3-5 direct recruiter messages/day",
                  "Apply on: LinkedIn Jobs, Wellfound, RemoteOK, Turing, Toptal, Arc.dev, YC Work at a Startup"
                ]}
                dailyRhythm={{
                  title: "Daily Habit",
                  items: ["Apply & message: 5-10 applications", "Recruiter outreach: 3-5 messages"]
                }}
                weeklyTarget="40-60 high-quality applications"
              />

              <SprintPhase
                phase="Phase 3: Conversion"
                days="Days 46-75"
                description="From interest → interviews → offers"
                tasks={[
                  "1 hour/day: System design / frontend architecture",
                  "1 hour/day: LeetCode / core JS / React",
                  "30 mins/day: Mock interview practice"
                ]}
                deliverables={[
                  "Prepare stories for: Performance optimization",
                  "Handling complexity examples",
                  "Leadership moments",
                  "Shipping under pressure examples"
                ]}
                weeklyTarget="3 mock interviews"
              />

              <SprintPhase
                phase="Phase 4: Closing"
                days="Days 76-90"
                description="Negotiation and offer stacking"
                tasks={[
                  "Never take the first offer immediately",
                  "Target range: $2k-$6k/month",
                  "If lower: Ask for contract flexibility",
                  "Ask for performance-based raise after 60 days"
                ]}
                deliverables={[
                  "Goal: At least one signed contract before Day 90"
                ]}
              />
            </div>
          </Accordion>

          {/* Global Talent Application Sprint */}
          <Accordion
            id="globaltalent"
            title="🌍 UK Global Talent Visa - Application Sprint"
            isOpen={openAccordion === 'globaltalent'}
            onToggle={() => toggleAccordion('globaltalent')}
          >
            <div className="space-y-6">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">🎯 Objective</h4>
                <p className="text-gray-700">Successfully obtain UK Global Talent visa endorsement for international mobility and opportunities</p>
              </div>

              <SprintPhase
                phase="Phase 1: Evidence Gathering"
                days="Days 1-21"
                description="Build your exceptional talent portfolio"
                tasks={[
                  "Gather proof of technical contributions (GitHub, open source)",
                  "Collect recommendation letters from 3+ senior engineers/CTOs",
                  "Document work on significant projects (Stanbic, enterprise systems)",
                  "Compile published articles, talks, or technical content",
                  "Screenshot/document recognition in tech communities"
                ]}
                deliverables={[
                  "3 strong recommendation letters secured",
                  "Portfolio of technical work documented",
                  "Evidence of innovation/impact compiled"
                ]}
              />

              <SprintPhase
                phase="Phase 2: Application Preparation"
                days="Days 22-45"
                description="Craft a compelling case for exceptional talent"
                tasks={[
                  "Write personal statement highlighting impact & innovation",
                  "Organize evidence into mandatory and optional categories",
                  "Map evidence to Tech Nation criteria (or other endorsing body)",
                  "Review successful applications for reference",
                  "Get feedback on application from mentors/advisors"
                ]}
                deliverables={[
                  "Complete personal statement (1000-1500 words)",
                  "Evidence organized by criteria",
                  "Application reviewed by 2+ experienced people"
                ]}
                weeklyTarget="2-3 evidence documents finalized"
              />

              <SprintPhase
                phase="Phase 3: Submission & Follow-up"
                days="Days 46-75"
                description="Submit application and prepare for potential interview"
                tasks={[
                  "Submit Stage 1 (Endorsement) application",
                  "Pay application fee (£524 for endorsement)",
                  "Prepare for possible clarification requests",
                  "Continue building evidence (articles, contributions)",
                  "Plan for Stage 2 (Visa application) if endorsed"
                ]}
                deliverables={[
                  "Application submitted to Tech Nation or endorsing body",
                  "Receipt and tracking confirmation",
                  "Backup evidence prepared for clarifications"
                ]}
              />

              <SprintPhase
                phase="Phase 4: Endorsement & Visa Application"
                days="Days 76-90"
                description="Receive decision and proceed to visa if approved"
                tasks={[
                  "Await endorsement decision (6-8 weeks typical)",
                  "If endorsed: Prepare Stage 2 visa documents",
                  "Financial evidence (£1,270 maintenance funds)",
                  "TB test if required",
                  "Submit visa application within 3 months of endorsement"
                ]}
                deliverables={[
                  "Endorsement decision received",
                  "If approved: Stage 2 visa application submitted",
                  "All supporting documents ready"
                ]}
              />

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-bold text-gray-800 mb-2">💡 Key Requirements</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Demonstrate exceptional talent or exceptional promise in digital technology</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Meet 2 of 3 mandatory criteria + 3 of 7 optional criteria</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Strong recommendation letters from established figures</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Evidence of innovation, impact, and technical leadership</span>
                  </li>
                </ul>
              </div>
            </div>
          </Accordion>

          {/* FeanPay Sprint */}
          <Accordion
            id="feanpay"
            title="🚀 FeanPay - 90-Day Product Launch Sprint"
            isOpen={openAccordion === 'feanpay'}
            onToggle={() => toggleAccordion('feanpay')}
          >
            <div className="space-y-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">🎯 Objective</h4>
                <p className="text-gray-700">Launch WhatsApp-based payment MVP with 500+ active users and first revenue signal</p>
              </div>

              <SprintPhase
                phase="Phase 1: MVP Refinement"
                days="Days 1-21"
                description="Build the core product foundation"
                tasks={[
                  "Finalize WhatsApp integration flow",
                  "Set up payment processing backend",
                  "Build admin dashboard for monitoring",
                  "Test with 10-20 beta users"
                ]}
                deliverables={[
                  "Live WhatsApp-based payment system",
                  "Basic admin dashboard",
                  "Beta user feedback documented"
                ]}
              />

              <SprintPhase
                phase="Phase 2: User Acquisition"
                days="Days 22-60"
                description="Get to 500+ active users"
                tasks={[
                  "Launch in targeted communities (markets, small businesses)",
                  "Daily user onboarding: 10-15 users/day",
                  "Weekly retention check-ins",
                  "Iterate based on user feedback"
                ]}
                weeklyTarget="50-100 new active users"
                deliverables={[
                  "Clear onboarding process",
                  "User referral system",
                  "Weekly metrics tracking"
                ]}
              />

              <SprintPhase
                phase="Phase 3: Revenue & Metrics"
                days="Days 61-90"
                description="Generate first revenue and build investor story"
                tasks={[
                  "Implement transaction fees (0.5-1%)",
                  "Track: Daily active users, Transaction volume, Revenue",
                  "Document success stories",
                  "Prepare investor deck"
                ]}
                deliverables={[
                  "500+ active users achieved",
                  "Consistent monthly transactions",
                  "First meaningful revenue signal",
                  "Investor-ready metrics & story"
                ]}
              />
            </div>
          </Accordion>

          {/* Technical Authority Sprint */}
          <Accordion
            id="technical"
            title="📚 Technical Authority - 90-Day Deep Work Sprint"
            isOpen={openAccordion === 'technical'}
            onToggle={() => toggleAccordion('technical')}
          >
            <div className="space-y-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">🎯 Objective</h4>
                <p className="text-gray-700">Become &quot;that guy who understands systems, not just code&quot; - Publish 3-5 technical articles</p>
              </div>

              <SprintPhase
                phase="Phase 1: Deep Learning"
                days="Days 1-30"
                description="Build exceptionally strong foundations"
                tasks={[
                  "Study: Frontend architecture patterns (2 hours/week)",
                  "Study: Performance optimization techniques (2 hours/week)",
                  "Study: System design for frontend (2 hours/week)",
                  "Document learnings in private notes"
                ]}
                deliverables={[
                  "Personal knowledge base created",
                  "3-5 deep-dive topics identified for articles"
                ]}
              />

              <SprintPhase
                phase="Phase 2: Writing & Publishing"
                days="Days 31-75"
                description="Share knowledge publicly"
                tasks={[
                  "Write 1 technical article every 2 weeks",
                  "Topics: Frontend architecture, Performance, System design",
                  "Publish on: Dev.to, Medium, Personal blog, LinkedIn",
                  "Engage with comments and feedback"
                ]}
                weeklyTarget="1 article draft or 1 published article"
                deliverables={[
                  "3 high-quality technical articles published",
                  "Growing technical audience"
                ]}
              />

              <SprintPhase
                phase="Phase 3: Authority Building"
                days="Days 76-90"
                description="Establish credibility and visibility"
                tasks={[
                  "Share articles in relevant communities",
                  "Engage on Twitter/LinkedIn with technical insights",
                  "Contribute to open source (optional)",
                  "Connect with other senior engineers"
                ]}
                deliverables={[
                  "4-5 articles total published",
                  "Recognized as technical authority in 1-2 areas",
                  "Stronger personal brand for job applications"
                ]}
              />
            </div>
          </Accordion>

          {/* Personal Systems Sprint */}
          <Accordion
            id="personal"
            title="💪 Personal Systems - 90-Day Habit Formation Sprint"
            isOpen={openAccordion === 'personal'}
            onToggle={() => toggleAccordion('personal')}
          >
            <div className="space-y-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">🎯 Objective</h4>
                <p className="text-gray-700">Build sustainable systems: stable routine, weekly reflection, clear boundaries</p>
              </div>

              <SprintPhase
                phase="Phase 1: Foundation Setting"
                days="Days 1-21"
                description="Establish core routines"
                tasks={[
                  "Set fixed sleep schedule (same time daily)",
                  "Create work blocks: 9am-12pm, 2pm-5pm, 7pm-9pm",
                  "Weekly reflection: Sunday evenings (30 mins)",
                  "Start daily tracking (simple checklist)"
                ]}
                deliverables={[
                  "Sleep routine locked in",
                  "Work blocks established",
                  "First 3 weekly reflections completed"
                ]}
              />

              <SprintPhase
                phase="Phase 2: Optimization"
                days="Days 22-60"
                description="Reduce friction and mental overload"
                tasks={[
                  "Identify and eliminate time-wasters",
                  "Create clear boundaries: Job vs Startup vs Personal",
                  "Automate recurring decisions (meal prep, wardrobe)",
                  "Build relationship rituals (quality time weekly)"
                ]}
                weeklyTarget="80%+ routine consistency"
                deliverables={[
                  "Clear daily structure",
                  "Reduced decision fatigue",
                  "Better work-life separation"
                ]}
              />

              <SprintPhase
                phase="Phase 3: Sustainability"
                days="Days 61-90"
                description="Lock in habits for long-term"
                tasks={[
                  "Review what's working, drop what's not",
                  "Build in flexibility (not rigidity)",
                  "Create backup plans for bad days",
                  "Monthly life review session with partner"
                ]}
                deliverables={[
                  "90%+ routine consistency",
                  "Reduced mental overload",
                  "Sustainable system that compounds"
                ]}
              />
            </div>
          </Accordion>
        </div>

        {/* Progress Cards Grid */}
        
      </div>
    </div>
  )
}

// Accordion Component
function Accordion({ 
  id, 
  title, 
  isOpen, 
  onToggle, 
  children 
}: { 
  id: string
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode 
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
      >
        <span className="font-semibold text-gray-800 text-lg">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  )
}

// Sprint Phase Component
function SprintPhase({
  phase,
  days,
  description,
  tasks,
  deliverables,
  dailyRhythm,
  weeklyTarget
}: {
  phase: string
  days: string
  description: string
  tasks?: string[]
  deliverables?: string[]
  dailyRhythm?: { title: string; items: string[] }
  weeklyTarget?: string
}) {
  return (
    <div className="border-l-4 border-[#667eea] pl-6 py-3">
      <div className="mb-3">
        <h3 className="text-lg font-bold text-gray-800">{phase}</h3>
        <p className="text-sm text-gray-500">{days}</p>
        <p className="text-gray-700 mt-1 italic">{description}</p>
      </div>

      {tasks && tasks.length > 0 && (
        <div className="mb-3">
          <h4 className="font-semibold text-gray-700 mb-2">📋 Tasks:</h4>
          <ul className="space-y-1">
            {tasks.map((task, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex gap-2">
                <span className="text-[#667eea] mt-0.5">•</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {dailyRhythm && (
        <div className="mb-3 bg-blue-50 p-3 rounded">
          <h4 className="font-semibold text-gray-700 mb-2">{dailyRhythm.title}:</h4>
          <ul className="space-y-1">
            {dailyRhythm.items.map((item, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex gap-2">
                <span className="text-[#667eea] mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {weeklyTarget && (
        <div className="mb-3">
          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
            🎯 Weekly Target: {weeklyTarget}
          </span>
        </div>
      )}

      {deliverables && deliverables.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">✅ Deliverables:</h4>
          <ul className="space-y-1">
            {deliverables.map((deliverable, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}