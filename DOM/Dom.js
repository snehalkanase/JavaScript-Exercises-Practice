const container = document.querySelector(".container"); // parent  node common for all

//================ #1 sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
const text = document.querySelector("#text");
function jsStyle() {
  text.style.color = "green";
  text.style.fontSize = "25px";
  text.style.fontFamily = "geneva";
}

//================ #2 a <p> with red text that says “Hey I’m red!” and background color ==================
let red = document.createElement("p");
red.classList.add("red");
red.textContent = "Heyy! I am Red";
red.style.color = "red";
red.style.backgroundColor = "yellow";
container.appendChild(red); // conatiner is parent node from HTML skeleton

//================= #3 an <h3> with blue text that says “I’m a blue h3!” ===========
let blue = document.createElement("h3");
blue.classList.add("blue");
blue.textContent = "Heyy I am Blue h3";
blue.style.color = "blue";
container.appendChild(blue);

//============= a <div> with a black border and pink background color with the following elements inside of it:
//=============another <h1> that says “I’m in a div”
//===============a <p> that says “ME TOO!”
//Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container
const div = document.createElement("div");
div.classList.add("div");
div.style.border = "3px solid";
div.style.borderColor = "green";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "i am a div";

const p = document.createElement("p");
p.textContent = "Me Too";

div.appendChild(h1);
div.appendChild(p);
container.appendChild(div);

//============= #5. Write a JavaScript function to add rows to a table==============
function insert_Row() {
  let x = document.getElementById("sampleTable").insertRow(0);
  let y = x.insertCell(0);
  let z = x.insertCell(1);
  y.innerHTML = "new cell1";
  z.innerHTML = "nwe cell2";
}

//============== #6 Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
const paragraph = document.querySelector("#para");
paragraph.innerHTML = paragraph.innerText
  .split(" ")
  .map((word) =>
    word.length > 8
      ? `<span style="background-color : yellow">${word}</span>`
      : word
  )
  .join(" ");

//============= #7 add a link in your body tag
const link = document.createElement("a");
link.href = "https://www.google.com";
link.textContent = "Google";
document.body.appendChild(link);

//========== #8 split each new sentence onto to a seperate line in the paragraph
const para2 = document.getElementById("para2");
para2.innerHTML = para2.innerHTML.split(/\.[^\.|<]/).join(".</p><p>") + "</p>";

//=========== #9 count the number of words and display count after heading
const wordCount = para2.innerHTML.split("").length;
const wordCountElement = document.createElement("div");
wordCountElement.textContent = `${wordCount} Words`;
document.body.insertBefore(wordCountElement, para2);

//=============  #10 Replace all ? with !!!
Array.from(document.querySelectorAll("#para3")).forEach((p) => {
  p.innerHTML = p.innerHTML.replace(/\?/g, "!!!!");
});

//==================== #11 Create a page welcome message :================
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter name:";
input.textContent = "Enter name";

const head = document.createElement("h3");
head.textContent = " #11 Create a page welcome message :";

const click = document.createElement("button");
click.classList.add("click");
click.textContent = "Click";

document.body.appendChild(head);
document.body.appendChild(input);
document.body.appendChild(click);

const place = document.createElement("p");
place.classList.add("place");
document.body.appendChild(place);

click.addEventListener("click", () => {
  const name = input.value;
  input.value = "";
  place.textContent = "";
  if (name.length > 2) {
    place.textContent = `Welcome to the site ${name}.`;
    place.style.color = "green";
  } else if (name.length < 3) {
    place.textContent = "name should be greater than 3";
    place.style.color = "red";
  }
});

