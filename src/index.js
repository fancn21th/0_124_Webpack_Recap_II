import _ from "lodash";
import "./style.css";
import card from "./card.jpg";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack II"], " ");
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());

const myImg = new Image();
myImg.src = card;
myImg.classList.add("card");
document.body.appendChild(myImg);
