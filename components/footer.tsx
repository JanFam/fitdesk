export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #1C1917 0%, #0f0e0d 100%)' }}>
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl" style={{ fontFamily: 'var(--font-limelight)', color: 'var(--white)' }}>
            FitDesk
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Privacy
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Terms
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            &copy; {new Date().getFullYear()} FitDesk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}