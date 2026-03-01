// 1
let x = "123";
x = Number(x) + 7;
console.log(x);
//////////////////////////////////
// 2
let v = 0;
console.log(v ? "valid" : "invalid");
//////////////////////////////////
// 3
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
}
//////////////////////////////////
// 4
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.filter((item) => item % 2 == 0));
//////////////////////////////////
// 5
let arr2 = [1, 2, 3];
let arr3 = [4, 5, 6];
console.log([...arr2, ...arr3]);
//////////////////////////////////
// 6
let day = 2;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday ");
    break;
  case 3:
    console.log("Tuesday ");
    break;
  case 4:
    console.log("Wednesday ");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log(" Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Enter Invalid day");
    break;
}
//////////////////////////////////
// 7
let arr4 = ["a", "ab", "abc"];
let arr4_length = 0;
arr4.map((ele) => arr4_length++);
console.log(arr4_length);
//////////////////////////////////
// 8
let num1 = 15;
function checkDivisible(num) {
  num % 3 == 0 && num % 5 == 0
    ? console.log("num is divisible by 3 and 5.")
    : console.log("num is not divisible by 3 and 5.");
}
checkDivisible(num1);
//////////////////////////////////
// 9
let num2 = 5;
const squareNum = (num) => num ** 2;
console.log(squareNum(num2));
//////////////////////////////////
// 10
const person = { name: "John", age: 25 };
const destructObj = ({ name, age }) => {
  return `'${name} is ${age} years old'`;
};
console.log(destructObj(person));
//////////////////////////////////
//11
const sumleParam = (...num) => {
  let sum = 0;
  num.map((ele) => (sum += ele));
  return sum;
};
console.log(sumleParam(1, 2, 3, 4, 5));
//////////////////////////////////
//12
function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
delayedSuccess().then((res) => console.log(res));
//////////////////////////////////
//13
let arr5 = [1, 3, 7, 2, 4];
const largestNum = (arr) => {
  let largest = arr5[0];
  arr.map((ele) => (ele > largest ? (largest = ele) : (largest = largest)));
  return largest;
};
console.log(largestNum(arr5));
//////////////////////////////////
//14
let obj1={name: "John", age: 30}
const objKeys=(obj)=>{
   return Object.keys(obj)
}
console.log(objKeys(obj1))
//////////////////////////////////
//15
let str="The quick brown fox"
const splitSpace=(str)=>{
   return str.split(" ")
}
console.log(splitSpace(str))
//////////////////////////////////