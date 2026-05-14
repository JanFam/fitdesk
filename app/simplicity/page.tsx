import Hero from '@/components/hero'
import Problem from '@/components/problem'
import Solution from '@/components/solution'
import Alternatives from '@/components/alternatives'
import Pricing from '@/components/pricing'
import SocialProof from '@/components/social-proof'
import FinalCTA from '@/components/final-cta'

export default function SimplicityPage() {
  return (
    <>
      <Hero
        headline="Your clients will actually use this."
        subheadline="As easy as WhatsApp for your clients. No app downloads, no confusing dashboards. Just results."
        source="simplicity"
      />
      <Problem />
      <Solution />
      <Alternatives />
      <Pricing />
      <SocialProof />
      <FinalCTA
        headline="Stop running your business from a spreadsheet."
        subheadline="2 weeks free when we launch. No credit card required."
        source="simplicity"
      />
    </>
  )
}