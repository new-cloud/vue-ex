import request from '../util/helpers/request'
import ApiConfig from '@/config/api'
import {toast} from '@/util/lib'
// 代理验证API地址
const validator = {
  get (target, key) {
    if (key in target) {
      // console.log(key)
      return target[key]
    } else {
	  toast('API地址写错')
    }
  }
}

// 遍历配置文件
let finalApi = Object.keys(ApiConfig).reduce((finalApi, ModelKey)=> {
  let Model = ApiConfig[ModelKey]
  let apis = Object.keys(Model).reduce((apis, apiKey) => {
    let api = Model[apiKey].split('|')
    let method = api.shift()
    let url = api.shift()
    if (method.toLowerCase() === 'get') {
      apis[apiKey] = (data = {}) => {
        return request.get({url, data})
      }
    } else {
      apis[apiKey] = (data = {},...args) => {
        return request.post({url, data,...args})
      }
    }
    return apis
  }, {})

  let proxyApis = new Proxy(
    apis, validator
  )
  finalApi[ModelKey] = proxyApis
  return finalApi
}, {})

let proxyFinalApi = new Proxy(
  finalApi, validator
)

export default proxyFinalApi
