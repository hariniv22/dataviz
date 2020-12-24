// An unsorted array
numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order and assign the results to a variable
var sortedArray = numArray.sort((a,b) => b-a);

// Print the results to the console
console.log(sortedArray);

// Sort the array in descending order using an arrow function
// and assign the results to a variable and print to the console
//var sortedDesArray = numArray.sort((a,b) => a-b);


// Reverse the array order
var sortedDesArray = console.log(sortedArray.reverse());

// Sort the array in ascending order using an arrow function
var sortedAscArray = numArray.sort((a,b) => a-b);


// Slice the first five elements of the sortedAscending array, assign to a variable
var slicedArray = console.log(sortedAscArray.slice(0,5));