/**
 * Skip to content link for accessibility
 * Allows keyboard users to skip navigation and go straight to main content
 */
export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-gold-500 focus:text-bg-900 focus:rounded-lg focus:font-medium focus:shadow-lg"
    >
      Skip to content
    </a>
  )
}

