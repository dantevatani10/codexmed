import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Link as RouterLink } from 'react-router-dom'

const drawerWidth = 240

import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            MEDM8
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{ width: drawerWidth, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' } }}
      >
        <Toolbar />
        <List>
          <ListItemButton component={RouterLink} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton component={RouterLink} to="/patients">
            <ListItemText primary="Pacientes" />
          </ListItemButton>
          <ListItemButton component={RouterLink} to="/appointments">
            <ListItemText primary="Turnos" />
          </ListItemButton>
          <ListItemButton component={RouterLink} to="/reports">
            <ListItemText primary="Reportes" />
          </ListItemButton>
        </List>
      </Drawer>
      <main style={{ flexGrow: 1, padding: '80px 24px 24px' }}>
        <Outlet />
      </main>
    </div>
  )
}
