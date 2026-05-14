import Hero from '@/components/hero'
import Problem from '@/components/problem'
import Solution from '@/components/solution'
import Alternatives from '@/components/alternatives'
import Pricing from '@/components/pricing'
import SocialProof from '@/components/social-proof'
import FinalCTA from '@/components/final-cta'

export default function OverwhelmedPage() {
  return (
    <>
      <Hero
        headline="You're not a personal trainer anymore."
        subheadline="You're running an admin business that occasionally involves coaching. FitDesk fixes that — program delivery, check-ins, billing, all in one place. No more switching between 5 tools."
        source="overwhelmed"
      />
      <Problem />
      <Solution />
      <Alternatives />
      <Pricing />
      <SocialProof />
      <FinalCTA
        headline="Stop running your business from a spreadsheet."
        subheadline="2 weeks free when we launch. No credit card required."
        source="overwhelmed"
      />
    </>
  )
}