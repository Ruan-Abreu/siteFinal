const imgContainer = document.getElementById("imagens-trocar");
const imgs = document.querySelectorAll("#imagens-trocar img");
let index = 0;

function carrossel() {
    imgs.forEach(img => img.style.display = "none");
    index = (index + 1) % imgs.length;
    imgs[index].style.display = "block";
}

setInterval(carrossel, 3000);

function trocar() {
    imgs.forEach(img => img.style.display = "none");
    index = (index + 1) % imgs.length;
    imgs[index].style.display = "block";
}

function imagemAnterior() {
    imgs.forEach(img => img.style.display = "none");
    index = (index - 1 + imgs.length) % imgs.length;
    imgs[index].style.display = "block";
}

// --------------MENU---------------------
const menuToggle = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('.menu-nav');

menuToggle.addEventListener('click', function() {
    this.classList.toggle('open');
    menuNav.classList.toggle('open');
});

// Fechar o menu ao clicar em um link
document.querySelectorAll('.menu-nav a').forEach(item => {
    item.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        menuNav.classList.remove('open');
    });
});
