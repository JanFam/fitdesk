import WaitlistForm from './waitlist-form'

interface FinalCTAProps {
  headline: string
  subheadline: string
  source?: string
}

export default function FinalCTA({ headline, subheadline, source = 'generic' }: FinalCTAProps) {
  return (
    <section
      id="join"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, rgba(254, 215, 170, 0.5) 0%, rgba(255, 237, 213, 0.95) 50%, rgba(255, 237, 213, 1) 100%)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="ambient-glow ambient-glow--final" aria-hidden="true" />

      <div className="container relative z-10">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-limelight)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: 'var(--text)',
              marginBottom: '16px',
            }}
          >
            {headline}
          </h2>

          <p
            className="mb-10"
            style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}
          >
            {subheadline}
          </p>

          <div style={{ maxWidth: '480px', margin: '0 auto' }}>
            <WaitlistForm source={source} />
          </div>
        </div>
      </div>
    </section>
  )
}