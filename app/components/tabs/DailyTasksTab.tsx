import { GoalsData } from '../types'
import {  getTasksForDay, DailyTask } from './staticData'

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
        <p className="text-gray-600">Day-by-day action plan across all 4 goal areas. Check off tasks as you complete them.</p>
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
          <div className="text-xs text-blue-600">Days 1-30</div>
          <div className="text-xs text-gray-600 mt-1">Foundation</div>
        </button>
        <button
          onClick={() => setData({ ...data, currentDay: 31 })}
          className="p-4 bg-green-50 hover:bg-green-100 rounded-lg border-2 border-green-200 transition-colors"
        >
          <div className="font-bold text-green-800">Phase 2</div>
          <div className="text-xs text-green-600">Days 31-60</div>
          <div className="text-xs text-gray-600 mt-1">Active Search</div>
        </button>
        <button
          onClick={() => setData({ ...data, currentDay: 61 })}
          className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border-2 border-purple-200 transition-colors"
        >
          <div className="font-bold text-purple-800">Phase 3</div>
          <div className="text-xs text-purple-600">Days 61-90</div>
          <div className="text-xs text-gray-600 mt-1">Closing</div>
        </button>
        <button
          onClick={() => setData({ ...data, currentDay: 90 })}
          className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg border-2 border-orange-200 transition-colors"
        >
          <div className="font-bold text-orange-800">Final Day</div>
          <div className="text-xs text-orange-600">Day 90</div>
          <div className="text-xs text-gray-600 mt-1">Victory!</div>
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
  const dayData = getTasksForDay(currentDay)
  
  if (!dayData) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-lg font-semibold mb-2">🎉 Congratulations!</p>
        <p>You&apos;ve completed the 90-day sprint. Time to review and plan next steps!</p>
      </div>
    )
  }

  const tasks = dayData.tasks
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
      case 'Content': return 'bg-purple-500'
      case 'UK Visa': return 'bg-indigo-500'
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
            <h3 className="text-xl font-bold text-gray-800">
              Day {currentDay} - {dayData.dayOfWeek}
            </h3>
            <p className="text-sm text-gray-600">{dayData.date}</p>
            <p className="text-sm text-gray-600 mt-1">
              {dayData.phase}
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
        {tasks.map((task: DailyTask) => (
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

      {/* Quick Navigation */}
      <div className="mt-6 flex justify-between items-center p-4 bg-gray-50 rounded-lg">
        <div className="text-sm text-gray-600">
          {completedCount === totalTasks && (
            <span className="text-green-600 font-semibold">✓ All tasks completed for today!</span>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:border-[#667eea] transition-colors"
          >
            Back to Top
          </button>
        </div>
      </div>
    </div>
  )
}