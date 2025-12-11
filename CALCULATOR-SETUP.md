# Opportunity Cost Calculator - Setup Guide

## Overview

The Opportunity Cost Calculator is now fully integrated into your Sam Rodriguez coaching website. This guide will help you complete the setup.

## Prerequisites

✅ **Already Done:**
- Dependencies installed (`@supabase/supabase-js`, `openai`, `zod`)
- All components and API routes created
- Calculator integrated into homepage

## Required Setup Steps

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenAI Configuration
OPENAI_API_KEY=sk-your-openai-api-key

# Calendly URL (Public - already prefixed with NEXT_PUBLIC_)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/strategy-call
```

#### Getting Your Keys:

**Supabase:**
1. Go to [supabase.com](https://supabase.com)
2. Navigate to your project
3. Go to Settings → API
4. Copy the `URL` and `anon` key

**OpenAI:**
1. Go to [platform.openai.com](https://platform.openai.com)
2. Navigate to API Keys
3. Create a new secret key
4. Copy the key (starts with `sk-`)

**Calendly:**
1. Go to your Calendly account
2. Copy your scheduling link
3. Paste it in the env variable

### 2. Supabase Database Setup

Create the following table in your Supabase database:

```sql
-- Create calculator_leads table
CREATE TABLE calculator_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX idx_calculator_leads_email ON calculator_leads(email);

-- Create index on created_at for time-based queries
CREATE INDEX idx_calculator_leads_created_at ON calculator_leads(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE calculator_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (anyone can submit)
CREATE POLICY "Allow public inserts" ON calculator_leads
  FOR INSERT
  WITH CHECK (true);

-- Create policy for viewing (only authenticated users)
CREATE POLICY "Allow authenticated reads" ON calculator_leads
  FOR SELECT
  USING (auth.role() = 'authenticated');
```

### 3. Test the Calculator

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000`

3. Click "Calculate Your Opportunity Cost →"

4. Complete the 3-step form:
   - **Step 1:** Enter pricing (main, upsell, renewal)
   - **Step 2:** Set current rates using sliders
   - **Step 3:** Enter volume (new clients, churn)

5. Enter your email to get the report

## Architecture

```
┌─────────────────────────────────────────────────┐
│                   Homepage                       │
│  "Calculate Your Opportunity Cost" Button       │
└────────────────┬────────────────────────────────┘
                 │ Opens Modal
                 ▼
┌─────────────────────────────────────────────────┐
│           Calculator Modal                       │
│  ┌───────────────────────────────────────────┐  │
│  │  Multi-Step Form (3 steps)                │  │
│  │  1. Pricing                                │  │
│  │  2. Rates (sliders)                        │  │
│  │  3. Volume                                 │  │
│  └───────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────┐  │
│  │  Email Gate                                │  │
│  │  - Stores email in Supabase                │  │
│  │  - Calls API                               │  │
│  └───────────────────────────────────────────┘  │
└────────────────┬────────────────────────────────┘
                 │ POST /api/opportunity-cost
                 ▼
┌─────────────────────────────────────────────────┐
│            Backend API Route                     │
│  1. Sanitize inputs (negative → 0, rates 0-1)  │
│  2. Calculate LTV & Opportunity Cost            │
│  3. Generate LLM report via OpenAI              │
│  4. Return formatted report                     │
└────────────────┬────────────────────────────────┘
                 │ Returns report + metrics
                 ▼
┌─────────────────────────────────────────────────┐
│         Results Display                          │
│  - Formatted LLM report                          │
│  - Quick metrics summary                         │
│  - CTA: "Book a Strategy Call"                  │
└─────────────────────────────────────────────────┘
```

## File Structure

```
app/
├── api/
│   └── opportunity-cost/
│       └── route.ts                 # API endpoint
├── components/
│   └── calculator/
│       ├── CalculatorModal.tsx      # Modal wrapper
│       ├── MultiStepForm.tsx        # Form orchestration
│       ├── EmailGate.tsx            # Email collection
│       ├── OpportunityResult.tsx    # Results display
│       ├── CTASection.tsx           # Book call CTA
│       ├── LoadingState.tsx         # Loading spinner
│       ├── ErrorState.tsx           # Error handling
│       └── steps/
│           ├── Step1Pricing.tsx     # Pricing inputs
│           ├── Step2Rates.tsx       # Rate sliders
│           └── Step3Volume.tsx      # Volume inputs
└── page.tsx                         # Homepage (integrated)

lib/
├── calculator/
│   ├── types.ts                     # TypeScript interfaces
│   ├── sanitize.ts                  # Input sanitization
│   ├── calculate.ts                 # LTV & OC formulas
│   └── llm.ts                       # OpenAI integration
└── supabase.ts                      # Supabase client
```

## Key Features

✅ **Multi-step form** with progress indicator
✅ **Email gating** before results
✅ **Input sanitization** (negative values, rate bounds)
✅ **LTV calculations** (Ideal vs Actual)
✅ **Opportunity cost** calculations (monthly & yearly)
✅ **LLM-generated reports** with tactical insights
✅ **Responsive design** (mobile-friendly)
✅ **Error handling** (graceful fallbacks)
✅ **Loading states** (smooth UX)
✅ **CTA integration** (Calendly link)

## Formulas Implemented

### Ideal LTV
```
Ideal LTV = main_price 
          + (upsell_target × upsell_price)
          + (renewal_target × renewal_price)
          + (referral_target × main_price)
```

**Targets (v4.2 Benchmarks):**
- Upsell: 20%
- Renewal: 30%
- Result: 50%
- Referral: 25%

### Actual LTV
```
Actual LTV = main_price 
           + (upsell_rate × upsell_price)
           + (renewal_rate × renewal_price)
           + (referral_rate × main_price)
```

### Opportunity Cost
```
OC per client = max(Ideal LTV - Actual LTV, 0)
Monthly OC = (OC per client × new_clients) + (OC per client × churn_clients)
Yearly OC = Monthly OC × 12
```

## Testing Checklist

- [ ] Form validation works (can't proceed without required fields)
- [ ] Sliders display percentages correctly (0-100%)
- [ ] Negative numbers are handled (sanitized to 0)
- [ ] Email validation works
- [ ] Supabase stores email correctly
- [ ] API returns calculated results
- [ ] LLM generates personalized report
- [ ] Results display correctly
- [ ] CTA button links to Calendly
- [ ] Modal opens and closes smoothly
- [ ] Mobile responsive design works
- [ ] Error states display on failures
- [ ] Loading states show during calculation

## Common Issues & Solutions

### Issue: "Missing Supabase environment variables"
**Solution:** Ensure `.env.local` has `SUPABASE_URL` and `SUPABASE_ANON_KEY`

### Issue: API returns 500 error
**Solution:** Check:
1. OpenAI API key is valid
2. Supabase table exists
3. All environment variables are set

### Issue: Calculator modal doesn't open
**Solution:** Check browser console for errors. Ensure all components are imported correctly.

### Issue: LLM report not generating
**Solution:** Check OpenAI API key and quota. Fallback report will display if LLM fails.

## Next Steps

1. ✅ Set up environment variables
2. ✅ Create Supabase table
3. ✅ Test the calculator end-to-end
4. ✅ Replace placeholder Calendly URL
5. ✅ Deploy to production

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Check the server logs for API errors
3. Verify all environment variables are set correctly
4. Ensure Supabase table schema matches the spec

## Production Deployment

Before deploying:
1. Add environment variables to your hosting platform (Vercel, Netlify, etc.)
2. Test the calculator in production
3. Monitor Supabase for email submissions
4. Monitor OpenAI API usage and costs
5. Set up error tracking (e.g., Sentry)

---

**Calculator is ready to use!** 🎉

