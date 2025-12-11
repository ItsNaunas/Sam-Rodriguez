/**
 * Loading State Component
 * Displays while calculating opportunity cost
 */

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-charcoal-800 border-t-gold-500 rounded-full animate-spin"></div>
      </div>
      
      <div className="text-center">
        <h3 className="font-playfair text-xl font-semibold mb-2 text-gold-500">Analyzing your opportunity cost...</h3>
        <p className="text-gold-400/80 font-inter">
          Crunching the numbers and generating your personalized report
        </p>
      </div>
      
      <div className="flex space-x-2 mt-4">
        <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  )
}

