import Hero from '@/components/hero'
import Problem from '@/components/problem'
import Solution from '@/components/solution'
import Alternatives from '@/components/alternatives'
import Pricing from '@/components/pricing'
import SocialProof from '@/components/social-proof'
import FinalCTA from '@/components/final-cta'

export default function ScalePage() {
  return (
    <>
      <Hero
        headline="Same tool at 10 clients as at 50."
        subheadline="FitDesk grows with you. No tier jumps, no feature gates, no switching tools every 6 months. Just one price."
        source="scale"
      />
      <Problem />
      <Solution />
      <Alternatives />
      <Pricing />
      <SocialProof />
      <FinalCTA
        headline="Stop running your business from a spreadsheet."
        subheadline="2 weeks free when we launch. No credit card required."
        source="scale"
      />
    </>
  )
}