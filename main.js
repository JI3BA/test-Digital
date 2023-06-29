const openBurger = document.querySelector('.burger')
const closeBurger = document.querySelector('.menu__close')
const menu = document.querySelector('.menu')

openBurger.addEventListener('click', () => {
    menu.classList.add('menu--active')
})

closeBurger.addEventListener('click', () => {
    menu.classList.remove('menu--active')
})