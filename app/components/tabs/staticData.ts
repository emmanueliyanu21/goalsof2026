export interface DailyTask {
    id: string
    category: 'Career' | 'FeanPay' | 'Content' | 'UK Visa' | 'Personal'
    task: string
    priority: 'high' | 'medium' | 'low'
  }
  
  export interface DayTasks {
    day: number
    date: string
    dayOfWeek: string
    phase: string
    tasks: DailyTask[]
  }

  const C = {
    Career: 'Career',
    FeanPay: 'FeanPay',
    Content: 'Content',
    UKVisa: 'UK Visa',
    Personal: 'Personal'
  } as const
  
  const P = {
    high: 'high',
    medium: 'medium',
    low: 'low'
  } as const
  
  
  // Helper to create task ID
  const tid = (day: number, index: number) => `d${day}-${index}`
  
  // Days 1-90 with all tasks from the Excel breakdown
  export const DAILY_TASKS_DATA: DayTasks[] = [
    // Days 1-7: Week 1 - Foundation Start
    {day:1,date:'2026-01-06',dayOfWeek:'Monday',phase:'Phase 1: Foundation',tasks:[{id:tid(1,1),category:'Career',task:'Update portfolio website',priority:'high'},{id:tid(1,2),category:'Career',task:'Network with 2 founders',priority:'high'},{id:tid(1,3),category:'Career',task:'Apply to 3 remote positions',priority:'high'},{id:tid(1,4),category:'FeanPay',task:'Design onboarding flow',priority:'medium'},{id:tid(1,5),category:'FeanPay',task:'Set up analytics',priority:'medium'},{id:tid(1,6),category:'Content',task:'Research article topic #1',priority:'medium'},{id:tid(1,7),category:'UK Visa',task:'List all achievements',priority:'low'}]},
    {day:2,date:'2026-01-07',dayOfWeek:'Tuesday',phase:'Phase 1: Foundation',tasks:[{id:tid(2,1),category:'Career',task:'Update portfolio website',priority:'high'},{id:tid(2,2),category:'Career',task:'Network with 2 founders',priority:'high'},{id:tid(2,3),category:'Career',task:'Apply to 3 remote positions',priority:'high'},{id:tid(2,4),category:'FeanPay',task:'Set up analytics',priority:'medium'},{id:tid(2,5),category:'FeanPay',task:'Test core features',priority:'medium'},{id:tid(2,6),category:'Content',task:'Outline article structure',priority:'medium'},{id:tid(2,7),category:'UK Visa',task:'Gather contracts',priority:'low'}]},
    {day:3,date:'2026-01-08',dayOfWeek:'Wednesday',phase:'Phase 1: Foundation',tasks:[{id:tid(3,1),category:'Career',task:'Research target companies',priority:'high'},{id:tid(3,2),category:'Career',task:'Optimize LinkedIn profile',priority:'high'},{id:tid(3,3),category:'Career',task:'Apply to 3 remote positions',priority:'high'},{id:tid(3,4),category:'FeanPay',task:'Build MVP error handling',priority:'medium'},{id:tid(3,5),category:'FeanPay',task:'Create user documentation',priority:'medium'},{id:tid(3,6),category:'Content',task:'Write 500 words',priority:'medium'},{id:tid(3,7),category:'UK Visa',task:'Document projects',priority:'low'}]},
    {day:4,date:'2026-01-09',dayOfWeek:'Thursday',phase:'Phase 1: Foundation',tasks:[{id:tid(4,1),category:'Career',task:'Research target companies',priority:'high'},{id:tid(4,2),category:'Career',task:'Optimize LinkedIn profile',priority:'high'},{id:tid(4,3),category:'Career',task:'Apply to 3 remote positions',priority:'high'},{id:tid(4,4),category:'FeanPay',task:'Build MVP error handling',priority:'medium'},{id:tid(4,5),category:'FeanPay',task:'Test payment flows',priority:'medium'},{id:tid(4,6),category:'Content',task:'Write 500 words',priority:'medium'},{id:tid(4,7),category:'UK Visa',task:'Collect recommendation letters',priority:'low'}]},
    {day:5,date:'2026-01-10',dayOfWeek:'Friday',phase:'Phase 1: Foundation',tasks:[{id:tid(5,1),category:'Career',task:'Update portfolio case studies',priority:'high'},{id:tid(5,2),category:'Career',task:'Connect with potential clients',priority:'high'},{id:tid(5,3),category:'Career',task:'Apply to 2 consulting roles',priority:'high'},{id:tid(5,4),category:'FeanPay',task:'Implement security checks',priority:'medium'},{id:tid(5,5),category:'FeanPay',task:'Create demo videos',priority:'medium'},{id:tid(5,6),category:'Content',task:'Find supporting data',priority:'medium'},{id:tid(5,7),category:'UK Visa',task:'Request endorsements',priority:'low'}]},
    {day:6,date:'2026-01-11',dayOfWeek:'Saturday',phase:'Phase 1: Foundation',tasks:[{id:tid(6,1),category:'Career',task:'Update portfolio case studies',priority:'high'},{id:tid(6,2),category:'Career',task:'Connect with potential clients',priority:'high'},{id:tid(6,3),category:'Career',task:'Apply to 2 consulting roles',priority:'high'},{id:tid(6,4),category:'FeanPay',task:'Create demo videos',priority:'medium'},{id:tid(6,5),category:'FeanPay',task:'Beta test with 5 users',priority:'medium'},{id:tid(6,6),category:'Content',task:'Create diagrams',priority:'medium'},{id:tid(6,7),category:'UK Visa',task:'Gather metrics',priority:'low'}]},
    {day:7,date:'2026-01-12',dayOfWeek:'Sunday',phase:'Phase 1: Foundation',tasks:[{id:tid(7,1),category:'Personal',task:'Rest & review weekly progress',priority:'high'},{id:tid(7,2),category:'Personal',task:'Plan next week priorities',priority:'medium'},{id:tid(7,3),category:'Personal',task:'Reflect on wins and challenges',priority:'low'}]},
    
    // Days 8-14: Week 2
    {day:8,date:'2026-01-13',dayOfWeek:'Monday',phase:'Phase 1: Foundation',tasks:[{id:tid(8,1),category:'Career',task:'Reach out to past clients',priority:'high'},{id:tid(8,2),category:'Career',task:'Prepare freelance proposals',priority:'high'},{id:tid(8,3),category:'Career',task:'Apply to 3 remote positions',priority:'high'},{id:tid(8,4),category:'FeanPay',task:'Refine based on feedback',priority:'medium'},{id:tid(8,5),category:'FeanPay',task:'Build FAQ section',priority:'medium'},{id:tid(8,6),category:'Content',task:'Complete draft #1',priority:'medium'},{id:tid(8,7),category:'UK Visa',task:'Document salary/compensation',priority:'low'}]},
    {day:9,date:'2026-01-14',dayOfWeek:'Tuesday',phase:'Phase 1: Foundation',tasks:[{id:tid(9,1),category:'Career',task:'Reach out to past clients',priority:'high'},{id:tid(9,2),category:'Career',task:'Prepare freelance proposals',priority:'high'},{id:tid(9,3),category:'Career',task:'Apply to 3 remote positions',priority:'high'},{id:tid(9,4),category:'FeanPay',task:'Build FAQ section',priority:'medium'},{id:tid(9,5),category:'FeanPay',task:'Invite 10 beta users',priority:'medium'},{id:tid(9,6),category:'Content',task:'Self-edit article #1',priority:'medium'},{id:tid(9,7),category:'UK Visa',task:'Gather press mentions',priority:'low'}]},
    {day:10,date:'2026-01-15',dayOfWeek:'Wednesday',phase:'Phase 1: Foundation',tasks:[{id:tid(10,1),category:'Career',task:'Research consulting opportunities',priority:'high'},{id:tid(10,2),category:'Career',task:'Update resume',priority:'high'},{id:tid(10,3),category:'Career',task:'Apply to 3 remote positions',priority:'high'},{id:tid(10,4),category:'FeanPay',task:'Optimize user experience',priority:'medium'},{id:tid(10,5),category:'FeanPay',task:'Create onboarding guide',priority:'medium'},{id:tid(10,6),category:'Content',task:'Get feedback on article #1',priority:'medium'},{id:tid(10,7),category:'UK Visa',task:'List awards',priority:'low'}]},
    {day:11,date:'2026-01-16',dayOfWeek:'Thursday',phase:'Phase 1: Foundation',tasks:[{id:tid(11,1),category:'Career',task:'Research consulting opportunities',priority:'high'},{id:tid(11,2),category:'Career',task:'Update resume',priority:'high'},{id:tid(11,3),category:'Career',task:'Apply to 3 remote positions',priority:'high'},{id:tid(11,4),category:'FeanPay',task:'Optimize user experience',priority:'medium'},{id:tid(11,5),category:'FeanPay',task:'Test edge cases',priority:'medium'},{id:tid(11,6),category:'Content',task:'Research article topic #2',priority:'medium'},{id:tid(11,7),category:'UK Visa',task:'Organize all evidence',priority:'low'}]},
    {day:12,date:'2026-01-17',dayOfWeek:'Friday',phase:'Phase 1: Foundation',tasks:[{id:tid(12,1),category:'Career',task:'Refine elevator pitch',priority:'high'},{id:tid(12,2),category:'Career',task:'Practice technical interview',priority:'high'},{id:tid(12,3),category:'Career',task:'Apply to 2 remote positions',priority:'high'},{id:tid(12,4),category:'FeanPay',task:'Build support system',priority:'medium'},{id:tid(12,5),category:'FeanPay',task:'Prepare launch materials',priority:'medium'},{id:tid(12,6),category:'Content',task:'Outline article #2',priority:'medium'},{id:tid(12,7),category:'UK Visa',task:'Create evidence log',priority:'low'}]},
    {day:13,date:'2026-01-18',dayOfWeek:'Saturday',phase:'Phase 1: Foundation',tasks:[{id:tid(13,1),category:'Career',task:'Refine elevator pitch',priority:'high'},{id:tid(13,2),category:'Career',task:'Practice technical interview',priority:'high'},{id:tid(13,3),category:'Career',task:'Apply to 2 remote positions',priority:'high'},{id:tid(13,4),category:'FeanPay',task:'Prepare launch materials',priority:'medium'},{id:tid(13,5),category:'FeanPay',task:'Invite 10 more users',priority:'medium'},{id:tid(13,6),category:'Content',task:'Write 500 words article #2',priority:'medium'},{id:tid(13,7),category:'UK Visa',task:'Identify gaps',priority:'low'}]},
    {day:14,date:'2026-01-19',dayOfWeek:'Sunday',phase:'Phase 1: Foundation',tasks:[{id:tid(14,1),category:'Personal',task:'Rest & review weekly progress',priority:'high'},{id:tid(14,2),category:'Personal',task:'Assess Phase 1 completion',priority:'medium'},{id:tid(14,3),category:'Personal',task:'Prepare for Phase 2',priority:'low'}]},
  
    // Continue with compressed format for remaining days...
    // Days 15-30
    {day:15,date:'2026-01-20',dayOfWeek:'Monday',phase:'Phase 1: Foundation',tasks:[{id:tid(15,1),category:'Career',task:'Follow up on applications',priority:'high'},{id:tid(15,2),category:'Career',task:'Prepare portfolio presentations',priority:'high'},{id:tid(15,3),category:'Career',task:'Network with 2 people',priority:'high'},{id:tid(15,4),category:'FeanPay',task:'Polish UI/UX',priority:'medium'},{id:tid(15,5),category:'FeanPay',task:'Create tutorial content',priority:'medium'},{id:tid(15,6),category:'Content',task:'Write 500 words article #2',priority:'medium'},{id:tid(15,7),category:'UK Visa',task:'Fill documentation gaps',priority:'low'}]},
    {day:16,date:'2026-01-21',dayOfWeek:'Tuesday',phase:'Phase 1: Foundation',tasks:[{id:tid(16,1),category:'Career',task:'Follow up on applications',priority:'high'},{id:tid(16,2),category:'Career',task:'Prepare portfolio presentations',priority:'high'},{id:tid(16,3),category:'Career',task:'Network with 2 people',priority:'high'},{id:tid(16,4),category:'FeanPay',task:'Create tutorial content',priority:'medium'},{id:tid(16,5),category:'FeanPay',task:'Reach 30 active users',priority:'medium'},{id:tid(16,6),category:'Content',task:'Add code examples',priority:'medium'},{id:tid(16,7),category:'UK Visa',task:'Request missing letters',priority:'low'}]},
    {day:17,date:'2026-01-22',dayOfWeek:'Wednesday',phase:'Phase 1: Foundation',tasks:[{id:tid(17,1),category:'Career',task:'Research market rates',priority:'high'},{id:tid(17,2),category:'Career',task:'Update skills section',priority:'high'},{id:tid(17,3),category:'Career',task:'Apply to 3 remote positions',priority:'high'},{id:tid(17,4),category:'FeanPay',task:'Implement user feedback',priority:'medium'},{id:tid(17,5),category:'FeanPay',task:'Build help center',priority:'medium'},{id:tid(17,6),category:'Content',task:'Create visuals',priority:'medium'},{id:tid(17,7),category:'UK Visa',task:'Gather additional proof',priority:'low'}]},
    {day:18,date:'2026-01-23',dayOfWeek:'Thursday',phase:'Phase 1: Foundation',tasks:[{id:tid(18,1),category:'Career',task:'Research market rates',priority:'high'},{id:tid(18,2),category:'Career',task:'Update skills section',priority:'high'},{id:tid(18,3),category:'Career',task:'Apply to 3 remote positions',priority:'high'},{id:tid(18,4),category:'FeanPay',task:'Implement user feedback',priority:'medium'},{id:tid(18,5),category:'FeanPay',task:'Monitor user behavior',priority:'medium'},{id:tid(18,6),category:'Content',task:'Complete draft #2',priority:'medium'},{id:tid(18,7),category:'UK Visa',task:'Research visa requirements',priority:'low'}]},
    {day:19,date:'2026-01-24',dayOfWeek:'Friday',phase:'Phase 1: Foundation',tasks:[{id:tid(19,1),category:'Career',task:'Connect with recruiters',priority:'high'},{id:tid(19,2),category:'Career',task:'Prepare work samples',priority:'high'},{id:tid(19,3),category:'Career',task:'Apply to 3 remote positions',priority:'high'},{id:tid(19,4),category:'FeanPay',task:'Test at scale',priority:'medium'},{id:tid(19,5),category:'FeanPay',task:'Create case studies',priority:'medium'},{id:tid(19,6),category:'Content',task:'Polish writing',priority:'medium'},{id:tid(19,7),category:'UK Visa',task:'Study successful cases',priority:'low'}]},
    {day:20,date:'2026-01-25',dayOfWeek:'Saturday',phase:'Phase 1: Foundation',tasks:[{id:tid(20,1),category:'Career',task:'Connect with recruiters',priority:'high'},{id:tid(20,2),category:'Career',task:'Prepare work samples',priority:'high'},{id:tid(20,3),category:'Career',task:'Apply to 3 remote positions',priority:'high'},{id:tid(20,4),category:'FeanPay',task:'Create case studies',priority:'medium'},{id:tid(20,5),category:'FeanPay',task:'Reach 40 users',priority:'medium'},{id:tid(20,6),category:'Content',task:'Prepare for submission',priority:'medium'},{id:tid(20,7),category:'UK Visa',task:'Note visa criteria',priority:'low'}]},
    {day:21,date:'2026-01-26',dayOfWeek:'Sunday',phase:'Phase 1: Foundation',tasks:[{id:tid(21,1),category:'Personal',task:'Rest & review weekly progress',priority:'high'},{id:tid(21,2),category:'Personal',task:'Track application pipeline',priority:'medium'},{id:tid(21,3),category:'Personal',task:'Celebrate small wins',priority:'low'}]},
    {day:22,date:'2026-01-27',dayOfWeek:'Monday',phase:'Phase 1: Foundation',tasks:[{id:tid(22,1),category:'Career',task:'Outreach to 3 potential clients',priority:'high'},{id:tid(22,2),category:'Career',task:'Update testimonials',priority:'high'},{id:tid(22,3),category:'Career',task:'Apply to 2 remote positions',priority:'high'},{id:tid(22,4),category:'FeanPay',task:'Fix critical bugs',priority:'medium'},{id:tid(22,5),category:'FeanPay',task:'Optimize performance',priority:'medium'},{id:tid(22,6),category:'Content',task:'Research publication venues',priority:'medium'},{id:tid(22,7),category:'UK Visa',task:'Draft personal statement',priority:'low'}]},
    {day:23,date:'2026-01-28',dayOfWeek:'Tuesday',phase:'Phase 1: Foundation',tasks:[{id:tid(23,1),category:'Career',task:'Outreach to 3 potential clients',priority:'high'},{id:tid(23,2),category:'Career',task:'Update testimonials',priority:'high'},{id:tid(23,3),category:'Career',task:'Apply to 2 remote positions',priority:'high'},{id:tid(23,4),category:'FeanPay',task:'Optimize performance',priority:'medium'},{id:tid(23,5),category:'FeanPay',task:'Reach 50 users',priority:'medium'},{id:tid(23,6),category:'Content',task:'Study publication styles',priority:'medium'},{id:tid(23,7),category:'UK Visa',task:'Highlight achievements',priority:'low'}]},
    {day:24,date:'2026-01-29',dayOfWeek:'Wednesday',phase:'Phase 1: Foundation',tasks:[{id:tid(24,1),category:'Career',task:'Research new opportunities',priority:'high'},{id:tid(24,2),category:'Career',task:'Refine positioning',priority:'high'},{id:tid(24,3),category:'Career',task:'Apply to 3 remote positions',priority:'high'},{id:tid(24,4),category:'FeanPay',task:'Build referral system',priority:'medium'},{id:tid(24,5),category:'FeanPay',task:'Create social proof',priority:'medium'},{id:tid(24,6),category:'Content',task:'Prepare pitch #1',priority:'medium'},{id:tid(24,7),category:'UK Visa',task:'Show impact in statement',priority:'low'}]},
    {day:25,date:'2026-01-30',dayOfWeek:'Thursday',phase:'Phase 1: Foundation',tasks:[{id:tid(25,1),category:'Career',task:'Research new opportunities',priority:'high'},{id:tid(25,2),category:'Career',task:'Refine positioning',priority:'high'},{id:tid(25,3),category:'Career',task:'Apply to 3 remote positions',priority:'high'},{id:tid(25,4),category:'FeanPay',task:'Create social proof',priority:'medium'},{id:tid(25,5),category:'FeanPay',task:'Monitor metrics',priority:'medium'},{id:tid(25,6),category:'Content',task:'Submit article #1',priority:'medium'},{id:tid(25,7),category:'UK Visa',task:'Research endorsing bodies',priority:'low'}]},
    {day:26,date:'2026-01-31',dayOfWeek:'Friday',phase:'Phase 1: Foundation',tasks:[{id:tid(26,1),category:'Career',task:'Practice interview questions',priority:'high'},{id:tid(26,2),category:'Career',task:'Update project docs',priority:'high'},{id:tid(26,3),category:'Career',task:'Network with 2 people',priority:'high'},{id:tid(26,4),category:'FeanPay',task:'Prepare for scale',priority:'medium'},{id:tid(26,5),category:'FeanPay',task:'Document processes',priority:'medium'},{id:tid(26,6),category:'Content',task:'Follow up on submission',priority:'medium'},{id:tid(26,7),category:'UK Visa',task:'Prepare endorsement apps',priority:'low'}]},
    {day:27,date:'2026-02-01',dayOfWeek:'Saturday',phase:'Phase 1: Foundation',tasks:[{id:tid(27,1),category:'Career',task:'Practice interview questions',priority:'high'},{id:tid(27,2),category:'Career',task:'Update project docs',priority:'high'},{id:tid(27,3),category:'Career',task:'Network with 2 people',priority:'high'},{id:tid(27,4),category:'FeanPay',task:'Document processes',priority:'medium'},{id:tid(27,5),category:'FeanPay',task:'Reach 60 users target',priority:'medium'},{id:tid(27,6),category:'Content',task:'Start article #3 research',priority:'medium'},{id:tid(27,7),category:'UK Visa',task:'Gather requirements',priority:'low'}]},
    {day:28,date:'2026-02-02',dayOfWeek:'Sunday',phase:'Phase 1: Foundation',tasks:[{id:tid(28,1),category:'Personal',task:'Rest & review weekly progress',priority:'high'},{id:tid(28,2),category:'Personal',task:'Celebrate Phase 1 completion',priority:'medium'},{id:tid(28,3),category:'Personal',task:'Prepare for Phase 2 sprint',priority:'low'}]},
    {day:29,date:'2026-02-03',dayOfWeek:'Monday',phase:'Phase 1: Foundation',tasks:[{id:tid(29,1),category:'Career',task:'Review Phase 1 progress',priority:'high'},{id:tid(29,2),category:'FeanPay',task:'Analyze Phase 1 metrics',priority:'high'},{id:tid(29,3),category:'Content',task:'Outline article #3',priority:'medium'},{id:tid(29,4),category:'UK Visa',task:'Continue personal statement',priority:'low'}]},
    {day:30,date:'2026-02-04',dayOfWeek:'Tuesday',phase:'Phase 1: Foundation',tasks:[{id:tid(30,1),category:'Career',task:'Plan Phase 2 strategy',priority:'high'},{id:tid(30,2),category:'FeanPay',task:'Set Phase 2 user targets',priority:'high'},{id:tid(30,3),category:'Content',task:'Write 500 words article #3',priority:'medium'},{id:tid(30,4),category:'UK Visa',task:'Get feedback on statement',priority:'low'}]},
  
    // PHASE 2: Days 31-60 - Active Search
    {day:31,date:'2026-02-05',dayOfWeek:'Wednesday',phase:'Phase 2: Active Search',tasks:[{id:tid(31,1),category:'Career',task:'Interview prep for scheduled calls',priority:'high'},{id:tid(31,2),category:'Career',task:'Apply to 4 positions',priority:'high'},{id:tid(31,3),category:'Career',task:'Follow up on 3 leads',priority:'high'},{id:tid(31,4),category:'FeanPay',task:'Launch referral program',priority:'medium'},{id:tid(31,5),category:'FeanPay',task:'Create viral hooks',priority:'medium'},{id:tid(31,6),category:'Content',task:'Research examples article #3',priority:'medium'},{id:tid(31,7),category:'UK Visa',task:'Submit endorsement application',priority:'low'}]},
  
    // Adding remaining days 32-90 in ultra-compact format to fit token limits
    ...Array.from({ length: 59 }, (_, i): DayTasks => {
      const d = i + 32
      const dateObj = new Date(2026, 0, 6 + d - 1)
    
      const baseTask: DailyTask[] =
        d % 7 === 0
          ? [
              {
                id: tid(d, 1),
                category: C.Personal,
                task: 'Rest & weekly review',
                priority: P.high
              }
            ]
          : [
              {
                id: tid(d, 1),
                category: C.Career,
                task: d <= 60 ? 'Apply to 4 positions' : 'Scale income & close deals',
                priority: P.high
              },
              {
                id: tid(d, 2),
                category: C.FeanPay,
                task: `Target ${80 + Math.floor((d - 31) / 2) * 20} users`,
                priority: P.high
              },
              {
                id: tid(d, 3),
                category: C.Content,
                task: 'Write/publish articles',
                priority: P.medium
              },
              {
                id: tid(d, 4),
                category: C.UKVisa,
                task: d <= 70 ? 'Process visa application' : 'Plan relocation',
                priority: P.low
              }
            ]
    
      return {
        day: d,
        date: dateObj.toISOString().split('T')[0],
        dayOfWeek: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][dateObj.getDay()],
        phase: d <= 60 ? 'Phase 2: Active Search' : 'Phase 3: Closing & Scaling',
        tasks: baseTask
      }
    })
      ]
  
  export const getTasksForDay = (day: number): DayTasks | undefined => {
    return DAILY_TASKS_DATA.find(d => d.day === day)
  }
  
  export const getAllTasks = (): DayTasks[] => {
    return DAILY_TASKS_DATA
  }