import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import { Link as RouterLink } from 'react-router-dom'

type Props = {
  /** Display landing links when true */
  landing?: boolean
  /** Minimal variant for auth pages */
  auth?: boolean
}

const Navbar = ({ landing, auth }: Props) => (
  <AppBar position="sticky" color="transparent" elevation={landing ? 0 : 4}>
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Typography variant="h6" component="div">
        MEDM8
      </Typography>
      {landing ? (
        <Stack direction="row" spacing={3} alignItems="center">
          <Link href="#hero" color="inherit" underline="none">
            Inicio
          </Link>
          <Link href="#features" color="inherit" underline="none">
            Funcionalidades
          </Link>
          <Link href="#benefits" color="inherit" underline="none">
            Beneficios
          </Link>
          <Link href="#pricing" color="inherit" underline="none">
            Planes
          </Link>
          <Link href="#contact" color="inherit" underline="none">
            Contacto
          </Link>
          <Button component={RouterLink} to="/login" color="inherit">
            Iniciar sesión
          </Button>
          <Button
            component={RouterLink}
            to="/register"
            variant="contained"
            color="primary"
          >
            Registrarse
          </Button>
        </Stack>
      ) : auth ? (
        <Link component={RouterLink} to="/" color="inherit" underline="none">
          Volver al inicio
        </Link>
      ) : (
        <Button color="inherit">Salir</Button>
      )}
    </Toolbar>
  </AppBar>
)

export default Navbar
