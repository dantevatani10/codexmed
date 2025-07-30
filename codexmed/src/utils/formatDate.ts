export const formatDate = (date: string | Date) => {
  return new Intl.DateTimeFormat('es-AR').format(new Date(date))
}
