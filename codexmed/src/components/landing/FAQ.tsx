import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const faqs = [
  { q: '¿Puedo usar MEDM8 como m\u00e9dico individual?', a: 'S\u00ed, est\u00e1 pensado tanto para profesionales independientes como para cl\u00ednicas.' },
  { q: '¿Qu\u00e9 pasa si no tengo conocimientos t\u00e9cnicos?', a: 'La plataforma es muy intuitiva y ofrecemos soporte para ayudarte.' },
  { q: '¿Se puede pagar con MercadoPago?', a: 'Pr\u00f3ximamente agregaremos distintos m\u00e9todos de pago, incluyendo MercadoPago.' },
  { q: '¿Qu\u00e9 tan segura est\u00e1 mi informaci\u00f3n?', a: 'MEDM8 cumple est\u00e1ndares HIPAA y mantiene registros cifrados.' },
]

/**
 * Frequently asked questions section.
 */
const FAQ = () => (
  <Box sx={{ py: { xs: 6, md: 10 } }}>
    <Typography variant="h4" component="h2" align="center" gutterBottom>
      Preguntas frecuentes
    </Typography>
    {faqs.map((item) => (
      <Accordion key={item.q} sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{item.q}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{item.a}</Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
)

export default FAQ
