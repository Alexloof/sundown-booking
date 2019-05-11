import { Moment } from 'moment'
import moment from 'moment'

// validate time for ordering food & drinks
const validateTime = (time: Moment): boolean => {
  if (time.isBefore(moment(Date.now()))) {
    return false
  }
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
