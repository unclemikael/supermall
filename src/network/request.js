import axios from 'axios'
import baseURL from './baseURL'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 10000
  })

  // 2.axios的拦截器
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
    // console.log(err);
  })

  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    // console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
