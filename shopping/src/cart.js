// ящик для текста когда нет товаров
const label = document.getElementById('label')
// ящик для карточек товаров
const shoppingCart = document.getElementById('shopping-cart')
// все данные о товарах
console.log(shopItemsData)
// все выбранные товары
let basket = JSON.parse(localStorage.getItem("data")) || []

let calculationBasket =() => {
    // число на корзине
    let cartIcon = document.getElementById('cartAmount')
    // выбираем каждый элемент в корзине обращаемся к их кол-во и складываем их
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, nextNumber)=> x + nextNumber, 0)
}
calculationBasket()

let generateCartItems = () => {
    if(basket.length !== 0) {
        return shoppingCart.innerHTML = basket.map((x)=>{
            // console.log(x)
            let { id, item } = x
            //сопоставить айди из корзины с shopItemsData
            let search = shopItemsData.find((y)=> y.id === id) || []
            // резервнуая копия товаров
            return `
            <div class="card-item">
                <div class="image">
                    <img width='226' src=${search.photo} alt="">
                </div>
                <div class="title-price-x">
                    <h4 class="title-price">
                    <p>${search.name}</p>
                    <p class="cart-item-price">${search.price}₽</p>
                    </h4>
                    <i class="bi bi-x-lg"></i>

                    <div class="cart-buttons">

                    <i onclick='decrement(${id})' class="bi bi-dash-lg"></i>
                    <div onclick='increment(${id})'><span id="quantity-${id}">${item}</span></div>
                    <i onclick='increment(${id})' class="bi bi-plus-lg"></i>

                    </div>
                    <!-- кол-во товара умножить на цену единицы товара -->
                <h3>${item * search.price} ₽</h3>
            </div>
            </div>
            `
        }).join('')
    } else {
        // shoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2>Корзина пуста как твой кошелек</h2>
        <a href="index.html">
            <button class="homeBtn">Вернутся к каталогу</button>
        </a>
        `
    }
}
generateCartItems()

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
    // вставляем для обновления общей цены
    generateCartItems()
    // 1 - добавление товара в локал в нужном формате в корзину
    localStorage.setItem("data", JSON.stringify(basket));
};
// уменьшение
const decrement = (id) => {
    let selectedItem = id;
     // поиск = ищем все существующие товары в корзине
    // eсли товар с указанным id найден, его данные будут сохранены в переменной search
    let search = basket.find((x) => x.id === selectedItem);
  
    // кол-во = 0 значит возваращает 0
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        // либо уменьшить текущее
      search.item -= 1;
    }
  
    // что бы при нажатии число менялось сразу же после клика
    // в аргументах id выбранного товара
    IncreaseProduct(selectedItem.id);
    // отфильтровываем все элементы которые = 0
    basket = basket.filter((x) => x.item !== 0);
    // когда карточка = 0 она создается заново
    generateCartItems()
    // 1 - добавление товара в локал в нужном формате в корзину
    localStorage.setItem("data", JSON.stringify(basket));
}
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

