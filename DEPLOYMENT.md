# Deployment Guide - FPT 2026 Conference Website

## 🚀 Quick Start

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📦 Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FPT 2026 Conference Website"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configuration**
   - Framework Preset: Next.js
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

### Option 3: Deploy via Git Integration

1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on every push to main branch
3. Preview deployments for pull requests

## ✅ Pre-Deployment Checklist

- [ ] Logo file is in `public/images/Panchyat_Logo.jpg`
- [ ] All environment variables set (if any)
- [ ] Registration link is correct in `src/lib/data.ts`
- [ ] Contact emails are correct
- [ ] Payment details are accurate
- [ ] Google Maps embed URL is correct (update in `src/lib/data.ts`)
- [ ] Test all links and forms
- [ ] Verify responsive design on mobile/tablet/desktop
- [ ] Check dark mode functionality
- [ ] Test countdown timer
- [ ] Verify all animations work smoothly

## 🔧 Configuration Files

### vercel.json
Already configured with:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

### next.config.js
Optimized for production with:
- Image optimization
- React strict mode
- SWC minification

## 🌐 Environment Variables

Currently, no environment variables are required. If you need to add any:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables for:
   - Production
   - Preview
   - Development

## 📝 Post-Deployment

1. **Test the live site**
   - Check all pages load correctly
   - Test registration link
   - Verify contact form (if backend is set up)
   - Check mobile responsiveness

2. **Update DNS (if using custom domain)**
   - Add your domain in Vercel Dashboard
   - Update DNS records as instructed

3. **Monitor Performance**
   - Check Vercel Analytics
   - Monitor Lighthouse scores
   - Optimize images if needed

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Verify all dependencies are installed
- Check for TypeScript errors: `npm run build`

### Images Not Loading
- Ensure logo is in `public/images/` directory
- Check file name matches exactly: `Panchyat_Logo.jpg`
- Verify Next.js Image component paths
- **Vercel is case-sensitive**: File paths must match exactly (e.g. `1DSC08278.JPG` not `1dsc08278.jpg`). If you develop on macOS, test with `npm run build` locally to catch case mismatches.
- **Commit all images**: Hero, Award, and Press Release images in `public/images/` must be committed to Git; uncommitted or gitignored files will not be deployed.
- **Hero carousel**: If a hero image fails to load (404), the carousel now auto-advances to the next photo after 0.8s so the slide does not get stuck.

### Styling Issues
- Clear `.next` cache: `rm -rf .next`
- Rebuild: `npm run build`

### Map Not Showing
- Update `mapEmbedUrl` in `src/lib/data.ts` with actual Google Maps embed URL
- Get embed URL from Google Maps → Share → Embed a map

## 📊 Performance Optimization

The website is already optimized with:
- Next.js Image optimization
- Code splitting
- Lazy loading
- CSS optimization
- Font optimization

## 🔒 Security

- All external links use `rel="noopener noreferrer"`
- Forms include validation
- No sensitive data in client-side code

## 📞 Support

For deployment issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

---

**Ready to deploy!** 🎉

