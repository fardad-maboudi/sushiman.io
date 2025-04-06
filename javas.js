const btn = document.querySelector(".header__logo-mobile")
const menu = document.querySelector(".sidebar__menu")

btn.addEventListener('click', function(){
    menu.classList.toggle('open')

})

