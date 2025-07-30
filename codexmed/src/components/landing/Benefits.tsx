import Box from '@mui/material/Box'
import Grid from '@mui/material/GridLegacy'
import Typography from '@mui/material/Typography'

/**
 * Benefits for doctors, clinics and patients.
 */
const Benefits = () => (
  <Box id="benefits" sx={{ py: { xs: 6, md: 10 } }}>
    <Typography variant="h4" component="h2" align="center" gutterBottom>
      Beneficios
    </Typography>
    <Grid container spacing={4} sx={{ mt: 2 }}>
      <Grid xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
          Para médicos particulares
        </Typography>
        <Typography>Ahorrá tiempo administrativo.</Typography>
        <Typography>Cobá por adelantado sin intermediarios.</Typography>
        <Typography>Consultá tu agenda desde cualquier lugar.</Typography>
      </Grid>
      <Grid xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
          Para clínicas / centros
        </Typography>
        <Typography>Multiusuario y multiespecialidad.</Typography>
        <Typography>Roles y permisos por personal.</Typography>
        <Typography>Estadísticas y reportes grupales.</Typography>
      </Grid>
      <Grid xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
          Para pacientes
        </Typography>
        <Typography>Recibí recetas y turnos por WhatsApp.</Typography>
        <Typography>Consultas organizadas.</Typography>
        <Typography>Carga de estudios previa a la consulta.</Typography>
      </Grid>
    </Grid>
  </Box>
)

export default Benefits
