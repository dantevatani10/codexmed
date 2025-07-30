import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'
import { Outlet } from 'react-router-dom'

const menu = [
  { label: 'Dashboard', to: '/patient/dashboard' },
  { label: 'Mis Turnos', to: '/patient/my-appointments' },
  { label: 'Prescripciones', to: '/patient/prescriptions' },
  { label: 'Estudios', to: '/patient/upload-studies' },
  { label: 'Chat', to: '/patient/chat' },
]

const PatientLayout = () => (
  <>
    <Navbar />
    <Sidebar items={menu}>
      <Outlet />
    </Sidebar>
  </>
)

export default PatientLayout
