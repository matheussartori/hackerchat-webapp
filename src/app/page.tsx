import { Nav } from '@/components/nav/Nav'
import { Hero } from '@/components/hero/Hero'
import { Features } from '@/components/features/Features'
import { Quickstart } from '@/components/quickstart/Quickstart'
import { SelfHost } from '@/components/selfhost/SelfHost'
import { Commands } from '@/components/commands/Commands'
import { GitHub } from '@/components/github/GitHub'
import { Playground } from '@/components/playground/Playground'
import { Footer } from '@/components/footer/Footer'

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Quickstart />
      <SelfHost />
      <Commands />
      <GitHub />
      <Playground />
      <Footer />
    </>
  )
}
