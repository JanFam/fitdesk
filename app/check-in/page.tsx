import Hero from '@/components/hero'
import Problem from '@/components/problem'
import Solution from '@/components/solution'
import Alternatives from '@/components/alternatives'
import Pricing from '@/components/pricing'
import SocialProof from '@/components/social-proof'
import FinalCTA from '@/components/final-cta'

export default function CheckInPage() {
  return (
    <>
      <Hero
        headline="Monday dread is optional."
        subheadline="FitDesk handles the check-in backlog so you don't have to. Know who's falling off before they've already quit."
        source="check-in"
      />
      <Problem />
      <Solution />
      <Alternatives />
      <Pricing />
      <SocialProof />
      <FinalCTA
        headline="Stop running your business from a spreadsheet."
        subheadline="2 weeks free when we launch. No credit card required."
        source="check-in"
      />
    </>
  )
}