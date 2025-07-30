import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'

export default function Landing() {
  return (
    <Container sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h3" gutterBottom>
        Bienvenido a MEDM8
      </Typography>
      <Typography variant="h6" gutterBottom>
        Gestiona tu consultorio de manera eficiente y moderna.
      </Typography>
      <Button component={RouterLink} to="/dashboard" variant="contained" color="primary">
        Entrar
      </Button>
    </Container>
  )
}
