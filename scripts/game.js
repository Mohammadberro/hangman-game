const wordBank = ["pan", "arrive", "robust", "recognise", "example",
"minute", "wooden", "spiky", "welcome", "appliance", "scientific",
 "gleaming", "shy", "crack", "partner", "exist", "train", "arrest",
"trick", "bolt", "five", "guide", "nut", "parcel", "smiling"];

let ranNum = Math.floor(Math.random() * wordBank.length);
let ranWord = wordBank[ranNum];
let dashes = [];
let guessedLetters = [];
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
            console.log("You Got it Right!")
        }
    }

    if (dashes.join("") == ranWord && wrongGuesses < 6){
        console.log("You Won!");
    }   

    if (!correctGuess && wrongGuesses <= 5 && dashes.join("") != ranWord){
        if (5 > wrongGuesses){
        console.log("You Are Hanging!")
        }
        wrongGuesses += 1
        renderHangman(wrongGuesses)
        }
    if (wrongGuesses == 6){
        renderHangman(wrongGuesses)
        console.log("You Got Hanged!");
        wrongGuesses+=1
        }
    }

function alphabitChecker(pressedKey){
    if (pressedKey.length > 1){
        return false;
    }
    let regex = /^[a-zA-Z]+$/;
    return regex.test(pressedKey);
}

function mouseClickedElements(lettersQuery){
    lettersQuery.forEach((element) => {
        element.addEventListener('click', (e) => {
            element.classList.add("pressed");
            const pointerPressedKey = (e.target.innerText). toLowerCase();
            if (guessedLetters.includes(pointerPressedKey)){
                console.log("Already Guessed!");
                console.log(`Guessed Letters: ${guessedLetters}`)
            }
            else{
                guessedLetters.push(pointerPressedKey);
                console.log(pointerPressedKey);
                checkGuess(pointerPressedKey);
                addPressedAnimation(pointerPressedKey);

            }
        });
    });
}

pointerTracker = mouseClickedElements(lettersQuery);

function keyPressedElements(){
    document.addEventListener('keydown', function(event) {
        const pressedKey = event.key.toLowerCase();

        if (guessedLetters.includes(pressedKey)){
            console.log("Already Guessed!");
            console.log(`Guessed Letters: ${guessedLetters}`)
        }
        else{    
            if (!alphabitChecker(pressedKey)){
                console.log('oops, missclick ?');
            }
            else{
                guessedLetters.push(pressedKey);
                console.log(pressedKey);
                checkGuess(pressedKey);
                addPressedAnimation(pressedKey);
            }
        }
    });
}

strokeTracker = keyPressedElements();

function addPressedAnimation(pressedKey){
    lettersQuery.forEach((element) => {
        if (pressedKey.toUpperCase() == element.textContent){
            element.classList.add("pressed");
            }
        })
    }
 