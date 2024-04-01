// Create a function called arrayGenerator with two parameters i.e start and end
function arrayGenerator(a,b){
// Create a variable for the resultant array 
    let result = []
// Create an if-else loop for the parameters
    if (a <= b){
// Iterate through the numbers between the start and end
        for (let x = a; x <= b; x++){
// Use the push method to add the result at the end of the array
            result.push(x)
        }
    } else {
        for (let x = a; x >= b; x--){
            result.push(x)
        }
    }
// Return the result of the loop
    return result
}
// This is an example in practice
let num1 = arrayGenerator(-1,7)
console.log(num1)
