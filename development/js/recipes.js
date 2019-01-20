document.addEventListener("DOMContentLoaded",function(){
    // funkcja do uzupełnienia, jeżeli user wchodzi pierwszy raz plan ma pokazywać nastepny tydzień
// jeżeli jest to kolejna wizyta uzytkownika, funkcja ma pokazywać plan na obecny tydzień
   
    UserNamePanel.innerText = `${localStorage.savedName}`;



});

var dataArray = JSON.parse(localStorage.getItem("userRecipes"));

var UserNamePanel = document.querySelector("div.nav_userName p");


var editRecipe = document.querySelector(".edit");
var removeRecipe = document.querySelector(".trash");



// Przycisk dodawania nowego przepisu

var usersRecipesList = document.querySelector('.users_recipes');
var addRecipePanel = document.querySelector(".add_recipe_page");
var addRecipeToListBtn = document.querySelector('i.add_recipe_to_list');



addRecipeToListBtn.addEventListener("click", function (e) {
    usersRecipesList.style.display = 'none';
    addRecipePanel.style.display = 'block'
    
});




// Lista przepisów urzytkownika

var table = document.querySelector('.recipes_list_table_body');


if (!localStorage.userRecipes) {
    var neE = document.createElement('div');
    neE.className = 'recipe_list_first_visit'
    neE.innerHTML = `You still do not have any recipes. Go to App's main panael and add new ones :)`;
    neE.className = 'recipe_container';

    table.appendChild(neE)

} else {

    dataArray.forEach(function (item) {

        var newEl = document.createElement('div');
        newEl.className = 'recipe_container';

        newEl.innerHTML = ` <p class="id">${item.id}</p>
        <p class="title">${item.title}</p>
        <p class="description">${item.description}</p>
        <p class="action"><i class="far fa-edit edit"></i><i class="fas fa-trash-alt trash"></i></p>`

        table.appendChild(newEl)
    })
}

