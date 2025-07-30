import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

interface Props {
  title: string
  value: string | number
}

const StatsCard = ({ title, value }: Props) => (
  <Card>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4">{value}</Typography>
    </CardContent>
  </Card>
)

export default StatsCard
