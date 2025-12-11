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
        <h3 className="font-playfair text-2xl font-bold mb-2 text-gold-500">Step 2: Current Rates</h3>
        <p className="text-gold-400/80 font-inter">
          What percentage of clients currently convert at each stage?
        </p>
      </div>

      <div className="space-y-6">
        {/* Upsell Rate */}
        <div>
          <label htmlFor="upsell_rate" className="block text-sm font-medium mb-2 text-gold-400 font-inter">
            Upsell Rate: {toPercent(formData.upsell_rate)}%
          </label>
          <input
            type="range"
            id="upsell_rate"
            min="0"
            max="100"
            value={toPercent(formData.upsell_rate)}
            onChange={(e) => onChange('upsell_rate', toDecimal(parseInt(e.target.value)))}
            className="w-full h-2 bg-charcoal-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
            style={{ accentColor: '#D6A73C' }}
          />
          <p className="text-sm text-gold-500/60 mt-1 font-inter">
            What % of clients buy your upsell offer?
          </p>
        </div>

        {/* Renewal Rate */}
        <div>
          <label htmlFor="renewal_rate" className="block text-sm font-medium mb-2 text-gold-400 font-inter">
            Renewal Rate: {toPercent(formData.renewal_rate)}%
          </label>
          <input
            type="range"
            id="renewal_rate"
            min="0"
            max="100"
            value={toPercent(formData.renewal_rate)}
            onChange={(e) => onChange('renewal_rate', toDecimal(parseInt(e.target.value)))}
            className="w-full h-2 bg-charcoal-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
            style={{ accentColor: '#D6A73C' }}
          />
          <p className="text-sm text-gold-500/60 mt-1 font-inter">
            What % of clients renew or extend?
          </p>
        </div>

        {/* Result Rate */}
        <div>
          <label htmlFor="result_rate" className="block text-sm font-medium mb-2 text-gold-400 font-inter">
            Result Rate: {toPercent(formData.result_rate)}%
          </label>
          <input
            type="range"
            id="result_rate"
            min="0"
            max="100"
            value={toPercent(formData.result_rate)}
            onChange={(e) => onChange('result_rate', toDecimal(parseInt(e.target.value)))}
            className="w-full h-2 bg-charcoal-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
            style={{ accentColor: '#D6A73C' }}
          />
          <p className="text-sm text-gold-500/60 mt-1 font-inter">
            What % of clients achieve their desired results?
          </p>
        </div>

        {/* Referral Rate */}
        <div>
          <label htmlFor="referral_rate" className="block text-sm font-medium mb-2 text-gold-400 font-inter">
            Referral Rate: {toPercent(formData.referral_rate)}%
          </label>
          <input
            type="range"
            id="referral_rate"
            min="0"
            max="100"
            value={toPercent(formData.referral_rate)}
            onChange={(e) => onChange('referral_rate', toDecimal(parseInt(e.target.value)))}
            className="w-full h-2 bg-charcoal-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
            style={{ accentColor: '#D6A73C' }}
          />
          <p className="text-sm text-gold-500/60 mt-1 font-inter">
            What % of clients refer new clients?
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gold-500/10 rounded-lg border border-gold-500/30">
        <p className="text-sm text-gold-400 font-inter">
          <strong className="text-gold-500">Tip:</strong> Be honest with these numbers. The calculator will compare your current rates to industry benchmarks.
        </p>
      </div>
    </div>
  )
}

