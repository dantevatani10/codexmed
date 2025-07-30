import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import HeroSection from '../components/landing/HeroSection'
import FeaturesSection from '../components/landing/FeaturesSection'
import Footer from '../components/landing/Footer'

/**
 * Public landing page describing the application.
 * Combines a hero, features and footer.
 */
export default function Landing() {
  return (
    <Box>
      <Container maxWidth="lg">
        <HeroSection />
        <FeaturesSection />
      </Container>
      <Footer />
    </Box>
  )
}
