
const h1 = document.querySelector('h1');

document.body.addEventListener("mousemove", function(e) {
    
    // console.log(event.clientX, event.clientY)
    // document.querySelector('h1').textContent = `${e.clientX}, ${e.clientY}`;
    // document.querySelector('h1').textContent = `${e.pageX}, ${e.pageY}`;
    // document.querySelector('h1').textContent = `${e.screenX}, ${e.screenY}`;
    // document.body.style.backgroundColor = `rgb(${e.clientX/3}, ${e.clientY/2}, ${e.clientX/e.clientY *20})`;

    const x = e.clientX;
    const y = e.clientY;

    const width = window.innerWidth;
    const height = window.innerHeight;
    
    h1.textContent = x + ", " + y;

    const red = x/width * 100;
    const green = y/height * 100;
    const blue = ((x/width * 100) + (y/height * 100))/2;

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;


})