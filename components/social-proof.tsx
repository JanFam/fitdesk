'use client'

const testimonials = [
  {
    quote: "I went from 10 to 30 clients and didn't have to switch tools or double my subscription.",
    name: 'Sarah M.',
    role: 'Online strength coach',
    initials: 'SM',
  },
  {
    quote: "The check-in system alone saved me 4 hours a week. I actually look forward to Mondays now.",
    name: 'Marcus T.',
    role: 'Hybrid coach',
    initials: 'MT',
  },
  {
    quote: "Finally software that doesn't feel like it was built for a gym chain.",
    name: 'Jenna L.',
    role: 'Online-only coach',
    initials: 'JL',
  },
]

export default function SocialProof() {
  return (
    <section
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
            Coaches who&apos;ve been there
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '24px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                padding: '28px',
                background: 'linear-gradient(135deg, rgba(255,237,213,0.9) 0%, rgba(255,237,213,0.7) 100%)',
                backdropFilter: 'blur(6px)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-card)',
                position: 'relative',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-lift)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text)',
                  marginBottom: '20px',
                  paddingTop: '20px',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(234, 88, 11, 0.85) 0%, rgba(245, 158, 11, 0.75) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    color: 'white',
                    fontSize: '0.875rem',
                    boxShadow: '0 2px 8px rgba(234, 88, 11, 0.25)',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text)' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: '48px',
            padding: '24px',
            background: 'linear-gradient(135deg, rgba(234, 88, 11, 0.9) 0%, rgba(245, 158, 11, 0.85) 100%)',
            borderRadius: 'var(--radius-lg)',
            maxWidth: '400px',
            marginLeft: 'auto',
            marginRight: 'auto',
            boxShadow: '0 4px 20px rgba(234, 88, 11, 0.25), 0 8px 40px rgba(234, 88, 11, 0.15)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-limelight)',
              fontSize: '2.5rem',
              color: 'white',
              textShadow: '0 2px 12px rgba(234, 88, 11, 0.4)',
            }}
          >
            500+
          </div>
          <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', marginTop: '4px' }}>
            coaches already on the waitlist
          </div>
        </div>
      </div>
    </section>
  )
}