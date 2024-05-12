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
    cardImg.src = product.image
    cardImg.alt = product.name
    const cardPriceText = document.createElement("h2");
    cardPriceText.classList.add("card__price-text")
    cardPriceText.textContent = "STARTING FROM"; 
    const descriptionContainer = document.createElement("div")
    descriptionContainer.classList.add("descriptionContainer")

    descriptionContainer.appendChild(cardName)
    descriptionContainer.appendChild(cardPriceText)
    card.classList.add("bigCard")
    cardPriceText.appendChild(cardPrice)
    card.appendChild(cardImg)
    card.appendChild(descriptionContainer)
    /*card.appendChild(cardImg)
    card.appendChild(cardName)
    card.appendChild(cardPriceText)
    card.appendChild(cardDesc)
    card.appendChild(cardButton)*/
    return card
}

function renderCards(products) {
    const container = document.querySelector(".cart_container"); 
    container.innerHTML = ''
    for (let i = 0; i < products.length; i++){
        let card = createCard(products[i])
        container.appendChild(card)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedCart = localStorage.getItem("cart")
    const cart = savedCart ? JSON.parse(savedCart) : []
    
    renderCards(cart)
    const total = calculateSumm(cart);
    const summ = document.createElement('h3')
    summ.textContent = `Total:$${total}`
    summ.classList.add("summ")
    const section = document.querySelector(".cards")
    section.appendChild(summ)
    console.log("Total:", total);
});

function calculateSumm(cart){
    let summ = 0
    for(let i = 0; i < cart.length; i++){
        summ += parseFloat(cart[i].price.slice(1))
    }
    return summ.toFixed(2)
}