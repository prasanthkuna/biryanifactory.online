import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Menu } from '@/components/Menu'
import { DeliveryPartners } from '@/components/DeliveryPartners'
import { SocialProof } from '@/components/SocialProof'
import { Pricing } from '@/components/Pricing'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { SEO } from '@/components/SEO'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Navigation />
      <Hero />
      <Features />
      <Menu />
      <DeliveryPartners />
      <SocialProof />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
