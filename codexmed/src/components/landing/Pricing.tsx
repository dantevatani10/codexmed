import Box from '@mui/material/Box'
import Grid from '@mui/material/GridLegacy'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const plans = [
  { name: 'B\u00e1sico', price: 'Gratis', patients: '50 pacientes', features: ['Agenda online', 'Chat b\u00e1sico'] },
  { name: 'Profesional', price: '$19/mes', patients: 'Pacientes ilimitados', features: ['Todas las funciones', 'Soporte prioritario'] },
  { name: 'Cl\u00ednicas', price: '$49/mes', patients: 'Multiusuario', features: ['Reportes avanzados', 'Roles y permisos'] },
]

/**
 * Simple pricing table.
 */
const Pricing = () => (
  <Box id="pricing" sx={{ py: { xs: 6, md: 10 } }}>
    <Typography variant="h4" component="h2" align="center" gutterBottom>
      Planes
    </Typography>
    <Grid container spacing={4} sx={{ mt: 2 }} justifyContent="center">
      {plans.map((plan) => (
        <Grid xs={12} md={4} key={plan.name}>
          <Paper sx={{ p: 4, textAlign: 'center' }} elevation={3}>
            <Typography variant="h6" gutterBottom>{plan.name}</Typography>
            <Typography variant="h4" color="primary" gutterBottom>
              {plan.price}
            </Typography>
            <Typography gutterBottom>{plan.patients}</Typography>
            {plan.features.map((f) => (
              <Typography key={f}>{f}</Typography>
            ))}
            <Button variant="contained" sx={{ mt: 2 }}>
              Suscribirme
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default Pricing
