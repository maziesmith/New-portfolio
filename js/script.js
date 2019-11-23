import Typed from 'typed.js';

var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

var typed = new Typed('.typed', options);

const all = document.getElementById("all");
const cards = document.querySelectorAll(".col");
const btns = [
  document.getElementById("css"),
  document.getElementById("js"),
  document.getElementById("rj"),
  document.getElementById("fs")
];
const classes = [".css", ".js", ".rj", ".fs"];
//  ! all

all.addEventListener("click", () => {
  cards.forEach(cards => {
    cards.classList.remove("invisible");
  });
});

btns.forEach((el, i) => {
  el.addEventListener("click", () => {
    let projects = document.querySelectorAll(classes[i]);
    cards.forEach(cards => {
      cards.classList.add("invisible");
    });
    projects.forEach(project => {
      project.classList.remove("invisible");
    });
  });
});




var typed = new Typed('#typed', {
  stringsElement: '#typed-strings'
});