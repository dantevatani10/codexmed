import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Navbar from '../components/common/Navbar'
import AuthCard from '../components/auth/AuthCard'
import RegisterForm from '../components/auth/RegisterForm'

export default function Register() {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(#fff, #e3f2fd)' }}>
      <Navbar auth />
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8,
        }}
      >
        <AuthCard>
          <RegisterForm />
        </AuthCard>
      </Container>
      <Box sx={{ textAlign: 'center', pb: 2, color: 'text.secondary' }}>
        © 2025 MEDM8
      </Box>
    </Box>
  )
}
