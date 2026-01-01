'use client'

import { useState, useEffect } from 'react'
import { GoalsData, TabType } from './components/types'
import DashboardTab from './components/tabs/DashboardTab'
import DailyTasksTab from './components/tabs/DailyTasksTab'
import IdeasLabTab from './components/tabs/IdeasLabTab'
import MotivationTab from './components/tabs/MotivationTab'
import RoleModelsTab from './components/tabs/RoleModelsTab'
import TabButton from './components/shared/TabButton'

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
  
  // Accordion states
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
          {activeTab === 'dashboard' && (
            <DashboardTab
              data={data}
              incomeInput={incomeInput}
              setIncomeInput={setIncomeInput}
              globalTalentInput={globalTalentInput}
              setGlobalTalentInput={setGlobalTalentInput}
              feanpayInput={feanpayInput}
              setFeanpayInput={setFeanpayInput}
              articlesInput={articlesInput}
              setArticlesInput={setArticlesInput}
              updateProgress={updateProgress}
              updateGlobalTalent={updateGlobalTalent}
              updateFeanPay={updateFeanPay}
              updateArticles={updateArticles}
              openAccordion={openAccordion}
              toggleAccordion={toggleAccordion}
            />
          )}

          {activeTab === 'tasks' && (
            <DailyTasksTab
              data={data}
              setData={setData}
            />
          )}

          {activeTab === 'ideas' && (
            <IdeasLabTab
              openIdeaCategory={openIdeaCategory}
              toggleIdeaCategory={toggleIdeaCategory}
            />
          )}

          {activeTab === 'motivation' && <MotivationTab />}

          {activeTab === 'rolemodels' && <RoleModelsTab />}
        </div>
      </div>
    </div>
  )
}