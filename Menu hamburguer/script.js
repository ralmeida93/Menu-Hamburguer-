const btnMobile = document.getElementById('btn-mobile');

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function toggleMenu(event){
    if(event.type === 'touchstart')event.preventDefault() 
const nav = document.getElementById('nav');
nav.classList.toggle('ativo')
}