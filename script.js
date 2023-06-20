
// date.addEventListener('click' , function dateTime() {
//       p.innerHTML = Date()
//       console.log(Date())
// })

//Bulb on/off
function onBulb() {
    document.getElementById('bulb').src = 'ONbulb.png';

}
function offBulb() {
    document.getElementById('bulb').src = 'OFFbulb.jpg';
}

//Date & time
const today = new Date();
const date = today.getDay();
const dayList = ["sunaday", "Monday", "tuesday", "wednesday", "thursday", "Friday", "Saturday"]
const day = document.getElementById('day').innerHTML = `Today is: ${dayList[date]}`

const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const dd = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

prepend = (hour >= 12) ? "PM" : "AM";

const time = document.getElementById('time').innerHTML = `current time is : ${hour + " " + prepend + ": " + minute + ": " + second}`

if (dd < 10) {
    cd = `0${dd}`
} else {
    cd = `${dd}`
}
if (month < 10) {
    mm = `0${month}`
} else {
    mm = `${month}`
}
const current = document.getElementById('current').innerHTML = `current date: ${cd + "/" + mm + "/" + year}`


//area of triangle
const a = 5;
const b = 6;
const c = 7;
const s = (a + b + c) / 2;
const area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
const res1 = document.getElementById('res1').innerHTML = `Result : ${s}`;
const res = document.getElementById('res').innerHTML = `Result : ${area}`;

// Weather selection else if
// const select = document.getElementById('select');
const para = document.getElementById('desc');

// select.addEventListener('change', function weather(){
//     const choice = select.value;
//     const temp = 37

//     if(choice === "sunny" && temp >= 37){
//         para.innerHTML = "wow it's sunny outside, have a nice day!"
//     }
//     else if(choice == "rainy"){
//         para.innerHTML ="it's a rainy day"
//     }
//     else if(choice === "snowing"){
//         para.textContent ="it's snowing outside"
//     }
//     else if( choice == "overcast"){
//         para.innerHTML= 'sky is grey nd gloomy '
//     }
//     else{
//         para.innerHTML= ""
//     }
// })

// weater selection using switch case
// select.addEventListener('change', function selweater() {
//     const choice = select.value;

//     switch (choice) {
//         case "sunny":
//             para.innerHTML = "wow it's sunny outside"
//             break;

//         case "rainy":
//             para.innerHTML = "it's a rainy day"
//             break;

//         case "snowing":
//             para.textContent = "it's snowing outside"
//             break;

//         case "overcast":
//             para.innerHTML = 'sky is grey nd gloomy '
//             break;

//         default:
//             para.innerHTML = ""

//     }
// })

const btn = document.getElementById('btn');
const p = document.getElementById('p');
btn.addEventListener('click', function () {
    const name = prompt("who's there?")

    if (name == "" || name == null) {
        p.innerHTML = "cancled"
    }
    else if (name !== "Admin") {
        p.innerHTML = "I don't know you"
    }
    else if (name == "Admin") {
        const pwd = prompt('password??');

        if (pwd == "" || pwd == null) {
            p.innerHTML = "cancled"
        }
        else if (pwd !== "TheMaster") {
            p.innerHTML = "Wrong Password"
        }
        else if (pwd == "TheMaster") {
            p.innerHTML = "Welcome"
        }
    }
});

// change theame
const html = document.querySelector('html');
const select = document.getElementById('select');

function update(bgcolor, color) {
    html.style.backgroundColor = bgcolor;
    html.style.color = color;
}
select.addEventListener('change', () => {
    const choice = select.value;
    // choice === "black" ? update("black", "white") : update("white", "black");
    switch (choice) {
        case "black":
            update("black", "white");
            break;

        case "white":
            update("white", "black")
            break;

        case "pink":
            update("pink", "black");
            break;
        case "purple":
            update('plum', "black")
            break;
    }
});


//ternary operator
// let result;
// let login = prompt("login")
// result = (login == "employee")? "hello" :
// (login == "Director") ? "greeting" :
// (login == "")? "no login":
// '';
// console.log(result)


// arrow functions
// let ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }
// ask(
//     "do you agree?",
//     function(){alert("you agreed")},
//     function(){alert("cancled")}
// )


// function add7() {
//     const no = +prompt("enter a no");
//     alert(no + 7)
// }
// add7();


// function mult(){
//     const no = +prompt("enter 1st no");
//     const no1 = +prompt("enter 2nd no");
//     console.log(no*no1);
// }
// mult()


// function capitalized(){
//     const str = prompt("name?");
//     const name = str.toLowerCase();
//     const name2 = name.charAt(0);
//     alert(name2.toUpperCase() + name.slice(1));
// }
// capitalized()

// function random() {
//     const value = Math.floor(Math.random() * 10) + 1;
//     console.log(value);
//     const no = +prompt("enter a number between 1-10");
//     alert( (no === value)? "good Work" : "not matched")

//  }
//  random()






