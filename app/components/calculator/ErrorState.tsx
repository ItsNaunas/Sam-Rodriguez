/**
 * Error State Component
 * Displays when calculation fails
 */

interface ErrorStateProps {
  message?: string
  onRetry: () => void
}

export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center border border-red-500/30">
        <svg 
          className="w-8 h-8 text-red-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      </div>
      
      <div className="text-center max-w-md">
        <h3 className="font-playfair text-xl font-semibold mb-2 text-gold-500">Something went wrong</h3>
        <p className="text-gold-400/80 mb-6 font-inter">
          {message || 'We encountered an error while calculating your opportunity cost. Please try again.'}
        </p>
        
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-forest-500 hover:bg-forest-600 text-white font-inter font-semibold rounded-lg transition-colors shadow-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

