import axios from 'axios'
import { Toast } from 'vant'

const service = axios.create({
  baseURL: 'http://124.223.73.204:8080',
  timeout: 10000
})
// 请求拦截器
service.interceptors.request.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截器
service.interceptors.response.use(function (response) {
  return response
}, function (error) {
  console.log(error)
  Toast.fail(error.response.data.message)
  return Promise.reject(error)
})
export default service
