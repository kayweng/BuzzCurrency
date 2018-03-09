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
  yesterday: new Date().getDate(-1),
  yesterdayDateString: function () {
    var dt = new Date()

    var d = ('0' + (dt.getDate() - 1)).slice(-2)
    var m = ('0' + (dt.getMonth() + 1)).slice(-2)
    var y = dt.getFullYear()
    return y + '-' + m + '-' + d
  }
}
