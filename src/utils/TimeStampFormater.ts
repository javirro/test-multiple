import { format, fromUnixTime, formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale'
import { Locale } from 'date-fns'

class TimestampFormatter {
  // Formatear un timestamp Unix al formato dd/mm/yyyy
  static toDDMMYYYY(unixTimestamp: number): string {
    return format(fromUnixTime(unixTimestamp), 'dd/MM/yyyy')
  }

  // Formatear un timestamp Unix al formato dd-mm-yyyy
  static toDDMMYYYYWithDash(unixTimestamp: number): string {
    return format(fromUnixTime(unixTimestamp), 'dd-MM-yyyy')
  }

  // Formatear un timestamp Unix al formato mm/dd/yyyy
  static toMMDDYYYY(unixTimestamp: number): string {
    return format(fromUnixTime(unixTimestamp), 'MM/dd/yyyy')
  }

  // Formatear un timestamp Unix al formato mm-dd-yyyy
  static toMMDDYYYYWithDash(unixTimestamp: number): string {
    return format(fromUnixTime(unixTimestamp), 'MM-dd-yyyy')
  }

  // Formatear un timestamp Unix con el nombre completo del mes
  static toFullMonthFormat(unixTimestamp: number): string {
    return format(fromUnixTime(unixTimestamp), 'MMMM dd, yyyy', { locale: es as Locale })
  }

  // Formatear un timestamp Unix con el nombre abreviado del mes
  static toShortMonthFormat(unixTimestamp: number, locale: Locale): string {
    return format(fromUnixTime(unixTimestamp), 'MMM dd, yyyy', { locale })
  }

  // Calcular "hace X tiempo" (hace minutos, horas, días)
  static timeAgo(unixTimestamp: number): string {
    const date = fromUnixTime(unixTimestamp)
    return formatDistanceToNow(date, { addSuffix: true, locale: es as Locale })
  }
}

export default TimestampFormatter
