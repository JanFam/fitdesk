const checkIcon = (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const tiers = [
  {
    name: 'Starter',
    price: '29',
    description: 'Up to 10 clients',
    featured: false,
    features: [
      'Everything you need to start',
      'Program delivery',
      'Basic check-ins',
      'Payment tracking',
    ],
  },
  {
    name: 'Pro',
    price: '49',
    description: 'Up to 30 clients',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Everything in Starter',
      'Automated reminders',
      'Advanced analytics',
      'Priority support',
    ],
  },
  {
    name: 'Scale',
    price: '79',
    description: 'Up to 50 clients',
    featured: false,
    features: [
      'Everything in Pro',
      'Full automation',
      'Custom check-in templates',
      'White-label options',
    ],
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(200deg, rgba(255,237,213,0.5) 0%, rgba(255,237,213,0.9) 40%, rgba(255,237,213,0.6) 100%)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-limelight)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: 'var(--text)',
            }}
          >
            Pricing
          </h2>
          <p className="mt-3" style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
            No hidden fees. No scale ceiling.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '24px',
            maxWidth: '1000px',
            margin: '48px auto 0',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                padding: '32px',
                background: tier.featured
                  ? 'linear-gradient(160deg, rgba(234, 88, 11, 0.95) 0%, rgba(200, 65, 10, 0.92) 100%)'
                  : 'linear-gradient(160deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.88) 100%)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: tier.featured
                  ? 'var(--shadow-lift), 0 0 60px rgba(234, 88, 11, 0.2)'
                  : 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {tier.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '6px 16px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    background: 'var(--secondary)',
                    color: 'var(--text)',
                    borderRadius: '50px',
                  }}
                >
                  {tier.badge}
                </div>
              )}

              <div style={{ fontFamily: 'var(--font-limelight)', fontSize: '1.5rem', marginBottom: '8px', color: tier.featured ? 'white' : 'var(--text)' }}>
                {tier.name}
              </div>

              <div style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1, color: tier.featured ? 'white' : 'var(--text)' }}>
                ${tier.price}
                <span style={{ fontSize: '1rem', fontWeight: 400, opacity: 0.7 }}>/mo</span>
              </div>

              <p style={{ fontSize: '0.9375rem', color: tier.featured ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)', margin: '12px 0 24px' }}>
                {tier.description}
              </p>

              <ul style={{ listStyle: 'none', marginBottom: '32px', flexGrow: 1 }}>
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      padding: '8px 0',
                      fontSize: '0.9375rem',
                      color: tier.featured ? 'rgba(255,255,255,0.9)' : 'var(--text-muted)',
                    }}
                  >
                    <span style={{ flexShrink: 0, width: '20px', height: '20px', marginTop: '1px', color: tier.featured ? 'white' : 'var(--success)', display: 'flex' }}>
                      {checkIcon}
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`btn w-full ${tier.featured ? '' : 'btn--secondary'}`}
                style={{
                  background: tier.featured ? 'white' : undefined,
                  color: tier.featured ? 'var(--primary)' : undefined,
                  fontFamily: 'var(--font-dm-sans)',
                }}
              >
                Get started
              </button>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '0.9375rem', color: 'var(--text-muted)' }}>
          No add-ons. No upsells. One price.
        </p>
      </div>
    </section>
  )
}