import { get, post } from '../axios';

export function index() {
	return get('/index');
}

export function fileUpload(param) {
	return post('/index/file_upload', param);
}
