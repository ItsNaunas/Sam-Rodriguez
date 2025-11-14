# Quick Start Guide

Get Sam's portfolio site running in under 5 minutes.

## Step 1: Install Dependencies (1 minute)

```bash
npm install
```

## Step 2: Add Placeholder Images (2 minutes)

**Option A: Use Unsplash placeholders**

Create these files manually or the site will show broken images:
- `public/images/sam-portrait.jpg`
- `public/images/sam-bw-portrait.jpg`
- `public/images/project-focus.jpg`
- `public/images/project-remote.jpg`
- `public/images/project-momentum.jpg`
- `public/images/project-presence.jpg`
- `public/images/project-travel.jpg`
- `public/images/project-systems.jpg`

**Option B: Use temporary URLs** (quicker for testing)

Edit `lib/data.ts` and change image paths to external URLs temporarily:
```typescript
// In heroContent
portraitAlt: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000'

// In aboutContent
photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000'

// In projects array
image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=1000'
```

## Step 3: Update Key Content (1 minute)

Edit `lib/data.ts`:

```typescript
export const siteSettings: SiteSettings = {
  siteName: 'Your Name',
  bookingLink: 'https://calendly.com/yourlink',
  social: {
    instagram: 'https://instagram.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'your@email.com',
  },
}
```

## Step 4: Run Development Server (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Step 5: Preview & Test (30 seconds)

✅ Check all sections load
✅ Test navigation links
✅ Verify mobile responsiveness (toggle device toolbar)
✅ Test form submission (newsletter)

## That's It! 🎉

Your site is now running locally.

## Next Actions

### Before You Deploy

1. **Replace placeholder images** with real photos
2. **Customize all content** in `lib/data.ts`
3. **Update social links** and booking URL
4. **Test on mobile** device
5. **Check all links** work

### Deploy to Vercel (Fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow prompts → Site is live in 2 minutes!

### Or Deploy to Netlify

1. Push code to GitHub
2. Go to netlify.com
3. "New site from Git"
4. Select your repo
5. Click "Deploy"

## Common Issues

### Images Not Showing
- Ensure files are in `public/images/` directory
- File names must match exactly (case-sensitive)
- Restart dev server after adding images

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run dev
```

### Styling Not Working
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

## Detailed Guides

- **Full setup**: See `SETUP.md`
- **Content writing**: See `CONTENT-GUIDE.md`
- **Image specs**: See `public/images/IMAGES-GUIDE.md`
- **Technical details**: See `PROJECT-SUMMARY.md`

## Get Help

Questions? Check the detailed guides above or review:
- Component code in `app/components/`
- Data structure in `lib/data.ts`
- Styling in `app/globals.css`

---

**Pro Tip**: Leave the terminal running with `npm run dev` while you edit files. Changes appear instantly in the browser!

