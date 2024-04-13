const products = [
    {name: "Minecraft", price: "$7", image: "img/image 15.png", description:"Lorem ipsum dolor sit amet, consectetur <br>adipiscing elit, sed do eiusmod tempor <br>incididunt ut labore et dolore mag...", isBig: false, isAv: false},
    {name: "Counter-strike", price: "$0", image: "img/image 15.png", description:"Lorem ipsum dolor sit amet, consectetur <br>adipiscing elit, sed do eiusmod tempor <br>incididunt ut labore et dolore mag...", isBig: false, isAv: true},
    {name: "Geometry Dash", price: "$4", image: "img/image 15.png", description:"Lorem ipsum dolor sit amet, consectetur <br>adipiscing elit, sed do eiusmod tempor <br>incididunt ut labore et dolore mag...", isBig: true, isAv: false},
    {name: "Portal 2", price: "$4", image: "img/image 15.png", description:"Lorem ipsum dolor sit amet, consectetur <br>adipiscing elit, sed do eiusmod tempor <br>incididunt ut labore et dolore mag...", isBig: false, isAv: true},
    {name: "OnlyUp", price: "$2", image: "img/image 15.png", description:"Lorem ipsum dolor sit amet, consectetur <br>adipiscing elit, sed do eiusmod tempor <br>incididunt ut labore et dolore mag...", isBig: false, isAv: false},
    {name: "Half-Life 2", price: "$4", image: "img/image 15.png", description:"Lorem ipsum dolor sit amet, consectetur <br>adipiscing elit, sed do eiusmod tempor <br>incididunt ut labore et dolore mag...", isBig: true, isAv: true},
];
function createCard(product){
    const card = document.createElement("div");
    card.classList.add("card")
    const cardName = document.createElement("h2");
    cardName.classList.add("card__name")
    cardName.textContent = product.name;
    const cardImg = document.createElement("img");
    cardImg.classList.add("card__image")
    const cardPrice = document.createElement("a");
    cardPrice.textContent = product.price;
    cardPrice.classList.add("card__price")
    if(product.isAv){
        cardImg.src = product.image
        cardImg.alt = product.name
    }
    else{
        cardImg.src = "img/empty_product.png"
        cardImg.alt = "НЕ ДОСТУПНО"
        cardPrice.classList.add("notAv")
        cardImg.classList.add("notAvImg")
    }
    const cardPriceText = document.createElement("h2");
    cardPriceText.classList.add("card__price-text")
    cardPriceText.textContent = "STARTING FROM"; 
    const cardDesc = document.createElement("p");
    cardDesc.classList.add("card__description")
    cardDesc.innerHTML = product.description; 
    const cardButton = document.createElement("button");
    cardButton.classList.add("card__buyButton")
    cardButton.textContent = "BUY NOW"; 

    if(product.isBig){
        card.classList.add("bigCard")
        cardPriceText.appendChild(cardPrice)
        card.appendChild(cardImg)
        card.appendChild(cardName)
        card.appendChild(cardPriceText)
        card.appendChild(cardDesc)
        card.appendChild(cardButton)
    }
    else{
        cardPriceText.appendChild(cardPrice)
        card.appendChild(cardName)
        card.appendChild(cardImg)
        card.appendChild(cardPriceText)
        card.appendChild(cardDesc)
        card.appendChild(cardButton)
    }
    return card
}

function renderCards(products) {
    const container = document.querySelector(".container"); 
    container.innerHTML = ''
    for (let i = 0; i < products.length; i++){
        let card = createCard(products[i])
        container.appendChild(card)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderCards(products);
});