import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import AppRouter from './router/AppRouter'
import theme from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppRouter />
  </ThemeProvider>
)

export default App
