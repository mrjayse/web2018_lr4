function isArrayEqual(arr1,arr2){
	if(!Array.isArray(arr1) || !Array.isArray(arr2)){
		return false;
	}else if(arr1.length != arr2.length){
		return false;
	}
	
	for(var i = 0; i < arr1.length; i++){
		if(Array.isArray(arr1[i]) || Array.isArray(arr2[i])){
			if(!isArrayEqual(arr1[i],arr2[i])){
				return false;
			}
		}else if(arr1[i] !== arr2[i]){
			return false;
		}
	}
	
	return true;
}

console.log(isArrayEqual([], null)); // false or exception
console.log(isArrayEqual([], [])); // true
console.log(isArrayEqual([], ['test'])); // false
console.log(isArrayEqual([1, 2, 3], [1, 2, 3])); // true
console.log(isArrayEqual([1, [1, 2], 3], [1, [1, 2], 3])); // true
console.log(isArrayEqual([1, null, 3], [1, undefined, 3])); // false