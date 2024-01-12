  function renderCards(containerId, data) {
      const container = document.getElementById(containerId);

      data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.title;

        const title = document.createElement('h3');
        title.textContent = item.title;

        const price = document.createElement('p');
        price.textContent = `Цена: $${item.price}`;

        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'В корзину';
        addToCartBtn.addEventListener('click', () => addToCart(item));

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(addToCartBtn);

        container.appendChild(card);
      });
    }

    function addToCart(item) {
      console.log(`Товар "${item.title}" добавлен в корзину`);
    }

    // Загрузим данные напрямую в HTML в виде строки
    const dataString = `[
      {"id": 1, "title": "Футболка", "price": 20.99, "image": "img/catalog/ef48ad90-716e-4c36-82e8-e33f7de6b9e2.webp"},
      {"id": 2, "title": "Шорты", "price": 29.99, "image": "img/catalog/ef48ad90-716e-4c36-82e8-e33f7de6b9e2.webp"}
    ]`;

    // Преобразуем строку в объект
    const data = JSON.parse(dataString);

    // Рендерим карточки
    renderCards('card-container', data);



fetch(' http://10.110.10.145:8080./db.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data[0]); // Предполагаем, что объект находится в первом элементе массива
  })
  .catch(error => {
    console.error('Ошибка при выполнении fetch запроса:', error);
  });
