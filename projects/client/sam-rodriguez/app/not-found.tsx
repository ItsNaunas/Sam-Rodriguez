import Link from 'next/link'

/**
 * 404 Page - Not Found
 * Displayed when a user navigates to a non-existent page
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-900 px-6">
      <div className="max-w-2xl text-center space-y-8">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="font-playfair text-9xl md:text-[12rem] font-bold text-gold-500/20 leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-playfair text-4xl md:text-5xl font-bold text-text-100">
              Lost?
            </span>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-text-100">
            This page doesn&apos;t exist
          </h2>
          <p className="text-text-80 text-lg leading-relaxed max-w-md mx-auto">
            Sometimes getting lost leads to the best discoveries. But in this case, let&apos;s get you back on track.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/" className="btn-primary text-center">
            Back to home
          </Link>
          <Link href="/#contact" className="btn-ghost text-center">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  )
}

