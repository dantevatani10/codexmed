import Box from '@mui/material/Box'
import Grid from '@mui/material/GridLegacy'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

const testimonials = [
  { name: 'Dr. Juan P\u00e9rez', specialty: 'Cardi\u00f3logo', text: 'MEDM8 simplific\u00f3 mi consulta diaria y me permiti\u00f3 enfocarme en mis pacientes.' },
  { name: 'Dra. Ana L\u00f3pez', specialty: 'Pediatra', text: 'Ahora puedo gestionar turnos y recetas desde cualquier lugar. Es genial.' },
  { name: 'Cl\u00ednica Central', specialty: 'Instituci\u00f3n', text: 'La soluci\u00f3n perfecta para coordinar a todo nuestro equipo m\u00e9dico.' },
]

/**
 * Testimonials from mock users.
 */
const Testimonials = () => (
  <Box sx={{ py: { xs: 6, md: 10 } }}>
    <Typography variant="h4" component="h2" align="center" gutterBottom>
      Testimonios
    </Typography>
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {testimonials.map((t) => (
        <Grid xs={12} md={4} key={t.name}>
          <Paper sx={{ p: 3, textAlign: 'center' }} elevation={2}>
            <Avatar sx={{ mx: 'auto', mb: 2 }}>{t.name.charAt(0)}</Avatar>
            <Typography variant="h6">{t.name}</Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {t.specialty}
            </Typography>
            <Typography>{t.text}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default Testimonials
