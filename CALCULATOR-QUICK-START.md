# Opportunity Cost Calculator - Quick Start

## 🚀 Get Started in 3 Steps

### Step 1: Set Up Environment Variables (2 minutes)

Create `.env.local` in the root directory:

```bash
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
OPENAI_API_KEY=sk-your_openai_key
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
```

### Step 2: Create Supabase Table (1 minute)

Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE calculator_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE calculator_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON calculator_leads
  FOR INSERT WITH CHECK (true);
```

### Step 3: Test It! (3 minutes)

```bash
npm run dev
```

Visit `http://localhost:3000` and click **"Calculate Your Opportunity Cost"**

---

## 📝 What's Included

✅ **Complete Calculator Flow**
- Multi-step form (Pricing → Rates → Volume → Email)
- Real-time validation
- Progress indicator

✅ **Backend Processing**
- Input sanitization (negative → 0, rates clamped 0-1)
- LTV calculations (Ideal vs Actual)
- Opportunity cost formulas
- AI-generated personalized reports

✅ **Professional UI**
- Modal design
- Loading states
- Error handling
- Mobile responsive

✅ **Email Capture**
- Supabase integration
- Secure storage
- Privacy-first approach

✅ **Smart Insights**
- Automatic detection of missing offers
- Comparison to industry benchmarks
- Tactical recommendations

---

## 🧪 Test Cases

Try these inputs to test the calculator:

### Test 1: Standard Coaching Business
```
Pricing:
- Main: $5,000
- Upsell: $2,000
- Renewal: $3,000

Rates:
- Upsell: 10%
- Renewal: 15%
- Result: 40%
- Referral: 10%

Volume:
- New: 10/month
- Churn: 2/month
```

**Expected Result:** ~$1,400 OC per client, ~$16,800/month, ~$201,600/year

### Test 2: No Upsell or Renewal
```
Pricing:
- Main: $5,000
- Upsell: $0
- Renewal: $0

Rates:
- All rates: 10%

Volume:
- New: 5/month
- Churn: 1/month
```

**Expected Insights:** 
- "Upsell missing entirely..."
- "You currently have no renewal offer..."

### Test 3: Zero Referrals
```
All normal values but:
- Referral Rate: 0%
```

**Expected Insight:** "You report 0% referrals..."

---

## 🔍 Verification Checklist

After setup, verify:

- [ ] Calculator modal opens from homepage
- [ ] Form validates (can't skip required fields)
- [ ] Sliders show percentages correctly
- [ ] Email validation works
- [ ] Report generates successfully
- [ ] Email appears in Supabase `calculator_leads` table
- [ ] "Book a Strategy Call" button links to your Calendly
- [ ] Mobile view works properly

---

## 📊 How the Calculations Work

### Ideal LTV (Industry Benchmarks)
```
= Main Price
+ (20% × Upsell Price)
+ (30% × Renewal Price)  
+ (25% × Main Price)     // Referrals
```

### Actual LTV (Your Current Performance)
```
= Main Price
+ (Your Upsell Rate × Upsell Price)
+ (Your Renewal Rate × Renewal Price)
+ (Your Referral Rate × Main Price)
```

### Opportunity Cost
```
Per Client = Ideal LTV - Actual LTV
Monthly = (Per Client × New Clients) + (Per Client × Churned Clients)
Yearly = Monthly × 12
```

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| **Smart Sanitization** | Automatically fixes invalid inputs |
| **Benchmark Comparison** | Industry-standard targets (v4.2) |
| **AI Reports** | Personalized insights via GPT-4 |
| **Email Gating** | Capture leads before showing results |
| **Mobile-First** | Responsive design for all devices |
| **Error Handling** | Graceful fallbacks for API failures |
| **Privacy-Focused** | Secure data handling |

---

## 🛠️ Troubleshooting

### Calculator won't open
- Check browser console for errors
- Verify all components are imported

### API returns error
- Check `.env.local` is configured
- Verify OpenAI API key has credits
- Check Supabase connection

### Report not generating
- Check OpenAI API quota
- Fallback report will still show calculations

### Email not saving
- Verify Supabase table exists
- Check RLS policies are correct
- View Supabase logs for errors

---

## 📞 Support Files

- **Full Setup:** See `CALCULATOR-SETUP.md`
- **Test Cases:** See `CALCULATOR-TESTS.md`
- **Architecture:** See diagram in `CALCULATOR-SETUP.md`

---

## 🎉 You're All Set!

The calculator is fully functional and ready to capture leads and demonstrate value to potential clients.

**Next steps:**
1. Test thoroughly with the test cases above
2. Customize the copy if needed
3. Update your Calendly link
4. Deploy to production
5. Monitor leads in Supabase

---

**Need help?** Check the setup guide or test documentation for detailed information.

