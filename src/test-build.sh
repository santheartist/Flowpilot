#!/bin/bash

echo "🔍 Testing FlowPilot build locally..."
echo ""

# Check if required files exist
echo "✓ Checking required files..."
files=("index.html" "src/main.tsx" "App.tsx" "package.json" "vite.config.js")
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✓ $file exists"
  else
    echo "  ✗ $file MISSING!"
    exit 1
  fi
done
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo ""

# Run build
echo "🔨 Building project..."
npm run build
echo ""

# Check if dist folder was created
if [ -d "dist" ]; then
  echo "✅ SUCCESS! dist folder created"
  echo ""
  echo "📁 Contents of dist folder:"
  ls -lh dist/
  echo ""
  echo "🎉 Build successful! You can now deploy to Vercel."
else
  echo "❌ FAILED! dist folder not created"
  echo "Check the build errors above"
  exit 1
fi
