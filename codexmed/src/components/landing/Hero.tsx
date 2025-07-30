import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'

/**
 * Hero section with main headline and call to action.
 */
const Hero = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      py: { xs: 8, md: 12 },
    }}
  >
    <Typography variant="h2" component="h1" gutterBottom>
      Gestiona tu consultorio de forma sencilla
    </Typography>
    <Typography variant="h6" color="text.secondary" gutterBottom>
      MEDM8 agiliza tus turnos, pacientes y comunicación en un solo lugar
    </Typography>
    <Button
      component={RouterLink}
      to="/register"
      size="large"
      variant="contained"
      color="primary"
      sx={{ mt: 4 }}
    >
      Comenzar ahora
    </Button>
  </Box>
)

export default Hero
