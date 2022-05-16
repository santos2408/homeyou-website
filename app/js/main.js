const menu = document.querySelector('[data-js="menu"]')
const menuToggle = document.querySelector('[data-js="menu-toggle"]')
const menuClose = document.querySelector('[data-js="menu-close"]')

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menu.classList.add('show-menu')
  })
}

if (menuClose) {
  menuClose.addEventListener('click', () => {
    menu.classList.remove('show-menu')
  })
}