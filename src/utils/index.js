
// 工具库

/**
 * 生成[n,m]的随机整数
 * @param minNum 开始的值
 * @param maxNum 结束的值
 * @returns {Function}
 * @constructor
 */
export function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}
/**
 * 1000转1k 10000转1w
 * @param num 数值
 * @returns {Function}
 * @constructor
 */
export function numConvert(num) {
	if (num > 10000) {
		num = (num / 10000).toFixed(2) + 'W';
	} else if (num > 1000) {
		num = (num / 1000).toFixed(2) + 'K';
	}
	return num;
}
