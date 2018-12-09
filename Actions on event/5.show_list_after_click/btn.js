let size = 10;
let orderElement = 1;


const createLiElements = () => {
    let liList = [];
    liList.lenght = 10;



    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        document.body.appendChild(li);
        liList.push(li);
        li.innerHTML += `Element nr ${orderElement}`;
        orderElement++;
        li.style.fontSize = size + "px";
        size++;
    }



}


const init = () => {

    const btn = document.createElement('button');
    btn.innerHTML += 'Dodaj 10 elementów listy';
    document.body.appendChild(btn);
    btn.style.fontSize = "22px";

    let ul = document.createElement('ul');
    document.body.appendChild(ul);

    btn.addEventListener("click", createLiElements);
    btnReset.addEventListener("click", cleanList);

}


window.onload = init();