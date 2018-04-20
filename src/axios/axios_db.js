import axios from 'axios'
import { store } from 'src/store/index'

const aws = axios.create({
  baseURL: 'https://nyandnoemj.execute-api.ap-southeast-1.amazonaws.com/Stage/',
  timeout: 30000,
  // headers: {
  //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Authorization, Content-Type, Accept',
    'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
  // }
})

// interceptors setup
aws.interceptors.request.use(config => {
  config.headers.common['Authorization'] = store.state.cognito.user.tokens.IdToken
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
