import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'

/**
 * Closing call to action section.
 */
const FinalCTA = () => (
  <Box id="contact" sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }}>
    <Typography variant="h5" gutterBottom>
      Unite a los profesionales que ya simplifican su práctica médica con MEDM8.
    </Typography>
    <Button component={RouterLink} to="/register" variant="contained" size="large" sx={{ mt: 2 }}>
      Empieza ahora
    </Button>
  </Box>
)

export default FinalCTA
