export interface GoalsData {
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
  
  export type TabType = 'dashboard' | 'tasks' | 'ideas' | 'motivation' | 'rolemodels'