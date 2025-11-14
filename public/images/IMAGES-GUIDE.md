# Image Specifications

## Required Images

### Hero Section
**Filename**: `sam-portrait.jpg`
- **Dimensions**: 800×1000px (4:5 aspect ratio)
- **Style**: Warm lighting portrait, similar to Instagram aesthetic
- **Format**: JPG or WebP
- **Size**: Under 500KB
- **Notes**: Should match the warm, golden hour aesthetic from Instagram

### About Section
**Filename**: `sam-bw-portrait.jpg`
- **Dimensions**: 800×1000px (4:5 aspect ratio)
- **Style**: Black and white portrait, professional
- **Format**: JPG or WebP
- **Size**: Under 500KB
- **Notes**: More formal, can be same photo as hero but in B&W

### Project Images (6 total)

Each project image should be:
- **Dimensions**: 1600×1000px (16:10 aspect ratio)
- **Format**: JPG or WebP
- **Size**: Under 500KB each

Required filenames:
1. `project-focus.jpg` - The Focus System workshop
2. `project-remote.jpg` - Remote Leadership Guide
3. `project-momentum.jpg` - Momentum Method
4. `project-presence.jpg` - Presence Practice reel
5. `project-travel.jpg` - Travel journal/60 Days 12 Cities
6. `project-systems.jpg` - Systems Over Goals reel

**Style Guidelines**:
- Warm tones to match the gold aesthetic
- Can be screenshots, mockups, or lifestyle photography
- Should feel cohesive as a set
- Mix of text overlays and pure imagery

## Optional: Testimonial Avatars

If you want to add avatar images for testimonials:
- **Dimensions**: 96×96px (square)
- **Format**: JPG or WebP
- **Size**: Under 50KB each
- Update filenames in `lib/data.ts` testimonials section

## Image Optimization Tips

1. **Use compression tools**:
   - TinyPNG.com
   - Squoosh.app
   - ImageOptim (Mac)

2. **WebP format**: 
   - Smaller file sizes, modern browsers
   - Next.js automatically serves WebP when supported

3. **Responsive images**:
   - Next.js Image component handles this automatically
   - Serves appropriate size based on device

4. **Alt text**:
   - Update in `lib/data.ts` for better accessibility
   - Describe the image content concisely

## Placeholder Images

For testing without real images, use:
- **Unsplash**: unsplash.com (high-quality free photos)
- **Placeholder.com**: placeholder.com (simple colored blocks)
- **Lorem Picsum**: picsum.photos (random photos)

Example placeholder:
```
https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000
```

## Adding Images

1. Save all images to this directory (`public/images/`)
2. Restart the Next.js development server
3. Images are now accessible at `/images/filename.jpg`

## Current Image Usage

- Hero portrait: Used in Hero component
- About portrait: Used in AboutBlock component
- Project images: Used in SelectedWork component (6 items)

Check `app/components/` files for specific implementation.

