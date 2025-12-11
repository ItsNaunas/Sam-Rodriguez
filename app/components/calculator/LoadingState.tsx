/**
 * Loading State Component
 * Displays while calculating opportunity cost
 */

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Analyzing your opportunity cost...</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Crunching the numbers and generating your personalized report
        </p>
      </div>
      
      <div className="flex space-x-2 mt-4">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  )
}

