/**
 * Calculator Types and Interfaces
 * Opportunity Cost Calculator
 */

export interface CalculatorInputs {
  // Pricing
  main_price: number
  upsell_price: number
  renewal_price: number
  currency: string

  // Rates (0-1 decimals)
  upsell_rate: number
  renewal_rate: number
  result_rate: number
  referral_rate: number

  // Volume
  new_clients: number
  churn_clients: number
}

export interface SanitizedInputs extends CalculatorInputs {
  // Effective targets based on sanitization rules
  upsell_target: number
  renewal_target: number
  result_target: number
  referral_target: number
}

export interface LTVBreakdown {
  main_price_contribution: number
  upsell_contribution: number
  renewal_contribution: number
  referral_contribution: number
  total: number
}

export interface CalculatorOutputs {
  // LTV Values
  ideal_ltv: number
  ideal_ltv_breakdown: LTVBreakdown
  actual_ltv: number
  actual_ltv_breakdown: LTVBreakdown
  
  // Opportunity Cost
  oc_per_new_client: number
  oc_new_clients: number
  oc_churn: number
  total_oc_month: number
  total_oc_year: number

  // Targets used
  targets: {
    upsell_target: number
    renewal_target: number
    result_target: number
    referral_target: number
  }
}

export interface APIResponse {
  success: boolean
  report?: string
  metrics?: CalculatorOutputs
  inputs?: SanitizedInputs
  error?: string
  details?: Array<{ path: (string | number)[]; message: string; code: string }>
}

export interface EmailSubmission {
  email: string
  metadata: CalculatorInputs
}
