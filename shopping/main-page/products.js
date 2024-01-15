// products.js
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.imageSrc; // Здесь предполагается, что у твоих продуктов есть свойство imageSrc с путем к изображению.
    image.alt = product.name; // Задай альтернативный текст для изображения.

    const title = document.createElement('h2');
    title.textContent = product.name;

    const description = document.createElement('p');
    description.textContent = product.description;

    const price = document.createElement('p');
    price.textContent = `${product.price}`;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);

    return card;
}

// Пример продуктов (замени на свои данные)
const productsData = [
    { name: 'MacBook Pro 13', price: '1,200.00 ', imageSrc: 'img/cards/1.png', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet' },
    { name: 'Smart Galaxy Watch 3', price: '199.00 ', imageSrc: 'img/cards/2.png', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
    { name: 'MacBook Air M1', price: '1,009.00 ', imageSrc: 'img/cards/3.png', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
    { name: 'iPad', price: '610.00 ', imageSrc: 'img/cards/4.png', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
    // Добавь больше продуктов
];

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.getElementById('product-container');

    // Создай карточку для каждого продукта и добавь ее в контейнер
    productsData.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
});
