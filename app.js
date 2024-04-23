const cocktailsCenter = document.querySelector(".cocktails-center");
const loader  = document.querySelector(".loader");

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then((res) => res.json())
    .then((data) => {
        loader.classList.add("hidden");
        creatDrinks(data.drinks);
});

function creatDrinks(drinks){
    drinks.forEach(
        ({idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb}) => {
        const article = document.createElement("article");

        article.classList.add("cocktail");

        article.innerHTML = `<div class="img-container"><img src=${strDrinkThumb} alt=${strDrink}></div><div class="cocktail-footer"><h3>${strDrink}</h3><h4>${strGlass}</h4><p>${strAlcoholic}</p><a class="btn btn-primary btn-details" href="./about.html?id=${idDrink}">details</a></div>`;
        cocktailsCenter.appendChild(article);
    });
}