const wordBank = ["pan", "arrive", "robust", "recognise", "example",
"minute", "wooden", "spiky", "welcome", "appliance", "scientific",
 "gleaming", "shy", "crack", "partner", "exist", "train", "arrest",
"trick", "bolt", "five", "guide", "nut", "parcel", "smiling"];

let ranNum = Math.floor(Math.random() * wordBank.length);
let ranWord = wordBank[ranNum];
let dashes = [];
let wrongGuesses = 0;
const answerSection = document.getElementById("answer-section");
const lettersQuery = document.querySelectorAll('.letter');


function fillDashesList(ranWord){
    for (let i = 0; i < ranWord.length; i++) {
        dashes.push("_");
        }
    }

fillDashesList(ranWord)

console.log(dashes);

function updateDashes(letter, i) {
    dashes[i] = letter;
    console.log(dashes);
}

function renderDashes(dashes){
    answerSection.innerHTML = ""
    for (let i = 0; i < dashes.length;i++){
        answerSection.innerHTML += `<div>${dashes[i]}&nbsp;</div>`;
    }

}

renderDashes(dashes);

function renderHangman(wrongGuesses){
    if (wrongGuesses === 1){
        head();
    }
    else if (wrongGuesses === 2){
        body();
    }
    else if (wrongGuesses === 3){
        leftHand();
    }
    else if (wrongGuesses === 4){
        rightHand();
    }
    else if (wrongGuesses === 5){
        leftLeg();
    }
    else if (wrongGuesses === 6){
        rightLeg();
    }
}

function checkGuess(letter){
    let correctGuess = false;
    for (i = 0; i < ranWord.length; i++) {
        if (ranWord[i] == letter) {
            updateDashes(letter, i);
            renderDashes(dashes);
            correctGuess = true;
        }
    }

    if (dashes.join("") == ranWord && wrongGuesses < 6){
        console.log("You Won!");
    }   

    if (!correctGuess && wrongGuesses <= 6){
        wrongGuesses += 1
        renderHangman(wrongGuesses)
        if (wrongGuesses => 6)
        console.log("You Got Hanged!")
        }
    }
function mouseClickedElements(lettersQuery){
    lettersQuery.forEach((element) => {
        element.addEventListener('click', (e) => {
            console.log('got clicked');
            console.log(e);
            element.classList.add("pressed");
            const pointerPressed = (e.target.innerText). toLowerCase();
            console.log(pointerPressed)
            checkGuess(pointerPressed);
        });
    });
}

mouseClicked = mouseClickedElements(lettersQuery);



function keyPressed(){
    document.addEventListener('keydown', function(event) {
        const pressedKey = event.key.toLowerCase();
        console.log(pressedKey);
        checkGuess(pressedKey);
        lettersQuery.forEach((element) => {
            if (pressedKey.toUpperCase() == element.textContent){
                element.classList.add("pressed");
            }
        })
    });
}

keyboardClicked = keyPressed();
 