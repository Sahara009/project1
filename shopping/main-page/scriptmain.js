const openSubMenuOne = (parent) => {
  const subNav = parent.querySelector('.sub-nav.subWfb');
  const menuIcon = document.querySelector('.arrow-1');
  const currentHeight = subNav.scrollHeight;
   if (subNav.style.height === '') {
      subNav.style.height = currentHeight + 'px';
      menuIcon.classList.add('rotate');
    } else {
      subNav.style.height = '';
      menuIcon.classList.remove('rotate');
    }}

const parentElements = document.querySelectorAll('.parent');
    parentElements.forEach((parent) => {
      parent.addEventListener('click', () => {
        openSubMenuOne(parent);
      });
});   



const cards = document.querySelectorAll(".content-titles")

const sliderLine = document.querySelector(".slider-line")

// активный слайдер
let count = 0;
// ширина?
let width;

// расчитать ширину и изменить слайдер

function init() {
  width = document.querySelector(".slider").offsetWidth;
  console.log(width)

  cards.forEach(item => {
    item.style.width = width + 'px'
    item.style.height = 'auto'
  })

  rollSlider();
}
window.addEventListener("resize", init)
init()
rollSlider()


document.querySelector(".left-arrow").addEventListener("click", function() {
  count--;
  if (count < 0) {
    count = cards.length - 1;
  }
  rollSlider();
});

document.querySelector(".right-arrow").addEventListener("click", function() {
  count++;
  if (count >= cards.length) {
    count = 0;
  }
  rollSlider();
});


function rollSlider() {
  sliderLine.style.transform = 'translate(-'+count*width+'px)'
}






// function openPopup() {
//   document.getElementById('popup').style.display = 'block';
//   document.getElementById('overlay').style.display = 'block';
// }

// function closePopup() {
//   document.getElementById('overlay').style.display = 'none';
//   document.getElementById('popup').style.display = 'none';
// }

// function toggleAdditionalCharacteristics() {
//   var characteristicsContainer = document.getElementById('characteristicsContainer');
//   var characteristics = characteristicsContainer.getElementsByClassName('additionalCharacteristics');

//   for (var i = 0; i < characteristics.length; i++) {
//       if (characteristics[i].style.display === 'none' || characteristics[i].style.display === '') {
//           characteristics[i].style.display = 'block';
//       } else {
//           characteristics[i].style.display = 'none';
//       }
//   }
// }
