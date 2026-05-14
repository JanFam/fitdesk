'use client'

const features = [
  {
    title: 'Program Delivery',
    description: 'Build and send workouts in minutes. Clients get notified, track progress, never lose a file again.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Check-ins & Accountability',
    description: "Weekly check-ins clients actually submit. You see who's falling off before they've already quit.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Payments & Billing',
    description: "Track who's paid, automate reminders, no more awkward payment conversations.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

export default function Solution() {
  return (
    <section
      id="solution"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(160deg, rgba(255,237,213,0.6) 0%, rgba(255,237,213,0.95) 50%, rgba(255,237,213,0.6) 100%)',
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
            Everything In One Place
          </h2>
          <p className="mt-4" style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
            One place for everything you already do. Just less chaos.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '32px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                padding: '32px',
                background: 'linear-gradient(160deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-card)',
                textAlign: 'center',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-lift), var(--shadow-glow)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-card)'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <span style={{ width: '32px', height: '32px', color: 'white', display: 'flex' }}>
                  {feature.icon}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-limelight)',
                  fontSize: '1.375rem',
                  marginBottom: '12px',
                  color: 'var(--text)',
                }}
              >
                {feature.title}
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}