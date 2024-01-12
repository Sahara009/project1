document.addEventListener('DOMContentLoaded', function () {
    const searceContainer = document.querySelector('.bubbles');

    function createBubble(text) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.textContent = text;

        // Добавим стили к созданному пузырю
        bubble.style.borderRadius = '200px';
        bubble.style.border = '1px solid #C5C5C5';
        bubble.style.background = '#FFF';
        bubble.style.padding = '12px 22px 13px';
        bubble.style.cursor = 'pointer';


        return bubble;
    }

    
    const bubble1 = createBubble('iPhone');
    const bubble2 = createBubble('Charger');
    const bubble3 = createBubble('Gift');
    const bubble4 = createBubble('Google Pixel 3');
    const bubble5 = createBubble('Keyboard');
    const bubble6 = createBubble('13 Pro Max');
    const bubble7 = createBubble('iPhone 12');
    const bubble8 = createBubble('Laptop');
    const bubble9 = createBubble('Mobile');

    // Добавляем пузыри в контейнер
    searceContainer.appendChild(bubble1);
    searceContainer.appendChild(bubble2);
    searceContainer.appendChild(bubble3);
    searceContainer.appendChild(bubble4);
    searceContainer.appendChild(bubble5);
    searceContainer.appendChild(bubble6);
    searceContainer.appendChild(bubble7);
    searceContainer.appendChild(bubble8);
    searceContainer.appendChild(bubble9);
});
