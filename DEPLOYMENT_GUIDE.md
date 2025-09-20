# MAFAR Homepage - Complete Deployment Guide

## 🚀 Automated Deployment to Vercel + mafar.com.my

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `mafar-homepage-production`
3. Description: `MAFAR Healthcare Homepage - Production Ready`
4. Set as Public
5. Do NOT initialize with README, .gitignore, or license

### Step 2: Push Local Repository
```bash
cd /Users/sofiancheisa/Desktop/mafar-growthos/mafar-homepage-production
git remote set-url origin https://github.com/YOUR_USERNAME/mafar-homepage-production.git
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to https://vercel.com/new
2. Import from GitHub: `mafar-homepage-production`
3. Framework: Next.js (auto-detected)
4. Root Directory: `./` (default)
5. Build Settings: 
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Step 4: Environment Variables in Vercel
Add these in Vercel Dashboard > Settings > Environment Variables:

```
GOOGLE_CLIENT_EMAIL=mafarhealthtech@gmail.com
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYOUR_GOOGLE_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----
GOOGLE_SHEET_ID=your-google-sheet-id-here
WEB3FORMS_KEY=YOUR_WEB3FORMS_ACCESS_KEY_HERE
NEXT_PUBLIC_WHATSAPP_NUMBER=60123456789
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=mafarhealthtech@gmail.com
SMTP_PASS=your-gmail-app-password-here
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-vercel-analytics-id
```

### Step 5: Configure Custom Domain mafar.com.my
1. In Vercel Dashboard > Settings > Domains
2. Add Custom Domain: `mafar.com.my`
3. Add Custom Domain: `www.mafar.com.my`
4. Vercel will provide DNS settings

### Step 6: DNS Configuration
Update your domain DNS settings:

**For mafar.com.my:**
```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME  
Name: www
Value: mafar-homepage-production-YOUR_VERCEL_ID.vercel.app
```

### Step 7: SSL Certificate
- Vercel automatically handles SSL certificates
- Your site will be available at https://mafar.com.my

## 🔧 Project Structure
```
mafar-homepage-production/
├── app/
│   ├── api/submit-lead/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── package.json
├── next.config.js
├── vercel.json
└── .env.example
```

## ✅ Post-Deployment Checklist
- [ ] Repository created on GitHub
- [ ] Code pushed to main branch
- [ ] Vercel project deployed successfully
- [ ] Environment variables configured
- [ ] Custom domain added
- [ ] DNS settings updated
- [ ] SSL certificate active
- [ ] Site accessible at https://mafar.com.my

## 🚨 Important Notes
1. Replace placeholder values in environment variables
2. Ensure Google Sheets API is enabled
3. Test form submissions after deployment
4. Monitor Vercel deployment logs for any issues