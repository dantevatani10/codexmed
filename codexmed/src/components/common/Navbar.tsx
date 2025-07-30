import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Navbar = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        MEDM8
      </Typography>
      <Button color="inherit">Salir</Button>
    </Toolbar>
  </AppBar>
)

export default Navbar
