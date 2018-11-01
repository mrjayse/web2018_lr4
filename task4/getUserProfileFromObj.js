/**
 * Returns user profile object from given if it contains username and email
 * @param {object} obj - possible user object
 * @return {object} returns object with username and email if given contains both, null in other cases
 */
function getUserProfileFromObj(obj){
	if(typeof obj == "object" && "username" in obj && "email" in obj){
		return {username: obj.username, email: obj.email};
	}else{
		return null;
	}
}

// вернет объект { username: 'Vasya', email: 'user@mail.ru' }
console.log(getUserProfileFromObj({id: 1, username: 'Vasya', email: 'user@mail.ru'}));

// следующие вызовы должны вернуть null или false
console.log(getUserProfileFromObj({user: 'Vasya', email: 'user@mail.ru'}));
console.log(getUserProfileFromObj({}));
console.log(getUserProfileFromObj());
console.log(getUserProfileFromObj(1));