
document.addEventListener("DOMContentLoaded",function(){
    console.log("Hello from console :)");
});


var listElements = document.querySelectorAll('.slider ul li');
console.log(listElements);
var nextBtn = document.querySelector('.slider_button.right');

var prevBtn = document.querySelector('.slider_button.left');

var counter = 0;


function nextPicture(ev) {
    ev.preventDefault();

    listElements[counter].classList.remove('visible');

    if(counter === listElements.length - 1) {
        counter = 0;
    } else {
        counter++;
    }

    listElements[counter].classList.add('visible');
}

function prevPicture(ev) {
    ev.preventDefault();

    listElements[counter].classList.remove('visible');

    if(counter === 0) {
        counter = listElements.length - 1;
    } else {
        counter--;
    }

    listElements[counter].classList.add('visible');
}

//3. Przebieg programu
listElements[counter].classList.add('visible');
nextBtn.addEventListener('click', nextPicture);
prevBtn.addEventListener('click', prevPicture);

