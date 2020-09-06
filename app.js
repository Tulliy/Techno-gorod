document.addEventListener('DOMContentLoaded', function () {
    console.log(JSON.stringify(store, null, 2));
    const container = document.getElementById('ProductContainer');

    const product = store.products[2];
    for (let product of store.products) {
        const card = document.createElement('div');
        card.classList = 'productItem';
        container.appendChild(card);
        const cardImg = document.createElement('img');
        cardImg.src = product.preview;
        cardImg.width = '500';
        cardImg.height = '500';

        const cardTitle = document.createElement('span');
        cardTitle.textContent = product.name;
        const cardPrice = document.createElement('span');
        cardPrice.textContent = product.price + " грн";
        card.appendChild(cardImg);
    }
})
const store = {
    products: [
        {
            name: "Nagivka 100g",
            price: 100,
            kolichestvo: 125,
            prodano: 55,
            preview: './images/photo_2020-08-23_13-40-08.jpg',


        },

        {
            name: "Nagivka 100g",
            price: 100,
            kolichestvo: 125,
            prodano: 55,
            preview: './images/photo_2020-08-23_13-40-08.jpg',


        },
    ],
    country: "Ukraine",
    city: "Odessa",
    street: "Dnepropetrovskaya",
    home: "41",
}