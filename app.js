function creatUi(data){
    let card = document.createElement("cocktails-center");
    card.classList.add("coctail");

    let coctailCard = `
        <article id="coctailContent" class="cocktail">
            <div class="img-container">
                <img src="${data.imgSrc}" alt="A1">
            </div>
            <div class="cocktail-footer">
                <h3>${data.title}</h3>
                <h4>${data.title1}</h4>
                <p>${data.desckription}</p>
                <a class="btn btn-primary btn-details" href="/cocktail/17222">details</a>
            </div>
        </article>`;
        card.innerHTML = coctailContent;

        return card;
}
let cardContent = document.getElementById("coctail")
