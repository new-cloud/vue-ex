// import qs from 'qs'

// // 根据环境变量进行接口区分
// let baseURL = ''
// const baseURLArr = [
//   {
//     type: 'development',
//     url: '/development'
//   },
//   {
//     type: 'test',
//     url: '/test'
//   },
//   {
//     type: 'production',
//     url: '/production'
//   }
// ]
// baseURLArr.forEach(item => {
//   if (process.env.NODE_ENV === item.type) {
//     baseURL = 'ip' + item.url
//   }
// })
// export default function request (url, options = {}) {
//   url = baseURL + url
//   // 默认请求方式为get
//   options = Object.assign({
//     method: 'GET'
//   }, options)
//   // 封装get请求
//   // if()
// }
