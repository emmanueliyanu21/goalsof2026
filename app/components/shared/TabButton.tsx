export default function TabButton({ 
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