#!/bin/bash

# MAFAR Homepage - Automated Vercel Deployment Script
# Run this script after creating GitHub repository

echo "🚀 Starting MAFAR Homepage Deployment to Vercel..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if git remote is set
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ Error: Git remote 'origin' not set. Please create GitHub repository first."
    echo "1. Go to https://github.com/new"
    echo "2. Create repository: mafar-homepage-production"
    echo "3. Run: git remote add origin https://github.com/YOUR_USERNAME/mafar-homepage-production.git"
    exit 1
fi

echo "📝 Committing latest changes..."
git add .
git commit -m "🚀 Production deployment ready - MAFAR Homepage" || echo "No changes to commit"

echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Code successfully pushed to GitHub!"
    echo ""
    echo "🔗 Next Steps:"
    echo "1. Go to https://vercel.com/new"
    echo "2. Import your GitHub repository: mafar-homepage-production"
    echo "3. Framework will be auto-detected as Next.js"
    echo "4. Configure environment variables (see DEPLOYMENT_GUIDE.md)"
    echo "5. Deploy!"
    echo ""
    echo "📋 Don't forget to:"
    echo "- Set up environment variables in Vercel dashboard"
    echo "- Configure custom domain mafar.com.my"
    echo "- Update DNS settings"
    echo ""
    echo "📖 Full guide available in: DEPLOYMENT_GUIDE.md"
else
    echo "❌ Error pushing to GitHub. Please check your credentials and try again."
    exit 1
fi