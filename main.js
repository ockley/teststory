import "./style.css";
import { newStory } from "./Story";

const headerEl = document.querySelector("header h1");
const textEl = document.querySelector("#text p");
const optionsEl = document.querySelector("#options");
const imgEl = document.querySelector("main img");

// Sæt den aktuelle position i historien.
let currentState = 0;

function startGame() {
  showText(currentState);
  showImage(currentState);
  showChoices(currentState);
}

function showText(stateID) {
  //console.log(newStory[stateID].description)
  headerEl.textContent = newStory[stateID].header;
  textEl.textContent = newStory[stateID].description;
}
function showImage(stateID) {
  imgEl.src = newStory[stateID].imgUrl;
}

function showChoices(stateID) {
  optionsEl.innerHTML = "";

  console.log(newStory[stateID]);

  newStory[stateID].choices.forEach((valg) => {
    const myButton = document.createElement("button");
    myButton.innerText = valg.text;
    myButton.classList.add("btn-color");

    // Tilføj event listener
    myButton.addEventListener("click", () => {
      optionSelected(valg);
    });
    optionsEl.append(myButton);
  });
}

// Håndter den valgte knap
function optionSelected(options) {
  currentState = options.nextState;

  showText(currentState);
  showImage(currentState);
  showChoices(currentState);
}

// Start spillet
startGame();
