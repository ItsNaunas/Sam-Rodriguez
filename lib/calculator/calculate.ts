/**
 * Opportunity Cost Calculation Engine
 * Implements all LTV and OC formulas per spec
 */

import type { SanitizedInputs, CalculatorOutputs, LTVBreakdown } from './types'

/**
 * Calculate Ideal LTV
 * Formula: main_price + (upsell_target × upsell_price) + (renewal_target × renewal_price) + (referral_target × main_price)
 */
function calculateIdealLTV(inputs: SanitizedInputs): LTVBreakdown {
  const main_price_contribution = inputs.main_price
  const upsell_contribution = inputs.upsell_target * inputs.upsell_price
  const renewal_contribution = inputs.renewal_target * inputs.renewal_price
  const referral_contribution = inputs.referral_target * inputs.main_price
  
  const total = 
    main_price_contribution +
    upsell_contribution +
    renewal_contribution +
    referral_contribution
  
  return {
    main_price_contribution,
    upsell_contribution,
    renewal_contribution,
    referral_contribution,
    total,
  }
}

/**
 * Calculate Actual LTV
 * Formula: main_price + (upsell_rate × upsell_price) + (renewal_rate × renewal_price) + (referral_rate × main_price)
 */
function calculateActualLTV(inputs: SanitizedInputs): LTVBreakdown {
  const main_price_contribution = inputs.main_price
  const upsell_contribution = inputs.upsell_rate * inputs.upsell_price
  const renewal_contribution = inputs.renewal_rate * inputs.renewal_price
  const referral_contribution = inputs.referral_rate * inputs.main_price
  
  const total = 
    main_price_contribution +
    upsell_contribution +
    renewal_contribution +
    referral_contribution
  
  return {
    main_price_contribution,
    upsell_contribution,
    renewal_contribution,
    referral_contribution,
    total,
  }
}

/**
 * Calculate all opportunity cost metrics
 */
export function calculateOpportunityCost(inputs: SanitizedInputs): CalculatorOutputs {
  // Calculate LTV values
  const ideal_ltv_breakdown = calculateIdealLTV(inputs)
  const actual_ltv_breakdown = calculateActualLTV(inputs)
  
  const ideal_ltv = ideal_ltv_breakdown.total
  const actual_ltv = actual_ltv_breakdown.total
  
  // Opportunity Cost per new client
  // Formula: max(ideal_LTV - actual_LTV, 0)
  const oc_per_new_client = Math.max(ideal_ltv - actual_ltv, 0)
  
  // Monthly Opportunity Costs
  const oc_new_clients = oc_per_new_client * inputs.new_clients
  const oc_churn = oc_per_new_client * inputs.churn_clients
  const total_oc_month = oc_new_clients + oc_churn
  
  // Yearly Opportunity Cost
  const total_oc_year = total_oc_month * 12
  
  return {
    ideal_ltv,
    ideal_ltv_breakdown,
    actual_ltv,
    actual_ltv_breakdown,
    oc_per_new_client,
    oc_new_clients,
    oc_churn,
    total_oc_month,
    total_oc_year,
    targets: {
      upsell_target: inputs.upsell_target,
      renewal_target: inputs.renewal_target,
      result_target: inputs.result_target,
      referral_target: inputs.referral_target,
    },
  }
}
