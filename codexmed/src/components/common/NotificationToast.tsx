import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import type { AlertColor } from '@mui/material/Alert'

interface Props {
  open: boolean
  message: string
  severity?: AlertColor
  onClose: () => void
}

const NotificationToast = ({ open, message, severity = 'info', onClose }: Props) => (
  <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
    <Alert severity={severity} onClose={onClose} sx={{ width: '100%' }}>
      {message}
    </Alert>
  </Snackbar>
)

export default NotificationToast
