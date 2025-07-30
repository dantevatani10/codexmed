import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'

const steps = [
  'Registrate como m\u00e9dico o cl\u00ednica',
  'Carg\u00e1 tus horarios, pacientes y turnos',
  'Envi\u00e1 recetas, organiz\u00e1 cirug\u00edas y calcul\u00e1 tus sueldos autom\u00e1ticamente',
  'Escal\u00e1 tu pr\u00e1ctica m\u00e9dica con MEDM8.',
]

/**
 * Simple stepper describing usage.
 */
const HowItWorks = () => (
  <Box sx={{ py: { xs: 6, md: 10 } }}>
    <Typography variant="h4" component="h2" align="center" gutterBottom>
      \u00bfc\u00f3mo funciona?
    </Typography>
    <Stepper alternativeLabel sx={{ mt: 4 }}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </Box>
)

export default HowItWorks
