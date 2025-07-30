import type { RouteObject } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import { Dashboard, Patients, Appointments, Reports, Landing } from './pages'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'patients', element: <Patients /> },
      { path: 'appointments', element: <Appointments /> },
      { path: 'reports', element: <Reports /> },
    ],
  },
]

export default routes
