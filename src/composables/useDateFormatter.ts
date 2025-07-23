import moment from 'moment'

function useDateFormatter() {

  function formatToWeekdayTime(date: string):string {
    return moment(date).format('dddd, HH:mm');
  }

  function formatToShortWeekdayDay(date: string):string {
    return moment(date, 'YYYY-MM-DD').format('ddd DD')
  }

  return {
    formatToWeekdayTime,
    formatToShortWeekdayDay
  }
}

export default useDateFormatter;