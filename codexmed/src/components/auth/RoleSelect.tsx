import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import type { TextFieldProps } from '@mui/material/TextField'

const roles = [
  { value: 'patient', label: 'Paciente' },
  { value: 'doctor', label: 'Médico' },
  { value: 'secretary', label: 'Secretaria' },
  { value: 'admin', label: 'Admin' },
]

const RoleSelect = (props: TextFieldProps) => (
  <TextField select fullWidth margin="normal" label="Rol" {...props}>
    {roles.map((role) => (
      <MenuItem key={role.value} value={role.value}>
        {role.label}
      </MenuItem>
    ))}
  </TextField>
)

export default RoleSelect
