import axios from 'axios'
// import store from '../store'

axios.defaults.baseURL = 'https://api.example.com'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(req => {
  return req
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  return res
}, error => {
  return Promise.reject(error)
})

export const testApi = () => {
  return axios.get('/test')
}
