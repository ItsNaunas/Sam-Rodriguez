'use client'

/**
 * Step 1: Pricing Inputs
 * Collects main_price, upsell_price, renewal_price, currency
 */

interface Step1PricingProps {
  formData: {
    main_price: number
    upsell_price: number
    renewal_price: number
    currency: string
  }
  onChange: (field: string, value: any) => void
}

export default function Step1Pricing({ formData, onChange }: Step1PricingProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-playfair text-2xl font-bold mb-2 text-gold-500">Step 1: Pricing</h3>
        <p className="text-gold-400/80 font-inter">
          Tell us about your pricing structure
        </p>
      </div>

      <div className="space-y-4">
        {/* Currency Selection */}
        <div>
          <label htmlFor="currency" className="block text-sm font-medium mb-2 text-gold-400 font-inter">
            Currency
          </label>
          <select
            id="currency"
            value={formData.currency}
            onChange={(e) => onChange('currency', e.target.value)}
            className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-charcoal-900 text-gold-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-inter"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="AUD">AUD ($)</option>
            <option value="CAD">CAD ($)</option>
          </select>
        </div>

        {/* Main Price */}
        <div>
          <label htmlFor="main_price" className="block text-sm font-medium mb-2 text-gold-400 font-inter">
            Main Offer Price *
          </label>
          <input
            type="number"
            id="main_price"
            value={formData.main_price || ''}
            onChange={(e) => onChange('main_price', parseFloat(e.target.value) || 0)}
            min="0"
            step="100"
            placeholder="5000"
            className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-charcoal-900 text-gold-200 placeholder:text-gold-500/40 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-inter"
            required
          />
          <p className="text-sm text-gold-500/60 mt-1 font-inter">Your primary coaching package price</p>
        </div>

        {/* Upsell Price */}
        <div>
          <label htmlFor="upsell_price" className="block text-sm font-medium mb-2 text-gold-400 font-inter">
            Upsell Offer Price
          </label>
          <input
            type="number"
            id="upsell_price"
            value={formData.upsell_price || ''}
            onChange={(e) => onChange('upsell_price', parseFloat(e.target.value) || 0)}
            min="0"
            step="100"
            placeholder="2000"
            className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-charcoal-900 text-gold-200 placeholder:text-gold-500/40 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-inter"
          />
          <p className="text-sm text-gold-500/60 mt-1 font-inter">Additional offer after main sale (0 if none)</p>
        </div>

        {/* Renewal Price */}
        <div>
          <label htmlFor="renewal_price" className="block text-sm font-medium mb-2 text-gold-400 font-inter">
            Renewal Offer Price
          </label>
          <input
            type="number"
            id="renewal_price"
            value={formData.renewal_price || ''}
            onChange={(e) => onChange('renewal_price', parseFloat(e.target.value) || 0)}
            min="0"
            step="100"
            placeholder="3000"
            className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-charcoal-900 text-gold-200 placeholder:text-gold-500/40 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-inter"
          />
          <p className="text-sm text-gold-500/60 mt-1 font-inter">Recurring or extension offer (0 if none)</p>
        </div>
      </div>
    </div>
  )
}

