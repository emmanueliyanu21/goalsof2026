export default function MotivationTab() {
    return (
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
    )
  }