
document.addEventListener('DOMContentLoaded', () => {
  fetchData();
});

function fetchData() {
  fetch('./db.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка при получении данных');
      }
      return response.json();
    })
    .then(data => {
      renderCards('card-container', data);
    })
    .catch(error => {
      console.error('Ошибка при выполнении fetch запроса:', error);
    });
}

function renderCards(containerId, data) {
  const container = document.getElementById(containerId);

  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = item.photo;
    image.alt = item.name;

    const title = document.createElement('h3');
    title.textContent = item.name;

    const price = document.createElement('p');
    price.textContent = `Цена: $${item.price}`;

    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Оформить заказ';
    addToCartBtn.classList.add('bar')
    addToCartBtn.id = `addToCartBtn_${item.id}`;
    addToCartBtn.addEventListener('click', () => addToCart(item.id));

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(addToCartBtn);

    container.appendChild(card);
    card.addEventListener('click', () => openModal(item));
  });
  
}

function openModal(item) {
  const modal = document.getElementById('myModal');
  const modalContent = modal.querySelector('.modal-content');

  modalContent.innerHTML = '';

  const image = document.createElement('img');
  image.src = item.photo;
  image.alt = item.name;

  const title = document.createElement('h3');
  title.textContent = item.name;

  const harak = document.createElement('h4');
  harak.textContent = `${item.harak}`;

  const price = document.createElement('p');
  price.textContent = `Цена: $${item.price}`;

  const addToCartBtn = document.createElement('button');
  addToCartBtn.textContent = 'В корзину';

  const textContent = document.createElement('div');
  textContent.classList.add('text-content');
  textContent.appendChild(title);
  textContent.appendChild(harak);
  textContent.appendChild(price);
  textContent.appendChild(addToCartBtn);
  

  modalContent.appendChild(image);
  modalContent.appendChild(textContent);

 
  const closeButton = document.createElement('span');
  closeButton.classList.add('close');
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', closeModal);
  modalContent.appendChild(closeButton);

  modal.style.display = 'block';
}


function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

const shoppingCart = [];

function addToCart(productId) {
  shoppingCart.push(productId);
  console.log('Товар добавлен в корзину, id:', productId);

  // Показать кол-во товаров в корзине
  console.log('Количество товаров в корзине:', shoppingCart.length);
}