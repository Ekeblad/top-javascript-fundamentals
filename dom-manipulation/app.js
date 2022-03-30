const container = document.querySelector("#container");
const div = document.createElement("div");
const paraOne = document.createElement("p");
const paraTwo = document.createElement("p");
const headingOne = document.createElement("h1");
const headingThree = document.createElement("h3");

paraOne.style.color = "red";
paraOne.textContent = "Hey I'm Red!";

headingThree.style.color = "blue";
headingThree.textContent = "I'm a blue h3!";

div.setAttribute("style", "border: solid 1px black; background: pink;");

headingOne.textContent = "I'm in a div";
paraTwo.textContent = "ME TOO!";

container.appendChild(paraOne);
container.appendChild(headingThree);
div.appendChild(headingOne);
div.appendChild(paraTwo);
container.appendChild(div);
