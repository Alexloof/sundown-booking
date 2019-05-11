import { Moment } from 'moment'

const validateTime = (time: Moment): boolean => {
  const day = time.weekday()
  if (day === 0 || day === 6) {
    return true
  }
  const hour = time.hour()
  if (hour > 15 && hour < 23) {
    return true
  }
  return false
}

export default validateTime
