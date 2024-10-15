/* eslint-disable */
import "bootstrap";
import "./style.css";

/*import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/
import { suit, values } from "./card";

const showCard = (ramdomSuit, ramdomValues) => {
  const card = document.querySelector("#card");
  let styleSuit = "";
  if (ramdomSuit == "♥" || ramdomSuit == "♦") {
    styleSuit = "redSuit";
  }
  card.innerHTML = `
    <div id="box1" class=" ${styleSuit}">${ramdomSuit}</div>
    <div id="box2" >${ramdomValues}</div>
    <div id="box3" class=" ${styleSuit}">${ramdomSuit}</div>`;
};

const generateRandomCard = () => {
  const ramdomSuit = suit[Math.floor(Math.random() * 4)];
  const ramdomValues = values[Math.floor(Math.random() * 13)];
  showCard(ramdomSuit, ramdomValues);
};

const generateCardByTime = () => {
  setInterval(() => {
    generateRandomCard();
  }, 2000);
};
//Ésto se ejecuta cuando se carga el DOM
window.onload = function() {
  //write your code here
  generateRandomCard();

  document
    .querySelector("#btn-card")
    .addEventListener("click", () => generateRandomCard());
};

generateCardByTime();
