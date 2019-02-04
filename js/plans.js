document.addEventListener("DOMContentLoaded",function(){
    // funkcja do uzupełnienia, jeżeli user wchodzi pierwszy raz plan ma pokazywać nastepny tydzień
// jeżeli jest to kolejna wizyta uzytkownika, funkcja ma pokazywać plan na obecny tydzień
   
    UserNamePanel.innerText = `${localStorage.savedName}`
   
});


var UserNamePanel = document.querySelector("div.nav_userName p");
