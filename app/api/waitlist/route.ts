import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

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

    const { error } = await supabase
      .from('waitlist')
      .insert({ email: email.toLowerCase().trim(), source })

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ message: 'Already signed up' }, { status: 200 })
      }
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (err) {
    console.error('Waitlist route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}