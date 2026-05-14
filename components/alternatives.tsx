'use client'

const alternatives = [
  {
    text: "Trainerize is built for gyms. You pay for features you'll never use.",
    negative: true,
  },
  {
    text: 'Sheets + WhatsApp works until 10 clients. Then it falls apart.',
    negative: true,
  },
  {
    text: "Switching tools every 6 months because you outgrew the last one gets old.",
    negative: true,
  },
  {
    text: 'FitDesk is built for solo coaches. Same price at 10 clients as at 50.',
    negative: false,
  },
]

const crossIcon = (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const checkIcon = (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export default function Alternatives() {
  return (
    <section
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.95) 100%)',
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
            You tried the other tools.
          </h2>
        </div>

        <div style={{ maxWidth: '700px', margin: '0 auto', display: 'grid', gap: '16px' }}>
          {alternatives.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '16px',
                padding: '20px 24px',
                background: 'linear-gradient(135deg, rgba(255,237,213,0.85) 0%, rgba(255,237,213,0.65) 100%)',
                backdropFilter: 'blur(6px)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-card)',
                transition: 'all 0.25s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-lift)'
                e.currentTarget.style.transform = 'translateX(3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: '24px',
                  height: '24px',
                  marginTop: '2px',
                  color: item.negative ? 'var(--warning)' : 'var(--success)',
                  display: 'flex',
                }}
              >
                {item.negative ? crossIcon : checkIcon}
              </div>
              <p style={{ fontSize: '1.0625rem', color: 'var(--text)', lineHeight: 1.5 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}