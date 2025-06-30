#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public

# Download placeholder images
curl -o public/hero-shoe.png https://raw.githubusercontent.com/your-username/your-repo/main/public/hero-shoe.png || echo "Failed to download hero-shoe.png"
curl -o public/product-1.png https://raw.githubusercontent.com/your-username/your-repo/main/public/product-1.png || echo "Failed to download product-1.png"
curl -o public/product-2.png https://raw.githubusercontent.com/your-username/your-repo/main/public/product-2.png || echo "Failed to download product-2.png"
curl -o public/product-3.png https://raw.githubusercontent.com/your-username/your-repo/main/public/product-3.png || echo "Failed to download product-3.png"
curl -o public/sustainability.png https://raw.githubusercontent.com/your-username/your-repo/main/public/sustainability.png || echo "Failed to download sustainability.png" 