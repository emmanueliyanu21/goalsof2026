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
  currentDay: number
  completedTasks: { [key: string]: boolean }
}

type TabType = 'dashboard' | 'tasks' | 'ideas' | 'motivation' | 'rolemodels'

export default function GoalsTracker() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')
  const [data, setData] = useState<GoalsData>({
    incomeProgress: 0,
    feanpayUsers: 0,
    articlesCount: 0,
    routineScore: 0,
    weeklyApplications: 0,
    globalTalentProgress: 0,
    weekStartDate: new Date().toDateString(),
    currentDay: 1,
    completedTasks: {}
  })

  const [incomeInput, setIncomeInput] = useState('')
  const [feanpayInput, setFeanpayInput] = useState('')
  const [articlesInput, setArticlesInput] = useState('')
  const [routineInput, setRoutineInput] = useState('')
  const [dailyApps, setDailyApps] = useState('')
  const [globalTalentInput, setGlobalTalentInput] = useState('')
  
  // Accordion state - track which accordion is open
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const [openIdeaCategory, setOpenIdeaCategory] = useState<string | null>(null)

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

  const toggleIdeaCategory = (id: string) => {
    setOpenIdeaCategory(openIdeaCategory === id ? null : id)
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

        {/* Tabs Navigation */}
        <div className="bg-white rounded-t-xl shadow-md overflow-hidden">
          <div className="flex border-b border-gray-200">
            <TabButton 
              active={activeTab === 'dashboard'} 
              onClick={() => setActiveTab('dashboard')}
              icon="📊"
            >
              Dashboard
            </TabButton>
            <TabButton 
              active={activeTab === 'tasks'} 
              onClick={() => setActiveTab('tasks')}
              icon="✅"
            >
              Daily Tasks
            </TabButton>
            <TabButton 
              active={activeTab === 'ideas'} 
              onClick={() => setActiveTab('ideas')}
              icon="💡"
            >
              Ideas Lab
            </TabButton>
            <TabButton 
              active={activeTab === 'motivation'} 
              onClick={() => setActiveTab('motivation')}
              icon="🔥"
            >
              Motivation
            </TabButton>
            <TabButton 
              active={activeTab === 'rolemodels'} 
              onClick={() => setActiveTab('rolemodels')}
              icon="⭐"
            >
              Role Models
            </TabButton>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-xl shadow-md mb-5">
          {/* DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <div className="p-6">
              {/* 90-Day Sprint Accordions */}
              <div className="mb-6">
                <div className="p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-t-xl">
                  <h2 className="text-2xl font-bold text-white">📅 90-Day Sprint Plans</h2>
                  <p className="text-white/90 mt-1">Click each goal to see the detailed 90-day roadmap</p>
                </div>

                <div className="border border-gray-200 rounded-b-xl overflow-hidden">
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
              </div>

              {/* Progress Cards Grid */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
                {/* Career & Income Card */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-[25px] rounded-xl shadow-md border border-blue-100">
                  <h2 className="text-gray-800 mb-[15px] text-lg flex items-center gap-2.5">
                    <span className="text-2xl">💰</span> Career & Income
                  </h2>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 text-sm">Target Monthly Income</span>
                    <span className="font-semibold text-gray-800">$2k-$6k</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b-0">
                    <span className="text-gray-600 text-sm">Current Status</span>
                    <span className="inline-block px-3 py-1 rounded-xl text-xs font-semibold bg-red-100 text-red-800">In Progress</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded overflow-hidden my-2.5">
                    <div 
                      className="h-full transition-all duration-300" 
                      style={{ 
                        width: `${data.incomeProgress}%`,
                        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
                      }}
                    />
                  </div>
                  <div className="my-[15px]">
                    <label className="block text-gray-600 text-sm mb-1">Update Progress (%)</label>
                    <input 
                      type="number" 
                      min="0" 
                      max="100" 
                      placeholder="0-100"
                      value={incomeInput}
                      onChange={(e) => setIncomeInput(e.target.value)}
                      className="w-full p-2.5 border-2 border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#667eea]"
                    />
                    <button 
                      onClick={updateProgress}
                      className="w-full mt-2.5 text-sm bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none py-3 px-6 rounded-md font-semibold cursor-pointer hover:opacity-90"
                    >
                      Update
                    </button>
                  </div>
                </div>

                {/* Global Talent Card */}
                <div className="bg-gradient-to-br from-indigo-50 to-white p-[25px] rounded-xl shadow-md border border-indigo-100">
                  <h2 className="text-gray-800 mb-[15px] text-lg flex items-center gap-2.5">
                    <span className="text-2xl">🌍</span> Global Talent Visa
                  </h2>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 text-sm">Target</span>
                    <span className="font-semibold text-gray-800">UK Endorsement</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b-0">
                    <span className="text-gray-600 text-sm">Current Phase</span>
                    <span className="font-semibold text-gray-800">Preparation</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded overflow-hidden my-2.5">
                    <div 
                      className="h-full transition-all duration-300" 
                      style={{ 
                        width: `${data.globalTalentProgress}%`,
                        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
                      }}
                    />
                  </div>
                  <div className="my-[15px]">
                    <label className="block text-gray-600 text-sm mb-1">Update Progress (%)</label>
                    <input 
                      type="number" 
                      min="0" 
                      max="100" 
                      placeholder="0-100"
                      value={globalTalentInput}
                      onChange={(e) => setGlobalTalentInput(e.target.value)}
                      className="w-full p-2.5 border-2 border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#667eea]"
                    />
                    <button 
                      onClick={updateGlobalTalent}
                      className="w-full mt-2.5 text-sm bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none py-3 px-6 rounded-md font-semibold cursor-pointer hover:opacity-90"
                    >
                      Update
                    </button>
                  </div>
                </div>

                {/* FeanPay Card */}
                <div className="bg-gradient-to-br from-green-50 to-white p-[25px] rounded-xl shadow-md border border-green-100">
                  <h2 className="text-gray-800 mb-[15px] text-lg flex items-center gap-2.5">
                    <span className="text-2xl">🚀</span> FeanPay Progress
                  </h2>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 text-sm">Target Users</span>
                    <span className="font-semibold text-gray-800">500+</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b-0">
                    <span className="text-gray-600 text-sm">Current Users</span>
                    <span className="font-semibold text-gray-800">{data.feanpayUsers}</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded overflow-hidden my-2.5">
                    <div 
                      className="h-full transition-all duration-300" 
                      style={{ 
                        width: `${feanpayProgress}%`,
                        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
                      }}
                    />
                  </div>
                  <div className="my-[15px]">
                    <label className="block text-gray-600 text-sm mb-1">Current User Count</label>
                    <input 
                      type="number" 
                      min="0" 
                      placeholder="Enter user count"
                      value={feanpayInput}
                      onChange={(e) => setFeanpayInput(e.target.value)}
                      className="w-full p-2.5 border-2 border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#667eea]"
                    />
                    <button 
                      onClick={updateFeanPay}
                      className="w-full mt-2.5 text-sm bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none py-3 px-6 rounded-md font-semibold cursor-pointer hover:opacity-90"
                    >
                      Update
                    </button>
                  </div>
                </div>

                {/* Technical Authority Card */}
                <div className="bg-gradient-to-br from-purple-50 to-white p-[25px] rounded-xl shadow-md border border-purple-100">
                  <h2 className="text-gray-800 mb-[15px] text-lg flex items-center gap-2.5">
                    <span className="text-2xl">📚</span> Technical Authority
                  </h2>
                  <div className="flex justify-between items-center py-3 border-b-0">
                    <span className="text-gray-600 text-sm">Articles Published</span>
                    <span className="font-semibold text-gray-800">{data.articlesCount} / 5</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded overflow-hidden my-2.5">
                    <div 
                      className="h-full transition-all duration-300" 
                      style={{ 
                        width: `${articlesProgress}%`,
                        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
                      }}
                    />
                  </div>
                  <div className="my-[15px]">
                    <label className="block text-gray-600 text-sm mb-1">Articles Published</label>
                    <input 
                      type="number" 
                      min="0" 
                      max="5" 
                      placeholder="0-5"
                      value={articlesInput}
                      onChange={(e) => setArticlesInput(e.target.value)}
                      className="w-full p-2.5 border-2 border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#667eea]"
                    />
                    <button 
                      onClick={updateArticles}
                      className="w-full mt-2.5 text-sm bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none py-3 px-6 rounded-md font-semibold cursor-pointer hover:opacity-90"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DAILY TASKS TAB */}
          {activeTab === 'tasks' && (
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">✅ 90-Day Daily Task Breakdown</h2>
                <p className="text-gray-600">Day-by-day action plan for your goals. Check off tasks as you complete them.</p>
              </div>

              {/* Current Day Tracker */}
              <div className="mb-6 p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-xl text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Current Progress</h3>
                    <p className="text-white/90">Day {data.currentDay} of 90</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{Math.round((data.currentDay / 90) * 100)}%</div>
                    <p className="text-sm text-white/90">Complete</p>
                  </div>
                </div>
                <div className="mt-4 bg-white/20 h-3 rounded-full overflow-hidden">
                  <div 
                    className="bg-white h-full transition-all duration-300"
                    style={{ width: `${(data.currentDay / 90) * 100}%` }}
                  />
                </div>
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => setData({ ...data, currentDay: Math.max(1, data.currentDay - 1) })}
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-semibold transition-colors"
                  >
                    ← Previous Day
                  </button>
                  <button
                    onClick={() => setData({ ...data, currentDay: Math.min(90, data.currentDay + 1) })}
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Next Day →
                  </button>
                  <button
                    onClick={() => setData({ ...data, currentDay: 1 })}
                    className="ml-auto px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Reset to Day 1
                  </button>
                </div>
              </div>

              {/* Phase Selector */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                <button
                  onClick={() => setData({ ...data, currentDay: 1 })}
                  className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border-2 border-blue-200 transition-colors"
                >
                  <div className="font-bold text-blue-800">Phase 1</div>
                  <div className="text-xs text-blue-600">Days 1-14</div>
                  <div className="text-xs text-gray-600 mt-1">Positioning</div>
                </button>
                <button
                  onClick={() => setData({ ...data, currentDay: 15 })}
                  className="p-4 bg-green-50 hover:bg-green-100 rounded-lg border-2 border-green-200 transition-colors"
                >
                  <div className="font-bold text-green-800">Phase 2</div>
                  <div className="text-xs text-green-600">Days 15-45</div>
                  <div className="text-xs text-gray-600 mt-1">Pipeline</div>
                </button>
                <button
                  onClick={() => setData({ ...data, currentDay: 46 })}
                  className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border-2 border-purple-200 transition-colors"
                >
                  <div className="font-bold text-purple-800">Phase 3</div>
                  <div className="text-xs text-purple-600">Days 46-75</div>
                  <div className="text-xs text-gray-600 mt-1">Conversion</div>
                </button>
                <button
                  onClick={() => setData({ ...data, currentDay: 76 })}
                  className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg border-2 border-orange-200 transition-colors"
                >
                  <div className="font-bold text-orange-800">Phase 4</div>
                  <div className="text-xs text-orange-600">Days 76-90</div>
                  <div className="text-xs text-gray-600 mt-1">Closing</div>
                </button>
              </div>

              {/* Daily Task List */}
              <DailyTaskView 
                currentDay={data.currentDay}
                completedTasks={data.completedTasks}
                onToggleTask={(taskId: string) => {
                  setData({
                    ...data,
                    completedTasks: {
                      ...data.completedTasks,
                      [taskId]: !data.completedTasks[taskId]
                    }
                  })
                }}
              />
            </div>
          )}

          {/* IDEAS LAB TAB */}
          {activeTab === 'ideas' && (
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">💡 Creative Ideas for 2026</h2>
                <p className="text-gray-600">Strategic ideas to accelerate your goals - click to expand each category</p>
              </div>

              <div className="space-y-3">
                <IdeaCategory
                  id="content"
                  title="🎨 Content & Personal Brand"
                  isOpen={openIdeaCategory === 'content'}
                  onToggle={() => toggleIdeaCategory('content')}
                  ideas={[
                    "Video DevLogs: Document your FeanPay journey weekly on YouTube/Twitter",
                    "Technical Deep Dives: Create animated explainer videos about frontend architecture",
                    '"90 Days to Remote" Series: Blog/tweet thread documenting your job search',
                    "Case Study Showcase: Turn Stanbic work into interactive portfolio piece",
                    "Podcast Guest Appearances: Share fintech/frontend expertise"
                  ]}
                />

                <IdeaCategory
                  id="feanpay-growth"
                  title="🚀 FeanPay Growth Hacks"
                  isOpen={openIdeaCategory === 'feanpay-growth'}
                  onToggle={() => toggleIdeaCategory('feanpay-growth')}
                  ideas={[
                    'WhatsApp Community Groups: Create "Small Business Tips + Payments" groups',
                    'Referral Competition: Gamify user acquisition - "Refer 5 friends, get ₦500 bonus"',
                    "Local Partnerships: Partner with market associations, POS operators",
                    "User Stories Campaign: Feature successful users on social media weekly",
                    "WhatsApp Status Marketing: Teach users to promote via their status"
                  ]}
                />

                <IdeaCategory
                  id="technical-authority"
                  title="📚 Technical Authority Accelerators"
                  isOpen={openIdeaCategory === 'technical-authority'}
                  onToggle={() => toggleIdeaCategory('technical-authority')}
                  ideas={[
                    "Open Source Contribution: Build a popular React/Next.js library",
                    "Twitter Technical Threads: Weekly threads breaking down complex concepts",
                    "Live Coding Sessions: Stream your work on Twitch/YouTube",
                    "GitHub Showcases: Document architecture decisions in detailed READMEs",
                    "Conference Speaking: Apply to speak at local/virtual tech conferences"
                  ]}
                />

                <IdeaCategory
                  id="job-search"
                  title="💼 Job Search Innovation"
                  isOpen={openIdeaCategory === 'job-search'}
                  onToggle={() => toggleIdeaCategory('job-search')}
                  ideas={[
                    'Personal Landing Page: "Hire Emmanuel" site with video intro, projects',
                    "Cold Email Templates: Create 5-7 proven templates for different scenarios",
                    "Video Applications: Record 60-second intro videos that stand out",
                    "LinkedIn Content Strategy: Post 3x/week about learning/building",
                    "Recruiter Relationship System: Build genuine relationships, not transactions"
                  ]}
                />

                <IdeaCategory
                  id="global-talent"
                  title="🌍 Global Talent Evidence Building"
                  isOpen={openIdeaCategory === 'global-talent'}
                  onToggle={() => toggleIdeaCategory('global-talent')}
                  ideas={[
                    "Technical Mentorship: Mentor 3-5 junior developers (documented evidence)",
                    "Community Impact: Organize local tech meetups or workshops",
                    "Innovation Documentation: Patent or detailed write-up of novel solutions",
                    "Media Mentions: Get featured in tech publications (Dev.to editorial picks)",
                    'Awards & Recognition: Apply for "Top 100 Developers in Nigeria" lists'
                  ]}
                />

                <IdeaCategory
                  id="life-design"
                  title="🎯 Life Design Elements"
                  isOpen={openIdeaCategory === 'life-design'}
                  onToggle={() => toggleIdeaCategory('life-design')}
                  ideas={[
                    "Vision Board 2.0: Digital dashboard with images of your goals",
                    "Accountability Pod: Form group of 3-5 peers, weekly check-ins",
                    "Milestone Celebrations: Pre-plan rewards (first $1k month = treat)",
                    '"State of Emmanuel" Reports: Monthly reflective essays on progress',
                    "Partner Goal Syncing: Monthly planning sessions on shared vision"
                  ]}
                />

                <IdeaCategory
                  id="financial"
                  title="💰 Financial Creativity"
                  isOpen={openIdeaCategory === 'financial'}
                  onToggle={() => toggleIdeaCategory('financial')}
                  ideas={[
                    "Freelance Experiments: Take 1-2 small projects to test remote work",
                    "Equity + Cash Deals: Negotiate small equity stakes in startups you help",
                    "Technical Advisory Roles: Monthly retainers for strategic tech advice",
                    '"Frontend Architecture Masterclass" course (passive income + authority)',
                    'Productized Consulting: "Frontend Performance Audit - $500 flat fee"'
                  ]}
                />

                <IdeaCategory
                  id="product-innovation"
                  title="⚡ FeanPay Product Innovation"
                  isOpen={openIdeaCategory === 'product-innovation'}
                  onToggle={() => toggleIdeaCategory('product-innovation')}
                  ideas={[
                    "WhatsApp Bot Personality: Give bot a friendly Nigerian character/voice",
                    "Voice Notes Integration: Let users send voice commands for payments",
                    "Community Features: Group savings, split bills, community pools",
                    "Merchant Dashboard: Analytics for business users",
                    "Integration Marketplace: Let other apps integrate FeanPay"
                  ]}
                />

                <IdeaCategory
                  id="differentiators"
                  title="✨ Unique Differentiators"
                  isOpen={openIdeaCategory === 'differentiators'}
                  onToggle={() => toggleIdeaCategory('differentiators')}
                  ideas={[
                    'Technical Newsletter: "The Frontend Architect" - weekly insights',
                    "Code Review Service: Charge $50-100 to review and improve codebases",
                    "Architecture Consulting: Help startups design scalable frontend systems",
                    "Interview Prep Coaching: Help Nigerian engineers land remote roles",
                    '"100 Days of Building FeanPay" with daily updates'
                  ]}
                />

                <IdeaCategory
                  id="evidence"
                  title="🏆 Global Talent Creative Evidence"
                  isOpen={openIdeaCategory === 'evidence'}
                  onToggle={() => toggleIdeaCategory('evidence')}
                  ideas={[
                    'Technical Book: "Frontend Architecture for African Fintech" (self-published)',
                    "Innovation Patent: Document and potentially patent unique technical approach",
                    "Academic Collaboration: Partner with university on research/teaching",
                    "Industry Awards: Apply for tech innovation awards in Nigeria/Africa",
                    "Media Features: Pitch story to TechCabal, Techpoint Africa"
                  ]}
                />
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-xl text-white">
                <h3 className="text-xl font-bold mb-3">🎯 Top 3 Recommended Priorities</h3>
                <div className="space-y-3">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-1">1. "Building FeanPay in Public" Campaign</h4>
                    <p className="text-sm text-white/90">Weekly video devlogs + transparent metrics + user stories → Builds brand + attracts users + creates Global Talent evidence</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-1">2. "The Frontend Systems Newsletter"</h4>
                    <p className="text-sm text-white/90">Weekly deep technical insights → 3-5 articles + email list → Technical authority + job credibility + monetization</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-1">3. "90 Days to Remote" Twitter/Blog Series</h4>
                    <p className="text-sm text-white/90">Document entire job search → Share templates + lessons → Network expansion + visibility + future book/course</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MOTIVATION TAB */}
          {activeTab === 'motivation' && (
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">🔥 Your Motivation & Vision</h2>
                <p className="text-gray-600">Remember why you started. This is what you&apos;re building toward.</p>
              </div>

              {/* Vision Section */}
              <div className="mb-6 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span>🎯</span> The 2026 Vision
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="text-lg font-semibold italic text-[#667eea]">&quot;Stability + Leverage + One Breakout Win&quot;</p>
                  <p>This is NOT the year to do everything. This is the year things finally compound.</p>
                  <p className="font-semibold">Not chaos. Not scrambling. Not reactive.</p>
                  <p className="font-semibold text-lg">One year where you move from survival mode into architect mode.</p>
                </div>
              </div>

              {/* Why This Matters */}
              <div className="mb-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span>💎</span> Why This Matters
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">💰 Financial Freedom</h4>
                    <p className="text-sm text-gray-600">Remote income ($2k-$6k/month) funds FeanPay, FeanSolar, peace at home, and mental clarity. You don&apos;t build empires while financially anxious.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">🚀 Product Success</h4>
                    <p className="text-sm text-gray-600">500+ active FeanPay users with real revenue = proof of concept. One undeniable product is better than three struggling ideas.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">📚 Technical Authority</h4>
                    <p className="text-sm text-gray-600">Being known as &quot;that guy who understands systems&quot; unlocks higher pay, leadership roles, and founder credibility.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">❤️ Relationship Peace</h4>
                    <p className="text-sm text-gray-600">Clear communication, fewer conflicts, shared vision, quality time. Success that destroys peace is failure in disguise.</p>
                  </div>
                </div>
              </div>

              {/* Identity Shift */}
              <div className="mb-6 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span>🦋</span> The Identity Shift
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-red-700 mb-3">❌ Before (Survival Mode)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-2"><span>•</span><span>Income uncertainty</span></li>
                      <li className="flex gap-2"><span>•</span><span>Emotional stress</span></li>
                      <li className="flex gap-2"><span>•</span><span>Reactive decisions</span></li>
                      <li className="flex gap-2"><span>•</span><span>Building many things, owning nothing</span></li>
                      <li className="flex gap-2"><span>•</span><span>&quot;Trying to make it&quot;</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-700 mb-3">✅ After (Architect Mode)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-2"><span>✓</span><span>Stable income ($2k-$6k/month)</span></li>
                      <li className="flex gap-2"><span>✓</span><span>You stop scrambling. You start choosing.</span></li>
                      <li className="flex gap-2"><span>✓</span><span>Intentional, strategic decisions</span></li>
                      <li className="flex gap-2"><span>✓</span><span>One product with real traction</span></li>
                      <li className="flex gap-2"><span>✓</span><span>&quot;I am building something serious&quot;</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Motivational Quotes */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                  <p className="text-lg font-semibold text-gray-800 italic">&quot;You don&apos;t need more motivation. You need less friction.&quot;</p>
                  <p className="text-sm text-gray-600 mt-2">— Your 2026 Plan</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl">
                  <p className="text-lg font-semibold text-gray-800 italic">&quot;2026 is NOT the year to start 3 companies. It&apos;s the year to make one undeniable.&quot;</p>
                  <p className="text-sm text-gray-600 mt-2">— Your 2026 Plan</p>
                </div>
              </div>

              {/* End Goal Feeling */}
              <div className="p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-xl text-white">
                <h3 className="text-xl font-bold mb-4">🎊 By End of 2026, You Should Feel Like:</h3>
                <div className="space-y-2 text-lg">
                  <p>✨ &quot;I&apos;m no longer scrambling&quot;</p>
                  <p>✨ &quot;I have leverage&quot;</p>
                  <p>✨ &quot;I&apos;m building something that matters&quot;</p>
                  <p>✨ &quot;My life is intentional, not reactive&quot;</p>
                </div>
                <p className="mt-4 text-white/90 font-semibold text-xl">That&apos;s the real upgrade.</p>
              </div>
            </div>
          )}

          {/* ROLE MODELS TAB */}
          {activeTab === 'rolemodels' && (
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">⭐ Role Models & Inspiration</h2>
                <p className="text-gray-600">People who&apos;ve walked similar paths and achieved what you&apos;re building toward</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Technical Excellence */}
                <RoleModelCard
                  category="💻 Technical Excellence"
                  people={[
                    {
                      name: "Kent C. Dodds",
                      achievement: "From support engineer → Recognized React authority → $200k+/year",
                      lesson: "Teaching what you know builds authority faster than just doing the work",
                      action: "Study his content strategy: courses, blog, podcasts, open source"
                    },
                    {
                      name: "Addy Osmani",
                      achievement: "Senior Staff Engineer at Google, Author, Speaker",
                      lesson: "Deep technical knowledge + consistent sharing = industry recognition",
                      action: "Follow his approach to performance optimization & architecture"
                    }
                  ]}
                />

                {/* African Tech Success */}
                <RoleModelCard
                  category="🌍 African Tech Success"
                  people={[
                    {
                      name: "Shola Akinlade (Paystack)",
                      achievement: "Built Paystack in Nigeria → Acquired by Stripe for $200M+",
                      lesson: "Solve local problems exceptionally well. Global recognition follows.",
                      action: "Study Paystack's early user acquisition & product iterations"
                    },
                    {
                      name: "Sim Shagaya",
                      achievement: "Built multiple successful startups (Konga, uLesson)",
                      lesson: "Serial entrepreneurship requires focus. One win at a time.",
                      action: "Research his journey from consultant → founder → ecosystem builder"
                    }
                  ]}
                />

                {/* Remote Work Success */}
                <RoleModelCard
                  category="🌐 Remote Work Pioneers"
                  people={[
                    {
                      name: "Levels.fyi Founders",
                      achievement: "Built $10M+ business remotely with small team",
                      lesson: "Leverage + small team + focus = massive outcomes",
                      action: "Study how they built authority in tech compensation space"
                    },
                    {
                      name: "Pieter Levels",
                      achievement: "Built 40+ projects, $1M+ revenue, fully remote",
                      lesson: "Ship fast, build in public, iterate based on traction",
                      action: "Follow his 'build in public' approach on Twitter"
                    }
                  ]}
                />

                {/* Fintech Innovation */}
                <RoleModelCard
                  category="💳 Fintech Innovation"
                  people={[
                    {
                      name: "Flutterwave Founders",
                      achievement: "Built Africa's payment infrastructure → $3B+ valuation",
                      lesson: "Infrastructure plays unlock massive value. Build the rails.",
                      action: "Study their expansion strategy & partnership approach"
                    },
                    {
                      name: "Interswitch Story",
                      achievement: "Nigeria's first unicorn through payment solutions",
                      lesson: "Long-term thinking in fintech pays off. Patience + execution.",
                      action: "Understand how they built trust & scaled infrastructure"
                    }
                  ]}
                />

                {/* Content + Authority */}
                <RoleModelCard
                  category="✍️ Content + Authority"
                  people={[
                    {
                      name: "Tiago Forte",
                      achievement: "Built $5M+/year business teaching productivity online",
                      lesson: "Your knowledge + teaching + community = valuable business",
                      action: "Study his content marketing & course creation strategy"
                    },
                    {
                      name: "Ali Abdaal",
                      achievement: "Doctor → YouTuber → $5M+/year creator business",
                      lesson: "Teach while you learn. Document the journey publicly.",
                      action: "Follow his approach to productivity content & productization"
                    }
                  ]}
                />

                {/* Global Talent Success */}
                <RoleModelCard
                  category="🎓 Global Talent Success Stories"
                  people={[
                    {
                      name: "Nigerian Tech Emigrants",
                      achievement: "Many have secured UK Global Talent visas through tech contributions",
                      lesson: "Technical excellence + community impact + documentation = endorsement",
                      action: "Research successful applications, join Global Talent communities"
                    },
                    {
                      name: "African Tech Leaders in Diaspora",
                      achievement: "Engineers at FAANG, successful startups, acquired companies",
                      lesson: "Global opportunities favor those who build proof publicly",
                      action: "Network with Nigerian engineers in UK/US tech ecosystems"
                    }
                  ]}
                />
              </div>

              {/* Action Steps */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-xl text-white">
                <h3 className="text-xl font-bold mb-4">🎯 How to Apply These Models to Your Journey</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">1. Study Their Early Days</h4>
                    <p className="text-sm text-white/90">Don&apos;t compare your beginning to their middle. Research what they did in years 1-3.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">2. Extract Patterns</h4>
                    <p className="text-sm text-white/90">What did they all do? Build in public, solve real problems, share knowledge consistently.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">3. Adapt, Don&apos;t Copy</h4>
                    <p className="text-sm text-white/90">Take principles, not tactics. Your context (Nigeria, fintech, 2026) is unique.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">4. Network Strategically</h4>
                    <p className="text-sm text-white/90">Connect with people 2-3 years ahead of where you want to be. Ask smart questions.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Tab Button Component
function TabButton({ 
  active, 
  onClick, 
  icon, 
  children 
}: { 
  active: boolean
  onClick: () => void
  icon: string
  children: React.ReactNode 
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 px-6 py-4 font-semibold text-sm transition-all ${
        active 
          ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-b-2 border-[#667eea]' 
          : 'bg-white text-gray-600 hover:bg-gray-50'
      }`}
    >
      <span className="mr-2">{icon}</span>
      {children}
    </button>
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
        <div className="px-6 pb-6">
          {children}
        </div>
      )}
    </div>
  )
}

// Idea Category Component
function IdeaCategory({
  id,
  title,
  isOpen,
  onToggle,
  ideas
}: {
  id: string
  title: string
  isOpen: boolean
  onToggle: () => void
  ideas: string[]
}) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-5 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors text-left bg-white"
      >
        <span className="font-semibold text-gray-800">{title}</span>
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
        <div className="px-5 pb-4 bg-gray-50">
          <ul className="space-y-2 mt-3">
            {ideas.map((idea, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-gray-700">
                <span className="text-[#667eea] mt-0.5 flex-shrink-0">•</span>
                <span>{idea}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

// Role Model Card Component
function RoleModelCard({
  category,
  people
}: {
  category: string
  people: Array<{
    name: string
    achievement: string
    lesson: string
    action: string
  }>
}) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-[#667eea] transition-colors">
      <h3 className="font-bold text-lg text-gray-800 mb-4">{category}</h3>
      <div className="space-y-4">
        {people.map((person, idx) => (
          <div key={idx} className="pb-4 border-b border-gray-100 last:border-b-0">
            <h4 className="font-bold text-[#667eea] mb-1">{person.name}</h4>
            <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Achievement:</span> {person.achievement}</p>
            <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Lesson:</span> {person.lesson}</p>
            <p className="text-sm text-gray-600 italic"><span className="font-semibold">Action:</span> {person.action}</p>
          </div>
        ))}
      </div>
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

// Daily Task View Component
function DailyTaskView({
  currentDay,
  completedTasks,
  onToggleTask
}: {
  currentDay: number
  completedTasks: { [key: string]: boolean }
  onToggleTask: (taskId: string) => void
}) {
  // Generate tasks based on current day
  const getDailyTasks = (day: number) => {
    const tasks = []
    
    // PHASE 1: Days 1-14 - Positioning
    if (day >= 1 && day <= 14) {
      if (day === 1) {
        tasks.push(
          { id: 'day1-1', category: 'Career', task: 'Review current CV and identify gaps for remote-first roles', priority: 'high' },
          { id: 'day1-2', category: 'Career', task: 'Research 5 remote job boards and bookmark them', priority: 'high' },
          { id: 'day1-3', category: 'FeanPay', task: 'Document current FeanPay MVP features and user feedback', priority: 'medium' },
          { id: 'day1-4', category: 'Personal', task: 'Set up daily routine schedule and work blocks', priority: 'medium' }
        )
      } else if (day === 2) {
        tasks.push(
          { id: 'day2-1', category: 'Career', task: 'Draft new CV introduction focusing on frontend architecture expertise', priority: 'high' },
          { id: 'day2-2', category: 'Career', task: 'List 10 key achievements from Stanbic/enterprise work', priority: 'high' },
          { id: 'day2-3', category: 'Global Talent', task: 'Research UK Global Talent visa requirements and criteria', priority: 'medium' },
          { id: 'day2-4', category: 'Technical', task: 'Identify 3 article topics from recent work', priority: 'low' }
        )
      } else if (day === 3) {
        tasks.push(
          { id: 'day3-1', category: 'Career', task: 'Rewrite CV work experience section with metrics and impact', priority: 'high' },
          { id: 'day3-2', category: 'Career', task: 'Update LinkedIn headline to "Senior Frontend Engineer"', priority: 'high' },
          { id: 'day3-3', category: 'FeanPay', task: 'Set up user feedback tracking system', priority: 'medium' },
          { id: 'day3-4', category: 'Personal', task: 'Complete first weekly reflection', priority: 'low' }
        )
      } else if (day >= 4 && day <= 7) {
        tasks.push(
          { id: `day${day}-1`, category: 'Career', task: 'Work on portfolio case study - outline and screenshots', priority: 'high' },
          { id: `day${day}-2`, category: 'Career', task: 'Optimize LinkedIn About section with keywords', priority: 'high' },
          { id: `day${day}-3`, category: 'Global Talent', task: 'Draft list of potential recommenders (CTOs, senior engineers)', priority: 'medium' },
          { id: `day${day}-4`, category: 'FeanPay', task: 'Test WhatsApp integration with 2-3 beta users', priority: 'medium' }
        )
      } else if (day >= 8 && day <= 14) {
        tasks.push(
          { id: `day${day}-1`, category: 'Career', task: 'Finalize case study with technical details and outcomes', priority: 'high' },
          { id: `day${day}-2`, category: 'Career', task: 'Get CV reviewed by 2 senior engineers', priority: 'high' },
          { id: `day${day}-3`, category: 'Technical', task: 'Study frontend architecture patterns (1 hour)', priority: 'medium' },
          { id: `day${day}-4`, category: 'Personal', task: 'Track daily routine consistency', priority: 'low' }
        )
      }
    }
    
    // PHASE 2: Days 15-45 - Pipeline Creation
    else if (day >= 15 && day <= 45) {
      tasks.push(
        { id: `day${day}-1`, category: 'Career', task: 'Send 5-10 job applications (LinkedIn, Wellfound, RemoteOK)', priority: 'high' },
        { id: `day${day}-2`, category: 'Career', task: 'Send 3-5 direct recruiter messages on LinkedIn', priority: 'high' },
        { id: `day${day}-3`, category: 'FeanPay', task: 'Onboard 10-15 new users through targeted outreach', priority: 'high' },
        { id: `day${day}-4`, category: 'Technical', task: 'Study system design or performance optimization (1 hour)', priority: 'medium' },
        { id: `day${day}-5`, category: 'Global Talent', task: 'Work on evidence documentation or personal statement', priority: 'medium' }
      )
      
      // Weekly tasks
      if (day % 7 === 0) {
        tasks.push(
          { id: `day${day}-6`, category: 'Personal', task: 'Weekly reflection: review applications sent and responses', priority: 'medium' },
          { id: `day${day}-7`, category: 'FeanPay', task: 'Analyze weekly user metrics and retention', priority: 'medium' }
        )
      }
    }
    
    // PHASE 3: Days 46-75 - Conversion
    else if (day >= 46 && day <= 75) {
      tasks.push(
        { id: `day${day}-1`, category: 'Career', task: 'Interview prep: System design practice (1 hour)', priority: 'high' },
        { id: `day${day}-2`, category: 'Career', task: 'LeetCode / JavaScript fundamentals (1 hour)', priority: 'high' },
        { id: `day${day}-3`, category: 'Career', task: 'Mock interview practice (30 mins)', priority: 'high' },
        { id: `day${day}-4`, category: 'FeanPay', task: 'Continue user acquisition - 10-15 new users', priority: 'medium' },
        { id: `day${day}-5`, category: 'Technical', task: 'Write/edit technical article', priority: 'medium' }
      )
      
      // Continue applications
      if (day % 2 === 0) {
        tasks.push(
          { id: `day${day}-6`, category: 'Career', task: 'Send 3-5 applications to keep pipeline active', priority: 'high' }
        )
      }
    }
    
    // PHASE 4: Days 76-90 - Closing
    else if (day >= 76 && day <= 90) {
      tasks.push(
        { id: `day${day}-1`, category: 'Career', task: 'Review and respond to active opportunities', priority: 'high' },
        { id: `day${day}-2`, category: 'Career', task: 'Prepare salary negotiation talking points', priority: 'high' },
        { id: `day${day}-3`, category: 'FeanPay', task: 'Implement transaction fee system and track revenue', priority: 'high' },
        { id: `day${day}-4`, category: 'FeanPay', task: 'Prepare investor deck with metrics', priority: 'medium' },
        { id: `day${day}-5`, category: 'Global Talent', task: 'Finalize application submission or await decision', priority: 'medium' },
        { id: `day${day}-6`, category: 'Technical', task: 'Publish final articles and share in communities', priority: 'low' }
      )
    }
    
    return tasks
  }

  const tasks = getDailyTasks(currentDay)
  const completedCount = tasks.filter(t => completedTasks?.[t.id] || false).length
  const totalTasks = tasks.length

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-300'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'low': return 'bg-green-100 text-green-800 border-green-300'
      default: return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Career': return 'bg-blue-500'
      case 'FeanPay': return 'bg-green-500'
      case 'Technical': return 'bg-purple-500'
      case 'Global Talent': return 'bg-indigo-500'
      case 'Personal': return 'bg-orange-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div>
      {/* Day Summary */}
      <div className="mb-6 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Day {currentDay} Tasks</h3>
            <p className="text-sm text-gray-600">
              {currentDay >= 1 && currentDay <= 14 && 'Phase 1: Positioning'}
              {currentDay >= 15 && currentDay <= 45 && 'Phase 2: Pipeline Creation'}
              {currentDay >= 46 && currentDay <= 75 && 'Phase 3: Conversion'}
              {currentDay >= 76 && currentDay <= 90 && 'Phase 4: Closing'}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#667eea]">{completedCount}/{totalTasks}</div>
            <p className="text-xs text-gray-600">Completed</p>
          </div>
        </div>
        <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] transition-all duration-300"
            style={{ width: `${totalTasks > 0 ? (completedCount / totalTasks) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <div 
            key={task.id}
            className={`p-4 rounded-lg border-2 transition-all ${
              completedTasks?.[task.id] 
                ? 'bg-green-50 border-green-300 opacity-60' 
                : 'bg-white border-gray-200 hover:border-[#667eea]'
            }`}
          >
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={completedTasks?.[task.id] || false}
                onChange={() => onToggleTask(task.id)}
                className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-[#667eea] focus:ring-[#667eea] cursor-pointer"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${getCategoryColor(task.category)}`} />
                  <span className="text-xs font-semibold text-gray-600">{task.category}</span>
                  <span className={`ml-auto px-2 py-0.5 text-xs font-semibold rounded-full border ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
                <p className={`text-gray-800 ${completedTasks?.[task.id] ? 'line-through' : ''}`}>
                  {task.task}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {tasks.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg font-semibold mb-2">🎉 Congratulations!</p>
          <p>You've completed the 90-day sprint. Time to review and plan next steps!</p>
        </div>
      )}
    </div>
  )
}