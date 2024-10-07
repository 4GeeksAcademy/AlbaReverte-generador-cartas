/* eslint-disable */
import "bootstrap";
import "./style.css";

/*import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/
import { suit, values } from "./card";

const showCard = (ramdomSuit, ramdomValues) => {
  const card = document.querySelector("#card");
  card.innerHTML = `
    <div>${ramdomSuit}</div>
    <div>${ramdomValues}</div>
    <div>${ramdomSuit}</div>`;
};

const generateRandomCard = () => {
  const ramdomSuit = suit[Math.floor(Math.random() * 4)];
  const ramdomValues = values[Math.floor(Math.random() * 13)];
  showCard(ramdomSuit, ramdomValues);
};

window.onload = function() {
  //write your code here
  generateRandomCard();

  document
    .querySelector("#btn-card")
    .addEventListener("click", () => generateRandomCard());
};
