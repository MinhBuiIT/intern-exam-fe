export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export const datePlusDay = (date: Date, days: number) => {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

export const mergeDateTime = (date: Date, time: Date) => {
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const mergedDate = new Date(date)
  mergedDate.setHours(hours, minutes, 0, 0)
  return mergedDate
}

export const formatStringText = (text: string) => {
  return text.replace(/\t/g, '').trim()
}
