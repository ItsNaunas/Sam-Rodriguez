/**
 * Loading state for the application
 * Shows while page is loading or during route transitions
 */
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-900">
      <div className="space-y-8 text-center">
        {/* Animated logo or spinner */}
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 border-4 border-gold-500/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-gold-500 rounded-full border-t-transparent animate-spin" />
        </div>
        
        {/* Loading text */}
        <p className="font-playfair text-xl text-text-80 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  )
}

