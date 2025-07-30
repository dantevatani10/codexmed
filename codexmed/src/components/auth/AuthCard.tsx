import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Logo from '../../assets/logo.svg'
import type { ReactNode } from 'react'

/**
 * Container card used on auth pages.
 */
const AuthCard = ({ children }: { children: ReactNode }) => (
  <Card sx={{ maxWidth: 400, width: '100%', p: { xs: 2, md: 4 } }}>
    <CardContent>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <img src={Logo} alt="MEDM8" width={80} height={80} />
        <Typography variant="h5" sx={{ mt: 1 }}>
          Bienvenido a MEDM8
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Accede a tu cuenta para continuar
        </Typography>
      </Box>
      {children}
    </CardContent>
  </Card>
)

export default AuthCard
