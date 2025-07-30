import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'
import { Outlet } from 'react-router-dom'

const menu = [
  { label: 'Dashboard', to: '/admin/dashboard' },
  { label: 'Usuarios', to: '/admin/users' },
  { label: 'Sueldos', to: '/admin/salaries' },
  { label: 'Reportes', to: '/admin/reports' },
  { label: 'Configuración', to: '/admin/settings' },
]

const AdminLayout = () => (
  <>
    <Navbar />
    <Sidebar items={menu}>
      <Outlet />
    </Sidebar>
  </>
)

export default AdminLayout
