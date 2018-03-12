export const date = {
  // today
  today: new Date(),

  todayDateString: function () {
    var dt = new Date()

    var d = ('0' + dt.getDate()).slice(-2)
    var m = ('0' + (dt.getMonth() + 1)).slice(-2)
    var y = dt.getFullYear()
    return y + '-' + m + '-' + d
  },
  
  // yesterday
  yesterday: function () {
    var dt = new Date()

    return dt.setDate(dt.getDate() - 1)
  },
  
  yesterdayDateString: function () {
    var dt = new Date()

    var d = ('0' + (dt.getDate() - 1)).slice(-2)
    var m = ('0' + (dt.getMonth() + 1)).slice(-2)
    var y = dt.getFullYear()
    return y + '-' + m + '-' + d
  },

  getDateByDayAdded: function (val) {
    var dt = new Date()

    if (val === undefined || isNaN(val)) {
      return null
    }

    dt.setDate(dt.getDate() + val)

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
