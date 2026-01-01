export default function RoleModelsTab() {
    return (
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