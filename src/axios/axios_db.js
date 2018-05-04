import axios from 'axios'
import { store } from 'src/store/index'

const aws = axios.create({
  baseURL: 'https://ntkllpb1qj.execute-api.ap-southeast-1.amazonaws.com/Development/',
  timeout: 30000
})

aws.interceptors.request.use(config => {
  config.headers.common['Authorization'] = store.state.cognito.user.tokens.IdToken
  return config
}, (error) => {
  return error
})

aws.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (!error.response) {
    console.log('axios - network error')
  } else {
    console.log(error.response.status + '-' + error.response.data)
    if (error.response.state == '401') {
      console.log('logout user here ...')
    }
  }

  return Promise.reject(error)
})

export default aws
