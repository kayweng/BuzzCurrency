import axios from 'axios'

const actions = {
  undo () {

  },
  async getUserProfileInfo ({commit}, payload) {
    axios.defaults.headers.common['Authorization'] = 'eyJraWQiOiJTeFJyXC9jbmZsWnFKM1wvOGx1VEpxOEtmb3hRamlHaWV3K3VZMTBlZEJGdnc9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJkZWE5NTU1My03ZmJmLTQ1OGEtYmM0My1kZjVjYmE2Y2EzM2MiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYmlydGhkYXRlIjoiMTk4Ni0wMy0yNiIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV94TmRyM2c2MnIiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiZGVhOTU1NTMtN2ZiZi00NThhLWJjNDMtZGY1Y2JhNmNhMzNjIiwiYXVkIjoiMmdrNDQ5azF2MjFiNnNjaTU0OWI0a2xzc3AiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTUyMzQ2NTk3MiwibmFtZSI6ImtheSB3ZW5nIiwicGhvbmVfbnVtYmVyIjoiKzYwMTY1NDkwMDc1IiwiZXhwIjoxNTIzNDY5NTcyLCJpYXQiOjE1MjM0NjU5NzIsImVtYWlsIjoia2F5bGVrMjA3QGdtYWlsLmNvbSJ9.FKg6lHrIx0NOkpOA3F5frE2DfHOw8kciRxwC5ujQUYAdAg-wDKF2NmbQAq-k9KFWhpgEjjF4kLg5aNUHBwmGTl3TaM6KqxsKZec5HqOkjuFlyWxcCxr0xqhpfVOcKW_8bvmqVGKD7K60lkXeaVacucTuVEWHa_TJG_ikOlWd7zSvLV1N8nRRweDdWhgVIGEJQsI0arDUfB2PNiYbghFofg4u5Wdww9KElQq54aqbTNXq1_7sbcfBDvOsYmES1y882wjFu3gTYUfvu39oJtor5bmr7DJ3ccqlci8pAdK0yMBk5OhQhT8OGEEHCmcNq_aLOX7Yzq0LGqYHNN9gMHZuJw'

    if (payload !== null) {
      return new Promise((resolve, reject) => {
        axios.get('/user/' + payload)
        .then(response => {
          commit('setUserProfileState', response.data)
          resolve(response)
        }, error => {
          reject(error)
        })
      })
    }
  }
}

export default actions
