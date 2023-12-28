// const texts = [
//     "We Make It Easy To Find The Great Design Talent, Easier...",
//     "Road Design Handbook For The International Road...",
//     "The Best Kept Secrets About Creative People",
//     "We Make It Easy To Find The Great Design Talent, Easier..."
// ];

// const journalNotes = document.querySelector(".journal-notes");
// const textElements = document.querySelectorAll(".journal-notes .text");

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const textIndex = entry.target.dataset.index;
//             animateText(textElements[textIndex], texts[textIndex]);
//             observer.unobserve(entry.target);
//         }
//     });
// }, { threshold: 0.5 });

// textElements.forEach((text, index) => {
//     text.dataset.index = index;
//     observer.observe(text);
// });

// const animateText = (element, text) => {
//     let charIndex = 0;

//     const typingInterval = setInterval(() => {
//         element.textContent += text[charIndex];
//         charIndex++;

//         if (charIndex === text.length) {
//             clearInterval(typingInterval);
//         }
//     }, 100);
// };