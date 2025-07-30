import Button from '@mui/material/Button'
import type { ChangeEvent } from 'react'

interface Props {
  onFileSelect: (file: File) => void
}

const FileUploader = ({ onFileSelect }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) onFileSelect(file)
  }

  return (
    <Button variant="contained" component="label">
      Subir Archivo
      <input type="file" hidden onChange={handleChange} />
    </Button>
  )
}

export default FileUploader
