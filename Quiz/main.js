let score = 0;

let allBtns = document.querySelectorAll("button");
let allBtnsArray = [...allBtns];

let correctBtns = document.querySelectorAll("button.correct");
let btnArrayCorrect = [...correctBtns];


for (let i = 0; i < (allBtnsArray.length - 3); i++) {
    allBtnsArray[i].addEventListener("click", function() {
        allBtnsArray[i].style.backgroundColor = "darkblue";
    });
}


for (let i = 0; i < btnArrayCorrect.length; i++) {
    btnArrayCorrect[i].addEventListener("click", function() {
        score++;
    });}


let showTheScorebtn = document.querySelector("button.check");

showTheScorebtn.addEventListener("click", function() {
    if (document.querySelector("button.check").textContent == "Sprawdź swój wynik!") 
    {document.querySelector("button.check").textContent = `Zdobyłeś: ${score} punktów`}
});


let showAnswersbtn = document.querySelector("button.show")

showAnswersbtn.addEventListener("click", function() {
    for (let i = 0; i < btnArrayCorrect.length; i++) {
        btnArrayCorrect[i].style.backgroundColor = "yellowgreen";
}})

let playAgain = document.querySelector("button.again")

playAgain.addEventListener("click", function() {
   score = 0;
   document.querySelector("button.check").textContent = "Sprawdź swój wynik!";
   for (let i = 0; i < (allBtnsArray.length - 3); i++) {
        allBtnsArray[i].style.backgroundColor = "deepskyblue";
}})


