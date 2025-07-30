import { useState } from 'react'
import { useForm, Controller, type SubmitHandler, type Resolver } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import PasswordField from './PasswordField'
import GoogleButton from './GoogleButton'
import RoleSelect from './RoleSelect'
import { register as registerService } from '../../api/authService'

interface FormData {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  phone: string
  dni: string
  birthdate: Date | null
  role: string
  specialty?: string
  clinic?: string
  terms: boolean
  notifications: boolean
}

const schema = yup.object({
  fullName: yup.string().required('Ingresa tu nombre completo'),
  email: yup
    .string()
    .email('Email inválido')
    .required('Ingresa tu email'),
  password: yup
    .string()
    .min(6, 'Al menos 6 caracteres')
    .required('Ingresa una contraseña'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
    .required('Confirma tu contraseña'),
  phone: yup.string().required('Ingresa tu teléfono'),
  dni: yup.string().required('Ingresa tu DNI'),
  birthdate: yup.date().nullable().required('Ingresa tu fecha de nacimiento'),
  role: yup.string().required('Selecciona un rol'),
  specialty: yup.string().when('role', {
    is: 'doctor',
    then: (schema) => schema.required('Ingresa tu especialidad'),
    otherwise: (schema) => schema.notRequired(),
  }),
  clinic: yup.string().notRequired(),
  terms: yup
    .boolean()
    .oneOf([true], 'Debes aceptar los términos y condiciones'),
  notifications: yup.boolean().notRequired(),
})

const RegisterForm = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as Resolver<FormData>,
    defaultValues: { terms: false, notifications: false, birthdate: null },
  })

  const role = watch('role')

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setError('')
    try {
      const user = await registerService({
        ...data,
        birthdate: data.birthdate ? data.birthdate.toISOString() : '',
      })
      navigate(`/${user.role}/dashboard`)
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Error al registrar'
      setError(msg)
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2}>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            label="Nombre completo"
            fullWidth
            required
            {...register('fullName')}
            error={Boolean(errors.fullName)}
            helperText={errors.fullName?.message}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            {...register('email')}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
          <PasswordField
            label="Contraseña"
            fullWidth
            required
            {...register('password')}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
          <PasswordField
            label="Confirmar contraseña"
            fullWidth
            required
            {...register('confirmPassword')}
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword?.message}
          />
          <TextField
            label="Teléfono"
            fullWidth
            required
            {...register('phone')}
            error={Boolean(errors.phone)}
            helperText={errors.phone?.message}
          />
          <TextField
            label="DNI"
            fullWidth
            required
            {...register('dni')}
            error={Boolean(errors.dni)}
            helperText={errors.dni?.message}
          />
          <Controller
            name="birthdate"
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Fecha de nacimiento"
                {...field}
                onChange={(date) => field.onChange(date)}
                slotProps={{ textField: { fullWidth: true, error: Boolean(errors.birthdate), helperText: errors.birthdate?.message } }}
              />
            )}
          />
          <RoleSelect
            {...register('role')}
            error={Boolean(errors.role)}
            helperText={errors.role?.message}
          />
          {role === 'doctor' && (
            <TextField
              label="Especialidad"
              fullWidth
              required
              {...register('specialty')}
              error={Boolean(errors.specialty)}
              helperText={errors.specialty?.message}
            />
          )}
          <TextField
            label="Centro médico / consultorio"
            fullWidth
            {...register('clinic')}
            error={Boolean(errors.clinic)}
            helperText={errors.clinic?.message}
          />
          <FormControlLabel
            control={<Checkbox {...register('terms')} color="primary" />}
            label="Acepto los términos y condiciones"
          />
          {errors.terms && (
            <Typography color="error" variant="caption" sx={{ ml: 1 }}>
              {errors.terms.message}
            </Typography>
          )}
          <FormControlLabel
            control={<Checkbox {...register('notifications')} color="primary" />}
            label="Deseo recibir notificaciones"
          />
          <Button type="submit" variant="contained" fullWidth disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress size={24} /> : 'Registrarse'}
          </Button>
          <GoogleButton />
          <Link component={RouterLink} to="/login" underline="hover" textAlign="center">
            ¿Ya tienes cuenta? Iniciar sesión
          </Link>
        </Stack>
      </form>
    </LocalizationProvider>
  )
}

export default RegisterForm
