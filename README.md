# Next.js Application

## Description

Brief description of your Next.js application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/deepakranpise0/vulse-frontend.git

2. Install dependencies:
    npm install

## Usage

1.Start the development server:
    npm run dev
2.Open your browser and visit <http://localhost:3000> to view the application.

## Configuration

Environment Variables:
    Create a .env file to store environment-specific variables. See Adding Environment Variables for more det

## Folder Structure

vulse-frontend/
│
├── .next/                      # Next.js build output (auto-generated)
│
├── node_modules/               # Node.js dependencies (auto-generated)
│
├── app/                        # Next.js pages
│   ├── index.js                # Home page
│   ├── about.js                # About page
│   ├── contact.js              # Contact page
│   └── ...
│
├── public/                     # Static assets (e.g., images, fonts)
│   ├── favicon.ico             # Favicon
│   └── ...
│
├── app/components/             # React components
│   ├── CreateQuiz.tsx         # CreateQuiz component
│   ├── HeaderName.tsx         # HeaderName component
│   ├── MenuBar.tsx            # MenuBar component
│   ├── QuizTable.tsx          # QuizTable component
│   ├── ResponsiveTable.tsx    # ResponsiveTable component
│   ├── ResultTable.tsx        # ResultTable component
│   └── ...
│
├── api/                        # API endpoints (optional)
│   ├── api.ts                  # User API endpoint
│   └── ...
│
├── app/home/                   # Home page components
│   ├── page.tsx                # Home page
│
├── app/login/                  # Login page components
│   ├── page.tsx                # Login page
│
├── app/quiz/                   # Quiz page components
│   ├── page.tsx                # Quiz page
│
├── app/results/                # Results page components
│   ├── page.tsx                # Results page
│
├── app/users/                  # Users page components
│   ├── page.tsx                # Users page
│
├── types.ts                    # TypeScript types (optional)
├── Dockerfile                  # Dockerfile for containerization (optional)
├── tailwind.config.ts          # Tailwind CSS configuration (optional)
├── tsconfig.json               # TypeScript configuration (optional)
├── .env                        # Environment variables (optional)
├── .dockerignore               # Docker ignore rules
├── .gitignore                  # Git ignore rules
├── package.json                # Node.js dependencies and scripts
├── README.md                   # Project documentation
└── ...

## Deployment

 1.Build the Docker image:
    `docker build -t vulse-frontend .` 

2.Run the Docker container:
    `docker run -d -p 3000:3000 vulse-frontend`
