import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Navbar from '../components/common/Navbar'
import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'
import Benefits from '../components/landing/Benefits'
import HowItWorks from '../components/landing/HowItWorks'
import Pricing from '../components/landing/Pricing'
import Testimonials from '../components/landing/Testimonials'
import FAQ from '../components/landing/FAQ'
import FinalCTA from '../components/landing/FinalCTA'
import Footer from '../components/landing/Footer'

/**
 * Public landing page describing the application.
 * Combines a hero, features and footer.
 */
export default function Landing() {
  return (
    <Box>
      <Navbar landing />
      <Container maxWidth="lg">
        <Box id="hero">
          <Hero />
        </Box>
        <Box id="features">
          <Features />
        </Box>
        <Benefits />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </Container>
      <Footer />
    </Box>
  )
}
