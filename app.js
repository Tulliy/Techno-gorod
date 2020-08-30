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
        cardImg.width = '1900';
        cardImg.height = '300';

        card.classList = 'productItemSqare';
        container.appendChild(cardd);
        const cardImgSqare = document.createElement('img');
        cardImgSqare.src = product.preview;
        cardImgSqare.width = '500';
        cardImgSqare.height = '500';

        const cardTitle = document.createElement('span');
        cardTitle.textContent = product.name;
        const cardPrice = document.createElement('span');
        cardPrice.textContent = product.price + " грн";
        const cardOstalos = document.createElement('span');
        cardOstalos.textContent = product.ostalos();
        card.appendChild(cardImg);
        cardd.appendChild(cardImgSqare);
    }
})
const store = {
    products: [
        {
            name: "Nagivka 100g",
            price: 100,
            kolichestvo: 125,
            prodano: 55,
            preview: './images/гнгегегеге - Оформление YouTube-канала - Пользовательские размеры.jpeg',
            ostalos: function () {
                return this.kolichestvo - this.prodano;
            },
        },

        {
            name: "Nagivka 100g",
            price: 100,
            kolichestvo: 125,
            prodano: 55,
            preview: './images/photo_2020-08-23_13-40-42.jpg',
            ostalos: function () {
                return this.kolichestvo - this.prodano;
            },
        },
    ],
    country: "Ukraine",
    city: "Odessa",
    street: "Dnepropetrovskaya",
    home: "41",
}