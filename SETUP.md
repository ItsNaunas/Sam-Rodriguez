# Setup Guide

Complete guide to getting Sam Rodriguez's portfolio site up and running.

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Images**
   
   Place the following images in `public/images/`:
   
   ### Required Images:
   
   - **sam-portrait.jpg** (Hero section)
     - Dimensions: 800×1000px (4:5 aspect)
     - Warm lighting portrait
     - Keep under 500KB
   
   - **sam-bw-portrait.jpg** (About section)
     - Dimensions: 800×1000px (4:5 aspect)
     - Black and white portrait
     - Keep under 500KB
   
   - **Project Images** (6 total):
     - project-focus.jpg
     - project-remote.jpg
     - project-momentum.jpg
     - project-presence.jpg
     - project-travel.jpg
     - project-systems.jpg
     - Dimensions: 1600×1000px (16:10 aspect)
     - Keep under 500KB each

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   Visit [http://localhost:3000](http://localhost:3000)

## Customization

### Update Content

Edit `lib/data.ts` to customize:

```typescript
// Site settings
export const siteSettings = {
  siteName: 'Your Name',
  bookingLink: 'https://calendly.com/yourlink',
  social: {
    instagram: 'https://instagram.com/yourusername',
    // ... update all social links
  }
}

// Update all content sections as needed
```

### Update Design Tokens

Edit `tailwind.config.ts` for colors:

```typescript
colors: {
  bg: {
    900: '#0E0E0E',  // Main background
    800: '#151515',  // Section contrast
  },
  gold: {
    500: '#E1C85C',  // Primary accent
    // ...
  }
}
```

### Add Backend Services

#### Newsletter Integration

1. Choose a service (Mailchimp, ConvertKit, Beehiiv)
2. Get your API key
3. Update `app/components/NewsletterCTA.tsx`:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  setStatus('loading')

  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    
    if (response.ok) {
      setStatus('success')
      setEmail('')
    } else {
      setStatus('error')
    }
  } catch (error) {
    setStatus('error')
  }
}
```

4. Create API route at `app/api/newsletter/route.ts`:

```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email } = await request.json()
  
  // Your newsletter service integration here
  // Example: Mailchimp, ConvertKit, etc.
  
  return NextResponse.json({ success: true })
}
```

#### Contact Form

Similar approach for contact forms - create an API route and connect to your email service (SendGrid, Resend, etc.)

### SEO Configuration

1. Update `app/sitemap.ts` with your domain
2. Update `public/robots.txt` with your domain
3. Add Open Graph image to `public/og-image.jpg` (1200×630px)
4. Update metadata in `app/layout.tsx`

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically
4. Connect custom domain

### Netlify

1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Platforms

Compatible with any platform that supports Next.js:
- AWS Amplify
- Cloudflare Pages
- Railway
- Render

## Performance Tips

1. **Optimize Images**: Use WebP format when possible
2. **Lazy Load**: Non-critical components already lazy load
3. **Analytics**: Add Google Analytics or Plausible in `app/layout.tsx`
4. **Monitoring**: Set up Sentry or similar for error tracking

## Troubleshooting

### Images not showing
- Ensure images are in `public/images/` directory
- Check file names match exactly (case-sensitive)
- Verify Next.js is restarted after adding images

### Fonts not loading
- Google Fonts load automatically via `next/font`
- Check internet connection during development
- Fonts are self-hosted in production

### Styling issues
- Clear `.next` cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Tailwind config is properly imported

## Support

For questions or issues:
- Check README.md for detailed documentation
- Review component files for inline comments
- Contact: hello@samrodriguez.com

## License

Private - All rights reserved

