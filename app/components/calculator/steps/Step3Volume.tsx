'use client'

/**
 * Step 3: Volume Inputs
 * Collects new_clients, churn_clients
 */

interface Step3VolumeProps {
  formData: {
    new_clients: number
    churn_clients: number
  }
  onChange: (field: string, value: any) => void
}

export default function Step3Volume({ formData, onChange }: Step3VolumeProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-playfair text-2xl font-bold mb-2 text-gold-500">Step 3: Volume</h3>
        <p className="text-gold-400/80 font-inter">
          How many clients are you working with each month?
        </p>
      </div>

      <div className="space-y-4">
        {/* New Clients */}
        <div>
          <label htmlFor="new_clients" className="block text-sm font-medium mb-2 text-gold-400 font-inter">
            New Clients Per Month *
          </label>
          <input
            type="number"
            id="new_clients"
            value={formData.new_clients || ''}
            onChange={(e) => onChange('new_clients', parseInt(e.target.value) || 0)}
            min="0"
            step="1"
            placeholder="10"
            className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-charcoal-900 text-gold-200 placeholder:text-gold-500/40 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-inter"
            required
          />
          <p className="text-sm text-gold-500/60 mt-1 font-inter">
            How many new clients do you onboard monthly?
          </p>
        </div>

        {/* Churn Clients */}
        <div>
          <label htmlFor="churn_clients" className="block text-sm font-medium mb-2 text-gold-400 font-inter">
            Churned Clients Per Month
          </label>
          <input
            type="number"
            id="churn_clients"
            value={formData.churn_clients || ''}
            onChange={(e) => onChange('churn_clients', parseInt(e.target.value) || 0)}
            min="0"
            step="1"
            placeholder="2"
            className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-charcoal-900 text-gold-200 placeholder:text-gold-500/40 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 font-inter"
          />
          <p className="text-sm text-gold-500/60 mt-1 font-inter">
            How many clients leave or don't renew monthly?
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gold-500/10 rounded-lg border border-gold-500/30">
        <p className="text-sm text-gold-400 font-inter">
          <strong className="text-gold-500">Note:</strong> These numbers help us calculate the total opportunity cost for your business. Even rough estimates are valuable.
        </p>
      </div>
    </div>
  )
}

