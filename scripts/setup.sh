#!/bin/bash

# Project Management App - Initial Setup Script
# Run this script after cloning the repository

echo "=== Project Management App Setup ==="
echo ""

# Check Node.js version
echo "Checking Node.js version..."
node_version=$(node -v 2>/dev/null)
if [ $? -ne 0 ]; then
    echo "ERROR: Node.js is not installed. Please install Node.js 18+."
    exit 1
fi
echo "Node.js version: $node_version"

# Check npm version
echo "Checking npm version..."
npm_version=$(npm -v 2>/dev/null)
echo "npm version: $npm_version"

# Install dependencies
echo ""
echo "Installing root dependencies..."
npm install

echo ""
echo "Installing backend dependencies..."
cd backend
npm install
cd ..

echo ""
echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Create .env files from examples
echo ""
echo "Setting up environment files..."

if [ ! -f backend/.env ]; then
    cp backend/.env.example backend/.env
    echo "Created backend/.env from template"
else
    echo "backend/.env already exists, skipping"
fi

if [ ! -f frontend/.env ]; then
    cp frontend/.env.example frontend/.env
    echo "Created frontend/.env from template"
else
    echo "frontend/.env already exists, skipping"
fi

echo ""
echo "=== Setup Complete ==="
echo ""
echo "Next steps:"
echo "1. Edit backend/.env with your database credentials"
echo "2. Edit frontend/.env with your API URL"
echo "3. Start MongoDB: mongod"
echo "4. Run: npm run dev"
echo ""
echo "Backend will start on: http://localhost:5000"
echo "Frontend will start on: http://localhost:3000"
