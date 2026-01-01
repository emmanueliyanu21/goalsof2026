import { GoalsData } from '../types'

interface DailyTasksTabProps {
  data: GoalsData
  setData: (data: GoalsData) => void
}

export default function DailyTasksTab({ data, setData }: DailyTasksTabProps) {
  const toggleTask = (taskId: string) => {
    setData({
      ...data,
      completedTasks: {
        ...data.completedTasks,
        [taskId]: !data.completedTasks?.[taskId]
      }
    })
  }

  return (
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
        completedTasks={data.completedTasks || {}}
        onToggleTask={toggleTask}
      />
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
          <p>You&apos;ve completed the 90-day sprint. Time to review and plan next steps!</p>
        </div>
      )}
    </div>
  )
}