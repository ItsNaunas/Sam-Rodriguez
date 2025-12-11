# Opportunity Cost Calculator - Test Cases

## Test Cases for Validation & Edge Cases

### 1. Input Sanitization Tests

#### Test Case 1.1: Negative Price Values
**Input:**
```json
{
  "main_price": -5000,
  "upsell_price": -1000,
  "renewal_price": -3000
}
```
**Expected Output:**
```json
{
  "main_price": 0,
  "upsell_price": 0,
  "renewal_price": 0
}
```
**Status:** ✅ Implemented in `lib/calculator/sanitize.ts`

#### Test Case 1.2: Negative Volume Values
**Input:**
```json
{
  "new_clients": -10,
  "churn_clients": -5
}
```
**Expected Output:**
```json
{
  "new_clients": 0,
  "churn_clients": 0
}
```
**Status:** ✅ Implemented in `lib/calculator/sanitize.ts`

#### Test Case 1.3: Rates Below 0
**Input:**
```json
{
  "upsell_rate": -0.5,
  "renewal_rate": -1.2,
  "result_rate": -0.1,
  "referral_rate": -0.3
}
```
**Expected Output:**
```json
{
  "upsell_rate": 0,
  "renewal_rate": 0,
  "result_rate": 0,
  "referral_rate": 0
}
```
**Status:** ✅ Implemented in `lib/calculator/sanitize.ts`

#### Test Case 1.4: Rates Above 1
**Input:**
```json
{
  "upsell_rate": 1.5,
  "renewal_rate": 2.0,
  "result_rate": 1.1,
  "referral_rate": 3.5
}
```
**Expected Output:**
```json
{
  "upsell_rate": 1,
  "renewal_rate": 1,
  "result_rate": 1,
  "referral_rate": 1
}
```
**Status:** ✅ Implemented in `lib/calculator/sanitize.ts`

#### Test Case 1.5: Missing/NaN Values
**Input:**
```json
{
  "upsell_rate": null,
  "renewal_rate": undefined,
  "result_rate": NaN,
  "referral_rate": "not a number"
}
```
**Expected Output:**
```json
{
  "upsell_rate": 0,
  "renewal_rate": 0,
  "result_rate": 0,
  "referral_rate": 0
}
```
**Status:** ✅ Implemented in `lib/calculator/sanitize.ts`

### 2. Effective Target Tests

#### Test Case 2.1: Upsell Price = 0
**Input:**
```json
{
  "upsell_price": 0
}
```
**Expected Output:**
```json
{
  "upsell_target": 0  // Should be 0, not 0.20
}
```
**Reason:** No upsell offer exists, so target should be 0
**Status:** ✅ Implemented in `lib/calculator/sanitize.ts`

#### Test Case 2.2: Renewal Price = 0
**Input:**
```json
{
  "renewal_price": 0
}
```
**Expected Output:**
```json
{
  "renewal_target": 0  // Should be 0, not 0.30
}
```
**Reason:** No renewal offer exists, so target should be 0
**Status:** ✅ Implemented in `lib/calculator/sanitize.ts`

### 3. Calculation Tests

#### Test Case 3.1: Basic LTV Calculation
**Input:**
```json
{
  "main_price": 5000,
  "upsell_price": 2000,
  "renewal_price": 3000,
  "upsell_rate": 0.10,
  "renewal_rate": 0.15,
  "result_rate": 0.40,
  "referral_rate": 0.10,
  "upsell_target": 0.20,
  "renewal_target": 0.30,
  "referral_target": 0.25
}
```
**Expected Calculations:**
```
Ideal LTV:
  = 5000 + (0.20 × 2000) + (0.30 × 3000) + (0.25 × 5000)
  = 5000 + 400 + 900 + 1250
  = 7550

Actual LTV:
  = 5000 + (0.10 × 2000) + (0.15 × 3000) + (0.10 × 5000)
  = 5000 + 200 + 450 + 500
  = 6150

OC per client:
  = max(7550 - 6150, 0)
  = 1400
```
**Status:** ✅ Implemented in `lib/calculator/calculate.ts`

#### Test Case 3.2: Opportunity Cost When Actual > Ideal
**Input:**
```json
{
  "ideal_ltv": 5000,
  "actual_ltv": 6000
}
```
**Expected Output:**
```json
{
  "oc_per_new_client": 0  // Should be 0, not negative
}
```
**Reason:** max() ensures OC is never negative
**Status:** ✅ Implemented in `lib/calculator/calculate.ts`

#### Test Case 3.3: Monthly and Yearly Calculations
**Input:**
```json
{
  "oc_per_new_client": 1000,
  "new_clients": 10,
  "churn_clients": 2
}
```
**Expected Calculations:**
```
OC from new clients: 1000 × 10 = 10,000
OC from churn: 1000 × 2 = 2,000
Total Monthly OC: 10,000 + 2,000 = 12,000
Total Yearly OC: 12,000 × 12 = 144,000
```
**Status:** ✅ Implemented in `lib/calculator/calculate.ts`

### 4. LLM Report Tests

#### Test Case 4.1: Mandatory Insight - No Upsell
**Condition:** `upsell_price === 0`
**Expected Insight:** "Upsell missing entirely. You're structurally capped at one-time revenue."
**Status:** ✅ Implemented in `lib/calculator/llm.ts`

#### Test Case 4.2: Mandatory Insight - No Renewal
**Condition:** `renewal_price === 0`
**Expected Insight:** "You currently have no renewal offer. LTV cannot compound."
**Status:** ✅ Implemented in `lib/calculator/llm.ts`

#### Test Case 4.3: Mandatory Insight - Zero Referrals
**Condition:** `referral_rate === 0`
**Expected Insight:** "You report 0% referrals. Even reaching 10–25% materially shifts LTV."
**Status:** ✅ Implemented in `lib/calculator/llm.ts`

#### Test Case 4.4: Mandatory Insight - Result Rate
**Condition:** Always required
**Expected:** Comment comparing result_rate to 50% target
**Status:** ✅ Implemented in `lib/calculator/llm.ts`

### 5. Frontend Validation Tests

#### Test Case 5.1: Email Validation
**Invalid Emails:**
- `invalid` → Rejected
- `@example.com` → Rejected
- `test@` → Rejected
- `test@.com` → Rejected

**Valid Emails:**
- `test@example.com` → Accepted
- `user.name@domain.co.uk` → Accepted

**Status:** ✅ Implemented in `app/components/calculator/EmailGate.tsx`

#### Test Case 5.2: Step Validation
**Step 1:** Cannot proceed without `main_price > 0`
**Step 2:** Can proceed with rates at 0 (valid scenario)
**Step 3:** Cannot proceed without `new_clients >= 0`

**Status:** ✅ Implemented in `app/components/calculator/MultiStepForm.tsx`

#### Test Case 5.3: Slider Display
**Input:** Rate = 0.35 (decimal)
**Display:** 35% (percentage)
**Stored:** 0.35 (decimal)

**Status:** ✅ Implemented in `app/components/calculator/steps/Step2Rates.tsx`

### 6. Error Handling Tests

#### Test Case 6.1: API Failure
**Scenario:** OpenAI API fails
**Expected:** Show fallback report with calculations
**Status:** ✅ Implemented in `lib/calculator/llm.ts`

#### Test Case 6.2: Supabase Failure
**Scenario:** Cannot store email
**Expected:** Continue with calculation, log error
**Status:** ✅ Implemented in `lib/supabase.ts`

#### Test Case 6.3: Network Error
**Scenario:** Fetch fails
**Expected:** Show ErrorState component with retry option
**Status:** ✅ Implemented in `app/components/calculator/MultiStepForm.tsx`

### 7. Integration Tests

#### Test Case 7.1: Complete Flow - Typical User
**Steps:**
1. User opens calculator modal
2. Enters pricing: main=$5000, upsell=$2000, renewal=$3000
3. Sets rates: 10%, 15%, 40%, 10%
4. Enters volume: 10 new, 2 churn
5. Enters valid email
6. Receives personalized report
7. Sees CTA to book call

**Expected:** Smooth flow with no errors
**Status:** ✅ Implemented

#### Test Case 7.2: Complete Flow - No Upsell/Renewal
**Steps:**
1. User opens calculator modal
2. Enters pricing: main=$5000, upsell=$0, renewal=$0
3. Sets rates: 0%, 0%, 40%, 10%
4. Enters volume: 5 new, 1 churn
5. Enters valid email
6. Receives report with mandatory insights

**Expected Insights:**
- "Upsell missing entirely..."
- "You currently have no renewal offer..."

**Status:** ✅ Implemented

#### Test Case 7.3: Complete Flow - Zero Referrals
**Steps:**
1. Complete form with referral_rate = 0%
2. Receive report

**Expected Insight:**
- "You report 0% referrals. Even reaching 10–25% materially shifts LTV."

**Status:** ✅ Implemented

### 8. UI/UX Tests

#### Test Case 8.1: Modal Open/Close
- Click button → Modal opens
- Click backdrop → Modal closes
- Press ESC → Modal closes
- Click X button → Modal closes

**Status:** ✅ Implemented in `app/components/calculator/CalculatorModal.tsx`

#### Test Case 8.2: Progress Indicator
- Step 1/3 → 33% progress
- Step 2/3 → 67% progress
- Step 3/3 → 100% progress

**Status:** ✅ Implemented in `app/components/calculator/MultiStepForm.tsx`

#### Test Case 8.3: Loading States
- Show spinner while calculating
- Show "Analyzing your opportunity cost..." message
- Disable form inputs during loading

**Status:** ✅ Implemented in `app/components/calculator/LoadingState.tsx`

#### Test Case 8.4: Responsive Design
- Mobile (< 768px): Single column, touch-friendly
- Tablet (768-1024px): Optimized layout
- Desktop (> 1024px): Full-width modal

**Status:** ✅ Implemented with Tailwind responsive classes

## Manual Testing Checklist

- [ ] Open calculator from homepage
- [ ] Test negative number inputs (should sanitize to 0)
- [ ] Test rates outside 0-1 range (should clamp)
- [ ] Test with upsell_price = 0 (should see mandatory insight)
- [ ] Test with renewal_price = 0 (should see mandatory insight)
- [ ] Test with referral_rate = 0 (should see mandatory insight)
- [ ] Test invalid email addresses (should reject)
- [ ] Test valid email address (should accept)
- [ ] Complete full flow and verify report
- [ ] Check calculations manually against formulas
- [ ] Test modal close on ESC key
- [ ] Test modal close on backdrop click
- [ ] Test on mobile device
- [ ] Test error states (disconnect internet)
- [ ] Verify Calendly link works
- [ ] Check Supabase for email storage

## Automated Testing (Future Enhancement)

Consider adding:
- Jest unit tests for calculation functions
- Playwright E2E tests for user flows
- Vitest for component testing
- API route testing with MSW (Mock Service Worker)

---

All test cases are implemented and ready for manual verification! ✅

