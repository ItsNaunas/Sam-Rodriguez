/**
 * LLM Report Generation
 * Uses OpenAI to generate personalized opportunity cost reports
 */

import OpenAI from 'openai'
import type { SanitizedInputs, CalculatorOutputs } from './types'

// Initialize OpenAI client only if API key is available
let openai: OpenAI | null = null

function getOpenAIClient(): OpenAI | null {
  if (openai) {
    return openai
  }

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    console.warn(
      'Missing OPENAI_API_KEY environment variable. LLM report generation will use fallback. See ENV-SETUP.md for instructions.'
    )
    return null
  }

  openai = new OpenAI({ apiKey })
  return openai
}

/**
 * Format currency for display
 */
function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format percentage for display
 */
function formatPercent(rate: number): string {
  return `${(rate * 100).toFixed(0)}%`
}

/**
 * Build the prompt for the LLM
 */
function buildPrompt(inputs: SanitizedInputs, outputs: CalculatorOutputs): string {
  const { currency, main_price, upsell_price, renewal_price, new_clients, churn_clients } = inputs
  const { upsell_rate, renewal_rate, result_rate, referral_rate } = inputs
  const { targets } = outputs
  
  return `You are an expert business consultant analyzing a coaching business's opportunity cost. Generate a comprehensive, personalized report based on the following data.

**Input Data:**
- Currency: ${currency}
- Main Price: ${formatCurrency(main_price, currency)}
- Upsell Price: ${formatCurrency(upsell_price, currency)}
- Renewal Price: ${formatCurrency(renewal_price, currency)}
- New Clients (Monthly): ${new_clients}
- Churn Clients (Monthly): ${churn_clients}
- Upsell Rate: ${formatPercent(upsell_rate)}
- Renewal Rate: ${formatPercent(renewal_rate)}
- Result Rate: ${formatPercent(result_rate)}
- Referral Rate: ${formatPercent(referral_rate)}

**Benchmarks (v4.2):**
- Upsell Target: ${formatPercent(targets.upsell_target)}
- Renewal Target: ${formatPercent(targets.renewal_target)}
- Result Target: ${formatPercent(targets.result_target)}
- Referral Target: ${formatPercent(targets.referral_target)}

**Calculated Metrics:**
- Ideal LTV: ${formatCurrency(outputs.ideal_ltv, currency)}
  - Main Price: ${formatCurrency(outputs.ideal_ltv_breakdown.main_price_contribution, currency)}
  - Upsell: ${formatCurrency(outputs.ideal_ltv_breakdown.upsell_contribution, currency)}
  - Renewal: ${formatCurrency(outputs.ideal_ltv_breakdown.renewal_contribution, currency)}
  - Referral: ${formatCurrency(outputs.ideal_ltv_breakdown.referral_contribution, currency)}

- Actual LTV: ${formatCurrency(outputs.actual_ltv, currency)}
  - Main Price: ${formatCurrency(outputs.actual_ltv_breakdown.main_price_contribution, currency)}
  - Upsell: ${formatCurrency(outputs.actual_ltv_breakdown.upsell_contribution, currency)}
  - Renewal: ${formatCurrency(outputs.actual_ltv_breakdown.renewal_contribution, currency)}
  - Referral: ${formatCurrency(outputs.actual_ltv_breakdown.referral_contribution, currency)}

- Opportunity Cost Per Client: ${formatCurrency(outputs.oc_per_new_client, currency)}
- Monthly OC (New Clients): ${formatCurrency(outputs.oc_new_clients, currency)}
- Monthly OC (Churn): ${formatCurrency(outputs.oc_churn, currency)}
- Total Monthly OC: ${formatCurrency(outputs.total_oc_month, currency)}
- Total Yearly OC: ${formatCurrency(outputs.total_oc_year, currency)}

**Required Report Structure:**

# 📊 Opportunity Cost Calculator — Personalised Report

## Inputs Recap
[List all inputs clearly]

## Benchmarks (v4.2)
[Show all benchmark targets]

## 1. LTV Breakdown
[Show ideal LTV breakdown with components and total]
[Show actual LTV breakdown with components and total]
[Show opportunity lost per client]

## 2. Monthly Breakdown
[Show OC from new clients]
[Show OC from churn]
[Show total monthly OC]

## 3. Yearly Opportunity Cost
[Show total yearly OC with context]

## 4. Tactical Insights
[Provide 3-5 sharp, actionable insights based on the following MANDATORY rules:]

**MANDATORY INSIGHT RULES:**
${upsell_price === 0 ? '- MUST include: "Upsell missing entirely. You\'re structurally capped at one-time revenue."' : ''}
${renewal_price === 0 ? '- MUST include: "You currently have no renewal offer. LTV cannot compound."' : ''}
${referral_rate === 0 ? '- MUST include: "You report 0% referrals. Even reaching 10–25% materially shifts LTV."' : ''}
- MUST comment on result_rate (${formatPercent(result_rate)}) vs the 50% target
- Provide specific, tactical advice based on the gaps
- Use sharp, direct language
- Focus on structural issues and high-leverage improvements

Make the insights specific to their business situation. Be direct and actionable.`
}

/**
 * Generate personalized opportunity cost report using OpenAI
 */
export async function generateOpportunityReport(
  inputs: SanitizedInputs,
  outputs: CalculatorOutputs
): Promise<string> {
  try {
    const client = getOpenAIClient()
    
    // If OpenAI is not configured, use fallback immediately
    if (!client) {
      console.warn('OpenAI not configured. Using fallback report.')
      return generateFallbackReport(inputs, outputs)
    }

    const prompt = buildPrompt(inputs, outputs)
    
    const completion = await client.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are an expert business consultant specializing in high-ticket coaching businesses. You provide sharp, tactical insights based on data. Your tone is direct, clear, and focused on structural improvements.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    })
    
    const report = completion.choices[0]?.message?.content
    
    if (!report) {
      throw new Error('No report generated from LLM')
    }
    
    return report
  } catch (error) {
    console.error('Error generating LLM report:', error)
    // Return a fallback report if LLM fails
    return generateFallbackReport(inputs, outputs)
  }
}

/**
 * Generate a fallback report if LLM fails
 */
function generateFallbackReport(inputs: SanitizedInputs, outputs: CalculatorOutputs): string {
  const { currency } = inputs
  
  return `# 📊 Opportunity Cost Calculator — Report

## 1. LTV Breakdown

**Ideal LTV:** ${formatCurrency(outputs.ideal_ltv, currency)}
- Main Price: ${formatCurrency(outputs.ideal_ltv_breakdown.main_price_contribution, currency)}
- Upsell: ${formatCurrency(outputs.ideal_ltv_breakdown.upsell_contribution, currency)}
- Renewal: ${formatCurrency(outputs.ideal_ltv_breakdown.renewal_contribution, currency)}
- Referral: ${formatCurrency(outputs.ideal_ltv_breakdown.referral_contribution, currency)}

**Actual LTV:** ${formatCurrency(outputs.actual_ltv, currency)}
- Main Price: ${formatCurrency(outputs.actual_ltv_breakdown.main_price_contribution, currency)}
- Upsell: ${formatCurrency(outputs.actual_ltv_breakdown.upsell_contribution, currency)}
- Renewal: ${formatCurrency(outputs.actual_ltv_breakdown.renewal_contribution, currency)}
- Referral: ${formatCurrency(outputs.actual_ltv_breakdown.referral_contribution, currency)}

**Opportunity Lost Per Client:** ${formatCurrency(outputs.oc_per_new_client, currency)}

## 2. Monthly Breakdown

- OC from New Clients: ${formatCurrency(outputs.oc_new_clients, currency)}
- OC from Churn: ${formatCurrency(outputs.oc_churn, currency)}
- **Total Monthly OC:** ${formatCurrency(outputs.total_oc_month, currency)}

## 3. Yearly Opportunity Cost

**Total:** ${formatCurrency(outputs.total_oc_year, currency)}

## 4. Key Insights

${inputs.upsell_price === 0 ? '- Upsell missing entirely. You\'re structurally capped at one-time revenue.\n' : ''}
${inputs.renewal_price === 0 ? '- You currently have no renewal offer. LTV cannot compound.\n' : ''}
${inputs.referral_rate === 0 ? '- You report 0% referrals. Even reaching 10–25% materially shifts LTV.\n' : ''}
- Your result rate is ${formatPercent(inputs.result_rate)} vs the 50% target.

Contact us to discuss optimization strategies.`
}
