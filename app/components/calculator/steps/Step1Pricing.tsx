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
        <h3 className="text-2xl font-bold mb-2">Step 1: Pricing</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Tell us about your pricing structure
        </p>
      </div>

      <div className="space-y-4">
        {/* Currency Selection */}
        <div>
          <label htmlFor="currency" className="block text-sm font-medium mb-2">
            Currency
          </label>
          <select
            id="currency"
            value={formData.currency}
            onChange={(e) => onChange('currency', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          <label htmlFor="main_price" className="block text-sm font-medium mb-2">
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
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <p className="text-sm text-gray-500 mt-1">Your primary coaching package price</p>
        </div>

        {/* Upsell Price */}
        <div>
          <label htmlFor="upsell_price" className="block text-sm font-medium mb-2">
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
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-sm text-gray-500 mt-1">Additional offer after main sale (0 if none)</p>
        </div>

        {/* Renewal Price */}
        <div>
          <label htmlFor="renewal_price" className="block text-sm font-medium mb-2">
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
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-sm text-gray-500 mt-1">Recurring or extension offer (0 if none)</p>
        </div>
      </div>
    </div>
  )
}

