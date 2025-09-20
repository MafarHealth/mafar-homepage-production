#!/bin/bash

echo "🚀 MAFAR Homepage Deployment Script"
echo "===================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed. Please install Node.js first.${NC}"
    exit 1
fi

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo -e "${YELLOW}⚠️  .env.local not found. Creating from template...${NC}"
    cat > .env.local << EOL
# Google Integration
GOOGLE_CLIENT_EMAIL=mafarhealthtech@gmail.com
GOOGLE_PRIVATE_KEY=your-google-private-key-here
GOOGLE_SHEET_ID=your-google-sheet-id-here

# Web3Forms Integration
WEB3FORMS_KEY=get-your-key-from-web3forms.com

# WhatsApp Integration
NEXT_PUBLIC_WHATSAPP_NUMBER=60123456789
EOL
    echo -e "${GREEN}✅ .env.local created. Please update with your actual keys.${NC}"
    echo -e "${YELLOW}   Visit https://web3forms.com to get your access key${NC}"
    echo ""
fi

# Build the project
echo -e "${YELLOW}🔨 Building the project...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build successful!${NC}"
echo ""

# Ask user what they want to do next
echo "What would you like to do next?"
echo "1) Run locally (npm run dev)"
echo "2) Deploy to Vercel"
echo "3) Exit"
echo ""
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo -e "${YELLOW}🌐 Starting development server...${NC}"
        npm run dev
        ;;
    2)
        echo -e "${YELLOW}🚀 Deploying to Vercel...${NC}"
        if ! command -v vercel &> /dev/null; then
            echo -e "${YELLOW}Installing Vercel CLI...${NC}"
            npm i -g vercel
        fi
        vercel --prod
        ;;
    3)
        echo -e "${GREEN}✅ Setup complete! Run 'npm run dev' to start.${NC}"
        exit 0
        ;;
    *)
        echo -e "${RED}Invalid choice${NC}"
        exit 1
        ;;
esac
