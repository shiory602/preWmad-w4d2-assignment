// DONE

// Create a function that takes an array of arrays with numbers. 
// Return a new (single) array with the largest numbers of each.

//you code here

const findLargestNums = function(arr) {
	
	let largestNumber0 = arr[0][0];
	let largestNumber1 = arr[1][0];
	let largestNumber2 = arr[2][0];

		for (i = 0; i < arr[0].length; i++) {
			if (arr[0][i] > largestNumber0) {
				largestNumber0 = arr[0][i];
			}
		}

		for (i = 0; i < arr[1].length; i++) {
			if (arr[1][i] > largestNumber1) {
				largestNumber1 = arr[1][i];
			}
		}

		for (i = 0; i < arr[2].length; i++) {
			if (arr[2][i] > largestNumber2) {
				largestNumber2 = arr[2][i];
			}
		}

	return largestNumber0 + "," + largestNumber1 + "," + largestNumber2;

}


console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); 
// ➞ [7, 90, 2]

console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); 
// ➞ [-34, -2, 7]

console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])); 
// ➞ [0.7634, 9.32, 9]