'use client'

/**
 * Step 2: Rate Inputs
 * Collects upsell_rate, renewal_rate, result_rate, referral_rate
 * Displays as percentages (0-100) but stores as decimals (0-1)
 */

interface Step2RatesProps {
  formData: {
    upsell_rate: number
    renewal_rate: number
    result_rate: number
    referral_rate: number
  }
  onChange: (field: string, value: any) => void
}

export default function Step2Rates({ formData, onChange }: Step2RatesProps) {
  // Convert decimal to percentage for display
  const toPercent = (decimal: number) => Math.round(decimal * 100)
  
  // Convert percentage back to decimal for storage
  const toDecimal = (percent: number) => percent / 100

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-2">Step 2: Current Rates</h3>
        <p className="text-gray-600 dark:text-gray-400">
          What percentage of clients currently convert at each stage?
        </p>
      </div>

      <div className="space-y-6">
        {/* Upsell Rate */}
        <div>
          <label htmlFor="upsell_rate" className="block text-sm font-medium mb-2">
            Upsell Rate: {toPercent(formData.upsell_rate)}%
          </label>
          <input
            type="range"
            id="upsell_rate"
            min="0"
            max="100"
            value={toPercent(formData.upsell_rate)}
            onChange={(e) => onChange('upsell_rate', toDecimal(parseInt(e.target.value)))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <p className="text-sm text-gray-500 mt-1">
            What % of clients buy your upsell offer?
          </p>
        </div>

        {/* Renewal Rate */}
        <div>
          <label htmlFor="renewal_rate" className="block text-sm font-medium mb-2">
            Renewal Rate: {toPercent(formData.renewal_rate)}%
          </label>
          <input
            type="range"
            id="renewal_rate"
            min="0"
            max="100"
            value={toPercent(formData.renewal_rate)}
            onChange={(e) => onChange('renewal_rate', toDecimal(parseInt(e.target.value)))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <p className="text-sm text-gray-500 mt-1">
            What % of clients renew or extend?
          </p>
        </div>

        {/* Result Rate */}
        <div>
          <label htmlFor="result_rate" className="block text-sm font-medium mb-2">
            Result Rate: {toPercent(formData.result_rate)}%
          </label>
          <input
            type="range"
            id="result_rate"
            min="0"
            max="100"
            value={toPercent(formData.result_rate)}
            onChange={(e) => onChange('result_rate', toDecimal(parseInt(e.target.value)))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <p className="text-sm text-gray-500 mt-1">
            What % of clients achieve their desired results?
          </p>
        </div>

        {/* Referral Rate */}
        <div>
          <label htmlFor="referral_rate" className="block text-sm font-medium mb-2">
            Referral Rate: {toPercent(formData.referral_rate)}%
          </label>
          <input
            type="range"
            id="referral_rate"
            min="0"
            max="100"
            value={toPercent(formData.referral_rate)}
            onChange={(e) => onChange('referral_rate', toDecimal(parseInt(e.target.value)))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <p className="text-sm text-gray-500 mt-1">
            What % of clients refer new clients?
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          <strong>Tip:</strong> Be honest with these numbers. The calculator will compare your current rates to industry benchmarks.
        </p>
      </div>
    </div>
  )
}

