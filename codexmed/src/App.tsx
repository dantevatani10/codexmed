import { CssBaseline } from '@mui/material'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {
  const element = useRoutes(routes)
  return (
    <>
      <CssBaseline />
      {element}
    </>
  )
}
