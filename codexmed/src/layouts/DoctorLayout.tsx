import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'
import { Outlet } from 'react-router-dom'

const menu = [
  { label: 'Dashboard', to: '/doctor/dashboard' },
  { label: 'Pacientes', to: '/doctor/patients' },
  { label: 'Turnos', to: '/doctor/appointments' },
  { label: 'Cirugías', to: '/doctor/surgeries' },
  { label: 'Chat', to: '/doctor/chat' },
  { label: 'Reportes', to: '/doctor/reports' },
]

const DoctorLayout = () => (
  <>
    <Navbar />
    <Sidebar items={menu}>
      <Outlet />
    </Sidebar>
  </>
)

export default DoctorLayout
