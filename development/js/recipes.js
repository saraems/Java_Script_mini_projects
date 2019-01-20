document.addEventListener("DOMContentLoaded",function(){
    // funkcja do uzupełnienia, jeżeli user wchodzi pierwszy raz plan ma pokazywać nastepny tydzień
// jeżeli jest to kolejna wizyta uzytkownika, funkcja ma pokazywać plan na obecny tydzień
   
    UserNamePanel.innerText = `${localStorage.savedName}`
   
});

var UserNamePanel = document.querySelector("div.nav_userName p");


var editRecipe = document.querySelector(".edit");
var removeRecipe = document.querySelector(".trash");







// Przycisk dodawania nowego przepisu

var usersRecipesList = document.querySelector('.users_recipes')
var addRecipePanel = document.querySelector(".add_recipe_page");
var addRecipeToListBtn = document.querySelector('i.add_recipe_to_list')



addRecipeToListBtn.addEventListener("click", function (e) {
    usersRecipesList.style.display = 'none'
    addRecipePanel.style.display = 'block'
    
})


// Walidacja formularza //#endregion


var recipeTitleInput = document.querySelector('input#recipe_title') 
var recipeDescriptionTextarea = document.querySelector('textarea#recipe_description')

var recipeInstructionsTextarea = document.querySelector('textarea#recipe_instructions')
var recipeInredientsInput = document.querySelector('input#recipe_ingredients')


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
    
})