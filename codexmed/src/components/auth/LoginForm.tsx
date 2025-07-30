import { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import CircularProgress from '@mui/material/CircularProgress'
import { Link as RouterLink } from 'react-router-dom'
import PasswordField from './PasswordField'
import GoogleButton from './GoogleButton'
import { useAuth } from '../../hooks/useAuth'

interface FormData {
  email: string
  password: string
  remember: boolean
}

/**
 * Login form with email, password and Google auth.
 */
const LoginForm = () => {
  const { login } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: { remember: false },
  })
  const [error, setError] = useState('')

  const onSubmit = async (data: FormData) => {
    setError('')
    try {
      await login(data.email, data.password)
    } catch {
      setError('Credenciales incorrectas')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          {...register('email', { required: 'Ingresa tu email' })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />
        <PasswordField
          label="Contraseña"
          fullWidth
          required
          {...register('password', { required: 'Ingresa tu contraseña', minLength: 6 })}
          error={Boolean(errors.password)}
          helperText={errors.password && 'Al menos 6 caracteres'}
        />
        <FormControlLabel
          control={<Checkbox {...register('remember')} color="primary" />}
          label="Recordar sesión"
        />
        <Button type="submit" variant="contained" fullWidth disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress size={24} /> : 'Iniciar sesión'}
        </Button>
        <GoogleButton />
        <Stack direction="row" justifyContent="space-between">
          <Link component={RouterLink} to="/forgot-password" underline="hover">
            ¿Olvidaste tu contraseña?
          </Link>
          <Link component={RouterLink} to="/register" underline="hover">
            ¿No tienes cuenta? Regístrate
          </Link>
        </Stack>
      </Stack>
    </form>
  )
}

export default LoginForm
