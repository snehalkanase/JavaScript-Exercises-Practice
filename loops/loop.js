// 1) ============================== =====================================For loop with Break statement==============================
//Search for Contact no from array object
const input = document.querySelector("input");
const btn = document.querySelector("button");
const para = document.querySelector("p");

const contacts = [
  "snehal:84329493",
  "shubham:2394830840",
  "aparna:928038402",
  "sambhaji:909328498",
  "savita:309903274903",
  "taidy:802984032",
];
btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.innerHTML = `${splitContact[0]}'s contact number is ${splitContact[1]} `;
      break;
    }
  }
  if (para.textContent === "") {
    para.innerHTML = "contact not found";
  }
});

// 2) ============================== =====================================For loop with Break statement==============================
//take a number as an input, and returns only the numbers that are squares of integers (whole numbers).

const input1 = document.getElementById("input1");
const btn2 = document.getElementById("btn");
const output = document.getElementById("output");

btn2.addEventListener("click", () => {
  const num = input1.value;
  output.textContent = "Output: ";
  input1.value = "";
  for (let i = 1; i <= num; i++) {
    const squRoot = Math.sqrt(i);
    if (Math.floor(squRoot) !== squRoot) {
      continue;
    }
    output.textContent += `${i} `;
  }
});

//========================================#1 — Print the numbers from 0 to 15============================
for (let i = 0; i < 16; i++) {
  console.log("value of i is :" + i);
}
//========================================#1 — Print the numbers from 0 to 15============================
for (let i = 12; i <= 24; i++) {
  console.log(i);
}
//========================================#3 — Print the ODD numbers from 7 to 31 =================
const odd = document.getElementById("odd");
odd.textContent = "Odd numbers are: ";
for (let i = 7; i <= 31; i++) {
  if (i % 2 !== 0) {
    odd.innerHTML += `${i} `;
  }
}
//====================================#4 — Print the EVEN numbers from 10 to -20=========================
const even = document.getElementById("even");
even.textContent = "Even numbers are: ";
for (let i = 10; i >= -20; i--) {
  if (i % 2 == 0) {
    even.textContent += `${i} `;
  }
}
//======================================#5 — Iterate through all numbers from 1 to 45. Print the following:
// =====================================For multiples of 3 print “Fizz”========================
// =====================================For multiples of 5 print “Buzz”=========================
// =====================================For multiples of 3 and 5 print “FizzBuzz”==============
const mult = document.getElementById("mult");
mult.textContent = "";
for (let i = 1; i <= 45; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    mult.textContent += `(${i}) FizzBuzz `;
  } else if (i % 3 == 0) {
    mult.textContent += `(${i}) Fizz `;
  } else if (i % 5 == 0) {
    mult.textContent += `(${i}) Buzz `;
  }
}
//==================================#6 — Print all the elements of the following array===================
const arr = document.getElementById("arr");
arr.textContent = "array Elements are: ";
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 14];
for (let i = 0; i < array.length; i++) {
  arr.textContent += `${array[i]} `;
}
//===================================#7 — Calculate the sum of all the numbers in the following array===========
arraySum = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
document.getElementById("arr1").innerHTML = arraySum;
sum = 0;
for (let i = 0; i < arraySum.length; i++) {
  sum = sum + arraySum[i];
  document.getElementById("sum").innerHTML = `Sum: ${sum}`;
}

//==================================#8 Get the sum of two arrays…actually the sum of all their elements.=========
const arr2 = [2, 3, 4, 5];
const arr3 = [2, 4, 2, 4, 5, 4]; //17
sum1 = 0;
sum2 = 0;
for (let i = 0; i < arr2.length; i++) {
  sum1 = sum1 + arr2[i];
}
for (let i = 0; i < arr3.length; i++) {
  sum2 = sum2 + arr3[i];
}
finalSum = sum1 + sum2;
document.getElementById(
  "twoarr"
).innerHTML = `sum of two array: ${sum1} + ${sum2} = ${finalSum}`;

//===========================#9 Using a for loop output the elements in reverse order========
let arr4 = [43, "what", 9, true, "cannot", false, "be", 3, true];
const newArr = [];
for (let i = arr4.length - 1; i >= 0; i--) {
  newArr.push(arr4[i]);
}
console.log(newArr);

// ###########################10 Calculate the factorial of the number##################3
function factorialOf(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  return fact;
}
console.log(`factorial of 5 = ${factorialOf(5)}`);

//============================ #11 Write a program that will allow someone to guess a four digit pin exactly 4 Write
//a program that will allow someone to guess a four digit pin exactly 4=======================

// let pin = 3113;
// function pincard(){
//   let num = +prompt("enter the pin");
// for (let i = 1; i<= 3; i++){
//   if(num === 3113){
//       document.getElementById('res').innerHTML = " correct"
//   }
//   else if ( num != 3113){
//     document.getElementById('res').innerHTML = `wrong try again!`
//   }
// }
// }
// pincard();

//=============================== #12 Write a JS code to print a 2D array====================
let arrayd = [
  [1, 2],
  [3, 4],
  [5, 6],
];
function twoArray(arrayd) {
  for (let i = 0; i < arrayd.length; i++) {
    for (let j = 0; j < arrayd[0].length; j++) {
      console.log(`Q12 : ${arrayd[i][j]}`);
    }
  }
}
twoArray(arrayd);

//================================== #13 Write a JS code to print Even numbers in given array==============
evenArr = [12, 43, 35, 446, 3, 457, 344, 5678, 334, 3222, 5567];
for (let i = 0; i < evenArr.length; i++) {
  if (evenArr[i] % 2 == 0) {
    console.log(`Q13: even no : ${evenArr[i]}`);
  }
}
//==================== #14 Write a JS code to delete all occurrence of element in given array==========
console.log("Q14");
let occ = [2, 3, 4, 5, 4, 4, 4, 6];
function deleteEle(occ, ele) {
  for (let i = 0; i < occ.length; i++) {
    if (occ[i] == ele) {
      occ.splice(i, 1);
    }
  }
  return occ;
}
occ = deleteEle(occ, 4);
console.log(occ);

//===================== #15 Write a JS code to demonstrate Async loop =================
//For loop consisting of setTimeout() function to print loop variable 5 times in asynchronous way.

for (let i = 0; i <= 5; i++) {
  setTimeout(() => console.log(i), 500);
}

//================== #16  Write a JS code to find the power of a number using for loop =============
function numPower(num, pow) {
  let res = 1;
  for (let i = 1; i <= pow; i++) {
    res = res * num;
  }
  return res;
}
console.log(`Q16 : ${numPower(4, 3)}`);

//=================#17 Write a JS code to print a pattern using for loop ======================
function pattern(range) {
  for (let i = 1; i <= range; i++) {
    let str = " ";
    for (let j = 1; j <= i; j++) {
      str += j + " ";
    }
    console.log(str);
  }
}
pattern(8);

function star(range) {
  for (let i = 0; i <= range; i++) {
    let str = "* ";
    for (let j = 1; j < i; j++) {
      str += "* ";
    }
    console.log(str);
  }
}
star(8);

//======================== #18 Write a JS code to find the no of digits in a number===========
function digit(num) {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
console.log(`Q18 ${digit(8999)}`); //4

//============================== #19 Write a JS code to find the largest number in an array=========
let largArr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let largest = largArr[0];
for (let i = 0; i < largArr.length; i++) {
  largest = largArr[i] > largest ? largArr[i] : largest;
}
console.log(`Q19 : ${largest}`);

//============================== #20 Write a JS code to find the number of zeros in 2D Matrix =======
let matrix = [
  [0, 1, 1],
  [0, 1, 0],
  [1, 0, 0],
  [0, 0, 0],
];
let zero = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    zero = matrix[i][j] === 0 ? zero + 1 : zero;
  }
}
console.log(`Q20 No of Zero: ${zero}`);

//=========================== #21 Write a JS code to find product of two arrays ==================
console.log("Q21 :");
const array1 = [3, 45, 23, 78, 34];
const array2 = [4, 2, 34, 4, 12, 1];
function prod(array1, array2) {
  let product = array1.length > array2.length ? array1 : array2;
  for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
    product[i] = array1[i] * array2[i];
  }
  return product;
}
console.log(prod(array1, array2));

//===================== #22 Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.====
for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0) {
    console.log(`Q22: ${i}`);
  }
}

//======================= #23 sort Array and seperate even and odd element by creating diff array ====================
const newA = [52, 30, 13, 18, -5, 38, -10, 11, 0, 14];
console.log("Q23:");
console.log(newA.sort());
const oddA = [];
let evenA = [];
for (let i = 0; i < newA.length; i++) {
  if (newA[i] % 2 === 0) {
    evenA.push(newA[i]);
  } else if (newA[i] % 2 !== 0) {
    oddA.push(newA[i]);
  }
}
console.log(evenA);
console.log(oddA);

//====================== #24  show the tables for every multiplier from 1 to 5===========
console.log("Q24");
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i * j);
  }
}

//==================== #25 The Grade Assigner=============================
function grade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else {
    return "fail";
  }
}
for (let i = 75; i <= 100; i++) {
  console.log(`for ${i} marks you got a grade ${grade(i)}`);
}

//========================== Write a JS code to calculate the sum of digits in a number============
function sumDigit(num) {
  let sum = 0;
  while (num != 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumDigit(2222)); //8

//while loop
console.log("while loop");
const sne = [1, 2, 3, 4, 5, 6, 78];
let i = 0;
while (i < sne.length) {
  console.log(sne[i]);
  i++;
}

//do while loop;
console.log("do while");
const kan = [2, 4, 67, 8, 99];
let kanase = kan[0];
let j = 0;
do {
  kanase = kan[j] > kanase ? kan[j] : kanase;
  j++;
} while (j < kan.length);
console.log(kanase);

// exrcise
console.log("10- 0");

const outputt = document.querySelector(".outputt");
outputt.textContent = "";
// const parag = document.createElement('p');
// parag.textContent = '';
for (let i = 10; i >= 0; i--) {
  const parag = document.createElement("p");
  if (i === 10) {
    parag.textContent = `countdown ${i}`;
  } else if (i === 0) {
    parag.textContent = `Blast ${i}`;
  } else {
    parag.textContent = i;
  }
  outputt.appendChild(parag);
}

//==============Filling in a Guest List
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];
const admit = document.querySelector(".admit");
const refuse = document.querySelector(".refuse");
admit.textContent = "admit: ";
refuse.textContent = "refuse: ";

for (let i = 0; i < people.length; i++) {
  if (people[i] == "Phil" || people[i] == "Lola") {
    refuse.textContent += ` ${people[i]},`;
  } else {
    admit.textContent += ` ${people[i]}, `;
  }
}
refuse.textContent =
  refuse.textContent.slice(0, refuse.textContent.length - 2) + ".";
admit.textContent =
  admit.textContent.slice(0, admit.textContent.length - 2) + ".";

//=============In our first looping task we want you to start by creating a simple loop that goes through all
//============the items in the provided myArray and prints them out on the screen inside list items (i.e., <li> elements),
//============which are appended to the provided list.

const display = document.querySelector(".display");
display.textContent = "";
for (let i = 0; i < people.length; i++) {
  const list = document.createElement("li");
  list.textContent = people[i];
  display.appendChild(list);
}
// output ptime no
console.log('prime: 0-10')
nextPrime :
for(let i = 2;i<= 10;i++){
  for(let j= 2; j< i; j++){
    if(i %j== 0){
      continue nextPrime;
    }
  }
  console.log(i);
}
console.log('stop')