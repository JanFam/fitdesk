'use client'

const problems = [
  "Monday morning: 15 unread check-ins to review. You haven't had coffee yet.",
  "You're texting clients reminders about workouts they were supposed to submit.",
  "Your client paid through PayPal but you're not sure if they actually paid.",
  "You spent 45 minutes building a workout program in a Google Doc. Again.",
  "You've got client notes in your texts, your email, and three different spreadsheets.",
]

const icons = [
  <svg key="1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
  <svg key="2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
  <svg key="4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  <svg key="5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>,
]

export default function Problem() {
  return (
    <section
      id="problem"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.7) 100%)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-limelight)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: 'var(--text)',
            }}
          >
            Sound familiar?
          </h2>
        </div>

        <div style={{ maxWidth: '700px', margin: '0 auto', display: 'grid', gap: '20px' }}>
          {problems.map((text, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '20px',
                padding: '24px',
                background: 'linear-gradient(135deg, rgba(255,237,213,0.9) 0%, rgba(255,237,213,0.7) 100%)',
                backdropFilter: 'blur(4px)',
                borderRadius: 'var(--radius-lg)',
                borderLeft: '4px solid var(--primary)',
                boxShadow: 'var(--shadow-card)',
                transition: 'all 0.25s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-lift)'
                e.currentTarget.style.transform = 'translateX(4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--primary)',
                  borderRadius: '50%',
                }}
              >
                <span style={{ width: '16px', height: '16px', color: 'white', display: 'flex' }}>
                  {icons[i]}
                </span>
              </div>
              <p style={{ fontSize: '1.0625rem', color: 'var(--text)', lineHeight: 1.5 }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}