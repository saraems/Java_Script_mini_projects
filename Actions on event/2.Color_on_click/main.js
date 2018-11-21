

document.addEventListener("click", function(e) {

    const x = e.clientX;
    const y = e.clientY; 

    console.log(x + ", " + y)

    if ((x % 2 == 0) && (y % 2 == 0)) 
    return document.body.style.backgroundColor = 'red'
    if ((x % 2 !== 0) && (y % 2 !== 0)) 
    return document.body.style.backgroundColor = 'blue'
    else 
    return document.body.style.backgroundColor = 'green'

});



