# Pharos Wallet Agent

An AI-powered wallet analysis Skill built for the Pharos Agent Center Skill Builder Campaign.

## Overview

Pharos Wallet Agent allows users to enter a wallet address and receive a simple AI-generated explanation of wallet activity, balances, and onchain interactions.

The goal of this project was to make blockchain wallet analysis easier to understand for normal users instead of showing raw blockchain data.

The project combines:

* Alchemy SDK for onchain data
* OpenAI for AI-generated summaries
* Next.js for the frontend and backend

---

## Features

* Wallet balance analysis
* AI-generated wallet summaries
* Beginner-friendly interface
* Fast onchain data fetching
* Simple and clean UI
* Pharos-themed frontend

---

## Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* Alchemy SDK
* OpenAI API

---

## How It Works

1. User enters a wallet address
2. The app fetches wallet token balances using Alchemy
3. Wallet data is processed
4. OpenAI generates a simple readable summary
5. The summary is displayed inside the UI

---

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPO_LINK
```

Open the project:

```bash
cd pharos-wallet-agent
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
ALCHEMY_API_KEY=your_alchemy_api_key
OPENAI_API_KEY=your_openai_api_key
```

---

## Project Structure

```bash
app/
 ├── api/
 │    └── analyze/
 │         └── route.ts
 ├── components/
 │    └── Header.tsx
 ├── page.tsx
 └── globals.css
```

---

## Demo
Check that out on my X @isharik99 :).

---

## Future Improvements

* Multi-wallet analysis
* Transaction history summaries
* Better AI insights
* Portfolio analytics
* Real-time Pharos ecosystem tracking
* Improved UI animations

---

## Notes

The AI-generated summary is processed locally on my computer. To generate your own wallet summaries, you’ll need to run the project on your local machine by setting up the localhost environment and installing the required dependencies through the terminal.

This project was built as part of the Pharos Agent Center Skill Builder Campaign.

I spent several days researching SDK integrations, AI wallet summarization, and building a clean beginner-friendly experience.

The goal was to build something simple, useful, and practical instead of making another NFT-style showcase project.

---

## Author

Built by Sharik AKA Echo on Discord for the Pharos Builder Community.
