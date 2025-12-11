/**
 * Input Sanitization for Opportunity Cost Calculator
 * Applies all sanitization rules per spec
 */

import type { CalculatorInputs, SanitizedInputs } from './types'

/**
 * Sanitize a single rate value
 * Rules:
 * - If missing or NaN → 0
 * - If < 0 → 0
 * - If > 1 → 1
 */
function sanitizeRate(value: any): number {
  if (value === null || value === undefined || isNaN(Number(value))) {
    return 0
  }
  
  const numValue = Number(value)
  
  if (numValue < 0) return 0
  if (numValue > 1) return 1
  
  return numValue
}

/**
 * Sanitize a price or volume value
 * Rules:
 * - If negative → 0
 * - If missing or NaN → 0
 */
function sanitizePositive(value: any): number {
  if (value === null || value === undefined || isNaN(Number(value))) {
    return 0
  }
  
  const numValue = Number(value)
  
  if (numValue < 0) return 0
  
  return numValue
}

/**
 * Sanitize all calculator inputs
 * Applies effective target rules based on pricing
 */
export function sanitizeInputs(inputs: CalculatorInputs): SanitizedInputs {
  // Sanitize pricing inputs
  const main_price = sanitizePositive(inputs.main_price)
  const upsell_price = sanitizePositive(inputs.upsell_price)
  const renewal_price = sanitizePositive(inputs.renewal_price)
  
  // Sanitize rate inputs
  const upsell_rate = sanitizeRate(inputs.upsell_rate)
  const renewal_rate = sanitizeRate(inputs.renewal_rate)
  const result_rate = sanitizeRate(inputs.result_rate)
  const referral_rate = sanitizeRate(inputs.referral_rate)
  
  // Sanitize volume inputs
  const new_clients = sanitizePositive(inputs.new_clients)
  const churn_clients = sanitizePositive(inputs.churn_clients)
  
  // Default targets (v4.2 benchmarks)
  let upsell_target = 0.20
  let renewal_target = 0.30
  const result_target = 0.50
  const referral_target = 0.25
  
  // Apply effective target rules
  // If upsell_price = 0 → upsell_target = 0
  if (upsell_price === 0) {
    upsell_target = 0
  }
  
  // If renewal_price = 0 → renewal_target = 0
  if (renewal_price === 0) {
    renewal_target = 0
  }
  
  return {
    main_price,
    upsell_price,
    renewal_price,
    currency: inputs.currency || 'USD',
    upsell_rate,
    renewal_rate,
    result_rate,
    referral_rate,
    new_clients,
    churn_clients,
    upsell_target,
    renewal_target,
    result_target,
    referral_target,
  }
}
