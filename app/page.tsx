'use client'

import { useState } from 'react'
import Header from './components/Header'; // Adjust the path if needed

export default function Home() {
  const [wallet, setWallet] = useState('')
  const [result, setResult] = useState('')

  async function analyzeWallet() {
    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ wallet }),
    })

    const data = await res.json()
    setResult(data.summary)
  }

  return (
   <main className="min-h-screen flex flex-col items-center justify-center p-10 bg-[#102a43] text-white">
      <Header />
      <h1 className="text-4xl font-bold mb-6">
        Pharos Wallet Agent
      </h1>

      <input
        className="border p-3 rounded w-full max-w-xl"
        placeholder="Enter wallet address"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
      />

      <button
        onClick={analyzeWallet}
        className="bg-black text-white px-6 py-3 rounded mt-4"
      >
        Analyze Wallet
      </button>

      {result && (
        <div className="mt-8 border p-5 rounded max-w-2xl">
          {result}
        </div>
      )}
    </main>
  )
}