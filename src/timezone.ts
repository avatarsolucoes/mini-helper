import moment, { MomentInput } from 'moment-timezone'

export function incrementHourTimezone(
  hour: MomentInput,
  timezone = 'America/Fortaleza',
  format = 'HH:mm:ss'
): string {
  const timeLocal = moment(hour, 'HH:mm:ss').tz(timezone)
  const offset = timeLocal.utcOffset() * -1
  return moment(hour, 'HH:mm:ss').add(offset, 'minutes').format(format)
}

export function incrementDateTimeTimezone(
  datetime: MomentInput,
  timezone = 'America/Fortaleza',
  format = 'YYYY-MM-DD HH:mm:ss'
): string {
  const inFormat = 'YYYY-MM-DD HH:mm:ss'
  const timeLocal = moment(datetime, inFormat).tz(timezone)
  const offset = timeLocal.utcOffset() * -1
  return moment(datetime, inFormat).add(offset, 'minutes').format(format)
}
