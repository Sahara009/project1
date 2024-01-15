// место где будут карточки
const shop = document.getElementById('shop');
// 2 - извлекаем карточки из локала и парсим в нужный формат либо оставляем пустым
let basket = JSON.parse(localStorage.getItem("data")) || [];
// let basket =[]

// создание карточек
const generateShop = () => {
  // что бы поместить карточки обращемся к html 
  // выбираем все данные по одному из db и создаем каркас в html
  return (shop.innerHTML = shopItemsData.map((x) => {
    // чисто для эстетики
    let { id, photo, name, price } = x;
    // если нужный id товара совпадает с одним из корзины то сохрани с search либо оставь пустым
    let search = basket.find((x) => x.id === id) || [];
    // строим каркас
    return `
    <div id=product-id-${id} class="item">
        <img src="${photo}" alt="">
        <div class="details">
          <h3>${name}</h3>
          <div class="price-quantity">
            <h2>${price}</h2>
            <div class="button">
              <button onclick='increment(${id})'>Добавить в корзину <span id="quantity-${id}">${search.item === undefined ? 0 : search.item}</span></button>
            </div>
          </div>
        </div>
      </div>`;
  }).join(''));
};
generateShop();

// увеличение
const increment = (id) => {
    let selectedItem = id;
    // поиск = ищем все существующие товары в корзине
    // eсли товар с указанным id найден, его данные будут сохранены в переменной search
    let search = basket.find((x) => x.id === selectedItem);
  
    // если товара нет то добавь в корзину его id(что б различать их) и кол-во
    if (search === undefined) {
      basket.push({
        id: selectedItem,
        item: 1,
      });
    } else {
      // либо добавь еще
      search.item += 1;
    }
    // что бы при нажатии число менялось сразу же после клика
    // в аргументах id выбранного товара
    IncreaseProduct(selectedItem);
    // 1 - добавление товара в локал в нужном формате в корзину
    localStorage.setItem("data", JSON.stringify(basket));

};
// смена числа карточки
const IncreaseProduct = (id) => { 
   // eсли id выбранного товара совпадает с нужным из корзины то сохрани в search
    let search = basket.find((x) => x.id === id); 
    // достаем число кол-во товара 
    let quantityElement = document.getElementById(`quantity-${id}`);
    // кол-во товара > true сделать кол-во основанное на search.item либо 0
    if (quantityElement) {
        quantityElement.textContent = search.item || 0;
    }
    // что бы при смене числа на карточке в корзине тоже сразу менялось
    calculationBasket();
};

// смена числа в зависимости от товаров
const calculationBasket = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculationBasket();
