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
        <h3 className="text-2xl font-bold mb-2">Step 3: Volume</h3>
        <p className="text-gray-600 dark:text-gray-400">
          How many clients are you working with each month?
        </p>
      </div>

      <div className="space-y-4">
        {/* New Clients */}
        <div>
          <label htmlFor="new_clients" className="block text-sm font-medium mb-2">
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
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            How many new clients do you onboard monthly?
          </p>
        </div>

        {/* Churn Clients */}
        <div>
          <label htmlFor="churn_clients" className="block text-sm font-medium mb-2">
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
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-sm text-gray-500 mt-1">
            How many clients leave or don't renew monthly?
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Note:</strong> These numbers help us calculate the total opportunity cost for your business. Even rough estimates are valuable.
        </p>
      </div>
    </div>
  )
}

