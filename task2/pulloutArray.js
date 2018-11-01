/**
 * Places the elements of nested arrays in the parent array
 * @param {array} arr - array for processing
 * @return {array} processed array
 */
function pulloutArray(arr){
	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] == "object" && Array.isArray(arr[i])){
			var addCount = 0;
			for(var j = 0; j < arr[i].length; j++){
				if((typeof arr[i][j]) == "number" && !isNaN(arr[i][j])){
					arr.splice(i+addCount+1, 0, arr[i][j]);
					addCount++;
				}
			}
			arr.splice(i,1);
			i += addCount-1;
		}else if((typeof arr[i]) != "number" || isNaN(arr[i])){
			arr.splice(i,1);
			i--;
		}
	}
	return arr;
}