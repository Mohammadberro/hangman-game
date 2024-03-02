const wordBank = ["pan", "arrive", "robust", "recognise", "example",
"minute", "wooden", "spiky", "welcome", "appliance", "scientific"];

let ranNum = Math.floor(Math.random() * wordBank.length);
let ranWord = wordBank[ranNum];
let ranWordLength = ranWord.length;
let dashes = [];
let answerSection = document.getElementById("answer-section");
const letters = document.querySelectorAll('.letter')

function fillDashesList(ranWord){
    for (i = 0; i < ranWord.length; i++) {
        dashes.push("_");
        }
    }

fillDashesList(ranWord)

console.log(dashes)

function renderDashes(ranWord){
    for (i = 0; i < ranWord.length;i++){
        answerSection.innerHTML += `<div>${dashes[i]}</div>`;
    }

}
renderDashes(dashes)
letters.forEach((element) => {
    element.addEventListener('click', (e) => {
      console.log('got clicked');
      console.log(e);
      console.log(e.target.innerText);
    });
  });