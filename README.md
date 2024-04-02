# Code-challenge-wk-2
## 2024-04-01
#### By Eric Njama
## Description
## 1.stringSwap.js
This is a function that is used to identify the case of each letter in a string and swapping it to the opposite case. 
```js
    function stringSwap(line){
```
Then a variable called **result** is created where the final string will be stored. The function then iterates through each character in the string and checks if the upper/lower case conditions are met. It then returns the opposite case of the character. 
```js
    let result = ""
    for(let x = 0; x < line.length; x++){
        let letter = line.charAt(x)
        if (letter === letter.toUpperCase()){
            result += letter.toLowerCase()
        } else { 
            result += letter.toUpperCase()
        }
    }
```
The functions finally returns the swapped string. 
```js
     return result
    }
```
After the function, we then have an illustrative example using a string **name** to show how the function would work if used in a project. 
```js
    let name = "Victor Kuria Is Tall"
    console.log(stringSwap(name))
```
## 2.arrayGenerator.js
This is a function that generates an array of numbers between two specific integers. The function **arrayGenerator**, which takes in two integers is created.
```js
    function arrayGenerator(a,b){
    }
```
Within the function, a variable **result** is created. This is where the resultant aray will be stored. 
```js
    let result = []
```
An **if-else** loop is then created for the parameters. It iterates through each nuber between the first and the last integers adding elements into the new array using the **push()** method. 
```js
        if (a <= b){
            for (let x = a; x <= b; x++){
            result.push(x)
        }
    } else {
        for (let x = a; x >= b; x--){
            result.push(x)
        }
    }
    return result

```
An illustrative example is then used to show the functionality of the function in an array **num1**.
```js
    let num1 = arrayGenerator(-1,7)
    console.log(num1)
```
## 3.primeFinder.js
This is a function that efficiently filters through prime numbers from an array. A function called **primeFind** is first created; which takes in an array as a parameter. 
```js
    function primeFind(num){

    }
```
The filter method is then used to create a new array whereby iteration through each element is initiated. It filters out numbers less than 1 (they cannot be prime numbers) and for each remainder, checks divisibility by any number from 2 to the squareroot of the number. Divisible numbers are filtered out and the resultant array contains prime numbers only. 
```js
    return num.filter(x => {
        if (x <= 1) return false;
        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0) return false;
        }
        return true;
    });
```
There then follows an illustrative example using the **num1** array to demostrate its functionality. 
```js
    let num1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    console.log(primeFind(num1))
```
## Live link
``https://github.com/EricNjama/code-challenge-wk-2.git``
## Installation 
There's really no installlation required. Just call the functions in your project.
## Technologies used
The technology used for the above functions is javascript 
## Support and contact details
``github.com/EricNjama``

``eric.njama@student.moringaschool.com``
## License 
The contents of this file are licensed under the MIT license.
Copyright 2024.