import axios from 'axios'
import { store } from 'src/store/index'

const aws = axios.create({
  baseURL: 'https://nyandnoemj.execute-api.ap-southeast-1.amazonaws.com/Stage/',
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With,Authorization, Content-Type, Accept',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
  }
})

// interceptors setup
aws.interceptors.request.use(config => {
  config.headers.common['Authorization'] = store.state.cognito.user.tokens.IdToken
  return config
}, (error) => {
  return error
})

aws.interceptors.response.use(response => {
  return response
}, (error) => {
  console.log(error)
  if (error.response && error.response.status === 401) {
    console.log('unauthorized, logging out ...')
  } else {
    console.log('unknown error')
  }
  return error
})

export default aws
