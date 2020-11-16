
// 工具库

export function numConvert(num){
	if(num > 10000){
		num = (num/10000).toFixed(2)+'W';
	}else if(num > 1000){
		num = (num/1000).toFixed(2)+'K';
	}
	return num;
}