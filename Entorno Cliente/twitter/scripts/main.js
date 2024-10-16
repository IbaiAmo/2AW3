const $body = document.querySelector('body');
const $menu = document.querySelector('.menuDesplegable');
const $btnMenu = document.getElementById('btnMenu');
const $btnClose = document.getElementById('btnClose');


$btnMenu.addEventListener('click', () =>{
    $menu.classList.add('showMenu');
    $body.style.overflowY = "hidden";
});

$btnClose.addEventListener('click', () =>{
    $menu.classList.remove('showMenu');
    $body.style.overflowY = "auto";
});