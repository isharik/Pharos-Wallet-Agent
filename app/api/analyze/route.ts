import { NextResponse } from 'next/server'
import { Alchemy, Network } from 'alchemy-sdk'
import OpenAI from 'openai'

const alchemy = new Alchemy({
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET, // Use a predefined network
})

console.log('OpenAI API Key:', process.env.OPENAI_API_KEY)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const body = await req.json()
  const wallet = body.wallet

  try {
    const balances = await alchemy.core.getTokenBalances(wallet)

    const formatted = balances.tokenBalances.slice(0, 5)

    const ai = await openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a crypto wallet analyst. Explain wallet activity simply.',
        },
        {
          role: 'user',
          content: JSON.stringify(formatted),
        },
      ],
    })

    return NextResponse.json({
      summary: ai.choices[0].message.content,
    })
  } catch {
    return NextResponse.json({
      summary: 'Could not analyze wallet.',
    })
  }
}