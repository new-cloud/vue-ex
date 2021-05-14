import request from '../util/helpers/request';
import ApiConfig from '@/config/api';
import { toast } from '@/util/lib';
// 代理验证API地址
const validator = {
	get(target, key) {
		if (key in target) {
			// console.log(key)
			return target[key];
		} else {
	  toast('API地址写错');
		}
	}
};

// 遍历配置文件
const finalApi = Object.keys(ApiConfig).reduce((finalApi, ModelKey) => {
	const Model = ApiConfig[ModelKey];
	const apis = Object.keys(Model).reduce((apis, apiKey) => {
		const api = Model[apiKey].split('|');
		const method = api.shift();
		const url = api.shift();
		if (method.toLowerCase() === 'get') {
			apis[apiKey] = (data = {}) => {
				return request.get({ url, data });
			};
		} else {
			apis[apiKey] = (data = {}, ...args) => {
				return request.post({ url, data, ...args });
			};
		}
		return apis;
	}, {});

	const proxyApis = new Proxy(
		apis, validator
	);
	finalApi[ModelKey] = proxyApis;
	return finalApi;
}, {});

const proxyFinalApi = new Proxy(
	finalApi, validator
);

export default proxyFinalApi;
