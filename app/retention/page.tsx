import Hero from '@/components/hero'
import Problem from '@/components/problem'
import Solution from '@/components/solution'
import Alternatives from '@/components/alternatives'
import Pricing from '@/components/pricing'
import SocialProof from '@/components/social-proof'
import FinalCTA from '@/components/final-cta'

export default function RetentionPage() {
  return (
    <>
      <Hero
        headline="Don't lose clients to silence."
        subheadline="FitDesk's check-in system catches drop-offs early. Reach out before they've already quit."
        source="retention"
      />
      <Problem />
      <Solution />
      <Alternatives />
      <Pricing />
      <SocialProof />
      <FinalCTA
        headline="Stop running your business from a spreadsheet."
        subheadline="2 weeks free when we launch. No credit card required."
        source="retention"
      />
    </>
  )
}