import axios from 'axios'
import { store } from 'src/store/index'

const aws = axios.create({
  baseURL: 'https://toy0dek93c.execute-api.ap-southeast-1.amazonaws.com/Development/',
  timeout: 30000
})

// interceptors setup
aws.interceptors.request.use(config => {
  config.headers.common['Authorization'] = store.state.cognito.user.tokens.IdToken
  console.log(config.headers)
  return config
}, (error) => {
  return error
})

aws.interceptors.response.use(function (response) {
  console.log(response)
  return response
}, function (error) {
  if (!error.response) {
    console.log('axios - network error')
  } else {
    console.log(error.response.status + '-' + error.response.data)
  }

  return Promise.reject(error)
})

export default aws
