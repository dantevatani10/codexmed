import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import { Link as RouterLink } from 'react-router-dom'
import type { ReactNode } from 'react'

type MenuItem = {
  label: string
  to: string
}

type Props = {
  items: MenuItem[]
  children: ReactNode
}

const Sidebar = ({ items, children }: Props) => (
  <div style={{ display: 'flex' }}>
    <Drawer variant="permanent" sx={{ [`& .MuiDrawer-paper`]: { width: 240 } }}>
      <Toolbar />
      <List>
        {items.map((item) => (
          <ListItemButton key={item.to} component={RouterLink} to={item.to}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
    <main style={{ flexGrow: 1, padding: '80px 24px 24px' }}>{children}</main>
  </div>
)

export default Sidebar
