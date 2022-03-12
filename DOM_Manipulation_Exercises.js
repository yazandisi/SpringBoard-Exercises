const firstSelection = document.getElementById("container");

const secondSelection = document.querySelector('#container');

const allListItems = document.querySelectorAll('.second');

const liInOl = document.querySelector("ol .third");

secondSelection.innerText = "Hello";//using the const I made above

const footer = document.querySelector(".footer");
footer.classList += "main";

let newLi = document.createElement('li');

newLi.innerText = "four";

let ulParrent = document.querySelector("ul");
ulParrent.appendChild(newLi);

let allLis = document.querySelectorAll('ol li');
for (let i = 0; i < allLis.length; i++){
    allLis[i].style.backgroundColor = "Green";
}
let removedDiv = document.querySelector('.footer');
removedDiv.remove();