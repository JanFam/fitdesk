import { NextRequest, NextResponse } from 'next/server'

const SUPABASE_URL = 'https://ivjrqeilpbllstobdqkl.supabase.co'
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2anJxZWlscGJsbHN0b2JkcWtsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODc1MzEwOCwiZXhwIjoyMDk0MzI5MTA4fQ.nz0wtCXO1J2xUgmI0NiZA8t8o7w1p4xGOkwkOAXu_SE'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, source = 'unknown' } = body

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        source,
      }),
    })

    if (res.status === 201 || res.ok) {
      return NextResponse.json({ message: 'Success' })
    }

    if (res.status === 409 || res.status === 400) {
      const data = await res.json()
      if (data?.code === '23505') {
        return NextResponse.json({ message: 'Already signed up' })
      }
    }

    const errorText = await res.text()
    console.error('Supabase error:', res.status, errorText)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  } catch (err) {
    console.error('Waitlist route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}