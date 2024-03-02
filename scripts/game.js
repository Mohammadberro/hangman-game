const wordBank = ["pan", "arrive", "robust", "recognise", "example",
"minute", "wooden", "spiky", "welcome", "appliance", "scientific"];
let ranNum = Math.floor(Math.random() * wordBank.length);
let ranWord = wordBank[ranNum];
let ranWordLength = ranWord.length;
let dashes = [];
for (i = 0; i < ranWord.length; i++) {
    dashes.push("_");
    }
function printDashes(dashes){
    let answerSection = document.getElementById("answer-section");
    for (i = 0; i < dashes.length;i++){
        answerSection.innerHTML += '<div class="letter">' + dashes[i] + '</div>';
    }

}
printDashes(dashes)
// let letterDiv = document.querySelectorAll(".letter")
// function clickedLetter{
//     document.getElementsByClassName("")
// }
// letterClicked