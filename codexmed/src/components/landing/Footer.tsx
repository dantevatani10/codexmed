import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'

/**
 * Footer with quick links and contact.
 */
const Footer = () => (
  <Box component="footer" sx={{ py: 6, textAlign: 'center', mt: 6 }}>
    <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 2 }}>
      <Link href="#hero" color="inherit" underline="none">
        Inicio
      </Link>
      <Link href="#features" color="inherit" underline="none">
        Funcionalidades
      </Link>
      <Link href="#pricing" color="inherit" underline="none">
        Planes
      </Link>
      <Link href="/login" color="inherit" underline="none">
        Login
      </Link>
    </Stack>
    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
      Contacto: <Link href="mailto:info@medm8.com">info@medm8.com</Link>
    </Typography>
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} MEDM8. Todos los derechos reservados.
    </Typography>
    <Typography variant="body2" sx={{ mt: 1 }}>
      <Link href="https://example.com/help" target="_blank" rel="noopener">
        Centro de ayuda
      </Link>
    </Typography>
  </Box>
)

export default Footer
