
import Features from '../components/Features'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Navbar from '../components/Navbar'
import ProductShowcase from '../components/ProductShowcase'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import TrustedBy from '../components/TrustedBy'

const LandingPageScreen = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <ProductShowcase />
        <Stats />
        <Testimonials />
    </main>
  )
}

export default LandingPageScreen