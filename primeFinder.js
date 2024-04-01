// Create a function called primeFind that takes in an array as a parameter.
function primeFind(num){
// The filter method is used to create a new array with the elements that pass the conditions.
    return num.filter(x => {
// Check if the elements are 1 or less that 1 since they are not prime numbers.
        if (x <= 1) return false;
// Iterate through the elements from 2 to square root of the x using a for loop 
        for (let i = 2; i <= Math.sqrt(x); i++) {
// Checks for divisibility of x with i
            if (x % i === 0) return false;
// If x is not divisible it returns true
        }
        return true;
    });
}

// An example in practice
let num1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(primeFind(num1))