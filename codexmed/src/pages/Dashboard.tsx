import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

export default function Dashboard() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 2,
        }}
      >
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Cirugías</Typography>
          <Typography variant="h4">0</Typography>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Ingresos</Typography>
          <Typography variant="h4">$0</Typography>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Próximos turnos</Typography>
          <Typography variant="h4">0</Typography>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Mensajes</Typography>
          <Typography variant="h4">0</Typography>
        </Paper>
      </Box>
    </div>
  )
}
