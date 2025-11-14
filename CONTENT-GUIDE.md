# Content Writing Guide

Guidelines for updating content to match Sam's voice and brand.

## Brand Voice

### Core Principles
- **Calm and clear**: No hype, no fluff
- **Practical**: Actionable over aspirational
- **Human**: Honest and relatable, not corporate
- **Signal over noise**: Fewer words, more meaning

### Tone Characteristics
✅ **Do use:**
- Short, punchy sentences
- Active voice
- Concrete examples
- "You" language
- Direct statements
- Present tense

❌ **Avoid:**
- Corporate jargon ("synergy", "leverage", "paradigm")
- Hype language ("revolutionary", "game-changing", "incredible")
- Passive voice
- Vague promises
- Overly formal tone
- Buzzwords

## Content Structure

### Headlines
- Statement-based, not questions
- 5-8 words maximum
- No punctuation needed
- Bold declarations

**Good Examples:**
- "Helping leaders find clarity through discomfort"
- "Focus is built, not found"
- "Momentum beats motivation"

**Bad Examples:**
- "Are You Ready to Transform Your Leadership?"
- "Discover the Revolutionary System for Success"
- "Unlock Your Potential Today!"

### Body Copy
- One idea per paragraph
- 2-3 sentences maximum per paragraph
- Break up text frequently
- Use short words

**Good Example:**
```
Your mood will betray you. Your system won't. Build 
frameworks that work on your worst days, not just your 
best. That's how professionals separate from amateurs.
```

**Bad Example:**
```
In today's fast-paced business environment, it's essential 
to develop comprehensive systems and frameworks that enable 
you to maintain consistent performance regardless of your 
emotional state or motivation levels.
```

## Content Sections

### Hero Section
- **Headline**: Main value proposition (8-10 words)
- **Subhead**: How you deliver that value (8-12 words)
- Keep it human, avoid marketing speak

### Philosophy Items
Each lesson should:
1. **Title**: The principle (3-5 words, statement form)
2. **Summary**: Why it matters + how to apply (40-60 words)
3. Format: Problem → Solution → Action

### Work/Projects
- **Title**: What it is (2-4 words)
- **Summary**: What it does + who it's for (20-30 words)
- Lead with outcome, not process

### Testimonials
Real language from real people:
- No corporate speak
- Specific outcomes mentioned
- Personal transformation highlighted
- 40-80 words each

### About Section
- First person "I" perspective
- Share experience, not credentials
- Connect past to present offering
- End with what clients get

## Writing Tips

### Before/After Examples

**Before:**
"I leverage my extensive experience in organizational 
development to help clients optimize their productivity 
systems and achieve breakthrough results."

**After:**
"I've spent a decade building teams and systems for leaders 
who want meaningful work without burnout."

---

**Before:**
"Our comprehensive methodology utilizes proven frameworks 
to facilitate sustainable behavioral change and measurable 
performance improvements."

**After:**
"We build systems that work. Quick audit, clear plan, 
weekly check-ins. No fluff."

---

**Before:**
"Embark on a transformative journey towards unprecedented 
levels of focus and productivity."

**After:**
"Learn to protect your attention like your future depends 
on it. Because it does."

## Instagram-Inspired Content

Sam's Instagram style works great for web content:

### Text Overlays
- Gold serif headlines on dark backgrounds
- Single powerful statement
- 5-7 words maximum

### Captions
- Start with the hook
- Share the lesson
- End with a question or action
- 50-100 words total

### Reels Concepts
Each reel = one lesson:
1. Problem (first 3 seconds)
2. Insight (middle)
3. Action (last 3 seconds)

## Updating Content

### To Change Philosophy Items
Edit `lib/data.ts`:

```typescript
{
  id: 'your-slug',
  title: 'The principle in 3-5 words',
  summary: 'Why it matters and how to apply it. Keep practical. Around 50 words.',
  reelUrl: 'optional-link-to-instagram-reel',
}
```

### To Update Projects
Edit `lib/data.ts`:

```typescript
{
  id: 'project-slug',
  title: 'Project Name',
  typeTag: 'Workshop' | 'Resource' | 'System' | 'Reel' | 'Journal',
  summary: 'What it does and who it helps. 25 words.',
  image: '/images/project-name.jpg',
  link: 'optional-external-link',
}
```

### To Modify Hero
Edit `lib/data.ts`:

```typescript
export const heroContent = {
  title: 'Main value prop - the promise',
  subtitle: 'How you deliver - the approach',
  availability: 'Current status',
  // ... CTAs
}
```

## SEO-Friendly Content

While maintaining voice, include:
- Target keywords naturally
- Location if relevant (remote, specific city)
- Service categories (coaching, workshops)
- Outcome-focused phrases

**Good SEO + Brand Voice:**
"Leadership coaching for remote teams. Build systems, not stress."

**Bad (Keyword Stuffing):**
"Leadership coaching leadership development remote leadership teams coaching services."

## Content Checklist

Before publishing any new content:

- [ ] Is it clear what I'm offering?
- [ ] Is it clear who it's for?
- [ ] Have I removed all jargon?
- [ ] Could I say this out loud naturally?
- [ ] Is every word necessary?
- [ ] Does it sound like me?
- [ ] Would I want to read this?

## Need Help?

Stuck on wording? Try these approaches:

1. **Say it out loud first**: How would you explain this to a friend?
2. **Cut it in half**: Remove 50% of words, keep the meaning
3. **Read Sam's Instagram**: Study the voice, mimic the structure
4. **Test with "so what?"**: If the response isn't clear, rewrite

Remember: When in doubt, shorter and simpler always wins.

