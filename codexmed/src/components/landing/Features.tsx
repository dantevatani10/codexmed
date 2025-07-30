import Box from '@mui/material/Box'
// Using PigmentGrid (MUI v7) for simplified grid properties
// GridLegacy provides the traditional `item` API
import Grid from '@mui/material/GridLegacy'
import Typography from '@mui/material/Typography'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

const features = [
  'Turnos y pacientes en tiempo real',
  'Chat seguro entre médico y paciente',
  'Reportes PDF y Excel automáticos',
  'Facturación online integrada',
]

/**
 * Simple grid with key features.
 */
const Features = () => (
  <Box sx={{ py: { xs: 6, md: 10 } }}>
    <Typography variant="h4" component="h2" align="center" gutterBottom>
      Funcionalidades principales
    </Typography>
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {features.map((feature) => (
        <Grid xs={12} md={3} key={feature} sx={{ textAlign: 'center' }}>
          <CheckCircleOutlineIcon color="primary" sx={{ fontSize: 40 }} />
          <Typography sx={{ mt: 1 }}>{feature}</Typography>
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default Features
