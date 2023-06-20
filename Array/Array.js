// for loop for array

const cars = ["scorpio", "thar", "marcides", "nano"];
const car = cars.length;

let text = "<ul>";
for (let i = 0; i < car; i++) {
  text += "<li>" + cars[i] + "</li>"
}
text += "</ul>"
document.getElementById('para').innerHTML = text;

/********************************************************************************************************************/

// forEach loop for array
const fruits = ['mango', 'apple', 'grapes', 'stwaberry'];
fruits[1] = 'pine'
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
const fruit = fruits.length;
// const input = prompt("add your favoriate Fruit?");
// fruits.push(input)
let txt = '<ul>'
fruits.forEach(function myFunction(value) {
  txt += "<li>" + value + "</li>"
})
txt += '</ul>'

document.getElementById('para1').innerHTML = txt;

/********************************************************************************************************************/

// array methods

//every() & some() methods
//  const ages = [19,25,12,9,22]
//  const some = ages.some(check);
//  const every = ages.every(check);
//  console.log(every)
//  console.log(some)

const ages = [8, 39, 83, 33, 22]
function check(age) {
  return age <= document.getElementById('agenum').value;

}
function myFunction() {
  document.getElementById('resAge').innerHTML = ages.every(check);
  document.getElementById('some').innerHTML = ages.some(check);
}

/********************************************************************************************************************/

//fill()
const num = [19, 25, 12, 9, 22]
document.getElementById('fill').innerHTML = num.fill('kiwi', 2, 4)

//filter()
const flow = ['lotus', 'jui', 'chameli', 'mogra', 'sunflower']
const no = [10, 15, 28, 39, 33, 57, 45]
function filter(num1) {
  return num1 >= document.getElementById('num').value;
}
function filter1(text) {
  return text === document.getElementById('text').value;
}
function myFunction1() {
  document.getElementById('show').innerHTML = flow.filter(filter1);
  document.getElementById('show').innerHTML = no.filter(filter);
}
function myFunction2() {
  document.getElementById('show').innerHTML = flow.filter(filter1);
}

/********************************************************************************************************************/


//find() or findIndex(){retun index of first passed element}: return first element that pass the text
function find(num2) {
  return num2 >= document.getElementById('find').value;
}
function findFunction() {
  document.getElementById("show1").innerHTML = no.find(find);
}

//flatMap()
const arr = [1, 2, 3, 4, 5, 6]
const newArr = arr.flatMap((x) => x * 3)
console.log(newArr);

//map()

const arr1 = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
const map = arr1.map(square);
function square(num) {
  return Math.sqrt(num)
}
console.log(map);

//map()

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
const cat = cats.map(toUpper);
function toUpper(cat) {
  return cat.toUpperCase()
}
console.log(cat)

// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
const cat1 = cats.filter(toStart);
function toStart(cat) {
  return cat.startsWith("L")
}
const cat2 = cats.filter((cat) => cat.startsWith('L'));

console.log(cat1)
console.log(cat2)

/********************************************************************************************************************/


//sort
const sortArr = [1, 60, 26, 23, 5, 2, 78, 5]
document.getElementById('show2').innerHTML = sortArr.sort(function sort(a, b) { return a - b });
document.getElementById('show3').innerHTML = sortArr.sort(function sort(a, b) { return b - a });
const sortTxt = ['lotus', 'jui', 'chameli', 'mogra', 'sunflower']
document.getElementById('show4').innerHTML = sortTxt.sort();

/********************************************************************************************************************/

//object array

const objArr = [
  { type: 'snehal', year: 2002 },
  { type: 'shubham', year: 2003 },
  { type: 'savita', year: 1988 }
]
console.log(objArr);
objArr.sort(function newFun(a, b) { return a.year - b.year });
objFun();

function objFun() {
  document.getElementById('obj').innerHTML =
    objArr[0].type + " " + objArr[0].year + "</br>" +
    objArr[1].type + " " + objArr[1].year + "</br>" +
    objArr[2].type + " " + objArr[2].year
}

/********************************************************************************************************************/

// 1. Write a JavaScript function to check whether an `input` is an array or not. 

//is array
const isArray = input => {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;
};
console.log(isArray('snehal'));
console.log(isArray([2, 2, 2, 0, 0, 2]));

/********************************************************************************************************************/

// 2. Write a JavaScript function to clone an array
//clone array
const clone = input => {
  return input.slice(0)
};
console.log(clone([1, 1, 1, 1, 1]))
console.log(clone([1, 1, [2, 2], 3, 3]))

/********************************************************************************************************************/

// 3. Write a JavaScript function to get the first element of an array.
//  Passing the parameter 'n' will return the first 'n' elements of the array

//first element
const first = function (array, n) {
  if (array == null)
    return void 0
  if (n == null)
    return array[0]
  if (n < 0)
    return [];
  return array.slice(0, n)
}
console.log(first([7, 9, 0, -2]))
console.log(first([], 3))
console.log(first([7, 9, 0, -2], 3))
console.log(first([7, 9, 0, -2], 6))
console.log(first([7, 9, 0, -2], -3))

// 4. Write a JavaScript function to get the last element of an array.
//  Passing the parameter 'n' will return the last 'n' elements of the array.

//last element
const last = function (array, n) {
  if (array == null)
    return void 0;
  if (n == null)
    return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
}
console.log(last([4, 6, 7, 8, 0], 4))
console.log(last([4, 6, 7, 8, 0]));

/********************************************************************************************************************/

// 5. Write a simple JavaScript program to join all elements of the following array into a string.

//join array
const join = ["red", "pink", "black", "blue"];
document.getElementById('join').innerHTML = join.join();
document.getElementById('join1').innerHTML = join.join('+')
console.log(join.toString())

/********************************************************************************************************************/

// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. 
// For example if you accept 025468 the output should be 0-254-6-8.

//even num
const input = prompt("enter number")
console.log(typeof input)
const result = [input[0]]
console.log(result)

for (let x = 1; x < input.length; x++) {
  if (input[x - 1] % 2 === 0 && input[x] % 2 === 0) {
    result.push('-', input[x])
  } else {
    result.push(input[x]);
  }
}
document.getElementById('even').innerHTML = result.join('')


/********************************************************************************************************************/

// 7. Write a JavaScript program to sort the items of an array

//7 sort array
const sortnum = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(sortnum)
document.getElementById('sort').innerHTML = sortnum.sort(function sort(a, b) { return a - b })

/********************************************************************************************************************/
