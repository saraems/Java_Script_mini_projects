// document.addEventListener("click", function(e) {

//     const x = e.clientX;
//     const y = e.clientY; 

//     console.log(x + ", " + y)});

const div = document.querySelector('div');
let drawActive = false;

let divX = 150;
let divY = 50;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let insertDivX;
let insertDivY;


    div.addEventListener("mousedown", function(e) {
        div.style.backgroundColor = "grey";
        drawActive = !drawActive;
    
        insertDivX = e.offsetX;
        insertDivY = e.offsetY;
        //variables show on which point of the element we clicked (e.g. 200, 200)

});

    div.addEventListener("mousemove", function(e) {
        if (drawActive)
        {divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;}});


    div.addEventListener("mouseup", function() {
        div.style.backgroundColor = "black";
        drawActive = !drawActive});

    