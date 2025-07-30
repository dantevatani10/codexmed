import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

/**
 * Simple footer displayed at the bottom of the landing page.
 */
const Footer = () => (
  <Box component="footer" sx={{ py: 4, textAlign: 'center', mt: 6 }}>
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} MEDM8. Todos los derechos reservados.
    </Typography>
  </Box>
)

export default Footer
