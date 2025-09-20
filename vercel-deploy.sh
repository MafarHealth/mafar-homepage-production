#!/bin/bash

echo "🚀 MAFAR VERCEL DEPLOYMENT"
echo "=========================="
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "📦 Installing Vercel CLI..."
    npm i -g vercel
fi

echo "🔑 Setting up environment variables..."
echo ""
echo "Please ensure you have:"
echo "1. Web3Forms Access Key from https://web3forms.com"
echo "2. Email set to: mafarhealthtech@gmail.com"
echo ""

read -p "Do you have your Web3Forms key ready? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]
then
    read -p "Enter your Web3Forms Access Key: " WEB3_KEY
    echo "WEB3FORMS_KEY=$WEB3_KEY" >> .env.local
    echo "✅ Key saved!"
fi

echo ""
echo "🚀 Deploying to Vercel..."
echo ""

vercel --prod --yes \
  --name mafar-homepage \
  --env WEB3FORMS_KEY="$WEB3_KEY" \
  --build-env WEB3FORMS_KEY="$WEB3_KEY"

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Your site is now LIVE!"
echo "Check your Vercel dashboard for the URL"
