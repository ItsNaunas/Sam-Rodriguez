/**
 * Supabase Client Configuration
 * For email capture and lead storage
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabaseClient: SupabaseClient | null = null

function getSupabaseClient(): SupabaseClient | null {
  if (supabaseClient) {
    return supabaseClient
  }

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
      'Missing Supabase environment variables. Email storage will be skipped. Please set SUPABASE_URL and SUPABASE_ANON_KEY in your environment variables. See ENV-SETUP.md for instructions.'
    )
    return null
  }

  supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  return supabaseClient
}

/**
 * Store calculator lead email and metadata
 * Expected table schema:
 * - email (text, primary key or unique)
 * - created_at (timestamp with time zone, default now())
 * - metadata (jsonb)
 */
export async function storeCalculatorLead(email: string, metadata: any) {
  try {
    const supabase = getSupabaseClient()
    
    if (!supabase) {
      console.warn('Supabase not configured. Skipping email storage.')
      return { success: false, skipped: true }
    }

    const { data, error } = await supabase
      .from('calculator_leads')
      .insert([
        {
          email,
          metadata,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      // Don't throw - just log the error so the API doesn't fail
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error storing calculator lead:', error)
    // Don't throw - just log the error so the API doesn't fail
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
