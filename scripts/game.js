const wordBank = ["pan", "arrive", "robust", "recognise", "example",
"minute", "wooden", "spiky", "welcome", "appliance", "scientific"];

let ranNum = Math.floor(Math.random() * wordBank.length);
let ranWord = wordBank[ranNum];
let dashes = [];
let answerSection = document.getElementById("answer-section");
const lettersQuery = document.querySelectorAll('.letter');
let wrongGuesses = 0;

function fillDashesList(ranWord){
    for (i = 0; i < ranWord.length; i++) {
        dashes.push("_");
        }
    }

fillDashesList(ranWord)

console.log(dashes);

function updateDashes(letter, i) {
            dashes[i] = letter;
}

console.log(dashes);

function renderDashes(dashes){
    answerSection.innerHTML = ""
    for (i = 0; i < dashes.length;i++){
        answerSection.innerHTML += `<div>${dashes[i]}&nbsp;</div>`;
    }

}
renderDashes(dashes);

function checkGuess(letter){
    let correctGuess = false;
    for (i = 0; i < ranWord.length; i++) {
        if (ranWord[i] == letter) {
            updateDashes(letter, i);
            correctGuess = true;
        }
    
    }
}
function mouseClickedElements(lettersQuery){
    lettersQuery.forEach((element) => {
        element.addEventListener('click', (e) => {
        console.log('got clicked');
        console.log(e);
        const pointerPressed = (e.target.innerText). toLowerCase();
        console.log(pointerPressed)
        checkGuess(pointerPressed);
        });
    });
}
mouseClicked = mouseClickedElements(lettersQuery);

function keyPressed(){
    document.addEventListener('keydown', function(event) {
        const pressed = event.key;
        console.log(pressed)
        checkGuess(pressed);
    });
}

keyboardClicked = keyPressed();


