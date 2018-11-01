/**
 * Dumps variable to console
 * @param arg - any variable for dumping
 */
function varDump(arg){
	var type = typeof arg;
	if(type == "object" && arg != null){
		type += "("+Object.keys(arg).length+")"; 
	}
	console.log("type: "+type+", value: "+arg);
}