document.addEventListener("DOMContentLoaded",function(){
    // funkcja do uzupełnienia, jeżeli user wchodzi pierwszy raz plan ma pokazywać nastepny tydzień
// jeżeli jest to kolejna wizyta uzytkownika, funkcja ma pokazywać plan na obecny tydzień
    UsersPlanHeader.innerHTML = `Your plan for ${week}th week: `;

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
var allRecipies = [];

var dataArray;


var saveUserNameBtn = document.querySelector(".button_submit_user_name");
var userNameInput = document.querySelector("div.app_first_visit_form input#username");

var firstVisitPage = document.querySelector(".app_first_visit_container");
var furtherVisitPage = document.querySelector(".further_visit");

var addRecipePage = document.querySelector(".add_recipe_page");
var addPlanPage = document.querySelector(".add_plan_page");


var addPlan = document.querySelector(".add_plan");
var addRecipe = document.querySelector(".add_recipe");

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





// Walidacja formularza dodaj przpis oraz zapis do local storage



var recipeTitleInput = document.querySelector('input#recipe_title') ;
var recipeDescriptionTextarea = document.querySelector('textarea#recipe_description');

var recipeInstructionsTextarea = document.querySelector('textarea#recipe_instructions');
var recipeInredientsInput = document.querySelector('input#recipe_ingredients');


function Recipe(id, title, description) {
    this.id = id; // id przepisu
    this.title = title; // nazwa przepisu
    this.description = description; // opis przepisu
    this.ingredients = []; // składniki przepisu
    this.instructions = []; // instrukcje przepisu
}


var submitNewRecipe = document.querySelector('button#button_add_recipe');

submitNewRecipe.addEventListener("click", function () {

    if (!recipeTitleInput.value) {
        recipeTitleInput.style.border = '2px solid red'
 
    }

    if (!recipeInstructionsTextarea.value) {
        recipeInstructionsTextarea.style.border = '2px solid red'
    } 

    if (!recipeInredientsInput.value) {
        recipeInredientsInput.style.border = '2px solid red'
    }

    if (recipeTitleInput.value  && recipeInstructionsTextarea.value && recipeInredientsInput.value){

        var receipeTitle = recipeTitleInput.value;
        var receipeInstructions = recipeInstructionsTextarea.value;
        var recipeInredients = recipeInredientsInput.value;
        var recipeDescription = recipeDescriptionTextarea.value;


        var recipe = new Recipe(allRecipies.length+1, receipeTitle, recipeDescription);

        allRecipies.push(recipe);

        localStorage.setItem('userRecipes', JSON.stringify(allRecipies));


        console.log(recipeDescriptionTextarea.value, recipeTitleInput.value, recipeInstructionsTextarea.value, recipeInredientsInput.value);

        recipeInstructionsTextarea.style.border = '1px solid rgb(161, 161, 148)';
        recipeInredientsInput.style.border = '1px solid rgb(161, 161, 148)';
        recipeTitleInput.style.border = '1px solid rgb(161, 161, 148)';

        recipeTitleInput.value = '';
        recipeInstructionsTextarea.value = '';
        recipeInredientsInput.value = '';
        recipeDescriptionTextarea.value = '';


    }
});



// Dodaj instrukcje do przepisu







//Walidacja formularza dodaj plan

// input#plan_title
// textarea#plan_description
//input#week_nr



var planTitleInput = document.querySelector('input#plan_title');
var planWeekInput = document.querySelector('input.week_nr');

var submitNewPlan = document.querySelector('button#button_add_plan');

submitNewPlan.addEventListener("click", function () {

    if (!planTitleInput.value) {
        planTitleInput.style.border = '2px solid red'
 
    }

    if (!planWeekInput.value) {
        planWeekInput.style.border = '2px solid red'
    } 
});