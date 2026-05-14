import WaitlistForm from './waitlist-form'

interface HeroProps {
  headline: string
  subheadline: string
  source?: string
}

export default function Hero({ headline, subheadline, source = 'generic' }: HeroProps) {
  return (
    <section
      className="relative"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        background:
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(253, 186, 116, 0.5) 0%, #FFEDD5 60%), linear-gradient(180deg, var(--bg) 0%, var(--surface-light) 100%)',
        zIndex: 1,
      }}
    >
      <div className="ambient-glow ambient-glow--hero" aria-hidden="true" />

      <div className="container relative z-10">
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <span
            className="inline-block text-sm font-semibold mb-6 px-4 py-1.5 rounded-full"
            style={{
              color: 'var(--primary)',
              background: 'rgba(234, 88, 11, 0.08)',
              border: '1px solid rgba(234, 88, 11, 0.15)',
              backdropFilter: 'blur(4px)',
            }}
          >
            Early Access — Launching Soon
          </span>

          <h1
            className="mb-6"
            style={{
              fontFamily: 'var(--font-limelight)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              color: 'var(--text)',
            }}
          >
            {headline}
          </h1>

          <p
            className="mb-10 mx-auto"
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              color: 'var(--text-muted)',
              maxWidth: '600px',
            }}
          >
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row justify-center">
            <WaitlistForm source={source} />
          </div>

          <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>
            2 weeks free when we launch. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}