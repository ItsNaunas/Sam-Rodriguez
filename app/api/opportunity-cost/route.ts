/**
 * Opportunity Cost Calculator API Route
 * POST /api/opportunity-cost
 * 
 * Orchestrates: Input validation → Sanitization → Calculation → LLM Report Generation
 */

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sanitizeInputs } from '@/lib/calculator/sanitize'
import { calculateOpportunityCost } from '@/lib/calculator/calculate'
import { generateOpportunityReport } from '@/lib/calculator/llm'
import { storeCalculatorLead } from '@/lib/supabase'
import type { CalculatorInputs, APIResponse } from '@/lib/calculator/types'

// Input validation schema
const calculatorSchema = z.object({
  email: z.string().email('Invalid email address'),
  main_price: z.number(),
  upsell_price: z.number(),
  renewal_price: z.number(),
  currency: z.string().default('USD'),
  upsell_rate: z.number(),
  renewal_rate: z.number(),
  result_rate: z.number(),
  referral_rate: z.number(),
  new_clients: z.number(),
  churn_clients: z.number(),
})

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    
    // Validate input schema
    const validationResult = calculatorSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid input data',
          details: validationResult.error.errors,
        } as APIResponse,
        { status: 400 }
      )
    }
    
    const { email, ...inputs } = validationResult.data
    
    // Step 0: Store email in Supabase (before processing)
    try {
      await storeCalculatorLead(email, inputs)
    } catch (error) {
      // Log but don't fail the request if Supabase storage fails
      console.error('Failed to store email in Supabase:', error)
    }
    
    // Step 1: Sanitize inputs
    const sanitizedInputs = sanitizeInputs(inputs as CalculatorInputs)
    
    // Step 2: Calculate opportunity cost
    const outputs = calculateOpportunityCost(sanitizedInputs)
    
    // Step 3: Generate LLM report
    const report = await generateOpportunityReport(sanitizedInputs, outputs)
    
    // Return complete response
    return NextResponse.json({
      success: true,
      report,
      metrics: outputs,
      inputs: sanitizedInputs,
    } as APIResponse)
    
  } catch (error) {
    console.error('Error in opportunity-cost API:', error)
    
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error processing your calculation',
      } as APIResponse,
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
