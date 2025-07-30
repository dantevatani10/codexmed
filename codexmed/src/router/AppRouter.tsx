import { useRoutes, Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import AuthLayout from '../layouts/AuthLayout'
import AdminLayout from '../layouts/AdminLayout'
import DoctorLayout from '../layouts/DoctorLayout'
import PatientLayout from '../layouts/PatientLayout'
import { Landing, Login, Register, ForgotPassword } from '../pages'
import AdminDashboard from '../pages/admin/Dashboard'
import Users from '../pages/admin/Users'
import Salaries from '../pages/admin/Salaries'
import AdminReports from '../pages/admin/Reports'
import Settings from '../pages/admin/Settings'
import DoctorDashboard from '../pages/doctor/Dashboard'
import DoctorPatients from '../pages/doctor/Patients'
import DoctorAppointments from '../pages/doctor/Appointments'
import Surgeries from '../pages/doctor/Surgeries'
import DoctorChat from '../pages/doctor/Chat'
import DoctorReports from '../pages/doctor/Reports'
import PatientDashboard from '../pages/patient/Dashboard'
import MyAppointments from '../pages/patient/MyAppointments'
import Prescriptions from '../pages/patient/Prescriptions'
import UploadStudies from '../pages/patient/UploadStudies'
import PatientChat from '../pages/patient/Chat'
import SecretaryDashboard from '../pages/secretary/Dashboard'
import SecretaryAppointments from '../pages/secretary/Appointments'
import SecretaryPatients from '../pages/secretary/Patients'
import SecretaryReports from '../pages/secretary/Reports'
import Marketplace from '../pages/marketplace/Marketplace'
import ProviderProfile from '../pages/marketplace/ProviderProfile'

const AppRouter = () => {
  const { role } = useAuthContext()

  const routes = useRoutes([
    { path: '/', element: <Landing /> },
    {
      element: <AuthLayout />, children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'forgot-password', element: <ForgotPassword /> },
      ],
    },
    {
      path: 'admin',
      element: role === 'admin' ? <AdminLayout /> : <Navigate to="/login" />,
      children: [
        { path: 'dashboard', element: <AdminDashboard /> },
        { path: 'users', element: <Users /> },
        { path: 'salaries', element: <Salaries /> },
        { path: 'reports', element: <AdminReports /> },
        { path: 'settings', element: <Settings /> },
      ],
    },
    {
      path: 'doctor',
      element: role === 'doctor' ? <DoctorLayout /> : <Navigate to="/login" />,
      children: [
        { path: 'dashboard', element: <DoctorDashboard /> },
        { path: 'patients', element: <DoctorPatients /> },
        { path: 'appointments', element: <DoctorAppointments /> },
        { path: 'surgeries', element: <Surgeries /> },
        { path: 'chat', element: <DoctorChat /> },
        { path: 'reports', element: <DoctorReports /> },
      ],
    },
    {
      path: 'patient',
      element: role === 'patient' ? <PatientLayout /> : <Navigate to="/login" />,
      children: [
        { path: 'dashboard', element: <PatientDashboard /> },
        { path: 'my-appointments', element: <MyAppointments /> },
        { path: 'prescriptions', element: <Prescriptions /> },
        { path: 'upload-studies', element: <UploadStudies /> },
        { path: 'chat', element: <PatientChat /> },
      ],
    },
    {
      path: 'secretary',
      element: role === 'secretary' ? <AdminLayout /> : <Navigate to="/login" />,
      children: [
        { path: 'dashboard', element: <SecretaryDashboard /> },
        { path: 'appointments', element: <SecretaryAppointments /> },
        { path: 'patients', element: <SecretaryPatients /> },
        { path: 'reports', element: <SecretaryReports /> },
      ],
    },
    {
      path: 'marketplace',
      children: [
        { index: true, element: <Marketplace /> },
        { path: ':id', element: <ProviderProfile /> },
      ],
    },
  ])

  return routes
}

export default AppRouter
