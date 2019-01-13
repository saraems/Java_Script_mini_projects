document.addEventListener("DOMContentLoaded",function(){
    // funkcja do uzupełnienia, jeżeli user wchodzi pierwszy raz plan ma pokazywać nastepny tydzień
// jeżeli jest to kolejna wizyta uzytkownika, funkcja ma pokazywać plan na obecny tydzień
    UsersPlanHeader.innerHTML = `Twój plan tygodnia na ${week} tydzień: `;

    if (!localStorage.savedName) {
        firstVisitPage.style.display = "flex";
    } else {
        furtherVisitPage.style.display = "flex";
        firstVisitPage.style.display = "none";
        UserNamePanel.innerText = `${localStorage.savedName}`
    }
});


// ZMIENNE

var userName = "";

var saveUserNameBtn = document.querySelector(".button_submit_user_name");
var userNameInput = document.querySelector("div.app_first_visit_form input#username");

var firstVisitPage = document.querySelector(".app_first_visit_container");
var furtherVisitPage = document.querySelector(".further_visit");

var addRecipePage = document.querySelector(".add_recipe_page");
var addPlanPage = document.querySelector(".add_plan_page");

var addRecipe = document.querySelector(".add_recipe");
var addPlan = document.querySelector(".add_plan");

var closeIcon = document.querySelectorAll("i.cross");

var UsersPlanHeader = document.querySelector(".yours_plan_for_week_nr");
var UserNamePanel = document.querySelector("div.nav_userName p");


var nextPlan = document.querySelector(".next_week_plan");
var previousPlan = document.querySelector(".previous_week_plan");


// snippet which counts current week's number

var now = new Date();
var today = new Date(now.getFullYear(), now.getMonth(), now.getDay());
var week = Math.ceil( (((now - today) / 86400000) + today.getDay() + 1) / 7 );



// NASŁUCHIWANIE NA EVENT'Y

saveUserNameBtn.addEventListener("click", function () {
    firstVisitPage.style.display = "none";
    furtherVisitPage.style.display = "flex";
    userName = userNameInput.value;
    localStorage.setItem('savedName', userName);
    UserNamePanel.innerText = `${localStorage.savedName}`;
});


addRecipe.addEventListener("click", function () {
    furtherVisitPage.style.display = "none";
    firstVisitPage.style.display = "none";
    addRecipePage.style.display = "block";

});

addPlan.addEventListener("click", function () {
    furtherVisitPage.style.display = "none";
    addPlanPage.style.display = "block"
});


for (let i =0; i < closeIcon.length; i++) {
    closeIcon[i].addEventListener("click", function () {
       closeIcon[i].parentElement.style.display = "none";
    });
}

nextPlan.addEventListener("click", function () {

    // funkcja pokazująca w sekcji po kliknięciu plan na następny tydzień
    // do zrobienia po zkończeniu strony: DODAJ NOWY PLAN
    console.log("next");

});

previousPlan.addEventListener("click", function () {

    // funkcja pokazująca w sekcji po kliknięciu plan na poprzedni tydzień
    // do zrobienia po zkończeniu strony: DODAJ NOWY PLAN
    console.log("previous");
});

