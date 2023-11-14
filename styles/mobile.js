
const btnmobile = document.getElementById('btn-mobile');
console.log(btnmobile)


function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active');

}


btnmobile.addEventListener('click', toggleMenu);