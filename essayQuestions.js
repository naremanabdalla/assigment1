/* 1
for...of
-for any iterable
-support break and continue
-better with with async/await 
Use it when=>
-you need to iterate over various data types
-you need to use break, continue
-you working with asynchronous operations inside the loop and need to use await

for each
-only for arrays
-doesn't support break and continue
-execute callback with every element , and callback is synchronous and does not wait for promises to resolve
Use it when=>
-you are strictly working with arrays
-you didn't need to use any early exit conditions
-you need easy access to the element's index or the entire array within the callback function
///////////////////////////////////
//  2
Hoisting=>
Hoisting is when JavaScript moving variable and function declarations to the top of their scope during compilation
Variables declared with var are hoisted and initialized with undefined
ex:console.log(a); // undefined
var a = 5;

Temporal Dead Zone=>
Temporal Dead Zone is the time between entering a scope and the actual declaration of a variable declared with let or const
During this time accessing the variable results in a ReferenceError
ex:console.log(b); // b is given error
let b = 10;
///////////////////////////////////
//  3
 == is loose equality and it compare only values and don't care about type 
 === is strict equality compares both value and type 
///////////////////////////////////
//  4
We enclose part of the code to prevent errors.
try Contains the code that is expected to execute without errors
catch is execute if exception is thrown in try block
and we use it with async/await as it prevent crash and help us to deal with network failures and rejected promises
///////////////////////////////////
// 5
Type conversion is explicit conversion , ex:Number("123") = 123
Type coercion is implicit conversion  ,ex : "7" - 5 = 2
*/
