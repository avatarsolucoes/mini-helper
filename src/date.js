import moment from 'moment-timezone'

/**
 * @function timeRest
 * @param {Number} inMinutes integer
 */
export function timeRest(inMinutes) {
  const minutes = inMinutes < 0 ? inMinutes * -1 : inMinutes
  const minutos = 1
  const horas = 60 // minuto * 60
  const dias = 1440 // hora * 24
  const semanas = 10080 // dias * 7
  const meses = 302400 // semanas * 4
  const anos = 3628800 // meses * 12

  // let valorInicio = parseInt(minutes, 10) || 0;
  let valorInicio = minutes
  let result = ''

  if (valorInicio > anos) {
    const ano = Math.floor(valorInicio / anos)
    result += `${ano}y `
    valorInicio -= anos * ano
  }

  if (valorInicio > meses) {
    const mes = Math.floor(valorInicio / meses)
    result += `${mes}mo `
    valorInicio -= meses * mes
  }

  if (valorInicio > semanas) {
    const semana = Math.floor(valorInicio / semanas)
    result += `${semana}se `
    valorInicio -= semanas * semana
  }

  if (valorInicio > dias) {
    const dia = Math.floor(valorInicio / dias)
    result += `${dia}d `
    valorInicio -= dias * dia
  }

  if (valorInicio > horas) {
    const hora = Math.floor(valorInicio / horas)
    result += `${hora}h `
    valorInicio -= horas * hora
  }

  if (valorInicio > minutos) {
    const minuto = Math.floor(valorInicio / minutos)
    result += `${minuto}m`
  } else if (valorInicio > 0) {
    const mm = valorInicio * 60
    result += `${Math.floor(mm)}seg`
  }

  // const minuto = valorInicio;
  // result += `${minuto}m `;

  return result
}

export function getUpTime(init) {
  const ms = moment().diff(moment(init, 'YYYY-MM-DD HH:mm:ss'))
  return timeRest(moment.duration(ms).asMinutes()) || 0
}

/**
 * @function diffExpires
 * @param {number} expires
 * @param {number} dateNow
 * @returns {number} minutes
 */
export function diffExpires(expires, dateNow = Date.now()) {
  const ms = moment(expires).diff(moment(dateNow))
  return moment.duration(ms).asMinutes()
}

/**
 * @function dateToStrTimeZone
 * @param {String|Date} date
 * @param {String} to date format
 * @param {String} timezone
 * @returns {String} data formated (to)
 * @example
 * dateToStrTimeZone(new Date(), 'YYYY-MM-DD HH:mm:ss', 'America/Fortaleza');
 */
export function dateToStrTimeZone(
  date,
  to = 'YYYY-MM-DD HH:mm:ss',
  timezone = 'America/Fortaleza'
) {
  if (!timezone) return moment(date).format(to)
  return moment(date).tz(timezone).format(to)
}

/**
 *
 * @param {String} strdate
 * @param {String} from date format
 * @param {String} to date format
 * @returns {String} data formated (to)
 * @example
 * strDateFromTo('01/12/19', 'DD/MM/YY', 'YYY-MM-DD')
 */
export function strDateFromTo(strdate, from, to = 'YYYY-MM-DD HH:mm:ss') {
  if (!strdate) return moment().format(to)
  if (strdate instanceof Date) return moment(strdate).format(to)
  if (moment.isMoment(strdate)) return strdate.format(to)

  return moment(strdate, from).format(to)
}

/**
 *
 * @param {*} date
 * @param {*} format
 */
export function rangedMonth(date, format) {
  const r = {
    start: moment(date).startOf('month'),
    end: moment(date).endOf('month')
  }

  if (typeof format === 'boolean') {
    if (format) return { start: r.start, end: r.end }
    return { start: r.toDate(), end: r.toDate() }
  }

  const defFormat = format || 'YYYY-MM-DD HH:mm:ss'
  return {
    start: moment(date).startOf('month').format(defFormat),
    end: moment(date).endOf('month').format(defFormat)
  }
}

/**
 * @function extractOfDateTime
 * @param {Date|String} datetime - string YYYY-MM-DD HH:mm:ss
 * @param {String} format date format ex: 'YYYY-MM-DD HH:mm:ss'
 * @param {String} timezone
 */
export function extractOfDateTime(datetime, format, timezone) {
  const all = dateToStrTimeZone(datetime, format, timezone)
  const spliter = all.split(' ')
  const time = spliter.length > 1 ? spliter[1] : '00:00:00'
  const date = spliter.length > 0 ? spliter[0] : 'Invalid date'
  return {
    date,
    time
  }
}
