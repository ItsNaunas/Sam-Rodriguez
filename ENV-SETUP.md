# Environment Variables Setup

## Copy This Into Your `.env.local` File

Create a file named `.env.local` in the root of your project and paste the following content:

```bash
# ==================================================
# OPPORTUNITY COST CALCULATOR - ENVIRONMENT VARIABLES
# ==================================================

# -------------------------------------
# SUPABASE CONFIGURATION
# -------------------------------------
# Get these from: https://supabase.com → Your Project → Settings → API

SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-anon-key-here

# -------------------------------------
# OPENAI CONFIGURATION
# -------------------------------------
# Get your API key from: https://platform.openai.com/api-keys

OPENAI_API_KEY=sk-your-openai-api-key-here

# -------------------------------------
# CALENDLY URL (PUBLIC)
# -------------------------------------
# Your Calendly scheduling link for strategy calls

NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/yourname/strategy-call
```

## Where to Get Each Key

### 1. Supabase Keys (2 minutes)

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create an account
3. Create a new project (if you haven't already)
4. Go to **Settings** → **API**
5. Copy these values:
   - **Project URL** → paste into `SUPABASE_URL`
   - **anon public** key → paste into `SUPABASE_ANON_KEY`

### 2. OpenAI API Key (2 minutes)

1. Go to [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click **"Create new secret key"**
4. Name it (e.g., "Sam Rodriguez Calculator")
5. Copy the key (starts with `sk-`)
6. Paste into `OPENAI_API_KEY`

**Note:** Make sure you have credits/billing set up in your OpenAI account.

### 3. Calendly Link (1 minute)

1. Go to [https://calendly.com](https://calendly.com)
2. Sign in to your account
3. Find your event type (e.g., "Strategy Call")
4. Copy the scheduling link
5. Paste into `NEXT_PUBLIC_CALENDLY_URL`

Example: `https://calendly.com/sam-rodriguez/strategy-call`

## Quick Copy Template

**For fastest setup, copy this exact format:**

```bash
SUPABASE_URL=
SUPABASE_ANON_KEY=
OPENAI_API_KEY=
NEXT_PUBLIC_CALENDLY_URL=
```

Then fill in each value after the `=` sign.

## Verification

After creating your `.env.local` file:

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Check the console - you should NOT see any "Missing environment variables" errors

3. Try the calculator to verify everything works

## Important Notes

- ✅ `.env.local` is already in `.gitignore` - it won't be committed
- ✅ Restart your dev server after creating/updating `.env.local`
- ✅ `NEXT_PUBLIC_*` variables are visible in the browser (safe for Calendly URL)
- ✅ All other variables are server-side only (secure)
- ✅ For production deployment, add these same variables to your hosting platform (Vercel, Netlify, etc.)

## Troubleshooting

### "Missing Supabase environment variables"
- Make sure your `.env.local` file is in the **root** directory
- Check that variable names match exactly (no typos)
- Restart your dev server

### "OpenAI API error"
- Verify your API key is valid (test at platform.openai.com)
- Check you have billing/credits set up
- Make sure the key starts with `sk-`

### Calculator opens but crashes
- Check browser console for specific errors
- Verify all four environment variables are set
- Make sure Supabase table is created (see CALCULATOR-SETUP.md)

## Security Checklist

- [ ] Never commit `.env.local` to Git
- [ ] Don't share your API keys publicly
- [ ] Rotate keys if accidentally exposed
- [ ] Use separate API keys for development vs production
- [ ] Monitor OpenAI usage to control costs

