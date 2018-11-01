/**
 * For use in filterArray function
 * Checks that the number is odd
 * @param {number} number - number for checking
 * @return {boolean} returns true if number is odd
 */
var odd = function(number) {
  return number % 2 === 1;
}


/**
 * For use in filterArray function
 * Checks that the number is even
 * @param {number} number - number for checking
 * @return {boolean} returns true if number is even
 */
var even = function(number) {
  return number % 2 === 0;
}


/**
 * For use in filterArray function
 * Checks that number is not 0
 * @param {number} number - number for checking
 * @return {boolean} false if given number is 0
 */
var eliminateZero = function(number) {
	return number !== 0;
}

/**
 * For use in filterArray function
 * Checks that index of element is odd
 * @param {number} number - unused
 * @param {number} idx - index of element in array
 * @return {boolean} returns true if index is odd
 */
var everySecond = function(number, idx) {
	return idx %2 == 1;
}


/**
 * Filters array by given function.
 * If filter returns true - element will be copied to result array
 * @param {array} arr - array for filtring
 * @param {function} filter - callback for making decision
 * @return {array} result array
 */
function filterArray(arr, filter) {
  var resultArray = [];

  for (i = 0; i < arr.length; i++) {
    if (filter(arr[i],i)) {
		resultArray.push(arr[i]);
    }
  }

  return resultArray;
}



var arr = [0, 1, 2, 3, 4, 0, 5];



console.log(filterArray(arr, odd)); // [1, 3, 5]

console.log(filterArray(arr, even)); // [0, 2, 4, 0]

console.log(filterArray(arr, eliminateZero)); // [1, 2, 3, 4, 5]

console.log(filterArray(arr, everySecond)); // [1, 3, 0]