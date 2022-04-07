const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.menu');
const sm_icons = document.querySelector('.sm_icons');

toggleBtn.addEventListener('click',() => {
    menu.classList.toggle('active');
    sm_icons.classList.toggle('active');
}); 