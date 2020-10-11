import { post } from '../axios';

export function login() {
	return post('/login');
}
