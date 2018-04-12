import axios from 'axios'
// eyJraWQiOiJTeFJyXC9jbmZsWnFKM1wvOGx1VEpxOEtmb3hRamlHaWV3K3VZMTBlZEJGdnc9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJkZWE5NTU1My03ZmJmLTQ1OGEtYmM0My1kZjVjYmE2Y2EzM2MiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYmlydGhkYXRlIjoiMTk4Ni0wMy0yNiIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV94TmRyM2c2MnIiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiZGVhOTU1NTMtN2ZiZi00NThhLWJjNDMtZGY1Y2JhNmNhMzNjIiwiYXVkIjoiMmdrNDQ5azF2MjFiNnNjaTU0OWI0a2xzc3AiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTUyMzQ0NDA4NSwibmFtZSI6ImtheSB3ZW5nIiwicGhvbmVfbnVtYmVyIjoiKzYwMTY1NDkwMDc1IiwiZXhwIjoxNTIzNTAxNzM5LCJpYXQiOjE1MjM0OTgxMzksImVtYWlsIjoia2F5bGVrMjA3QGdtYWlsLmNvbSJ9.KkQbHR2J3F1R5372WRycNe8-cCtO6HhaNDQ89UZWfXg7Ar65A_v_KYgABtqMSPnHk409cniLL3FdmDn7kFmbwehQp9F-TDT-X1NKxKSFM81XEDcJJFzO_ckkOmp9gU5O_1QMRvZbKDTWudfwCHBg16dGJIP3Vcn9twG1AX8GplWDUV0kqtMSGIZgYv47_HS6rM-PUHuU_mVNoNLQReIKpt8F3WfDGtniUGacCefPQX1E7mYbwR_iB1cifzVRi004Eu7LFiyzcYuXdiMBPe4Nx5okvWMZU-MycUNwM8sRj6HosH5qae3gLS67XaxW7YfkHnKMswp7FwNUHg9LeMoNyg

const api = axios.create({
  baseURL: 'https://zmr7hv9k00.execute-api.ap-southeast-1.amazonaws.com/Stage',
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
  }
})

api.interceptors.request.use(request => {
  request.headers.common['Authorization'] = 'eyJraWQiOiJTeFJyXC9jbmZsWnFKM1wvOGx1VEpxOEtmb3hRamlHaWV3K3VZMTBlZEJGdnc9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJkZWE5NTU1My03ZmJmLTQ1OGEtYmM0My1kZjVjYmE2Y2EzM2MiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYmlydGhkYXRlIjoiMTk4Ni0wMy0yNiIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV94TmRyM2c2MnIiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiZGVhOTU1NTMtN2ZiZi00NThhLWJjNDMtZGY1Y2JhNmNhMzNjIiwiYXVkIjoiMmdrNDQ5azF2MjFiNnNjaTU0OWI0a2xzc3AiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTUyMzQ0NDA4NSwibmFtZSI6ImtheSB3ZW5nIiwicGhvbmVfbnVtYmVyIjoiKzYwMTY1NDkwMDc1IiwiZXhwIjoxNTIzNTAxNzM5LCJpYXQiOjE1MjM0OTgxMzksImVtYWlsIjoia2F5bGVrMjA3QGdtYWlsLmNvbSJ9.KkQbHR2J3F1R5372WRycNe8-cCtO6HhaNDQ89UZWfXg7Ar65A_v_KYgABtqMSPnHk409cniLL3FdmDn7kFmbwehQp9F-TDT-X1NKxKSFM81XEDcJJFzO_ckkOmp9gU5O_1QMRvZbKDTWudfwCHBg16dGJIP3Vcn9twG1AX8GplWDUV0kqtMSGIZgYv47_HS6rM-PUHuU_mVNoNLQReIKpt8F3WfDGtniUGacCefPQX1E7mYbwR_iB1cifzVRi004Eu7LFiyzcYuXdiMBPe4Nx5okvWMZU-MycUNwM8sRj6HosH5qae3gLS67XaxW7YfkHnKMswp7FwNUHg9LeMoNyg'
  return Promise.resolve(request)
}, (error) => {
  return Promise.reject(error)
})

api.interceptors.response.use(response => {
  return response
}, (error) => {
  console.log(JSON.stringify(error))
  if (error.response && error.response.status === 401) {
    console.log('unauthorized, logging out ...')
  } else {
    console.log('unknown error')
  }
  return error
})

export default api

