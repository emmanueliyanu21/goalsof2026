interface IdeasLabTabProps {
    openIdeaCategory: string | null
    toggleIdeaCategory: (id: string) => void
  }
  
  export default function IdeasLabTab({ openIdeaCategory, toggleIdeaCategory }: IdeasLabTabProps) {
    return (
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