'use client'

import { useState, FormEvent } from 'react'

interface WaitlistFormProps {
  source?: string
}

export default function WaitlistForm({ source = 'generic' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="text-center py-4 px-6 rounded-lg"
        style={{ background: 'rgba(22, 163, 74, 0.1)', border: '1px solid rgba(22, 163, 74, 0.3)' }}
      >
        <p className="font-semibold" style={{ color: 'var(--success)' }}>
          You're in!
        </p>
        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
          We'll be in touch when we launch.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="email-form w-full flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="email-form__input flex-1"
        disabled={status === 'loading'}
      />
      <button
        type="submit"
        className="btn btn--primary whitespace-nowrap"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Joining...' : 'Join the waitlist'}
      </button>
      {status === 'error' && (
        <p className="text-sm mt-2 w-full" style={{ color: 'var(--primary)' }}>
          Something went wrong — please try again.
        </p>
      )}
    </form>
  )
}