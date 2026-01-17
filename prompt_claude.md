# Cursor Prompt: National Conference Website - FPT 2026

## Project Overview
Create a modern, responsive conference website for the **National Conference on Frontiers of Physics and Technology (FPT 2026)** hosted by Panchayat College, Bargarh. The website should be built with Next.js 14+ (App Router), TypeScript, Tailwind CSS, and Framer Motion for animations. It must be optimized for Vercel deployment.

## Tech Stack Requirements
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready configuration

## Design Philosophy
- Modern, scientific aesthetic with gradient accents (blue, purple, cyan)
- Dark mode support
- Glassmorphism effects for cards
- Smooth scroll animations and parallax effects
- Mobile-first responsive design
- Accessibility compliant (WCAG 2.1 AA)

## Website Structure & Content

### 1. Navigation Bar (Sticky)
- Logo: "FPT 2026" with atom icon
- Menu items: Home | About | Speakers | Registration | Schedule | Contact
- Mobile hamburger menu
- CTA button: "Register Now"

### 2. Hero Section
**Content:**
- Main Title: "National Conference on Frontiers of Physics and Technology"
- Subtitle: "FPT 2026"
- Dates: "31st January - 1st February 2026"
- Venue: "Panchayat College, Bargarh, Odisha"
- Mode: "Hybrid Mode: Physical & Virtual"
- Two CTA buttons: "Register Now" | "Submit Abstract"
- Animated particle background or gradient mesh

### 3. About Section
**Conference Overview:**
"Physics is the bedrock of modern innovation. This National conference aims to bring together academicians, scientists, research scholars and students to discuss cutting-edge developments. From the quantum scale to the cosmos, we will explore how physical sciences act as a catalyst for sustainable technologies."

**Key Highlights (Icon Cards):**
- 🎯 Cutting-edge Research
- 🤝 Networking Opportunities
- 🏆 Awards & Recognition
- 🌐 Hybrid Participation

### 4. About Organizers Section
**Bargarh District:**
Brief intro about "Rice Bowl of Odisha", Dhanu Yatra, cultural heritage

**Panchayat College, Bargarh:**
- Established: 1960
- NAAC Accredited 'B' Grade
- 21 UG and 15 PG courses
- Affiliated to Sambalpur University

**PG Department of Physics:**
- 32 seats each for UG & PG
- Advanced laboratories
- Strong placement record
- Active research publications

### 5. Sub-themes Section (Interactive Cards)
Display as expandable/hoverable cards:
1. **Condensed Matter Physics**: Superconductivity, Magnetism, Crystallography
2. **Nano Technology**: Nanomaterials, Quantum dots, Polymers, Smart Materials, Plasmonic (SPR/LSPR)
3. **Energy Physics**: Solar Cells, Fuel Cells, Catalysis & Energy Storage
4. **High Energy Physics, Astrophysics & Cosmology**: Plasma, QCD Phase Diagram, Black Holes, Dark Matter, Space Science
5. **Quantum Information**: Computing, Cryptography, Teleportation
6. **Interdisciplinary**: Biophysics, Medical Physics

### 6. Invited Speakers Section (Grid Layout)
Display speakers in card format with animation on scroll:

**Speakers List:**
1. Prof. Prashanta Panigrahi - Former Prof., IISER Kolkata
2. Prof. Asima Pradhan - Former Prof., IIT Kanpur
3. Prof. Raghunath Sahoo - IIT Indore
4. Prof. Susanta Kumar Das - V.C (I/C), GM University
5. Prof. Subhankar Bedanta - NISER, Bhubaneswar
6. Prof. Rajib Padhee - Sambalpur University
7. Prof. Sukanta Kumar Tripathy - Berhampur University
8. Prof. Banarji Behera - Sambalpur University
9. Prof. Dibakar Sahoo - Sambalpur University
10. Dr. Kalpataru Pradhan - SINP, Kolkata
11. Dr. Tapan Mishra - NISER Bhubaneswar
12. Dr. Sudhansu Sekhar Biswal - Ravenshaw University
13. Dr. Pramoda Kumar Samal - G.M. University

### 7. Important Dates Timeline (Vertical Timeline)
- Conference Dates: 31st January & 1st February 2026
- Registration Open: 6th January 2026
- Last date of Abstract Submission: 20th January 2026
- Notification of Abstract Acceptance: 22nd January 2026
- Registration Closed: 22nd January 2026
- Spot Registration: 31st January 2026

### 8. Registration Section
**Registration Fees Table:**
| Category | Fee (INR) |
|----------|-----------|
| UG/PG Students | ₹300 |
| Research Scholars | ₹500 |
| Faculty/Industry Delegates | ₹700 |
| Faculty (Online) | ₹500 |

**Registration Link:** https://prourls.info/qYNhMX

**Payment Details:**
- Bank: State Bank of India, BHEDEN
- Account Name: Prabhas Ranjan Bhoi
- Account Number: 32512324766
- IFSC Code: SBIN0003379
- UPI ID: prabhasranjanbhoi@ybl
- UPI Number: 9937494263

Include QR code placeholder

### 9. Abstract Submission Guidelines
**Format Requirements:**
- Single column, A4 size
- Line spacing: 1.5
- Font size: 12
- Font style: Times New Roman
- Maximum 300 words
- Must include: purpose, methods, findings, conclusions
- 2+ references required
- Submit to: pcbphysics@gmail.com

**Presentation Types:**

**Oral Presentation:**
- Duration: 10 minutes + 2 minutes Q&A
- Visual aids encouraged (PowerPoint)
- Technical support: Computer, projector, microphone
- Submit slides in PPT/PDF format

**Poster Presentation:**
- Dimensions: 36" (W) × 48" (L) - Portrait
- Include: Title, authors, affiliations, objectives, methodology, findings, conclusions, acknowledgements, references

**Awards:** Prizes for outstanding oral & poster presentations

### 10. How to Reach Section (Interactive Map)
**By Train:** Bargarh Road Railway Station (3 km)

**By Air:**
- Jharsuguda Airport (100 km)
- Raipur Airport (230 km)
- Bhubaneswar Airport (320 km)

Include embedded Google Maps or interactive map component

### 11. Contact Section
**Organizing Committee Contacts:**

1. **Dr. Lipsa Nanda**
   - Convener, Asst. Prof., Physics
   - Mobile: 9439223142
   - Email: nlipsa@gmail.com

2. **Dr. Binaya Kumar Sahu**
   - Organizing Secretary, Asst. Prof. Physics
   - Mobile: 9444209475
   - Email: binayamsc12@gmail.com

3. **Dr. Kishora Nayak**
   - Organizing Secretary, Asst. Prof. Physics
   - Mobile: 7978960365
   - Email: k.nayak1234@gmail.com

Contact form with fields: Name, Email, Phone, Category, Message

### 12. Footer
- Quick links to all sections
- Social media icons (if available)
- Address: Panchayat College, Bargarh, Odisha – 768028
- Copyright: © 2026 FPT Conference. All rights reserved.
- Powered by: Department of Physics, Panchayat College

## Technical Requirements

### Performance Optimizations
- Image optimization with Next.js Image component
- Lazy loading for images and heavy components
- Code splitting and dynamic imports
- SEO optimization with metadata API
- Open Graph tags for social sharing

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Animations
- Fade-in animations on scroll (Framer Motion)
- Hover effects on cards and buttons
- Smooth scroll behavior
- Page transition animations
- Parallax effects in hero section

### Accessibility
- Semantic HTML5
- ARIA labels
- Keyboard navigation support
- Focus indicators
- Alt text for all images
- Color contrast compliance

## File Structure
```
/src
  /app
    /page.tsx (Home)
    /layout.tsx
    /globals.css
  /components
    /Navbar.tsx
    /Hero.tsx
    /About.tsx
    /Speakers.tsx
    /Timeline.tsx
    /Registration.tsx
    /Contact.tsx
    /Footer.tsx
  /lib
    /data.ts (Conference data)
  /public
    /images
```

## Additional Features to Include
1. **Countdown Timer** to conference start date
2. **FAQ Section** (expandable accordions)
3. **Gallery Section** (if images available, use placeholders)
4. **Newsletter Signup** (optional)
5. **Download Brochure** button (PDF)
6. **Share Conference** social buttons

## Vercel Configuration
Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

## Color Palette Suggestions
- Primary: #3B82F6 (Blue)
- Secondary: #8B5CF6 (Purple)
- Accent: #06B6D4 (Cyan)
- Background: #0F172A (Dark) / #FFFFFF (Light)
- Text: #F8FAFC (Light text) / #1E293B (Dark text)

## Deployment Instructions
1. Connect GitHub repository to Vercel
2. Configure environment variables (if any)
3. Set build command: `npm run build`
4. Set output directory: `.next`
5. Deploy

## Success Criteria
- ✅ Lighthouse score > 90 (Performance, Accessibility, SEO)
- ✅ Mobile responsive on all devices
- ✅ Fast load time (< 3 seconds)
- ✅ All links and CTAs functional
- ✅ Forms validated and working
- ✅ Cross-browser compatible
- ✅ Smooth animations without jank

---

**Start building this professional, modern conference website that showcases the FPT 2026 conference in the best possible light. Make it visually stunning, highly functional, and easy to navigate!**