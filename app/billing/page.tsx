import Hero from '@/components/hero'
import Problem from '@/components/problem'
import Solution from '@/components/solution'
import Alternatives from '@/components/alternatives'
import Pricing from '@/components/pricing'
import SocialProof from '@/components/social-proof'
import FinalCTA from '@/components/final-cta'

export default function BillingPage() {
  return (
    <>
      <Hero
        headline="Stop chasing payments."
        subheadline="FitDesk tracks who's paid, automates reminders, and ends the awkward conversations. Get paid without the hassle."
        source="billing"
      />
      <Problem />
      <Solution />
      <Alternatives />
      <Pricing />
      <SocialProof />
      <FinalCTA
        headline="Stop running your business from a spreadsheet."
        subheadline="2 weeks free when we launch. No credit card required."
        source="billing"
      />
    </>
  )
}