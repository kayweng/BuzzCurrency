function formatDateToString (val, delimiter) {
  if (delimiter === undefined) {
    delimiter = '-'
  }

  var d = ('0' + val.getDate()).slice(-2)
  var m = ('0' + (val.getMonth() + 1)).slice(-2)
  var y = val.getFullYear()

  return y + delimiter + m + delimiter + d
}

const date = {
  // today
  today: new Date(),

  yesterday: function () {
    var dt = this.today
    return dt.setDate(dt.getDate() - 1)
  },

  todayDateString: function () {
    var dt = this.today
    var dtString = formatDateToString(dt, '-')

    return dtString
  },

  yesterdayDateString: function () {
    var dt = this.yesterday()
    var dtString = formatDateToString(dt, '-')

    return dtString
  },

  toISODateString: function (val) {
    var dt = val
    var dtString = formatDateToString(dt, '')
 
    return dtString
  },

  getDateByDayAdded: function (val) {
    var dt = new Date()

    if (val === undefined || isNaN(val)) {
      return null
    }
    
    dt.setDate(dt.getDate() + val)

    return dt
  },

  getDateByMonthdded: function (val) {
    var dt = new Date()

    if (val === undefined || isNaN(val)) {
      return null
    }

    dt.setDate(dt.getMonth() + 1 + val)

    return dt
  },

  getDateByYearAdded: function (val) {
    var dt = new Date()

    if (isNaN(val)) {
      return null
    }

    dt.setFullYear(dt.getFullYear() + val)

    return dt
  }
}

export { date }
