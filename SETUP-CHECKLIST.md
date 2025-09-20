# MAFAR HOMEPAGE SETUP CHECKLIST ✅

## ⚡ QUICK DEPLOYMENT (10 MINUTES)

### Step 1: Install Dependencies (2 mins)
```bash
cd /Users/sofiancheisa/Desktop/mafar-growthos/MAFAR-HOMEPAGE-LEADS
npm install
```

### Step 2: Setup Google Sheets Integration (5 mins)

#### Option A: Web3Forms (FASTEST - Recommended)
1. Go to https://web3forms.com
2. Enter email: mafarhealthtech@gmail.com
3. Get your Access Key
4. Update `.env.local` with: `WEB3FORMS_KEY=your-key-here`
5. Done! Forms will auto-send to email & can connect to Google Sheets

#### Option B: Direct Google Sheets API
1. Go to Google Cloud Console
2. Create new project "MAFAR-Leads"
3. Enable Google Sheets API
4. Create Service Account
5. Download credentials JSON
6. Share your Google Sheet with service account email
7. Update `.env.local` with credentials

### Step 3: Run Development (1 min)
```bash
npm run dev
```
Visit: http://localhost:3000

### Step 4: Deploy to Vercel (2 mins)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Follow prompts
```

---

## 📊 GOOGLE SHEETS SETUP

### Create Master Sheet: "MAFAR Network Leads"

#### Sheet 1: Clinic Owners
| Timestamp | Name | Phone | Email | Clinic Name | Location | Status | Notes |
|-----------|------|-------|-------|-------------|----------|--------|-------|

#### Sheet 2: MCare+ Members  
| Timestamp | Name | Phone | Email | Location | Package | Payment Status | Member ID |
|-----------|------|-------|-------|----------|---------|----------------|-----------|

#### Sheet 3: Event RSVP
| Timestamp | Name | Phone | Email | Event | Cluster | Attendance | Follow-up |
|-----------|------|-------|-------|-------|---------|------------|-----------|

### Automation Setup:
1. Tools → Script editor
2. Add webhook receiver script
3. Set triggers for email notifications
4. Connect to WhatsApp Business API

---

## 🔗 INTEGRATION CHECKLIST

### ✅ Lead Capture System
- [x] Form submission handler
- [x] Email notification (mafarhealthtech@gmail.com)
- [ ] Google Sheets auto-update
- [ ] WhatsApp notification
- [ ] Auto-responder email

### ✅ Analytics & Tracking
- [ ] Google Analytics 4
- [ ] Facebook Pixel
- [ ] Google Tag Manager
- [ ] Hotjar/Clarity heatmaps
- [ ] Conversion tracking

### ✅ Payment Integration (MCare+)
- [ ] Billplz integration
- [ ] Stripe backup
- [ ] FPX gateway
- [ ] Auto-receipt generation
- [ ] Member portal access

### ✅ Communication Channels
- [ ] WhatsApp Business API
- [ ] Email marketing (Mailchimp/SendGrid)
- [ ] SMS gateway (Twilio)
- [ ] Push notifications (OneSignal)

### ✅ Content Management
- [ ] Blog CMS (Contentful/Strapi)
- [ ] Event management system
- [ ] Cluster directory database
- [ ] Document storage (AWS S3)

---

## 🚀 PRODUCTION CHECKLIST

### Pre-Launch
- [ ] Domain setup (mafar.com.my)
- [ ] SSL certificate
- [ ] CDN configuration
- [ ] Backup system
- [ ] Error monitoring (Sentry)

### Testing
- [ ] Mobile responsive check
- [ ] Form submission test
- [ ] Payment flow test
- [ ] Cross-browser testing
- [ ] Load testing

### SEO & Marketing
- [ ] Meta tags optimization
- [ ] Schema markup
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Social media cards

### Legal & Compliance
- [ ] Privacy policy
- [ ] Terms of service
- [ ] PDPA compliance
- [ ] Cookie consent
- [ ] Medical disclaimer

---

## 📞 SUPPORT CONTACTS

- **Tech Support**: mafarhealthtech@gmail.com
- **WhatsApp**: +60 12-345-6789
- **Emergency**: Contact admin immediately

---

## 🎯 NEXT STEPS

1. **Immediate (Today)**
   - Run `npm install`
   - Test form submissions
   - Deploy to Vercel

2. **Tomorrow**
   - Setup Google Analytics
   - Configure email automation
   - Test payment gateway

3. **This Week**
   - Launch to 5 pilot clinics
   - Gather feedback
   - Optimize conversion

4. **This Month**
   - Full launch to 35 clusters
   - Marketing campaign
   - Performance optimization

---

## 💡 TIPS

1. Use Vercel Analytics for real-time insights
2. Set up Slack notifications for new leads
3. Create WhatsApp broadcast lists for clusters
4. Use Google Data Studio for dashboards
5. Implement A/B testing for CTAs

---

**READY TO LAUNCH! 🚀**

Any issues? WhatsApp the tech team immediately.
