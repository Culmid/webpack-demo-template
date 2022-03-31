import _ from "lodash";
import "./assets/styles/style.css";
import MyImage from "./assets/images/image.svg";
import printMe from "./print.js";

console.log(MyImage);

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = MyImage;
  element.appendChild(myIcon);

  // New print file
  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
