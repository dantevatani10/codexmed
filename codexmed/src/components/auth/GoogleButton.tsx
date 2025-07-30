import Button from '@mui/material/Button'
import GoogleIcon from '@mui/icons-material/Google'
import CircularProgress from '@mui/material/CircularProgress'
import type { ButtonProps } from '@mui/material/Button'

interface Props extends ButtonProps {
  loading?: boolean
}

/**
 * Button wrapper to initiate Google OAuth login.
 */
const GoogleButton = ({ loading, ...props }: Props) => (
  <Button
    startIcon={<GoogleIcon />}
    variant="outlined"
    fullWidth
    disabled={loading}
    {...props}
  >
    {loading ? <CircularProgress size={20} /> : 'Continuar con Google'}
  </Button>
)

export default GoogleButton
