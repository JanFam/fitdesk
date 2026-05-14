export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--surface-light)]">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl" style={{ fontFamily: 'var(--font-limelight)', color: 'var(--text)' }}>
            FitDesk
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
            <a href="#problem" className="hover:text-[var(--primary)] transition-colors">Problem</a>
            <a href="#solution" className="hover:text-[var(--primary)] transition-colors">Solution</a>
            <a href="#pricing" className="hover:text-[var(--primary)] transition-colors">Pricing</a>
            <a
              href="#join"
              className="btn btn--primary text-sm py-2 px-5"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Join waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}