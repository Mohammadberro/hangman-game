const wordBank = ["pan", "arrive", "robust", "recognise", "example",
"minute", "wooden", "spiky", "welcome", "appliance", "scientific"];

let ranNum = Math.floor(Math.random() * wordBank.length);
let ranWord = wordBank[ranNum];
let ranWordLength = ranWord.length;
let dashes = [];
let answerSection = document.getElementById("answer-section");
const lettersQuery = document.querySelectorAll('.letter');

function fillDashesList(ranWord){
    for (i = 0; i < ranWord.length; i++) {
        dashes.push("_");
        }
    }

fillDashesList(ranWord)

console.log(dashes);

function renderDashes(ranWord){
    for (i = 0; i < ranWord.length;i++){
        answerSection.innerHTML += `<div>${dashes[i]}&nbsp;</div>`;
    }

}
renderDashes(dashes);

function mouseClickedElements(lettersQuery){
    lettersQuery.forEach((element) => {
        element.addEventListener('click', (e) => {
        console.log('got clicked');
        console.log(e);
        const pressed = (e.target.innerText);
        console.log(pressed)
        });
    });
}
mouseClicked = mouseClickedElements(lettersQuery);

function keyPressed(){
    document.addEventListener('keydown', function(event) {
        const pressed = event.key;
        console.log(pressed)
    });
}

keyboardClicked = keyPressed()

