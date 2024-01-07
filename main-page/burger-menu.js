document.querySelector('.burgerIcon').addEventListener('click', function () {
    let open = document.querySelector('.burger-Wfb')
    open.style.display = 'block';
});

document.querySelector('.close-burger').addEventListener('click', function () {
    let close =  document.querySelector('.burger-Wfb')
    close.style.display = 'none';
});