// import axios from 'axios'
// import qs from 'qs'

// // 区分环境变量
// switch (process.env.NODE_ENV) {
//   case 'production':
//     axios.defaults.baseURL = '生产环境URL'
//     break
//     // 相应的需要在package.json里面 配置启动项: "serve:production": "set NODE_ENV=production&&vue-cli-service serve",
//   case 'test':
//     axios.defaults.baseURL = '测试环境URL'
//     break
//     // 相应的需要在package.json里面 配置启动项: "serve:test": "set NODE_ENV=test&&vue-cli-service serve",
//   default :
//     axios.defaults.baseURL = 'http://10.201.7.116:880'
// };

// // 设置超时时间
// axios.defaults.timeout = 10000
// // 设置跨域是否可以携带凭证
// axios.defaults.withCredentials = true
// // 设置请求传递给后端的数据格式
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded' // 最常见的还有josn: application/json
// // transformResponse 在传递给 then/catch 前，允许修改响应数据
// axios.defaults.transformResponse = data => qs.stringify(data)

// // 设置请求拦截器
// axios.interceptors.request.use(config => {
//   const token = localStorage.getItem('token')
//   // 如果有token就将token加载请求头里
//   token && (config.headers.Authorization = token)
//   return config
// }, error => {
//   return Promise.reject(error)
// })

// // 设置响应拦截器
// // axios.defaults.validateStatus = status => {  //一般都不需要配置此项
// //   //自定义响应成功的HTTP状态码
// //   return /^(2|3)\d{2}$/.test(status);
// // }
// axios.interceptors.response.use(response => {

// }, error => {
//   const { response } = error
//   if (response) {
//     switch (response.status) {
//       case 401: // 一般是权限,如: 用户未登录
//         // 这里可以弹出登录框,让用户登录
//         break
//       case 403: // 服务器拒绝执行,如: token过期
//         // 提示用户重新登录
//         break
//       case 403: // 服务器拒绝执行,如: token过期
//         // 提示用户重新登录
//         break
//       case 404: // 找不到页面或者路由
//         // 跳转到404页
//         break
//       // ....等等后面依次配置
//       default:
//         break
//     }
//     // 都要弹出提示信息?由后端提供
//     // return response.msg;
//   } else {
//     // 服务器没有返回结果
//     // if(!window.navigator.onLine){     //判断是否断网
//     //   //断网处理：可以跳转到断网提示页
//     //   router.push('断网页');
//     // }
//     return Promise.reject(error)
//   }
// })
